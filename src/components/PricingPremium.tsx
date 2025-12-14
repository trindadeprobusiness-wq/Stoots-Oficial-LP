"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star, Shield } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { stootsPlans3Tier, Plan } from "@/data/stoots-plans";

interface PricingProps {
  plans?: Plan[];
  title?: string;
  description?: string;
}

export default function PricingPremium({
  plans = stootsPlans3Tier,
  title = "Comece grátis. Evolua com estratégia.",
  description = "Escolha o plano ideal para o seu momento. Sem compromisso. Cancele quando quiser.\nPreços até 60% mais acessíveis que a concorrência.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#D4AF37", "#FFD700", "#FFA500"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
      });
    }
  };

  return (
    <div className="min-h-screen mx-auto relative bg-gradient-to-b from-background via-secondary/20 to-background overflow-x-hidden py-16 md:py-24">
      {/* Background gradient effects */}
      <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] rounded-full opacity-20 blur-[120px] bg-btg-gold/30" />
        <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px] bg-blue-500/40" />
      </div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Toggle Mensal/Anual */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          <span
            className={cn(
              "text-base font-medium transition-colors",
              isMonthly ? "text-btg-navy font-semibold" : "text-muted-foreground"
            )}
          >
            Mensal
          </span>

          <Label htmlFor="pricing-toggle" className="cursor-pointer">
            <Switch
              id="pricing-toggle"
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="data-[state=checked]:bg-btg-navy"
            />
          </Label>

          <span
            className={cn(
              "text-base font-medium transition-colors",
              !isMonthly ? "text-btg-navy font-semibold" : "text-muted-foreground"
            )}
          >
            Anual{" "}
            <span className="text-green-500 font-bold text-sm sm:text-base">
              (Economize até 40%)
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={
                isDesktop
                  ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    scale: plan.isPopular ? 1.02 : index === 0 || index === 2 ? 0.96 : 1.0,
                  }
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 30,
                delay: index * 0.2,
              }}
              className={cn(
                "rounded-2xl border-2 p-6 sm:p-8 bg-background text-center flex flex-col relative",
                plan.isPopular
                  ? "border-btg-navy shadow-2xl shadow-btg-navy/20 ring-2 ring-btg-navy ring-offset-4"
                  : "border-border hover:border-btg-gold/30",
                "transition-all duration-300 hover:shadow-xl"
              )}
            >
              {/* Badge */}
              {plan.isPopular && plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-btg-navy to-btg-blue py-1.5 px-6 rounded-full flex items-center gap-2 shadow-lg z-10">
                  <Star className="text-btg-gold h-4 w-4 fill-current" />
                  <span className="text-white text-sm font-bold tracking-wide">
                    {plan.badge}
                  </span>
                </div>
              )}

              {!plan.isPopular && plan.badge && (
                <div className="absolute -top-3 right-4 bg-btg-gold/20 text-btg-navy py-1 px-4 rounded-full">
                  <span className="text-xs font-semibold">{plan.badge}</span>
                </div>
              )}

              {/* Plan Name */}
              <div className="flex-1 flex flex-col">
                <p className="text-xl font-bold text-foreground mb-4">
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="text-5xl font-bold text-btg-navy tabular-nums"
                  />
                  {plan.period !== "para sempre" && (
                    <span className="text-base text-muted-foreground ml-1">
                      / {isMonthly ? plan.period : "ano"}
                    </span>
                  )}
                </div>

                {/* Price Explanation */}
                {!isMonthly && plan.priceExplanation && (
                  <p className="text-xs text-muted-foreground mb-3">
                    {plan.priceExplanation}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <a
                  href={plan.href}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full text-base font-semibold py-6 rounded-xl transition-all duration-300 mb-3",
                    plan.isPopular
                      ? "bg-btg-navy text-white hover:bg-btg-navy/90 border-btg-navy shadow-lg hover:shadow-xl hover:-translate-y-1"
                      : "bg-white text-btg-navy border-2 border-btg-navy hover:bg-btg-lightBlue/10"
                  )}
                >
                  {plan.buttonText}
                </a>

                {/* Microcopy */}
                {plan.microcopy && (
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1 mb-4">
                    {plan.isPopular && <Shield className="h-3 w-3" />}
                    {plan.microcopy}
                  </p>
                )}

                {/* Features List */}
                <hr className="w-full my-4 border-border" />

                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-btg-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Monthly Option for Pro */}
                {plan.monthlyOption && !isMonthly && (
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    {plan.monthlyOption.text}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-5 w-5 text-btg-gold" />
            <span className="text-sm">Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-5 w-5 text-btg-gold" />
            <span className="text-sm">Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-5 w-5 text-btg-gold" />
            <span className="text-sm">Cancele quando quiser</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Check className="h-5 w-5 text-btg-gold" />
            <span className="text-sm">7 dias de garantia total</span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-btg-navy">
            Perguntas frequentes sobre planos
          </h3>

          <div className="space-y-4">
            <details className="bg-white rounded-lg border border-border p-4 hover:border-btg-gold/50 transition-colors group">
              <summary className="font-semibold cursor-pointer text-btg-navy flex items-center justify-between">
                <span>Posso trocar de plano depois?</span>
                <span className="text-btg-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Sim! Você pode fazer upgrade ou downgrade a qualquer momento.
                No upgrade, cobramos apenas a diferença proporcional.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-border p-4 hover:border-btg-gold/50 transition-colors group">
              <summary className="font-semibold cursor-pointer text-btg-navy flex items-center justify-between">
                <span>Como funciona a garantia de 7 dias?</span>
                <span className="text-btg-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Se não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do
                valor. Sem perguntas, sem burocracia.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-border p-4 hover:border-btg-gold/50 transition-colors group">
              <summary className="font-semibold cursor-pointer text-btg-navy flex items-center justify-between">
                <span>Meus dados ficam salvos se eu cancelar?</span>
                <span className="text-btg-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                Sim! Mesmo cancelando, você volta ao plano Gratuito e mantém
                acesso aos seus dados básicos. Nada é perdido.
              </p>
            </details>

            <details className="bg-white rounded-lg border border-border p-4 hover:border-btg-gold/50 transition-colors group">
              <summary className="font-semibold cursor-pointer text-btg-navy flex items-center justify-between">
                <span>Qual a diferença entre Starter e Pro?</span>
                <span className="text-btg-gold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                O Starter é ideal para quem quer organização e planejamento estratégico.
                O Pro adiciona análises avançadas como o Diagrama do Cerrado, gráficos
                detalhados e exportação de relatórios - perfeito para quem leva análise a sério.
              </p>
            </details>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Dúvidas?</strong> Você pode
            cancelar a qualquer momento. Seus dados ficam salvos mesmo na versão
            gratuita.
          </p>
        </div>
      </div>
    </div>
  );
}
