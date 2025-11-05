import { Check, X, FileSpreadsheet, Lock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRef, useEffect } from "react";

export const ComparisonSection = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const tableReveal = useScrollReveal({ threshold: 0.1 });
  const cardsReveal = useScrollReveal({ threshold: 0.1 });
  const tableRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
          className="max-w-6xl mx-auto mb-20 perspective-container"
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

        {/* Three Comparison Cards */}
        <div 
          ref={cardsReveal.ref}
          className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 transition-all duration-700 delay-300 ${
            cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Card 1: Saia das Planilhas */}
          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:border-btg-gold/50 hover:shadow-elegant transition-all group">
            <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-8 h-8 text-destructive" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Spreadsheets são 2008
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Você passa 5h/mês atualizando manualmente? STOOTS sincroniza tudo em tempo real. Sem erros. Sem tédio.
            </p>
            <Button 
              variant="btgOutline" 
              className="w-full"
              onClick={() => scrollToSection("features")}
            >
              Ver na prática →
            </Button>
          </div>

          {/* Card 2: Mais que App Grátis */}
          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:border-btg-gold/50 hover:shadow-elegant transition-all group">
            <div className="w-16 h-16 bg-btg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lock className="w-8 h-8 text-btg-gold" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Apps grátis = limitações
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Funcionalidades básicas não servem para investidor sério. STOOTS oferece análise profunda, personalizações infinitas.
            </p>
            <div className="inline-block bg-btg-gold/10 text-btg-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Acesso ao Diagrama do Cerrado (exclusivo)
            </div>
            <Button 
              variant="btgOutline" 
              className="w-full"
              onClick={() => scrollToSection("features")}
            >
              Conhecer recursos →
            </Button>
          </div>

          {/* Card 3: Profissional, Acessível */}
          <div className="p-8 rounded-2xl bg-card border-2 border-border hover:border-btg-gold/50 hover:shadow-elegant transition-all group">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Wallet className="w-8 h-8 text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Premium sem premium price
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ferramentas que custam R$ 180-300/ano saem por R$ 9,99/mês aqui. Mesma qualidade. Preço inteligente.
            </p>
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <span>Economize até R$ 180/ano</span>
            </div>
            <Button 
              variant="btg" 
              className="w-full"
              onClick={() => scrollToSection("pricing")}
            >
              Ver planos →
            </Button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="btgOutline"
            className="text-lg px-10 py-6"
            onClick={() => scrollToSection("pricing")}
          >
            Comparar Recursos Detalhados
          </Button>
        </div>
      </div>
    </section>
  );
};
