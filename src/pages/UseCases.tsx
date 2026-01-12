import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, FileText, Activity, Zap, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/AnimatedSection";

const UseCases = () => {
  const useCases = [
    {
      icon: TrendingDown,
      title: "Otimização de Custos Operacionais",
      problem:
        "Uma empresa de serviços gastava milhares de reais por mês sem visibilidade clara de onde o dinheiro ia. Planilhas desconexas e processos manuais tornavam impossível identificar oportunidades de economia.",
      solution:
        "Implementamos nosso Dashboard de Custos Inteligente, integrando dados de todas as áreas e aplicando IA para identificar padrões de desperdício e oportunidades de redução.",
      result:
        "Redução de 28% nos custos operacionais em 4 meses, com economia superior a R$ 150 mil por trimestre.",
    },
    {
      icon: FileText,
      title: "Automação de Relatórios Gerenciais",
      problem:
        "O time de gestão de uma indústria passava 3 dias por mês compilando relatórios gerenciais de diferentes sistemas. Dados chegavam sempre desatualizados e com inconsistências.",
      solution:
        "Criamos um fluxo automatizado que extrai dados de todos os sistemas, aplica validações e gera relatórios executivos atualizados em tempo real.",
      result:
        "Relatórios que levavam 3 dias agora são gerados instantaneamente. Decisões estratégicas 10x mais rápidas.",
    },
    {
      icon: Activity,
      title: "Monitoramento de Indicadores em Tempo Real",
      problem:
        "Uma empresa de logística não tinha visibilidade em tempo real dos principais KPIs operacionais. Problemas só eram identificados dias depois.",
      solution:
        "Implementamos dashboards em tempo real com alertas inteligentes que notificam gestores imediatamente quando indicadores críticos saem do esperado.",
      result:
        "Redução de 65% no tempo de resposta a problemas. Prejuízos evitados: +R$ 200 mil no primeiro ano.",
    },
    {
      icon: Zap,
      title: "Previsão Inteligente de Demanda",
      problem:
        "Uma rede de varejo sofria com excesso de estoque em algumas lojas e falta em outras, resultando em perdas por obsolescência.",
      solution:
        "Desenvolvemos modelos de IA que analisam histórico de vendas, sazonalidade e tendências para prever demanda com alta precisão.",
      result:
        "Redução de 45% em custos de estoque, aumento de 22% nas vendas por melhor disponibilidade.",
    },
    {
      icon: Target,
      title: "Detecção de Fraudes e Anomalias",
      problem:
        "Uma empresa de serviços financeiros identificava fraudes apenas após prejuízos significativos, através de processos manuais demorados.",
      solution:
        "Implementamos sistema de detecção automática de anomalias usando IA, que analisa milhares de transações em tempo real.",
      result:
        "Taxa de detecção de fraudes aumentou em 85%. Prejuízos evitados superam R$ 500 mil no primeiro ano.",
    },
  ];

  const stats = [
    { value: "30%", label: "Redução média de custos operacionais" },
    { value: "45%", label: "Ganho de produtividade das equipes" },
    { value: "10x", label: "Velocidade de decisões estratégicas" },
    { value: "98%", label: "Taxa de satisfação dos clientes" },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
        <motion.div
          className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-purple/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-cyan/15 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Cases de Sucesso
            </span>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl font-display">
              <span className="gradient-text">Casos de Uso</span> Reais
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Conheça como empresas estão transformando suas operações com as soluções da Belvory
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="bg-card/50 border-border backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all">
                  <CardContent className="p-0">
                    <div className="gradient-neon-horizontal p-8">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-background/20 backdrop-blur-sm">
                          <useCase.icon className="h-7 w-7 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white sm:text-3xl font-display">
                          {useCase.title}
                        </h2>
                      </div>
                    </div>

                    <div className="grid gap-8 p-8 lg:grid-cols-3">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-destructive text-xl">✕</span>
                          <h3 className="text-lg font-semibold">O Problema</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{useCase.problem}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-primary text-xl">✓</span>
                          <h3 className="text-lg font-semibold">A Solução</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{useCase.solution}</p>
                      </div>

                      <div className="rounded-xl bg-primary/10 border border-primary/20 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">⭐</span>
                          <h3 className="text-lg font-semibold gradient-text">Resultados</h3>
                        </div>
                        <p className="text-foreground font-medium leading-relaxed">{useCase.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Métricas
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Resultados <span className="gradient-text">Comprovados</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Métricas consolidadas dos nossos clientes
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <Card className="bg-card/50 border-border text-center backdrop-blur-sm hover:border-primary/30 transition-all">
                  <CardContent className="p-8">
                    <div className="text-5xl font-bold gradient-text mb-4 font-display">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 space-bg" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gradient-cyan/20 via-transparent to-gradient-purple/20"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl font-display mb-8">
              Seu Caso de Uso{" "}
              <span className="gradient-text-animated">Pode Ser o Próximo</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Cada negócio tem desafios únicos. Nossa equipe está pronta para entender suas
              necessidades específicas e criar uma solução personalizada.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato">
                  Falar com um Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-glow" size="xl" asChild>
                <Link to="/solucoes">Conhecer as Soluções</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;
