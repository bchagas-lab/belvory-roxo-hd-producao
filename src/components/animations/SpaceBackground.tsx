import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import astronautImage from "@/assets/astronaut-futuristic.png";
import spaceHorizonImage from "@/assets/space-horizon.png";

// Scroll-reactive camera controller
const ScrollCamera = ({ scrollY }: { scrollY: number }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    // Parallax effect based on scroll
    const normalizedScroll = scrollY / 5000;
    camera.position.y = -normalizedScroll * 8;
    camera.position.z = 8 + normalizedScroll * 3;
    camera.rotation.x = normalizedScroll * 0.3;
  });

  return null;
};

// Planet component with scroll parallax
const Planet = ({ 
  position, 
  size, 
  color, 
  rings = false,
  scrollMultiplier = 1,
  scrollY = 0
}: { 
  position: [number, number, number]; 
  size: number; 
  color: string;
  rings?: boolean;
  scrollMultiplier?: number;
  scrollY?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (groupRef.current) {
      // Parallax movement based on scroll
      const parallaxY = (scrollY / 1000) * scrollMultiplier;
      groupRef.current.position.y = position[1] + parallaxY * 2;
      groupRef.current.position.x = position[0] + Math.sin(scrollY / 500) * 0.5 * scrollMultiplier;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      {rings && (
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <ringGeometry args={[size * 1.4, size * 2, 64]} />
          <meshStandardMaterial 
            color="#a855f7"
            side={THREE.DoubleSide}
            transparent
            opacity={0.6}
          />
        </mesh>
      )}
      {/* Glow effect */}
      <mesh scale={1.1}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

// Space Horizon background image component
const SpaceHorizon = ({ scrollY = 0 }: { scrollY?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, spaceHorizonImage);
  
  // Ensure high quality texture settings
  useMemo(() => {
    if (texture) {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = 16;
    }
  }, [texture]);

  useFrame(() => {
    if (meshRef.current) {
      // Subtle parallax movement based on scroll
      const parallaxY = (scrollY / 2000) * 2;
      meshRef.current.position.y = -8 + parallaxY;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -8, -25]}>
      <planeGeometry args={[80, 45]} />
      <meshBasicMaterial 
        map={texture} 
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </mesh>
  );
};


// Astronaut with scroll-reactive movement (chroma-key background removal)
const Astronaut = ({ position, scrollY = 0 }: { position: [number, number, number]; scrollY?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  const texture = useLoader(THREE.TextureLoader, astronautImage);

  const material = useMemo(() => {
    // Improve texture quality
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = 16;

    // Chroma-key: remove dark background (more aggressive)
    return new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: texture },
        uThreshold: { value: 0.22 },
        uSoftness: { value: 0.28 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uMap;
        uniform float uThreshold;
        uniform float uSoftness;
        varying vec2 vUv;
        void main() {
          vec4 tex = texture2D(uMap, vUv);

          // Luma-based keying (robust for near-black backgrounds)
          float luma = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
          float a = smoothstep(uThreshold, uThreshold + uSoftness, luma);

          if (a < 0.01) discard;

          gl_FragColor = vec4(tex.rgb, a);
        }
      `,
      transparent: true,
      depthWrite: false,
    });
  }, [texture]);

  useFrame((state) => {
    if (groupRef.current) {
      const baseY = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      const scrollOffset = (scrollY / 800) * 1.5;
      groupRef.current.position.y = baseY + scrollOffset;
      groupRef.current.position.x = position[0] + Math.sin(scrollY / 300) * 1.5;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 + (scrollY / 2000) * 0.5;
    }

    if (meshRef.current) {
      // Billboard the mesh to face camera
      meshRef.current.lookAt(camera.position);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        <mesh ref={meshRef} scale={[3, 3, 1]}>
          <planeGeometry args={[1, 1]} />
          <primitive object={material} attach="material" />
        </mesh>
        {/* Glow effect behind astronaut */}
        <pointLight position={[0, 0, 1]} intensity={0.5} color="#a855f7" distance={5} />
      </group>
    </Float>
  );
};

// Floating particles with scroll
const Particles = ({ count = 200, scrollY = 0 }: { count?: number; scrollY?: number }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      
      const t = Math.random();
      // Purple gradient colors
      colors[i * 3] = 0.5 + t * 0.3;     // R (purple has more red)
      colors[i * 3 + 1] = 0.2 + t * 0.2; // G (less green)
      colors[i * 3 + 2] = 0.8 + t * 0.2; // B (high blue)
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0003;
      mesh.current.rotation.x += 0.0001;
      // Scroll parallax for particles
      mesh.current.position.y = (scrollY / 500) * 3;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Shooting star
const ShootingStar = ({ delay = 0 }: { delay?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  const trailRef = useRef<THREE.Mesh>(null);
  const startPosition = useMemo(() => ({
    x: (Math.random() - 0.5) * 30,
    y: Math.random() * 15 + 5,
    z: -15,
  }), []);
  
  useFrame((state) => {
    if (ref.current && trailRef.current) {
      const time = ((state.clock.elapsedTime + delay) * 0.4) % 6;
      if (time < 1.5) {
        ref.current.visible = true;
        trailRef.current.visible = true;
        ref.current.position.x = startPosition.x + time * 15;
        ref.current.position.y = startPosition.y - time * 8;
        ref.current.position.z = startPosition.z + time * 8;
        trailRef.current.position.copy(ref.current.position);
      } else {
        ref.current.visible = false;
        trailRef.current.visible = false;
      }
    }
  });

  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>
      <mesh ref={trailRef} rotation={[0, 0, Math.PI / 4]}>
        <planeGeometry args={[2, 0.02]} />
        <meshBasicMaterial 
          color="#c084fc" 
          transparent 
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};


// Main scene
const Scene = ({ scrollY = 0 }: { scrollY: number }) => {
  return (
    <>
      <ScrollCamera scrollY={scrollY} />
      
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#c084fc" />

      {/* Stars background */}
      <Stars 
        radius={150} 
        depth={80} 
        count={8000} 
        factor={5} 
        saturation={0.6} 
        fade 
        speed={0.5}
      />

      {/* Space Horizon Image */}
      <SpaceHorizon scrollY={scrollY} />



      {/* Floating particles */}
      <Particles count={400} scrollY={scrollY} />

      {/* Shooting stars */}
      {Array.from({ length: 5 }).map((_, i) => (
        <ShootingStar key={i} delay={i * 2} />
      ))}
    </>
  );
};

export const SpaceBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "linear-gradient(to bottom, #0f0515, #120820, #1a0a2e)" }}
        dpr={[1.5, 2]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene scrollY={scrollY} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceBackground;
