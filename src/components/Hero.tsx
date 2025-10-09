import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      <div className="container relative z-10 px-6 py-20 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <img 
              src={logo} 
              alt="STOOTS" 
              className="h-20 w-auto mb-8 mx-auto lg:mx-0"
            />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Domine Sua Carteira.<br />
              Conquiste Seus Objetivos.
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A plataforma premium que transforma dados em clareza, decisões em resultados e investimentos em liberdade financeira.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-smooth"
                onClick={() => scrollToSection("pricing")}
              >
                Teste Gratuitamente
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
                onClick={() => scrollToSection("pricing")}
              >
                Ver Planos
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-2xl">
            <img 
              src={heroDashboard} 
              alt="Dashboard STOOTS" 
              className="w-full h-auto rounded-2xl shadow-premium transition-smooth hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
