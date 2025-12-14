import { BarChart3, ClipboardCheck, ArrowUpRight, PieChart, Target, Smartphone } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TextAnimate } from "@/components/ui/text-animate";
import featureAnalytics from "@/assets/feature-analytics-new.png";
import featurePlanning from "@/assets/feature-planning-new.png";
import featureDashboard from "@/assets/feature-consolidation.png";

export const Features = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const features = [
    {
      icon: BarChart3,
      title: "Consolidação Automática: Controle Total em Uma Tela",
      subtitle: "O fim do 'em qual corretora eu comprei isso mesmo?'",
      description: "Visualize todo seu patrimônio consolidado – Ações (BR/USA), FIIs, Cripto, Renda Fixa e muito mais. Esqueça planilhas complexas: o STOOTS integra tudo em um dashboard premium com cotações em tempo real.",
      details: [
        "Integração Multi-Ativos (Ações, Stocks, FIIs, Cripto)",
        "Cotações em Tempo Real (atualização automática)",
        "Cálculo automático de rentabilidade real"
      ],
      impact: "Imagine acordar e, em 10 segundos, saber exatamente como está sua carteira. Clareza absoluta sem esforço.",
      image: featureDashboard
    },
    {
      icon: Target,
      title: "Planejamento Inteligente de Aportes",
      subtitle: "Onde investir os próximos R$ 1.000? O STOOTS te mostra.",
      description: "Defina a alocação ideal da sua carteira (ex: 60% Ações, 40% Renda Fixa) e nossa inteligência sugere exatamente onde aportar para manter seu equilíbrio estratégico, comprando o que está descontado em relação à sua meta.",
      details: [
        "Metas de Alocação Personalizadas por classe",
        "Sugestão Automática de Rebalanceamento Inteligente",
        "Simulador de Novos Aportes com cálculo matemático"
      ],
      impact: "Disciplina não é sorte. É ter um sistema que elimina o viés emocional e te força a comprar na baixa e manter na alta.",
      image: featurePlanning
    },
    {
      icon: PieChart,
      title: "Dashboard e Visualização Premium",
      subtitle: "Design de Banco Privado, Acessível para Você",
      description: "Gráficos de evolução patrimonial com separação clara entre capital investido e rendimentos. Visualize sua distribuição por setores e ativos com clareza cristalina através de dashboards que inspiram confiança.",
      details: [
        "Gráfico de Rosca Interativo por classe de ativos",
        "Evolução Patrimonial (Linha do Tempo: Valor x Lucro)",
        "Tabelas Detalhadas e Limpas estilo Institucional"
      ],
      impact: "Dados complexos transformados em insights simples e acionáveis. Visualização que traz paz mental.",
      image: featureAnalytics
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
            className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 ${titleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 transition-all duration-700 ${featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 shadow-sm border border-primary/20">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  {feature.subtitle && (
                    <p className="text-lg text-btg-gold font-semibold mb-4">
                      {feature.subtitle}
                    </p>
                  )}

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-btg-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowUpRight className="w-3.5 h-3.5 text-btg-blue" />
                        </div>
                        <span className="text-foreground/90 font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {feature.impact && (
                    <div className="relative pl-6 py-2">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-btg-gold/20 to-btg-gold/30 rounded-full" />
                      <p className="italic text-muted-foreground text-base">
                        "{feature.impact}"
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex-1 w-full group perspective-1000">
                  <div className="relative transform transition-all duration-500 group-hover:scale-[1.01] group-hover:rotate-y-1">
                    <div className="absolute -inset-1 bg-gradient-to-r from-btg-gold/20 to-btg-blue/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
