"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Grátis",
    description: "Perfeito para quem está começando a organizar investimentos",
    price: 0,
    yearlyPrice: 0,
    buttonText: "Começar Grátis",
    buttonVariant: "outline" as const,
    includes: [
      "Recursos incluídos:",
      "Dashboard básico",
      "Acompanhamento de 3 ativos",
      "Relatórios mensais",
      "Suporte por email",
    ],
  },
  {
    name: "Premium",
    description: "Melhor custo-benefício para investidores sérios que buscam controle total",
    price: 9.99,
    yearlyPrice: 99.90,
    buttonText: "Assinar Premium",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Tudo do Grátis, mais:",
      "Ativos ilimitados",
      "Análises avançadas",
      "Alertas personalizados",
      "Relatórios diários",
      "Forecasts de patrimônio",
      "Suporte prioritário 24/7",
      "Exportação de dados",
    ],
  },
  {
    name: "Enterprise",
    description: "Solução completa para gestores de patrimônio e investidores profissionais",
    price: 49.99,
    yearlyPrice: 499.90,
    buttonText: "Falar com Vendas",
    buttonVariant: "outline" as const,
    includes: [
      "Tudo do Premium, mais:",
      "Multi-carteiras",
      "API de integração",
      "Gestão de clientes",
      "White-label personalizado",
      "Consultoria dedicada",
      "SLA garantido",
      "Treinamento da equipe",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-background/80 backdrop-blur-sm border border-btg-gold/20 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-muted-foreground",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-lg shadow-btg-gold/50 border-btg-gold bg-gradient-to-t from-btg-gold/90 to-btg-gold"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Mensal</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-muted-foreground",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-lg shadow-btg-gold/50 border-btg-gold bg-gradient-to-t from-btg-gold/90 to-btg-gold"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Anual
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">-17%</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingPremium() {
  const [isYearly, setIsYearly] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div
      className="min-h-screen mx-auto relative bg-gradient-to-b from-background via-secondary/20 to-background overflow-x-hidden py-16 md:py-24"
      ref={pricingRef}
    >
      {/* Sparkles Background */}
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--btg-gold)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--btg-gold)/0.05)_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <Sparkles
          density={1200}
          direction="bottom"
          speed={0.8}
          color="hsl(var(--btg-gold))"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      {/* Gradient Blur Effect */}
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0 pointer-events-none"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] bg-btg-gold/30" />
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px] bg-blue-500/40" />
      </TimelineContent>

      <article className="text-center mb-12 max-w-3xl mx-auto space-y-6 relative z-50 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Preço de Lançamento MVP: Mais da Metade do Preço dos Concorrentes
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Os consolidadores tradicionais cobram R$ 240/ano (R$ 19,90/mês) por funcionalidades básicas.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div className="container px-4 sm:px-6 mx-auto">
        <div className="grid md:grid-cols-3 max-w-6xl gap-6 mx-auto relative z-10">
          {plans.map((plan, index) => (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={2 + index}
              timelineRef={pricingRef}
              customVariants={revealVariants}
            >
              <Card
                className={cn(
                  "relative text-foreground border transition-all duration-300 hover:scale-105",
                  plan.popular
                    ? "bg-gradient-to-br from-btg-gold/10 via-background to-blue-500/10 border-btg-gold shadow-xl shadow-btg-gold/20 z-20"
                    : "bg-background/80 backdrop-blur-sm border-border hover:border-btg-gold/30 z-10"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                    <span className="bg-gradient-to-r from-btg-gold to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Mais Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-left space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">R$</span>
                    <NumberFlow
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      format={{
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }}
                      className="text-5xl font-bold text-foreground"
                    />
                    <span className="text-muted-foreground ml-1">
                      /{isYearly ? "ano" : "mês"}
                    </span>
                  </div>

                  {isYearly && plan.yearlyPrice > 0 && (
                    <p className="text-sm text-green-500 font-medium">
                      Economize R$ {(plan.price * 12 - plan.yearlyPrice).toFixed(2)} por ano
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0 space-y-6">
                  <button
                    className={cn(
                      "w-full py-3 px-6 text-base font-semibold rounded-lg transition-all duration-300",
                      plan.popular
                        ? "bg-gradient-to-r from-btg-gold to-yellow-500 hover:from-btg-gold/90 hover:to-yellow-500/90 text-white shadow-lg shadow-btg-gold/30 hover:shadow-btg-gold/50"
                        : "bg-secondary hover:bg-secondary/80 text-foreground border border-border hover:border-btg-gold/50"
                    )}
                  >
                    {plan.buttonText}
                  </button>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <h4 className="font-semibold text-sm text-foreground/80">
                      {plan.includes[0]}
                    </h4>
                    <ul className="space-y-2.5">
                      {plan.includes.slice(1).map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <Check className="h-5 w-5 text-btg-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          ))}
        </div>

        {/* Trust Badges */}
        <TimelineContent
          animationNum={6}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center relative z-10"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-5 w-5 text-btg-gold" />
            <span className="text-sm">Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-5 w-5 text-btg-gold" />
            <span className="text-sm">Cancele quando quiser</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-5 w-5 text-btg-gold" />
            <span className="text-sm">14 dias grátis</span>
          </div>
        </TimelineContent>

        {/* Comparison Callout */}
        <TimelineContent
          animationNum={7}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="mt-12 max-w-3xl mx-auto relative z-10"
        >
          <div className="bg-gradient-to-r from-btg-gold/5 via-blue-500/5 to-btg-gold/5 border border-btg-gold/20 rounded-2xl p-6 md:p-8 space-y-6">
            <p className="text-center text-foreground text-lg leading-relaxed">
              <span className="font-bold text-btg-gold">Concorrentes: R$ 240/ano</span> (12x R$ 19,90) <br />
              <span className="font-bold text-btg-gold">STOOTS (MVP): R$ 99,90/ano</span> (Economia de 58%)
            </p>
            <p className="text-center text-muted-foreground text-base">
              Menos de R$ 8,50/mês para ter controle total dos seus investimentos.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Por que mais barato?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Estamos na fase MVP e queremos crescer junto com você. Nosso foco é entregar valor real, não cobrar por 'nome de mercado'.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-foreground">Por que plano anual?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Investir é jogo de longo prazo. Priorizamos investidores comprometidos com sua jornada — e recompensamos com o melhor preço.
                </p>
              </div>
            </div>
          </div>
        </TimelineContent>
      </div>
    </div>
  );
}
