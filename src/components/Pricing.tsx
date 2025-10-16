import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Investimento Acessível, Retorno Extraordinário
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Gestão profissional de investimentos por menos do que você imagina
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:shadow-elegant transition-smooth">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                Plano Gratuito
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Experimente sem compromisso
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-foreground">R$ 0</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">Gerenciamento básico de ativos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">Dashboard com métricas essenciais</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">Visualização de portfólio</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">Rastreamento de até 5 ativos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/90">3 templates do Diagrama do Cerrado</span>
              </li>
            </ul>

            <Button 
              size="lg" 
              variant="btgOutline"
              className="w-full text-lg py-6"
            >
              Começar Teste Grátis - 30 DIAS
            </Button>
          </div>

          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-primary-foreground shadow-premium">
            <div className="absolute -top-4 right-8 flex gap-2">
              <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </span>
              <span className="bg-btg-gold text-btg-navy px-4 py-1 rounded-full text-sm font-semibold">
                💎 RECOMENDADO
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Plano Premium Anual
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">R$ 119,90</span>
                <span className="text-primary-foreground/80">/ano</span>
              </div>
              <p className="text-sm text-primary-foreground/70 mb-3">
                Menos que um café por dia
              </p>
              <div className="inline-flex items-center gap-2 bg-btg-gold/20 text-btg-gold px-3 py-1.5 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <span>ECONOMIZE até R$ 180/ano vs Kinvo/Trademap</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="font-medium">Tudo do Plano Gratuito, mais:</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Diagrama do Cerrado - ilimitado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Simulador de aportes avançado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Relatórios customizáveis</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Alertas inteligentes</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Acesso antecipado a novos recursos</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Suporte prioritário</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Cancelamento a qualquer momento</span>
              </li>
            </ul>

            <Button 
              size="lg" 
              variant="btg"
              className="w-full text-lg py-6 font-bold"
            >
              Assinar Agora - 30 DIAS GRÁTIS
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Sem cartão de crédito no teste</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">30 dias de garantia total</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-btg-gold/10 to-accent/10 border-2 border-btg-gold/30">
          <p className="text-center text-lg text-foreground/90 leading-relaxed">
            <strong className="text-btg-gold">Você economiza R$ 180/ano:</strong> Kinvo e Trademap cobram R$ 180-300/ano. STOOTS oferece <strong className="text-foreground">MESMAS funcionalidades + Diagrama do Cerrado exclusivo</strong> por apenas <strong className="text-btg-gold">R$ 119,90/ano</strong>. Tecnologia premium, preço inteligente.
          </p>
        </div>
      </div>
    </section>
  );
};
