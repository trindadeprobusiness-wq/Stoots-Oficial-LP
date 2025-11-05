import { Star } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Testimonials = () => {
  const titleReveal = useScrollReveal({ threshold: 0.2 });
  const cardsReveal = useScrollReveal({ threshold: 0.1 });
  const statsReveal = useScrollReveal({ threshold: 0.1 });
  const testimonials = [
    {
      name: "Ricardo Almeida",
      role: "Analista de Investimentos",
      content: "Finalmente encontrei uma plataforma que me dá o controle que eu sempre quis. A personalização do Diagrama do Cerrado é revolucionária.",
      rating: 5
    },
    {
      name: "Marina Santos",
      role: "Empreendedora",
      content: "A clareza que o STOOTS trouxe para minha carteira foi transformadora. Agora tomo decisões com confiança e dados reais.",
      rating: 5
    },
    {
      name: "Felipe Mendes",
      role: "Investidor Iniciante",
      content: "Mesmo sendo novo no mundo dos investimentos, consegui organizar e entender meu portfólio em poucos dias. Interface intuitiva e poderosa.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
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

        <div 
          ref={cardsReveal.ref}
          className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-700 delay-200 ${
            cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-card-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

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
