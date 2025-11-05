import { Award, Star, TrendingUp, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const badges = [
  {
    icon: Award,
    title: "Melhor Plataforma",
    subtitle: "Investimentos 2024",
  },
  {
    icon: Star,
    title: "5.0 Avaliação",
    subtitle: "App Store & Google Play",
  },
  {
    icon: TrendingUp,
    title: "+12% Retorno Médio",
    subtitle: "Usuários Premium",
  },
  {
    icon: Users,
    title: "+50 Mil Investidores",
    subtitle: "Confiam no STOOTS",
  },
];

export const TrustBadges = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div 
      ref={ref}
      className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8"
    >
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className={`flex items-center gap-3 bg-background/60 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-lg transition-all duration-700 hover:scale-105 hover:border-btg-gold/30 hover:shadow-btg-gold/20 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              transitionDelay: `${index * 100}ms` 
            }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-btg-gold/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-btg-gold" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-foreground leading-tight">
                {badge.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {badge.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
