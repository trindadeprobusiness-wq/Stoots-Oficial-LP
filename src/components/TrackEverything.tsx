import { useScrollReveal } from "@/hooks/useScrollReveal";
import mobileAppVideo from "@/assets/feature-mobile-app.mp4";

export const TrackEverything = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-btg-navy/5 to-background"
    >
      {/* Subtle glow effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-btg-gold/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div 
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Acompanhe{" "}
              <span className="font-serif italic bg-gradient-to-r from-btg-gold to-blue-400 bg-clip-text text-transparent">
                tudo
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground">
              Sincronize todas as suas finanças em um único lugar
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-btg-gold mt-2 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">
                  Ações, FIIs, Renda Fixa, Criptomoedas e mais
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-btg-gold mt-2 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">
                  Atualização automática em tempo real
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-btg-gold mt-2 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">
                  Visualização unificada do seu patrimônio
                </p>
              </div>
            </div>
          </div>

          {/* iPhone Mockup */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative mx-auto w-full max-w-[280px] xs:max-w-[320px] lg:max-w-[380px]">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-btg-gold/20 to-blue-500/20 blur-2xl md:blur-3xl scale-110" />
              
              {/* Phone frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-3 shadow-2xl animate-float">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-6 md:h-7 bg-gray-900 rounded-b-3xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-background rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  <video
                    src={mobileAppVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Screen overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-btg-gold/10 via-transparent to-blue-500/10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
