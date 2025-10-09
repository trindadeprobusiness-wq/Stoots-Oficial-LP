import { Zap, Droplets, AlertTriangle, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import growthBg from "@/assets/growth-bg.jpg";

export const FutureFeatures = () => {
  const futureFeatures = [
    {
      icon: Zap,
      title: "Score de Probabilidade de Sucesso",
      description: "Algoritmo proprietário que analisa múltiplas variáveis para prever o potencial de cada investimento."
    },
    {
      icon: Droplets,
      title: "Runway de Liquidez",
      description: "Visualize por quanto tempo sua reserva de emergência sustenta seus custos mensais."
    },
    {
      icon: AlertTriangle,
      title: "Alerta de Concentração",
      description: "Notificações inteligentes quando sua carteira estiver excessivamente concentrada em poucos ativos."
    },
    {
      icon: Brain,
      title: "Monitoramento Comportamental",
      description: "Insights sobre seu padrão de investimento e sugestões para otimizar sua estratégia ao longo do tempo."
    }
  ];

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-primary-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={growthBg} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O Futuro da Sua Gestão Financeira
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            STOOTS está em constante evolução. Recursos inovadores sendo desenvolvidos para elevar ainda mais sua experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {futureFeatures.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-smooth"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 text-primary-foreground/90">
            Seja um dos primeiros a experimentar essas inovações
          </p>
          <Button 
            size="lg"
            className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth"
            onClick={scrollToPricing}
          >
            Comece Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
