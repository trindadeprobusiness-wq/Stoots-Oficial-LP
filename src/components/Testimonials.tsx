import { TextAnimate } from "@/components/ui/text-animate";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";

export const Testimonials = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const statsReveal = useScrollReveal({ threshold: 0.1 });
  
  const testimonials = [
    {
      author: {
        name: "Ricardo Almeida",
        handle: "Analista de Investimentos",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Finalmente encontrei uma plataforma que me dá o controle que eu sempre quis. A personalização é revolucionária."
    },
    {
      author: {
        name: "Marina Santos",
        handle: "Empreendedora",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "A clareza que o STOOTS trouxe para minha carteira foi transformadora. Agora tomo decisões com confiança e dados reais."
    },
    {
      author: {
        name: "Felipe Mendes",
        handle: "Investidor Iniciante",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Mesmo sendo novo no mundo dos investimentos, consegui organizar e entender meu portfólio em poucos dias. Interface intuitiva e poderosa."
    },
    {
      author: {
        name: "Ana Costa",
        handle: "Gestora de Patrimônio",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      text: "A plataforma simplificou a gestão dos meus clientes. Relatórios claros e visualizações que fazem toda a diferença nas apresentações."
    },
    {
      author: {
        name: "Carlos Ribeiro",
        handle: "Trader Autônomo",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "A velocidade de análise e a precisão dos dados me deram vantagem competitiva. Essencial para quem opera no mercado."
    },
    {
      author: {
        name: "Juliana Lima",
        handle: "Investidora de Longo Prazo",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Acompanhar a evolução do meu patrimônio nunca foi tão fácil. A interface é linda e os insights são valiosos."
    },
    {
      author: {
        name: "Pedro Oliveira",
        handle: "Consultor Financeiro",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
      },
      text: "Recomendo para todos os meus clientes. A transparência e o controle que o STOOTS oferece são incomparáveis."
    },
    {
      author: {
        name: "Beatriz Souza",
        handle: "Investidora em FIIs",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
      },
      text: "Consigo visualizar todos os meus fundos imobiliários em um só lugar com clareza total. Transformou minha forma de investir."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <TextAnimate animation="slideUp" by="word">
              Investidores Que Conquistaram o Controle
            </TextAnimate>
          </h2>
          <p 
            ref={titleReveal.ref}
            className={`text-lg md:text-xl text-muted-foreground transition-all duration-700 ${
              titleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Veja como o STOOTS está transformando a gestão financeira de pessoas como você
          </p>
        </div>

        <TestimonialsMarquee testimonials={testimonials} />

        <div 
          ref={statsReveal.ref}
          className={`mt-12 flex justify-center gap-8 flex-wrap transition-all duration-700 delay-300 ${
            statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15min</div>
            <div className="text-sm text-muted-foreground">Setup Médio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Acesso Total</div>
          </div>
        </div>
      </div>
    </section>
  );
};
