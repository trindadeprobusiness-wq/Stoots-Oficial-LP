import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/80 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <img 
            src={logo} 
            alt="STOOTS" 
            className="h-10 md:h-14 w-auto cursor-pointer drop-shadow-lg hover:drop-shadow-xl transition-smooth"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm font-medium"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm font-medium"
            >
              Planos
            </button>
            <Button 
              variant="btgOutline" 
              size="sm"
              className="text-primary-foreground border-btg-gold/50 hover:bg-btg-gold/10"
            >
              Login
            </Button>
            <Button 
              variant="btg"
              size="sm"
              onClick={() => scrollToSection("pricing")}
            >
              Criar conta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-foreground p-2 min-h-touch min-w-touch flex items-center justify-center touch-active no-select"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-primary-foreground/10 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm font-medium text-left"
              >
                Funcionalidades
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm font-medium text-left"
              >
                Planos
              </button>
              <Button 
                variant="btgOutline" 
                size="sm"
                className="text-primary-foreground border-btg-gold/50 hover:bg-btg-gold/10 justify-start"
              >
                Login
              </Button>
              <Button 
                variant="btg"
                size="sm"
                onClick={() => scrollToSection("pricing")}
              >
                Criar conta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
