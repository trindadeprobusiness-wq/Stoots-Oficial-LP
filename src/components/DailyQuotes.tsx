import { highestGains, highestLosses } from "@/data/mockMarketData";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from "lucide-react";

const MiniChart = ({ data, color }: { data: number[]; color: string }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 80;
    const y = 30 - ((value - min) / range) * 30;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width="80" height="30" className="flex-shrink-0">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const DailyQuotes = () => {
  return (
    <section className="py-20 bg-[hsl(var(--bg-dark-1))]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-12">
          Cotações do dia
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Highest Gains */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-green-500" size={24} />
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Maiores Altas
                </h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-accent-cyan hover:text-accent-cyan/80 hover:bg-accent-cyan/10"
              >
                Ver todos
              </Button>
            </div>

            <div className="space-y-3">
              {highestGains.map((stock) => (
                <div
                  key={stock.ticker}
                  className="flex items-center justify-between p-4 bg-[hsl(var(--bg-dark-2))] rounded-xl hover:bg-[hsl(var(--bg-dark-2))]/80 transition-smooth cursor-pointer group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div>
                      <div className="text-primary-foreground font-semibold">
                        {stock.ticker}
                      </div>
                      <div className="text-primary-foreground/60 text-sm">
                        {stock.name}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-primary-foreground font-semibold">
                        R$ {stock.value}
                      </div>
                      <div className="text-green-500 text-sm font-medium">
                        +{stock.change}%
                      </div>
                    </div>
                    <MiniChart data={stock.chart} color="#22c55e" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highest Losses */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <TrendingDown className="text-red-500" size={24} />
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Maiores Baixas
                </h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-accent-cyan hover:text-accent-cyan/80 hover:bg-accent-cyan/10"
              >
                Ver todos
              </Button>
            </div>

            <div className="space-y-3">
              {highestLosses.map((stock) => (
                <div
                  key={stock.ticker}
                  className="flex items-center justify-between p-4 bg-[hsl(var(--bg-dark-2))] rounded-xl hover:bg-[hsl(var(--bg-dark-2))]/80 transition-smooth cursor-pointer group"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div>
                      <div className="text-primary-foreground font-semibold">
                        {stock.ticker}
                      </div>
                      <div className="text-primary-foreground/60 text-sm">
                        {stock.name}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-primary-foreground font-semibold">
                        R$ {stock.value}
                      </div>
                      <div className="text-red-500 text-sm font-medium">
                        {stock.change}%
                      </div>
                    </div>
                    <MiniChart data={stock.chart} color="#ef4444" />
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
