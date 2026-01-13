import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingDown,
  Bot,
  BarChart3,
  Sparkles,
  Shield,
  Zap,
  ArrowRight,
  Play,
  Rocket,
  Users,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  GlowCard,
} from "@/components/animations/AnimatedSection";
import heroLogo from "@/assets/belvory-hero-logo.png";
const Home = () => {
  const stats = [
    { value: "80%", label: "Economia em Custos", icon: TrendingDown },
    { value: "50x", label: "Mais Rápido", icon: Zap },
    { value: "99.9%", label: "Uptime", icon: Shield },
    { value: "24/7", label: "Suporte", icon: Users },
  ];

  const benefits = [
    {
      icon: TrendingDown,
      title: "Redução de Custos",
      description:
        "Identifique oportunidades de economia através de análise inteligente de dados operacionais.",
      highlight: "Até 80%",
    },
    {
      icon: Bot,
      title: "Automação com IA",
      description:
        "Automatize processos críticos e libere sua equipe para focar em atividades estratégicas.",
      highlight: "50x Mais Rápido",
    },
    {
      icon: BarChart3,
      title: "Insights em Tempo Real",
      description:
        "Dashboards interativos com dados atualizados para decisões mais rápidas e precisas.",
      highlight: "Real-time",
    },
    {
      icon: Sparkles,
      title: "Implementação Guiada",
      description:
        "Nossa equipe de especialistas acompanha cada etapa da implementação e adoção.",
      highlight: "White-glove",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Conecte seus Dados",
      description:
        "Integramos com suas fontes de dados existentes de forma segura e rápida. APIs, bancos de dados, planilhas - tudo em um só lugar.",
    },
    {
      number: "02",
      title: "Aplique IA e Automações",
      description:
        "Nossa plataforma aplica modelos de IA personalizados para suas necessidades específicas, otimizando processos automaticamente.",
    },
    {
      number: "03",
      title: "Acompanhe Resultados",
      description:
        "Visualize ganhos em painéis claros e tome decisões baseadas em dados reais. ROI visível desde o primeiro mês.",
    },
  ];

  const testimonials = [
    {
      company: "TechCorp Brasil",
      text: "Reduzimos custos operacionais em 30% no primeiro trimestre com as soluções da Belvory.",
      author: "João Silva",
      role: "CFO",
      avatar: "JS",
    },
    {
      company: "Indústrias Moderna S.A.",
      text: "A automação com IA nos permitiu aumentar a produtividade em 45% sem contratar mais pessoas.",
      author: "Maria Santos",
      role: "Diretora de Operações",
      avatar: "MS",
    },
    {
      company: "Serviços Premium Ltda",
      text: "Finalmente conseguimos visualizar nossos dados de forma clara e tomar decisões estratégicas mais rápidas.",
      author: "Carlos Oliveira",
      role: "CEO",
      avatar: "CO",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60 z-[1]" />

        {/* Animated glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-purple/10 blur-3xl z-[1]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-cyan/10 blur-3xl z-[1]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.15, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.h1
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-futuristic uppercase"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Reduza Custos em até{" "}
              <span className="gradient-text-animated">40%</span>
              <br />
              com Monitoramento de Software e Produtividade
            </motion.h1>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato">
                  Free Trial For Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Impacto Real
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-satoshi">
              Por Que Escolher a{" "}
              <span className="gradient-text">belvory</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para transformar sua operação com resultados
              mensuráveis
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <GlowCard className="h-full p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-neon">
                      <benefit.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-primary text-sm font-semibold mb-2">
                    {benefit.highlight}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Processo
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Como <span className="gradient-text">Funciona</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Implementação simples em 3 passos para começar a ver resultados
            </p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 gradient-neon-horizontal opacity-30" />
                  )}

                  <Card className="relative bg-card/50 border-border backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
                    <CardContent className="p-8">
                      <div className="text-6xl font-bold gradient-text opacity-50 mb-6 font-display">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      <ChevronRight className="mt-6 h-6 w-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              O Que Nossos{" "}
              <span className="gradient-text">Clientes</span> Dizem
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card className="h-full bg-card/50 border-border backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full gradient-neon flex items-center justify-center text-primary-foreground font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              (Depoimentos ilustrativos)
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 space-bg" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gradient-purple/20 via-transparent to-gradient-cyan/20"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl font-display mb-8">
                Pronto para{" "}
                <span className="gradient-text-animated">Transformar</span>
                <br />
                Seus Dados?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Agende uma demonstração e descubra como a Belvory pode
                impulsionar seus resultados em até 40%.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contato">
                    Agendar Demonstração Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline-glow" size="xl" asChild>
                  <Link to="/contato">Falar com Especialista</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
