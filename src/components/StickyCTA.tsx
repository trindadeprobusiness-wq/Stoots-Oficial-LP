import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pricingSection = document.getElementById("pricing");
      const pricingSectionTop = pricingSection?.offsetTop || 0;

      // Show sticky CTA after scrolling 500px but hide it when reaching pricing section
      if (scrollPosition > 500 && scrollPosition < pricingSectionTop - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-btg-navy/95 backdrop-blur-md border-t border-btg-gold/20 p-4 shadow-2xl md:hidden animate-slide-in-bottom">
      <Button 
        variant="btg" 
        size="lg"
        className="w-full text-lg font-bold"
        onClick={scrollToPricing}
      >
        Testar 30 Dias GRÁTIS →
      </Button>
    </div>
  );
};
