import { Button } from "@/components/ui/button";
import logoLight from "@/assets/logo-light.jpg";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-dark text-primary-foreground py-16">
      <div className="container px-6 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img 
              src={logoLight} 
              alt="STOOTS" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              A plataforma premium que transforma dados em clareza, decisões em resultados e investimentos em liberdade financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => scrollToSection("pricing")}
              >
                Teste Gratuitamente
              </Button>
              <Button 
                size="sm"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => scrollToSection("pricing")}
              >
                Ver Planos
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Funcionalidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("pricing")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Planos e Preços
                </button>
              </li>
              <li>
                <a 
                  href="mailto:contato@stoots.com.br"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Segurança
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2025 STOOTS. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm text-center md:text-right">
              Gestão inteligente de investimentos para todos os perfis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
