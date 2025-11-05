import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Calendar, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { forecastData, currentNetWorth, projectedNetWorth, monthlyContribution, annualReturn } from "@/data/forecastData";

export const ForecastFeature = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section 
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-btg-gold/10 via-blue-500/5 to-purple-500/10"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-btg-gold/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Projete{" "}
            <span className="font-serif italic bg-gradient-to-r from-btg-gold to-blue-400 bg-clip-text text-transparent">
              seu futuro
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Simule diferentes cenários e veja como seus investimentos podem crescer ao longo do tempo
          </p>

          <Button 
            variant="outline" 
            size="lg"
            className="border-btg-gold/30 hover:border-btg-gold hover:bg-btg-gold/10"
          >
            Saiba Mais Sobre Projeções
          </Button>
        </div>

        {/* Chart Card */}
        <div 
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <Card className="bg-background/40 backdrop-blur-xl border-white/10 shadow-2xl p-6 md:p-8 lg:p-10">
            {/* Metrics Row */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm">Patrimônio Atual</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  {formatCurrency(currentNetWorth)}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">Retorno Anual</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-btg-gold">
                  {annualReturn}% a.a.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Aporte Mensal</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  {formatCurrency(monthlyContribution)}
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[400px] w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorNetWorth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(207 90% 54%)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(207 90% 54%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
                  <XAxis 
                    dataKey="label" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                    }}
                    formatter={(value: number) => [formatCurrency(value), 'Patrimônio']}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="netWorth" 
                    stroke="hsl(207 90% 54%)" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(207 90% 54%)', r: 6 }}
                    activeDot={{ r: 8, fill: 'hsl(207 90% 54%)' }}
                    fill="url(#colorNetWorth)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Future Net Worth */}
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-sm text-muted-foreground mb-2">Patrimônio Projetado aos 65 anos</p>
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-btg-gold to-blue-400 bg-clip-text text-transparent">
                {formatCurrency(projectedNetWorth)}
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <div 
          className={`text-center mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-sm text-muted-foreground">
            * Projeção baseada em cenário hipotético. Rentabilidade passada não garante resultados futuros.
          </p>
        </div>
      </div>
    </section>
  );
};
