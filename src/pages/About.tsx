import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  GlowCard,
} from "@/components/animations/AnimatedSection";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Capacitar empresas a tomarem decisões mais inteligentes através de dados e automação, eliminando complexidades e gerando valor mensurável.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser referência em soluções de inteligência de dados e IA para empresas B2B no Brasil, reconhecidos pela excelência técnica e impacto nos resultados.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description:
        "Combinamos tecnologia de ponta com profundo conhecimento de negócios para criar soluções práticas e efetivas.",
    },
    {
      icon: Users,
      title: "Parceria",
      description:
        "Não somos apenas fornecedores de software. Somos parceiros estratégicos comprometidos com o sucesso de cada cliente.",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Fundação",
      description:
        "A Belvory nasce da visão de democratizar o acesso a inteligência de dados para empresas de todos os portes.",
    },
    {
      year: "2022",
      title: "Primeiros Clientes",
      description:
        "Iniciamos operações com foco em indústrias e empresas de serviços, entregando resultados acima das expectativas.",
    },
    {
      year: "2023",
      title: "Expansão da Plataforma",
      description:
        "Lançamento de novos módulos de IA e automação, ampliando significativamente nossas capacidades.",
    },
    {
      year: "2024",
      title: "Crescimento Acelerado",
      description:
        "Expansão da equipe e portfólio de clientes, consolidando nossa posição no mercado B2B.",
    },
  ];

  const differentials = [
    {
      title: "Tecnologia + Visão de Negócios",
      description:
        "Nossa equipe combina expertise técnica em IA e dados com profunda compreensão de processos empresariais. Não entregamos apenas ferramentas, entregamos soluções que resolvem problemas reais.",
    },
    {
      title: "Implementação Consultiva",
      description:
        "Cada projeto conta com acompanhamento de consultores especializados que garantem que a tecnologia seja adotada de forma efetiva e gere os resultados esperados.",
    },
    {
      title: "Plataforma Flexível",
      description:
        "Nossa solução se adapta às suas necessidades específicas, integrando-se com seus sistemas existentes e evoluindo junto com seu negócio.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-purple/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-cyan/15 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Sobre Nós
            </span>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl font-display">
              Conheça a <span className="gradient-text">Belvory</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Somos uma empresa de tecnologia B2B focada em transformar a forma como empresas
              utilizam seus dados. Combinamos plataforma SaaS de ponta com consultoria
              especializada para entregar resultados mensuráveis.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Fundamentos
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Nossos <span className="gradient-text">Pilares</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <GlowCard className="h-full p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-neon">
                      <value.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              História
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Nossa <span className="gradient-text">Jornada</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Crescimento constante focado em entregar valor real
            </p>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl">
            {timeline.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15} direction="left">
                <div className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl gradient-neon text-lg font-bold text-primary-foreground">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Diferencial
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Nossa <span className="gradient-text">Abordagem</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              O que nos torna diferentes no mercado
            </p>
          </AnimatedSection>

          <div className="mx-auto max-w-4xl space-y-8">
            {differentials.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <Card className="bg-card/50 border-border backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-all">
                  <CardContent className="p-10">
                    <h3 className="mb-4 text-2xl font-bold gradient-text">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Statement */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 space-bg" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gradient-purple/10 via-transparent to-gradient-cyan/10"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold sm:text-5xl font-display">
              Mais do que Tecnologia,{" "}
              <span className="gradient-text-animated">uma Parceria Estratégica</span>
            </h2>
            <p className="mb-6 text-xl text-muted-foreground leading-relaxed">
              A Belvory não entrega apenas software. Entregamos transformação. Nossa equipe de
              especialistas trabalha lado a lado com nossos clientes, desde o diagnóstico inicial
              até a implementação completa e acompanhamento de resultados.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Acreditamos que tecnologia sem contexto de negócio não gera valor. Por isso,
              combinamos ferramentas poderosas com profundo conhecimento de processos
              empresariais, garantindo que cada solução entregue impacto real e mensurável.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
