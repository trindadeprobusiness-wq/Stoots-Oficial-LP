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
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-foreground">R$ 0</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <p className="text-muted-foreground">
                Experimente o poder do STOOTS sem compromisso
              </p>
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
                <span className="text-foreground/90">Acesso por 30 dias</span>
              </li>
            </ul>

            <Button 
              size="lg" 
              variant="btgOutline"
              className="w-full text-lg py-6"
            >
              Comece a otimizar seus investimentos
            </Button>
          </div>

          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-primary-foreground shadow-premium">
            <div className="absolute -top-4 right-8">
              <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                Plano Premium Anual
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold">R$ 119,90</span>
                <span className="text-primary-foreground/80">/ano</span>
              </div>
              <p className="text-primary-foreground/90">
                Menos de R$ 10/mês para controle total dos seus investimentos
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="font-medium">Tudo do Plano Gratuito, mais:</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Análise personalizada (Diagrama do Cerrado)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Simulação e planejamento de aportes</span>
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
              className="w-full text-lg py-6"
            >
              Comece a otimizar seus investimentos
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-secondary/30 border border-border">
          <p className="text-center text-lg text-foreground/90 leading-relaxed">
            <strong className="text-primary">Valor incomparável:</strong> Enquanto Kinvo, Trademap e Investidor 10 cobram entre R$ 180 e R$ 300 por ano, o STOOTS oferece funcionalidades premium por apenas <strong>R$ 119,90/ano</strong> — tecnologia de ponta ao seu alcance.
          </p>
        </div>
      </div>
    </section>
  );
};
