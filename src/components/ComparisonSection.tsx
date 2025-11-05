import { Check, X, FileSpreadsheet, Lock, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ComparisonSection = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const tableReveal = useScrollReveal({ threshold: 0.1 });
  const cardsReveal = useScrollReveal({ threshold: 0.1 });
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-6 mx-auto">
        <div 
          ref={titleReveal.ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block bg-btg-gold/10 text-btg-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
            POR QUE ESCOLHER STOOTS?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            STOOTS vs Alternativas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Compare e descubra por que STOOTS é a escolha inteligente
          </p>
        </div>

        {/* Comparison Table */}
        <div 
          ref={tableReveal.ref}
          className={`max-w-6xl mx-auto mb-16 overflow-x-auto transition-all duration-700 delay-200 ${
            tableReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="min-w-[800px] bg-card rounded-2xl border-2 border-border shadow-elegant">
            <div className="grid grid-cols-5 gap-4 p-6 bg-secondary/30 rounded-t-2xl border-b-2 border-border">
              <div className="font-bold text-foreground">Aspecto</div>
              <div className="text-center font-semibold text-muted-foreground">Planilha</div>
              <div className="text-center font-semibold text-muted-foreground">App Grátis</div>
              <div className="text-center font-semibold text-muted-foreground">Concorrente</div>
              <div className="text-center font-bold text-btg-gold">STOOTS ✓</div>
            </div>
            
            <div className="divide-y divide-border">
              <div className="grid grid-cols-5 gap-4 p-6 hover:bg-secondary/20 transition-colors">
                <div className="font-medium text-foreground">Tempo Setup</div>
                <div className="text-center text-muted-foreground">2-3h</div>
                <div className="text-center text-muted-foreground">20min</div>
                <div className="text-center text-muted-foreground">30min</div>
                <div className="text-center font-bold text-btg-gold">10min ✓</div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-6 hover:bg-secondary/20 transition-colors">
                <div className="font-medium text-foreground">Análise Automática</div>
                <div className="text-center"><X className="w-5 h-5 text-destructive mx-auto" /></div>
                <div className="text-center text-muted-foreground">Básica</div>
                <div className="text-center"><Check className="w-5 h-5 text-accent mx-auto" /></div>
                <div className="text-center font-bold text-btg-gold flex items-center justify-center gap-1">
                  <Check className="w-5 h-5" />Avançada
                </div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-6 hover:bg-secondary/20 transition-colors">
                <div className="font-medium text-foreground">Personalização</div>
                <div className="text-center text-muted-foreground">Limitada</div>
                <div className="text-center text-muted-foreground">Muito limitada</div>
                <div className="text-center text-muted-foreground">Um pouco</div>
                <div className="text-center font-bold text-btg-gold">TOTAL ✓✓✓</div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-6 hover:bg-secondary/20 transition-colors">
                <div className="font-medium text-foreground">Interface Premium</div>
                <div className="text-center"><X className="w-5 h-5 text-destructive mx-auto" /></div>
                <div className="text-center"><X className="w-5 h-5 text-destructive mx-auto" /></div>
                <div className="text-center"><Check className="w-5 h-5 text-accent mx-auto" /></div>
                <div className="text-center"><Check className="w-5 h-5 text-btg-gold mx-auto" /></div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-6 hover:bg-secondary/20 transition-colors">
                <div className="font-medium text-foreground">Preço/ano</div>
                <div className="text-center text-muted-foreground">Grátis*</div>
                <div className="text-center text-muted-foreground">Grátis</div>
                <div className="text-center text-muted-foreground">R$ 180-300</div>
                <div className="text-center font-bold text-btg-gold">R$ 119,90 ✓</div>
              </div>

              <div className="grid grid-cols-5 gap-4 p-6 hover:bg-secondary/20 transition-colors">
                <div className="font-medium text-foreground">Diagrama do Cerrado</div>
                <div className="text-center"><X className="w-5 h-5 text-destructive mx-auto" /></div>
                <div className="text-center"><X className="w-5 h-5 text-destructive mx-auto" /></div>
                <div className="text-center"><X className="w-5 h-5 text-destructive mx-auto" /></div>
                <div className="text-center font-bold text-btg-gold">EXCLUSIVO ✓✓✓</div>
              </div>
            </div>

            <div className="p-4 bg-secondary/20 rounded-b-2xl">
              <p className="text-sm text-muted-foreground text-center">
                *Tempo infinito = custo real
              </p>
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
