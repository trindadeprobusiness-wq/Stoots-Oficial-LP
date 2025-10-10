import { marketNews } from "@/data/mockMarketData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MarketNews = () => {
  return (
    <section id="market-news" className="py-20 bg-[hsl(var(--bg-dark-1))]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary-foreground">
            Principais notícias do mercado
          </h2>
          <Button 
            variant="ghost" 
            className="text-accent-cyan hover:text-accent-cyan/80 hover:bg-accent-cyan/10"
          >
            Ver todas <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured News (Large) */}
          <div className="md:row-span-2 group cursor-pointer">
            <div className="relative h-full rounded-2xl overflow-hidden transition-smooth hover:scale-[1.02] hover:shadow-premium">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent z-10" />
              <img 
                src={marketNews[0].image} 
                alt={marketNews[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="inline-block px-3 py-1 bg-accent-cyan text-white text-xs font-semibold rounded-full mb-4">
                  {marketNews[0].category}
                </span>
                <h3 className="text-2xl font-semibold text-primary-foreground mb-3 leading-tight">
                  {marketNews[0].title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-3">
                  {marketNews[0].summary}
                </p>
                <div className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                  <span>{marketNews[0].source}</span>
                  <span>•</span>
                  <span>{marketNews[0].timestamp}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary News */}
          {marketNews.slice(1).map((news) => (
            <div key={news.id} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden transition-smooth hover:scale-[1.02] hover:shadow-premium">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent z-10" />
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-accent-purple text-white text-xs font-semibold rounded-full mb-3">
                    {news.category}
                  </span>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2 leading-tight">
                    {news.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                    <span>{news.source}</span>
                    <span>•</span>
                    <span>{news.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
