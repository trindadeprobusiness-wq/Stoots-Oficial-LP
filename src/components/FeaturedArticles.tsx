import { featuredArticles } from "@/data/mockMarketData";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export const FeaturedArticles = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Artigos em destaque
          </h2>
          <Button 
            variant="ghost" 
            className="text-primary hover:text-primary/80"
          >
            Ver mais <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group block relative"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <ExternalLink 
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-white z-10 drop-shadow-lg" 
                size={18} 
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold text-card-foreground mb-3 leading-tight group-hover:text-primary group-hover:underline transition-smooth">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {article.summary}
                </p>
                <span className="text-primary text-sm font-medium hover:text-primary/80 transition-smooth flex items-center gap-1">
                  Ler mais <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
