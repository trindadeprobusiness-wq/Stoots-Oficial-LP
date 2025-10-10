import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark text-primary-foreground py-16">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Site Map */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Mapa do Site</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("market-news")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Agenda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("daily-quotes")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Ativos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Carteiras Recomendadas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("stoots-index")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Índice Stoots
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("market-news")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Notícias
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Planos
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Content */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Conteúdo</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("articles")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Artigos
                </button>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm">
                  E-books
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("resource-cards")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Simulador
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("resource-cards")}
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Comparador
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@stoots.com.br"
                  className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm"
                >
                  Suporte
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-accent-cyan transition-smooth text-sm">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Download App */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Baixe o Stoots</h3>
            <div className="space-y-4">
              <div className="w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center">
                <div className="text-xs text-center text-foreground">QR Code</div>
              </div>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  App Store
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="STOOTS" 
                className="h-10 w-auto"
              />
              <p className="text-primary-foreground/70 text-sm">
                Acompanhando seus investimentos com inteligência e personalização
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent-cyan transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-cyan transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-cyan transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-cyan transition-smooth">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-primary-foreground/50 text-xs leading-relaxed mb-2">
              © 2025 STOOTS. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              STOOTS não é uma instituição financeira e não realiza operações de compra e venda de valores mobiliários.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
