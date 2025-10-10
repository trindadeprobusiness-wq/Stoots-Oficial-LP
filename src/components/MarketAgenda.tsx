import { dividendsAgenda, documentsAgenda } from "@/data/mockMarketData";
import { Button } from "@/components/ui/button";

export const MarketAgenda = () => {
  return (
    <section className="py-20 bg-[hsl(var(--bg-dark-1))]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-12">
          Agenda do mercado
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Dividends */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-primary-foreground">
                Dividendos
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-accent-cyan hover:text-accent-cyan/80 hover:bg-accent-cyan/10"
              >
                Ver todos
              </Button>
            </div>

            <div className="space-y-4">
              {dividendsAgenda.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[hsl(var(--bg-dark-2))] rounded-xl hover:bg-[hsl(var(--bg-dark-2))]/80 transition-smooth cursor-pointer"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-card-1 flex flex-col items-center justify-center text-white">
                    <div className="text-xl font-bold">{item.day}</div>
                    <div className="text-xs">{item.month}</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary-foreground font-semibold">
                        {item.ticker}
                      </span>
                      <span className="text-primary-foreground/60 text-sm">
                        {item.company}
                      </span>
                    </div>
                    <div className="text-primary-foreground/60 text-sm">
                      {item.type}: {item.date}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-primary-foreground font-semibold">
                      R$ {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-primary-foreground">
                Documentos
              </h3>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-accent-cyan hover:text-accent-cyan/80 hover:bg-accent-cyan/10"
              >
                Ver todos
              </Button>
            </div>

            <div className="space-y-4">
              {documentsAgenda.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-[hsl(var(--bg-dark-2))] rounded-xl hover:bg-[hsl(var(--bg-dark-2))]/80 transition-smooth cursor-pointer"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-card-4 flex flex-col items-center justify-center text-white">
                    <div className="text-xl font-bold">{item.day}</div>
                    <div className="text-xs">{item.month}</div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary-foreground font-semibold">
                        {item.ticker}
                      </span>
                      <span className="text-primary-foreground/60 text-sm">
                        {item.company}
                      </span>
                    </div>
                    <div className="text-primary-foreground/60 text-sm">
                      {item.type}
                    </div>
                  </div>

                  <div className="text-primary-foreground/60 text-sm">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
