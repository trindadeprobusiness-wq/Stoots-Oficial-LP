import { newsTimeline } from "@/data/mockMarketData";
import { ExternalLink } from "lucide-react";

export const NewsTimeline = () => {
  return (
    <section className="py-20 bg-[hsl(var(--bg-dark-3))]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-light text-primary-foreground">
            Timeline de notícias
          </h2>
          <div className="flex gap-2">
            {[1, 2, 3, "...", 100].map((page, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium transition-smooth ${
                  page === 1
                    ? "bg-accent-cyan text-white"
                    : "text-primary-foreground/60 hover:bg-primary-foreground/10"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {newsTimeline.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-6 p-6 bg-[hsl(var(--bg-dark-2))] rounded-xl hover:bg-[hsl(var(--bg-dark-2))]/80 transition-smooth cursor-pointer group animate-fade-up block relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-primary-foreground/30 mt-1.5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 text-primary-foreground/60 text-sm mb-2">
                  <span className="font-medium">{item.time}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="text-accent-cyan">{item.source}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2 group-hover:text-accent-cyan group-hover:underline transition-smooth">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {item.summary}
                </p>
              </div>
              <ExternalLink 
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary-foreground/60" 
                size={18} 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
