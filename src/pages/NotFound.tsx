import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-transparent overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-purple/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-cyan/15 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[12rem] font-bold gradient-text leading-none font-display">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <p className="text-2xl text-muted-foreground mb-2">
            Oops! Página não encontrada
          </p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida para outro lugar.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Voltar para o Início
            </Link>
          </Button>
          <Button variant="outline-glow" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Voltar
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
