import { marketIndices } from "@/data/mockMarketData";
import { TrendingUp, TrendingDown } from "lucide-react";

export const MarketTicker = () => {
  return (
    <div className="bg-[hsl(var(--bg-dark-2))] border-y border-primary-foreground/10 overflow-hidden">
      <div className="flex animate-ticker">
        {[...marketIndices, ...marketIndices].map((index, i) => (
          <div 
            key={`${index.ticker}-${i}`}
            className="flex items-center gap-2 px-8 py-4 whitespace-nowrap"
          >
            <span className="text-primary-foreground/60 text-sm font-medium">
              {index.ticker}
            </span>
            <span className="text-primary-foreground text-sm font-semibold">
              {index.value}
            </span>
            <div className={`flex items-center gap-1 ${
              index.change >= 0 ? "text-green-500" : "text-red-500"
            }`}>
              {index.trending === "up" ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              <span className="text-xs font-medium">
                {index.change >= 0 ? "+" : ""}{index.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
