import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
              Investiu?<br />
              <span className="font-semibold">Seu próximo passo é usar o Stoots.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
              Controle seus investimentos, personalize sua carteira e acompanhe o mercado em tempo real.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <Input 
                type="email"
                placeholder="Digite seu e-mail"
                className="h-14 px-6 bg-white text-foreground border-0 focus:ring-2 focus:ring-accent-cyan text-base"
              />
              <Button 
                size="lg" 
                className="h-14 px-8 bg-accent-cyan hover:bg-accent-cyan/90 text-white shadow-neon transition-smooth whitespace-nowrap"
                onClick={() => scrollToSection("pricing")}
              >
                Crie sua conta gratuita
              </Button>
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
