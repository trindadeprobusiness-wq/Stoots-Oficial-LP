import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Calendar, DollarSign } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { forecastData, currentNetWorth, projectedNetWorth, monthlyContribution, annualReturn } from "@/data/forecastData";

export const ForecastFeatureMacbook = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-btg-gold/10 via-blue-500/5 to-purple-500/10 py-16 md:py-0">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-btg-gold/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title - visible on all sizes */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-0 pt-8 md:pt-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Projete{" "}
            <span className="font-serif italic bg-gradient-to-r from-btg-gold to-blue-400 bg-clip-text text-transparent">
              seu futuro
            </span>
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8">
            Simule diferentes cenários e veja como seus investimentos podem crescer
          </p>
        </div>

        {/* MOBILE: Direct card without MacBook (< 768px) */}
        <div className="md:hidden pb-8">
          <Card className="bg-background/95 backdrop-blur-sm border-white/10 shadow-2xl">
            {/* Metrics Row */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 p-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-xs xs:text-sm">Patrimônio Atual</span>
                </div>
                <p className="text-lg xs:text-xl font-bold text-foreground">
                  {formatCurrency(currentNetWorth)}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs xs:text-sm">Retorno Anual</span>
                </div>
                <p className="text-lg xs:text-xl font-bold text-btg-gold">
                  {annualReturn}% a.a.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs xs:text-sm">Aporte Mensal</span>
                </div>
                <p className="text-lg xs:text-xl font-bold text-foreground">
                  {formatCurrency(monthlyContribution)}
                </p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[280px] xs:h-[320px] w-full px-4 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
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
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      fontSize: '14px'
                    }}
                    formatter={(value: number) => [formatCurrency(value), 'Patrimônio']}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="netWorth" 
                    stroke="hsl(207 90% 54%)" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(207 90% 54%)', r: 4 }}
                    activeDot={{ r: 6, fill: 'hsl(207 90% 54%)' }}
                    fill="url(#colorNetWorth)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Future Net Worth */}
            <div className="text-center pt-4 pb-6 px-4 border-t border-white/10">
              <p className="text-xs xs:text-sm text-muted-foreground mb-2">Patrimônio Projetado aos 65 anos</p>
              <p className="text-2xl xs:text-3xl font-bold bg-gradient-to-r from-btg-gold to-blue-400 bg-clip-text text-transparent">
                {formatCurrency(projectedNetWorth)}
              </p>
            </div>
          </Card>
          
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-btg-gold/30 hover:border-btg-gold hover:bg-btg-gold/10"
            >
              Saiba Mais Sobre Projeções
            </Button>
          </div>
        </div>

        {/* DESKTOP: MacbookScroll complete (>= 768px) */}
        <div className="hidden md:block">
          <MacbookScroll
            title={null}
            showGradient={true}
          >
            <Card className="h-full w-full overflow-hidden bg-background/95 backdrop-blur-sm border-white/10 shadow-2xl">
              {/* Metrics Row */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Patrimônio Atual</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    {formatCurrency(currentNetWorth)}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Retorno Anual</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-btg-gold">
                    {annualReturn}% a.a.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Aporte Mensal</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    {formatCurrency(monthlyContribution)}
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="h-[300px] md:h-[350px] w-full px-4 md:px-6 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={forecastData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="colorNetWorthDesktop" x1="0" y1="0" x2="0" y2="1">
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
                      fill="url(#colorNetWorthDesktop)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Future Net Worth */}
              <div className="text-center pt-4 pb-6 px-4 border-t border-white/10">
                <p className="text-sm text-muted-foreground mb-2">Patrimônio Projetado aos 65 anos</p>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-btg-gold to-blue-400 bg-clip-text text-transparent">
                  {formatCurrency(projectedNetWorth)}
                </p>
              </div>
            </Card>
          </MacbookScroll>
        </div>
        
        {/* Disclaimer */}
        <div className="text-center mt-8 pb-8 md:pb-16 px-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            * Projeção baseada em cenário hipotético. Rentabilidade passada não garante resultados futuros.
          </p>
        </div>
      </div>
    </section>
  );
};
