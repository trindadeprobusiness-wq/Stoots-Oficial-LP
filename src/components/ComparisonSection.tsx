import { Check, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useEffect } from "react";

export const ComparisonSection = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const tableReveal = useScrollReveal({ threshold: 0.1 });
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tableReveal.isVisible && tableRef.current) {
      tableRef.current.classList.add('revealed');
    }
  }, [tableReveal.isVisible]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_65%)]" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div 
          ref={titleReveal.ref}
          className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-700 ${
            titleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 bg-btg-gold/10 backdrop-blur-sm border border-btg-gold/20 text-btg-gold px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-btg-gold/10">
            POR QUE ESCOLHER STOOTS?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            STOOTS <span className="text-btg-gold">vs</span> Alternativas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare e descubra por que STOOTS é a escolha inteligente para o seu patrimônio
          </p>
        </div>

        {/* Comparison Table with 3D Animation */}
        <div 
          ref={tableReveal.ref}
          className="max-w-6xl mx-auto mb-0 perspective-container"
        >
          <div 
            ref={tableRef}
            className="comparison-card-3d min-w-[800px] overflow-x-auto"
          >
            <div className="backdrop-blur-xl bg-white/5 dark:bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-5 gap-6 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border-b border-white/10">
                <div className="font-bold text-lg text-foreground">Aspecto</div>
                <div className="text-center font-semibold text-muted-foreground">Planilha</div>
                <div className="text-center font-semibold text-muted-foreground">App Grátis</div>
                <div className="text-center font-semibold text-muted-foreground">Concorrente</div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 bg-btg-gold/20 backdrop-blur-sm border border-btg-gold/30 text-btg-gold px-4 py-2 rounded-full font-bold shadow-lg shadow-btg-gold/20">
                    STOOTS ✓
                  </span>
                </div>
              </div>
              
              {/* Table Rows */}
              <div className="divide-y divide-white/5">
                <div className={`grid grid-cols-5 gap-6 p-6 hover:bg-white/5 transition-all duration-300 ${tableReveal.isVisible ? 'row-stagger' : 'opacity-0'}`} style={{ animationDelay: '0ms' }}>
                  <div className="font-medium text-foreground">Tempo Setup</div>
                  <div className="text-center text-muted-foreground">2-3h</div>
                  <div className="text-center text-muted-foreground">20min</div>
                  <div className="text-center text-muted-foreground">30min</div>
                  <div className="text-center font-bold text-btg-gold">10min ✓</div>
                </div>

                <div className={`grid grid-cols-5 gap-6 p-6 hover:bg-white/5 transition-all duration-300 ${tableReveal.isVisible ? 'row-stagger' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
                  <div className="font-medium text-foreground">Análise Automática</div>
                  <div className="text-center"><X className="w-6 h-6 text-destructive mx-auto" /></div>
                  <div className="text-center text-muted-foreground">Básica</div>
                  <div className="text-center"><Check className="w-6 h-6 text-accent mx-auto animated-check" style={{ animationDelay: '200ms' }} /></div>
                  <div className="text-center font-bold text-btg-gold flex items-center justify-center gap-2">
                    <Check className="w-6 h-6 animated-check" style={{ animationDelay: '300ms' }} />
                    <span>Avançada</span>
                  </div>
                </div>

                <div className={`grid grid-cols-5 gap-6 p-6 hover:bg-white/5 transition-all duration-300 ${tableReveal.isVisible ? 'row-stagger' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                  <div className="font-medium text-foreground">Personalização</div>
                  <div className="text-center text-muted-foreground">Limitada</div>
                  <div className="text-center text-muted-foreground">Muito limitada</div>
                  <div className="text-center text-muted-foreground">Um pouco</div>
                  <div className="text-center font-bold text-btg-gold">TOTAL ✓✓✓</div>
                </div>

                <div className={`grid grid-cols-5 gap-6 p-6 hover:bg-white/5 transition-all duration-300 ${tableReveal.isVisible ? 'row-stagger' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                  <div className="font-medium text-foreground">Interface Premium</div>
                  <div className="text-center"><X className="w-6 h-6 text-destructive mx-auto" /></div>
                  <div className="text-center"><X className="w-6 h-6 text-destructive mx-auto" /></div>
                  <div className="text-center"><Check className="w-6 h-6 text-accent mx-auto animated-check" style={{ animationDelay: '400ms' }} /></div>
                  <div className="text-center"><Check className="w-6 h-6 text-btg-gold mx-auto animated-check" style={{ animationDelay: '500ms' }} /></div>
                </div>

                <div className={`grid grid-cols-5 gap-6 p-6 hover:bg-white/5 transition-all duration-300 ${tableReveal.isVisible ? 'row-stagger' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                  <div className="font-medium text-foreground">Preço/ano</div>
                  <div className="text-center text-muted-foreground">Grátis*</div>
                  <div className="text-center text-muted-foreground">Grátis</div>
                  <div className="text-center text-muted-foreground">R$ 180-300</div>
                  <div className="text-center font-bold text-btg-gold">R$ 119,90 ✓</div>
                </div>

                <div className={`grid grid-cols-5 gap-6 p-6 hover:bg-white/5 transition-all duration-300 ${tableReveal.isVisible ? 'row-stagger' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
                  <div className="font-medium text-foreground">Diagrama do Cerrado</div>
                  <div className="text-center"><X className="w-6 h-6 text-destructive mx-auto" /></div>
                  <div className="text-center"><X className="w-6 h-6 text-destructive mx-auto" /></div>
                  <div className="text-center"><X className="w-6 h-6 text-destructive mx-auto" /></div>
                  <div className="text-center font-bold text-btg-gold">EXCLUSIVO ✓✓✓</div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border-t border-white/10">
                <p className="text-sm text-muted-foreground text-center">
                  *Tempo infinito = custo real
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
