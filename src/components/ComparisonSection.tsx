import { Check, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";

export const ComparisonSection = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const tableReveal = useScrollReveal({ threshold: 0.1 });
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tableReveal.isVisible && tableRef.current) {
      tableRef.current.classList.add('revealed');
    }
  }, [tableReveal.isVisible]);

  // Structured comparison data
  const comparisonData = [
    { aspect: "Tempo Setup", planilha: "2-3h", appGratis: "20min", concorrente: "30min", stoots: "10min ✓" },
    { aspect: "Análise Automática", planilha: "✗", appGratis: "Básica", concorrente: "✓", stoots: "✓ Avançada" },
    { aspect: "Personalização", planilha: "Limitada", appGratis: "Muito limitada", concorrente: "Um pouco", stoots: "TOTAL ✓✓✓" },
    { aspect: "Interface Premium", planilha: "✗", appGratis: "✗", concorrente: "✓", stoots: "✓" },
    { aspect: "Preço/ano", planilha: "Grátis*", appGratis: "Grátis", concorrente: "R$ 180-300", stoots: "R$ 119,90 ✓" },
    { aspect: "Diagrama do Cerrado", planilha: "✗", appGratis: "✗", concorrente: "✗", stoots: "EXCLUSIVO ✓✓✓" },
  ];

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_65%)]" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div 
          ref={titleReveal.ref}
          className={`max-w-3xl mx-auto text-center mb-12 md:mb-20 transition-all duration-700 ${
            titleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 bg-btg-gold/10 backdrop-blur-sm border border-btg-gold/20 text-btg-gold px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 shadow-lg shadow-btg-gold/10">
            POR QUE ESCOLHER STOOTS?
          </span>
          <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            STOOTS <span className="text-btg-gold">vs</span> Alternativas
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare e descubra por que STOOTS é a escolha inteligente para o seu patrimônio
          </p>
        </div>

        {/* DESKTOP: Comparison Table with 3D Animation (>= 768px) */}
        <div 
          ref={tableReveal.ref}
          className="hidden md:block max-w-6xl mx-auto mb-0 perspective-container"
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
                {comparisonData.map((row, idx) => (
                  <div 
                    key={idx}
                    className={`grid grid-cols-5 gap-6 p-6 hover:bg-white/5 transition-all duration-300 ${tableReveal.isVisible ? 'row-stagger' : 'opacity-0'}`} 
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="font-medium text-foreground">{row.aspect}</div>
                    <div className="text-center text-muted-foreground">
                      {row.planilha === "✗" ? <X className="w-6 h-6 text-destructive mx-auto" /> : row.planilha}
                    </div>
                    <div className="text-center text-muted-foreground">
                      {row.appGratis === "✗" ? <X className="w-6 h-6 text-destructive mx-auto" /> : row.appGratis}
                    </div>
                    <div className="text-center text-muted-foreground">
                      {row.concorrente === "✗" ? <X className="w-6 h-6 text-destructive mx-auto" /> : 
                       row.concorrente === "✓" ? <Check className="w-6 h-6 text-accent mx-auto animated-check" style={{ animationDelay: `${idx * 100 + 200}ms` }} /> :
                       row.concorrente}
                    </div>
                    <div className="text-center font-bold text-btg-gold">
                      {row.stoots.includes("✓") ? row.stoots : row.stoots}
                    </div>
                  </div>
                ))}
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

        {/* MOBILE: Cards stacked (< 768px) */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, idx) => (
            <Card 
              key={idx}
              className="bg-background/95 backdrop-blur-sm border-white/10 p-4"
            >
              <h3 className="font-bold text-base xs:text-lg mb-3 text-foreground">
                {row.aspect}
              </h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Planilha:</span>
                  <span className="font-medium">
                    {row.planilha === "✗" ? <X className="w-5 h-5 text-destructive" /> : row.planilha}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">App Grátis:</span>
                  <span className="font-medium">
                    {row.appGratis === "✗" ? <X className="w-5 h-5 text-destructive" /> : row.appGratis}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Concorrente:</span>
                  <span className="font-medium">
                    {row.concorrente === "✗" ? <X className="w-5 h-5 text-destructive" /> : 
                     row.concorrente === "✓" ? <Check className="w-5 h-5 text-accent" /> : 
                     row.concorrente}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="font-bold text-btg-gold">STOOTS:</span>
                  <span className="font-bold text-btg-gold">{row.stoots}</span>
                </div>
              </div>
            </Card>
          ))}
          
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border-white/10 p-4">
            <p className="text-xs text-muted-foreground text-center">
              *Tempo infinito = custo real
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
