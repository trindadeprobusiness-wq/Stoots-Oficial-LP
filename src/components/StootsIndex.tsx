import { stootsIndexBest, stootsIndexWorst } from "@/data/mockMarketData";

const GaugeMeter = ({ value, label }: { value: number; label: string }) => {
  const rotation = (value / 100) * 180 - 90;
  const color = value >= 75 ? "#22c55e" : value >= 50 ? "#eab308" : value >= 25 ? "#f97316" : "#ef4444";

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-10">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <path
            d="M 10 45 A 40 40 0 0 1 90 45"
            fill="none"
            stroke="hsl(var(--bg-dark-3))"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 10 45 A 40 40 0 0 1 90 45"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(value / 100) * 126} 126`}
          />
          <line
            x1="50"
            y1="45"
            x2="50"
            y2="15"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              transformOrigin: "50px 45px",
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.5s ease",
            }}
          />
          <circle cx="50" cy="45" r="3" fill={color} />
        </svg>
      </div>
      <span className="text-xs text-primary-foreground/60 mt-1">{label}</span>
      <span className="text-sm font-semibold text-primary-foreground">{value}</span>
    </div>
  );
};

export const StootsIndex = () => {
  return (
    <section className="py-20 bg-[hsl(var(--bg-dark-3))]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-3">
            Índice Stoots
          </h2>
          <p className="text-primary-foreground/70">
            Medindo Performance e Diversificação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Best Performance */}
          <div>
            <h3 className="text-xl font-semibold text-green-500 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              Melhor desempenho
            </h3>

            <div className="space-y-6">
              {stootsIndexBest.map((stock) => (
                <div
                  key={stock.ticker}
                  className="p-6 bg-[hsl(var(--bg-dark-2))] rounded-xl hover:bg-[hsl(var(--bg-dark-2))]/80 transition-smooth"
                >
                  <div className="mb-4">
                    <div className="text-primary-foreground font-semibold text-lg">
                      {stock.ticker}
                    </div>
                    <div className="text-primary-foreground/60 text-sm">
                      {stock.name}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <GaugeMeter value={stock.scores.financial} label="Financeiro" />
                    <GaugeMeter value={stock.scores.dividends} label="Dividendos" />
                    <GaugeMeter value={stock.scores.recommendation} label="Recomendação" />
                    <GaugeMeter value={stock.scores.stoots} label="Índice Stoots" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Worst Performance */}
          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              Pior desempenho
            </h3>

            <div className="space-y-6">
              {stootsIndexWorst.map((stock) => (
                <div
                  key={stock.ticker}
                  className="p-6 bg-[hsl(var(--bg-dark-2))] rounded-xl hover:bg-[hsl(var(--bg-dark-2))]/80 transition-smooth"
                >
                  <div className="mb-4">
                    <div className="text-primary-foreground font-semibold text-lg">
                      {stock.ticker}
                    </div>
                    <div className="text-primary-foreground/60 text-sm">
                      {stock.name}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <GaugeMeter value={stock.scores.financial} label="Financeiro" />
                    <GaugeMeter value={stock.scores.dividends} label="Dividendos" />
                    <GaugeMeter value={stock.scores.recommendation} label="Recomendação" />
                    <GaugeMeter value={stock.scores.stoots} label="Índice Stoots" />
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
