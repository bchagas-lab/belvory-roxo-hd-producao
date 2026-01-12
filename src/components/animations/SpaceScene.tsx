import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import astronautImage from "@/assets/astronaut-futuristic.png";

// Planet component
const Planet = ({ position, size, color, rings = false }: { 
  position: [number, number, number]; 
  size: number; 
  color: string;
  rings?: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group position={position}>
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
    </group>
  );
};

// Moon component
const Moon = ({ parentPosition }: { parentPosition: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.008;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={parentPosition}>
      <mesh ref={meshRef} position={[2.5, 0.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color="#aaaaaa" 
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

// Astronaut using sprite image
const Astronaut = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useLoader(THREE.TextureLoader, astronautImage);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        <sprite scale={[2.5, 2.5, 1]}>
          <spriteMaterial 
            map={texture} 
            transparent 
            opacity={0.95}
            depthWrite={false}
          />
        </sprite>
        {/* Main glow effect - purple */}
        <pointLight position={[0, 0, 1]} intensity={2} color="#a855f7" distance={8} />
        {/* Secondary purple glow */}
        <pointLight position={[0, 0, -0.5]} intensity={1.5} color="#7c3aed" distance={6} />
        {/* Rim light */}
        <pointLight position={[0, 0.5, 0.5]} intensity={1} color="#ffffff" distance={4} />
        {/* Outer glow sprite - purple */}
        <sprite scale={[4, 4, 1]}>
          <spriteMaterial 
            color="#a855f7"
            transparent 
            opacity={0.15}
            depthWrite={false}
          />
        </sprite>
      </group>
    </Float>
  );
};

// Floating particles
const Particles = ({ count = 200 }: { count?: number }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      
      // Purple gradient colors
      const t = Math.random();
      colors[i * 3] = 0.5 + t * 0.3;     // R
      colors[i * 3 + 1] = 0.2 + t * 0.2; // G
      colors[i * 3 + 2] = 0.8 + t * 0.2; // B
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0005;
      mesh.current.rotation.x += 0.0002;
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
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Shooting star
const ShootingStar = () => {
  const ref = useRef<THREE.Mesh>(null);
  const startPosition = useMemo(() => ({
    x: (Math.random() - 0.5) * 20,
    y: Math.random() * 10 + 5,
    z: -10,
  }), []);
  
  useFrame((state) => {
    if (ref.current) {
      const time = (state.clock.elapsedTime * 0.5) % 4;
      if (time < 1) {
        ref.current.visible = true;
        ref.current.position.x = startPosition.x + time * 10;
        ref.current.position.y = startPosition.y - time * 5;
        ref.current.position.z = startPosition.z + time * 5;
      } else {
        ref.current.visible = false;
      }
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="#a855f7" />
    </mesh>
  );
};

// Main scene
const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#c084fc" />

      {/* Stars background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0.5} 
        fade 
        speed={1}
      />

      {/* Main planet */}
      <Planet 
        position={[6, -2, -8]} 
        size={3} 
        color="#4a1a7a"
        rings
      />
      
      {/* Moon orbiting */}
      <Moon parentPosition={[6, -2, -8]} />

      {/* Secondary smaller planet - purple */}
      <Planet 
        position={[-8, 3, -12]} 
        size={1.5} 
        color="#7c3aed"
      />

      {/* Astronaut */}
      <Astronaut position={[6, -4, -1]} />

      {/* Floating particles */}
      <Particles count={300} />

      {/* Shooting stars */}
      {Array.from({ length: 3 }).map((_, i) => (
        <ShootingStar key={i} />
      ))}
    </>
  );
};

export const SpaceScene = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1.5, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceScene;
