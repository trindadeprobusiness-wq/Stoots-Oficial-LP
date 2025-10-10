import { Button } from "@/components/ui/button";
import mobileAppVideo from "@/assets/feature-mobile-app.mp4";
import { Apple, Smartphone } from "lucide-react";

export const MobileApp = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-dark to-primary">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Sua carteira na palma da mão
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Acesse seus investimentos onde estiver. Interface otimizada para mobile com todas as funcionalidades premium.
            </p>
            
            <div className="flex gap-4">
              <Button className="flex items-center gap-2">
                <Apple className="w-5 h-5" />
                App Store
              </Button>
              <Button variant="outline" className="flex items-center gap-2 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Smartphone className="w-5 h-5" />
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto rounded-2xl shadow-premium animate-float"
              style={{ animationDuration: "4s" }}
            >
              <source src={mobileAppVideo} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
