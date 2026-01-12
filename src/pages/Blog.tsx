import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, TrendingUp, Brain, Database, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  GlowCard,
} from "@/components/animations/AnimatedSection";

const Blog = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog Belvory - Inteligência de Dados e IA",
      "description": "Artigos sobre inteligência de dados, automação com IA, business intelligence e transformação digital para empresas B2B",
      "publisher": {
        "@type": "Organization",
        "name": "Belvory",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lovable.dev/opengraph-image-p98pqg.png"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      icon: Brain,
      title: "Como a IA Está Transformando a Análise de Dados Empresariais",
      excerpt: "Descubra como empresas B2B estão utilizando inteligência artificial para extrair insights valiosos de seus dados.",
      category: "Inteligência Artificial",
      date: "15 de Março, 2024",
      readTime: "8 min",
      slug: "ia-transformando-analise-dados"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "5 Estratégias para Reduzir Custos Operacionais com Data Intelligence",
      excerpt: "Aprenda as principais estratégias que empresas estão usando para identificar oportunidades de economia.",
      category: "Gestão de Custos",
      date: "10 de Março, 2024",
      readTime: "6 min",
      slug: "reduzir-custos-data-intelligence"
    },
    {
      id: 3,
      icon: Database,
      title: "Integração de Dados: O Primeiro Passo para a Transformação Digital",
      excerpt: "Entenda por que a integração de múltiplas fontes de dados é fundamental para qualquer projeto de transformação.",
      category: "Transformação Digital",
      date: "5 de Março, 2024",
      readTime: "7 min",
      slug: "integracao-dados-transformacao-digital"
    },
    {
      id: 4,
      icon: Shield,
      title: "LGPD e Governança de Dados: O Que Sua Empresa Precisa Saber",
      excerpt: "Um guia completo sobre como implementar boas práticas de governança de dados e garantir conformidade.",
      category: "Segurança e Compliance",
      date: "28 de Fevereiro, 2024",
      readTime: "10 min",
      slug: "lgpd-governanca-dados"
    },
    {
      id: 5,
      icon: Brain,
      title: "Automação com IA: Cases de Sucesso em Empresas B2B",
      excerpt: "Conheça casos reais de empresas que implementaram automação inteligente com resultados expressivos.",
      category: "Automação",
      date: "22 de Fevereiro, 2024",
      readTime: "9 min",
      slug: "automacao-ia-cases-sucesso"
    },
    {
      id: 6,
      icon: TrendingUp,
      title: "Dashboards Inteligentes: Como Visualizar Dados para Decisões Rápidas",
      excerpt: "Aprenda a criar dashboards que realmente ajudam na tomada de decisão com as métricas certas.",
      category: "Business Intelligence",
      date: "15 de Fevereiro, 2024",
      readTime: "5 min",
      slug: "dashboards-inteligentes"
    }
  ];

  const categories = [
    "Todos",
    "Inteligência Artificial",
    "Gestão de Custos",
    "Transformação Digital",
    "Business Intelligence",
    "Automação",
    "Segurança e Compliance"
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-purple/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-cyan/15 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Insights
            </span>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl font-display">
              Blog <span className="gradient-text">Belvory</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Insights, tendências e melhores práticas em inteligência de dados, automação com IA
              e transformação digital para empresas B2B.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="border-y border-border bg-card/30 py-6 backdrop-blur-sm sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "gradient" : "outline-glow"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <article>
                  <GlowCard className="h-full">
                    <div className="flex h-full flex-col p-8">
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl gradient-neon">
                          <post.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="mb-4 text-xl font-bold leading-tight font-display">
                        {post.title}
                      </h2>

                      <p className="mb-6 flex-1 text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-6 w-full justify-between group"
                        asChild
                      >
                        <Link to={`/blog/${post.slug}`}>
                          Ler artigo completo
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </GlowCard>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 space-bg" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gradient-purple/20 via-transparent to-gradient-cyan/20"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold sm:text-5xl font-display mb-8">
              Não Perca Nenhuma{" "}
              <span className="gradient-text-animated">Novidade</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Assine nossa newsletter e receba conteúdos exclusivos sobre inteligência de dados
              e automação com IA.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato">
                  Assinar Newsletter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
