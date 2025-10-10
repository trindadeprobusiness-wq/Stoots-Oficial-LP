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
            className="h-12 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("market-news")}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm font-medium"
            >
              Mercado
            </button>
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
              variant="ghost" 
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              Login
            </Button>
            <Button 
              size="sm"
              className="bg-accent-cyan hover:bg-accent-cyan/90 text-white shadow-neon transition-smooth"
              onClick={() => scrollToSection("pricing")}
            >
              Criar conta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("market-news")}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-sm font-medium text-left"
              >
                Mercado
              </button>
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
                variant="ghost" 
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10 justify-start"
              >
                Login
              </Button>
              <Button 
                size="sm"
                className="bg-accent-cyan hover:bg-accent-cyan/90 text-white shadow-neon transition-smooth"
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
