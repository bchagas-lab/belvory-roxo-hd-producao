import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  AnimatedSection,
  GlowCard,
} from "@/components/animations/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, e-mail e mensagem.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      position: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@belvory.com",
      href: "mailto:contato@belvory.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      href: "tel:+5511999999999",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/company/belvory",
      href: "https://linkedin.com/company/belvory",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      href: null,
    },
  ];

  const faqs = [
    {
      question: "Quanto tempo leva para implementar a solução?",
      answer:
        "O tempo de implementação varia conforme a complexidade e escopo do projeto, mas geralmente leva entre 2 a 6 semanas desde o início até a operação completa.",
    },
    {
      question: "A Belvory oferece suporte após a implementação?",
      answer:
        "Sim! Oferecemos suporte contínuo, treinamento e acompanhamento regular para garantir que você extraia o máximo valor da plataforma.",
    },
    {
      question: "É possível integrar com nossos sistemas atuais?",
      answer:
        "Sim, nossa plataforma integra com os principais ERPs, CRMs e ferramentas do mercado, além de suportar APIs customizadas para sistemas proprietários.",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-cyan/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-purple/15 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Contato
            </span>
            <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl font-display">
              Vamos <span className="gradient-text">Conversar</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Preencha o formulário abaixo ou entre em contato diretamente pelos nossos canais.
              Responderemos o mais breve possível.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <AnimatedSection delay={0.1} className="space-y-8 lg:col-span-1">
              <div>
                <h2 className="mb-8 text-2xl font-bold font-display">Informações de Contato</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-neon flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Card className="bg-card/50 border-border backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold">Horário de Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábado, Domingo e Feriados: Fechado
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <GlowCard className="p-10">
                <h2 className="mb-8 text-2xl font-bold font-display">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Nome <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        className="bg-background/50 border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-mail <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="bg-background/50 border-border focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position">Cargo</Label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Seu cargo"
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Mensagem <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar?"
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Ao enviar este formulário, você concorda com nossa Política de Privacidade.
                  </p>
                </form>
              </GlowCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Dúvidas
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl font-display">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="bg-card/50 border-border backdrop-blur-sm hover:border-primary/30 transition-all">
                  <CardContent className="p-8">
                    <h3 className="mb-4 text-lg font-semibold">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
