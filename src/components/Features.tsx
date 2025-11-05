import { BarChart3, ClipboardCheck, Target, PieChart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TextAnimate } from "@/components/ui/text-animate";
import featureAnalytics from "@/assets/feature-analytics.jpg";
import featurePlanning from "@/assets/feature-planning.jpg";
import featureDashboard from "@/assets/feature-dashboard.jpg";

export const Features = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const features = [
    {
      icon: BarChart3,
      title: "Consolidação Automática: Todos os Seus Ativos em Um Só Lugar",
      subtitle: "O fim do 'em qual corretora eu comprei isso mesmo?'",
      description: "Cadastro Rápido e Visual: Lance Ações (BR/EUA), FIIs, REITs, Criptomoedas, Renda Fixa e até Reservas de Valor (Ouro, alternativos). Dashboard Essencial: Veja instantaneamente: Patrimônio Total investido, Aporte do mês atual, Rentabilidade real (R$ e %), Distribuição por classe de ativo (gráficos de pizza + tabelas detalhadas). Preços em Tempo Real: Integração com APIs de mercado para cálculo automático do valor atualizado de cada posição.",
      details: [
        "Cadastro Rápido e Visual",
        "Dashboard Essencial com métricas instantâneas",
        "Preços em Tempo Real via API"
      ],
      impact: "Imagine acordar e, em 10 segundos, saber exatamente como está sua carteira. Sem planilhas. Sem fórmulas quebradas.",
      image: featureDashboard
    },
    {
      icon: Target,
      title: "Planejamento de Aportes Inteligente",
      subtitle: "Onde investir os próximos R$ 500? O STOOTS te mostra.",
      description: "Defina metas percentuais para cada classe de ativo. Simule aportes e receba sugestões automáticas de alocação ideal.",
      details: [
        "Defina Metas de Alocação: Configure sua distribuição ideal (ex: 60% Ações, 30% FIIs, 10% Cripto).",
        "Simulação de Aportes: Digite quanto vai investir e receba sugestões automáticas para rebalancear sua carteira.",
        "Atualização Instantânea: Confirme o aporte e veja sua carteira atualizada em tempo real."
      ],
      impact: "Disciplina não é sorte. É ter um sistema que te guia no caminho certo.",
      image: featurePlanning
    },
    {
      icon: PieChart,
      title: "Dashboard e Visualização Premium",
      subtitle: "Tudo que importa, em um só lugar",
      description: "Cards elegantes exibindo investimento total, aportes mensais e rentabilidade. Gráficos de pizza e colunas inspirados nas melhores plataformas.",
      details: [
        "Métricas em tempo real",
        "Visualizações profissionais",
        "Interface inspirada em Kinvo e Investidor 10"
      ],
      image: featureDashboard
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <TextAnimate animation="slideUp" by="word">
              Funcionalidades que Transformam Sua Gestão
            </TextAnimate>
          </h2>
          <p 
            ref={titleReveal.ref}
            className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 ${
              titleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Tudo que você precisa para dominar seus investimentos em uma plataforma elegante e poderosa.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const featureReveal = useScrollReveal({ threshold: 0.15 });
            
            return (
              <div 
                key={index}
                ref={featureReveal.ref}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 transition-all duration-700 ${
                  featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  
                  {feature.subtitle && (
                    <p className="text-lg text-btg-gold font-semibold mb-4">
                      {feature.subtitle}
                    </p>
                  )}
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {feature.impact && (
                    <p className="italic text-muted-foreground border-l-4 border-btg-gold pl-4 py-2">
                      {feature.impact}
                    </p>
                  )}
                </div>
                
                <div className="flex-1 w-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-auto rounded-2xl shadow-elegant transition-smooth hover:shadow-premium"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
