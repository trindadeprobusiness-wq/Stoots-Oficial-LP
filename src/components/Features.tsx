import { BarChart3, ClipboardCheck, Target, PieChart } from "lucide-react";
import featureAnalytics from "@/assets/feature-analytics.jpg";
import featurePlanning from "@/assets/feature-planning.jpg";
import featureDashboard from "@/assets/feature-dashboard.jpg";

export const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Gerenciamento de Ativos Simplificado",
      description: "Cadastre, edite e organize seus investimentos em poucos cliques. Visualização em tempo real com cálculo automático do valor total da carteira.",
      details: [
        "Interface intuitiva para CRUD completo",
        "Atualização em tempo real",
        "Consolidação automática de valores"
      ],
      image: featureDashboard
    },
    {
      icon: ClipboardCheck,
      title: "Análise Personalizada - Diagrama do Cerrado",
      description: "Avalie cada ativo com seu próprio método. Checklist customizável com sistema de pontuação (+1/-1) e modelo padrão pronto para uso.",
      details: [
        "Checklists totalmente personalizáveis",
        "Sistema de pontuação inteligente",
        "Template profissional incluído"
      ],
      image: featureAnalytics
    },
    {
      icon: Target,
      title: "Planejamento e Simulação de Aportes",
      description: "Defina metas percentuais para cada classe de ativo. Simule aportes e receba sugestões automáticas de alocação ideal.",
      details: [
        "Metas com validação em 100%",
        "Simulador de aportes futuros",
        "Recomendações inteligentes de alocação"
      ],
      image: featurePlanning
    },
    {
      icon: PieChart,
      title: "Dashboard e Visualização Premium",
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
            Funcionalidades que Transformam Sua Gestão
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tudo que você precisa para dominar seus investimentos em uma plataforma elegante e poderosa.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                      <span className="text-foreground/80">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 w-full">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-auto rounded-2xl shadow-elegant transition-smooth hover:shadow-premium"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
