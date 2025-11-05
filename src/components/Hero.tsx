import { Button } from "@/components/ui/button";
import platformVideo from "@/assets/platform-demo.mp4";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground/30 rounded-full animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-primary-foreground/30 rounded-lg rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="mb-4 inline-block">
              <span className="bg-btg-gold/20 text-btg-gold border border-btg-gold/30 px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                Oferta de Lançamento MVP - 58% OFF
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-foreground mb-6 leading-tight">
              <span className="font-semibold">STOOTS: O Consolidador Inteligente que Trabalha pela Sua Estratégia</span>
            </h1>
            
            <p className="text-base xs:text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed font-medium max-w-prose">
              Pare de perder tempo com planilhas. Consolide, analise e otimize seus investimentos em um só lugar.
            </p>

            <div className="mb-8 space-y-2 text-primary-foreground/85 text-sm xs:text-base md:text-lg">
              <p>Cansei de abrir 5 abas diferentes para saber quanto tenho investido? O STOOTS acaba com esse caos. Transformamos múltiplas corretoras e carteiras em uma visão única, clara e acionável do seu patrimônio. Da consolidação automática ao planejamento de aportes, você tem tudo que precisa para investir com disciplina e estratégia — sem mensalidades abusivas.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:max-w-xl">
              <Button 
                size="lg" 
                variant="btg"
                neon={true}
                className="w-full sm:w-auto"
                onClick={() => scrollToSection("pricing")}
              >
                ASSINAR PLANO ANUAL POR R$ 99,90
              </Button>
              <Button 
                size="lg" 
                variant="btgOutline"
                className="w-full sm:w-auto"
                onClick={() => scrollToSection("features")}
              >
                Ver Demo em 2 Minutos
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              poster={heroDashboard}
              className="w-full h-auto rounded-xl md:rounded-2xl shadow-premium transition-smooth animate-float"
              style={{ animationDuration: "4s" }}
            >
              <source src={platformVideo} type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
