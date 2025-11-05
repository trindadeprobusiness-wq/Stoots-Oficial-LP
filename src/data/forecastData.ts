export interface ForecastDataPoint {
  age: number;
  netWorth: number;
  label: string;
}

export const forecastData: ForecastDataPoint[] = [
  { age: 30, netWorth: 150000, label: "Hoje" },
  { age: 40, netWorth: 520000, label: "40 anos" },
  { age: 50, netWorth: 1180000, label: "50 anos" },
  { age: 60, netWorth: 2150000, label: "60 anos" },
  { age: 65, netWorth: 2850000, label: "65 anos" },
];

export const currentAge = 30;
export const targetAge = 65;
export const currentNetWorth = 150000;
export const projectedNetWorth = 2850000;
export const monthlyContribution = 2000;
export const annualReturn = 8;
