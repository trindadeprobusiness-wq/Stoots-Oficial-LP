import { Shield, TrendingUp, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ValueProposition = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const cardsReveal = useScrollReveal({ threshold: 0.1 });
  const exampleReveal = useScrollReveal({ threshold: 0.1 });
  return (
    <section className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleReveal.ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por Que STOOTS é Diferente?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Não é apenas gestão. É inteligência financeira que coloca você no controle total de cada decisão, com clareza absoluta e personalização sem limites.
          </p>
        </div>

        <div 
          ref={cardsReveal.ref}
          className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 delay-200 ${
            cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Segurança Premium
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Seus dados financeiros protegidos com tecnologia institucional. Privacidade e confiabilidade em cada detalhe.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
              <TrendingUp className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Clareza Financeira
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Visualize sua carteira de forma intuitiva. Entenda performance, riscos e oportunidades em segundos.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Autonomia Total
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Personalize análises, crie suas métricas e tome decisões baseadas no que realmente importa para você.
            </p>
          </div>
        </div>

        <div 
          ref={exampleReveal.ref}
          className={`mt-16 max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 transition-all duration-700 delay-300 ${
            exampleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-lg text-center text-foreground/90 leading-relaxed">
            <strong className="text-primary">Exemplo prático:</strong> Imagine visualizar todos os seus ativos em um só lugar, com análise personalizada de cada investimento, simulação automática de aportes e sugestões inteligentes de rebalanceamento — tudo isso em uma interface elegante que você controla.
          </p>
        </div>
      </div>
    </section>
  );
};
