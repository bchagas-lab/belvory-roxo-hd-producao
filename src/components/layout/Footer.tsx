import { Link } from "react-router-dom";
import { Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import belvoryLogo from "@/assets/belvory-logo-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: "Início", href: "/" },
      { name: "Sobre", href: "/sobre" },
      { name: "Soluções", href: "/solucoes" },
      { name: "Casos de Uso", href: "/casos-de-uso" },
      { name: "Blog", href: "/blog" },
      { name: "Contato", href: "/contato" },
    ],
    legal: [
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Uso", href: "#" },
    ],
  };

  return (
    <footer className="relative border-t border-border bg-background">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-neon-horizontal opacity-50" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img src={belvoryLogo} alt="Belvory" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground max-w-md text-lg">
              Transformando dados em decisões estratégicas com inteligência artificial.
              Reduza custos e otimize sua operação.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:contato@belvory.com"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/belvory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/belvory"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegação
            </h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="group flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Belvory. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com <span className="text-primary">♥</span> para empresas que querem crescer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
