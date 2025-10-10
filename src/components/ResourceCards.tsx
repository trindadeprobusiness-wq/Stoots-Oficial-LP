import { Calculator, GitCompare, Briefcase, FileText } from "lucide-react";

const resources = [
  {
    icon: Calculator,
    title: "Simulador de Investimentos",
    description: "Simule aportes e visualize o crescimento da sua carteira.",
    gradient: "gradient-card-1",
  },
  {
    icon: GitCompare,
    title: "Comparador de Ativos",
    description: "Compare desempenho e indicadores de diferentes ativos.",
    gradient: "gradient-card-2",
  },
  {
    icon: Briefcase,
    title: "Carteiras Recomendadas",
    description: "Acesse estratégias montadas por especialistas.",
    gradient: "gradient-card-3",
  },
  {
    icon: FileText,
    title: "Relatórios e Análises",
    description: "Gere relatórios completos da sua carteira.",
    gradient: "gradient-card-4",
  },
];

export const ResourceCards = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className={`${resource.gradient} p-8 rounded-2xl transition-smooth hover:scale-105 hover:shadow-premium cursor-pointer group`}
              >
                <Icon className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                  {resource.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
