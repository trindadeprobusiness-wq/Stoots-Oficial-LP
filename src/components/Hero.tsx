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
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-foreground mb-6 leading-tight">
              Controle Total de Investimentos.<br />
              <span className="font-semibold">Sem Planilhas. Sem Confusão.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-6 leading-relaxed font-medium">
              Visualize performance em segundos. Tome decisões com dados reais. Personalize cada métrica.
            </p>

            <div className="mb-8 space-y-2 text-primary-foreground/85 text-base md:text-lg">
              <p>Investidor brasileiro sério gerencia 4-6 tipos de ativos diferentes.</p>
              <p>Mas 80% ainda usa planilhas desordenadas ou apps que não servem.</p>
              <p className="font-semibold text-primary-foreground">STOOTS muda isso - análise profissional, interface premium, preço que cabe no bolso.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <Button 
                size="lg" 
                variant="btg"
                neon={true}
                className="h-14 px-8 text-base font-semibold"
                onClick={() => scrollToSection("pricing")}
              >
                Testar 30 Dias GRÁTIS
              </Button>
              <Button 
                size="lg" 
                variant="btgOutline"
                className="h-14 px-8 text-base font-semibold"
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
              className="w-full h-auto rounded-2xl shadow-premium transition-smooth animate-float"
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
