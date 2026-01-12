import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Brain,
  Bell,
  BarChart4,
  FileText,
  Shield,
  TrendingUp,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle2,
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

const Solutions = () => {
  const modules = [
    {
      icon: BarChart4,
      title: "Dashboard de Custos Inteligente",
      description:
        "Visualize todos os seus custos operacionais em tempo real com drill-down por categoria, departamento ou projeto.",
    },
    {
      icon: Brain,
      title: "Motor de IA para Automação",
      description:
        "Automatize tarefas repetitivas e processos críticos utilizando modelos de IA treinados para seu contexto específico.",
    },
    {
      icon: Bell,
      title: "Alertas Inteligentes",
      description:
        "Receba notificações proativas sobre anomalias, tendências importantes e oportunidades de ação.",
    },
    {
      icon: Database,
      title: "Integração de Dados",
      description:
        "Conecte todas as suas fontes de dados (ERP, CRM, planilhas) em um único ambiente unificado.",
    },
    {
      icon: FileText,
      title: "Relatórios Automatizados",
      description:
        "Gere relatórios gerenciais automaticamente no formato que você precisa, eliminando trabalho manual.",
    },
    {
      icon: Shield,
      title: "Governança e Segurança",
      description:
        "Controle de acesso granular, auditoria completa e conformidade com LGPD garantindo segurança total.",
    },
  ];

  const results = [
    {
      icon: DollarSign,
      value: "35%",
      title: "Redução de Custos",
      description:
        "Clientes típicos identificam oportunidades de economia entre 15% e 35% nos primeiros 6 meses.",
    },
    {
      icon: Clock,
      value: "40%",
      title: "Ganho de Produtividade",
      description:
        "Automação de processos repetitivos libera até 40% do tempo das equipes para atividades estratégicas.",
    },
    {
      icon: TrendingUp,
      value: "10x",
      title: "Decisões Mais Rápidas",
      description:
        "Acesso a dados em tempo real permite decisões até 10x mais rápidas em situações críticas.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Diagnóstico e Integração",
      description:
        "Nossa equipe realiza um diagnóstico completo das suas necessidades e conecta todas as fontes de dados relevantes.",
    },
    {
      number: "02",
      title: "Configuração e Treinamento",
      description:
        "Configuramos dashboards, automações e modelos de IA específicos para seu negócio. Sua equipe recebe treinamento completo.",
    },
    {
      number: "03",
      title: "Acompanhamento Contínuo",
      description:
        "Mantemos acompanhamento regular dos resultados, ajustamos estratégias e evoluímos a solução conforme seu negócio cresce.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-cyan/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-purple/15 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Plataforma
            </span>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl font-display">
              Soluções Completas de{" "}
              <span className="gradient-text">Inteligência de Dados</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Plataforma integrada que combina análise de dados, automação com IA e consultoria
              especializada para transformar sua operação.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Funcionalidades
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Módulos <span className="gradient-text">Principais</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Módulos integrados que trabalham juntos para maximizar seus resultados
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <StaggerItem key={index}>
                <GlowCard className="h-full p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-neon">
                      <module.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                  <p className="text-muted-foreground">{module.description}</p>
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
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Processo
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Como <span className="gradient-text">Funciona</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 gradient-neon-horizontal opacity-30" />
                  )}

                  <Card className="relative bg-card/50 border-border backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent" />
                    <CardContent className="p-8">
                      <div className="text-5xl font-bold gradient-text opacity-50 mb-6 font-display">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Impacto
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Resultados <span className="gradient-text">Esperados</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Impacto mensurável nos seus indicadores de negócio
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {results.map((result, index) => (
              <StaggerItem key={index}>
                <GlowCard className="h-full p-10 text-center">
                  <div className="mb-6 mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl gradient-neon">
                      <result.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-5xl font-bold gradient-text mb-4">{result.value}</div>
                  <h3 className="text-2xl font-bold mb-4">{result.title}</h3>
                  <p className="text-muted-foreground">{result.description}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Infraestrutura
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display mb-8">
              Tecnologia de <span className="gradient-text">Ponta</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Utilizamos as melhores tecnologias do mercado para garantir performance, segurança e
              escalabilidade. Nossa plataforma é construída sobre infraestrutura cloud de classe
              mundial, com 99.9% de disponibilidade garantida.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["AWS", "Google Cloud", "Kubernetes", "TensorFlow", "PostgreSQL", "Redis"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 space-bg" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gradient-purple/20 via-transparent to-gradient-cyan/20"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl font-display mb-8">
              Veja a Plataforma{" "}
              <span className="gradient-text-animated">em Ação</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Agende uma demonstração personalizada e descubra como podemos ajudar seu negócio.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato">
                  Solicitar Demonstração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-glow" size="xl" asChild>
                <Link to="/casos-de-uso">Ver Casos de Uso</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
