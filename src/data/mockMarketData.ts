export const marketIndices = [
  { ticker: "IBOV", value: "141.581,00", change: -0.09, trending: "down" },
  { ticker: "IFIX", value: "3.287,91", change: 0.15, trending: "up" },
  { ticker: "IDIV", value: "9.234,56", change: 0.23, trending: "up" },
  { ticker: "DÓLAR", value: "4,87", change: -0.41, trending: "down" },
  { ticker: "EURO", value: "5,32", change: 0.12, trending: "up" },
  { ticker: "BTC", value: "65.432,00", change: 2.34, trending: "up" },
  { ticker: "ETH", value: "3.245,67", change: -1.23, trending: "down" },
  { ticker: "S&P 500", value: "4.567,89", change: 0.45, trending: "up" },
];

export const marketNews = [
  {
    id: 1,
    title: "Ibovespa fecha em alta com expectativa de corte de juros",
    summary: "Principais índices brasileiros registram ganhos com investidores atentos às sinalizações do Banco Central.",
    category: "AÇÕES",
    image: "/placeholder.svg",
    source: "InfoMoney",
    timestamp: "2h atrás",
  },
  {
    id: 2,
    title: "Bitcoin atinge US$ 65 mil com aprovação de novos ETFs",
    summary: "Criptomoeda se recupera após período de volatilidade.",
    category: "CRIPTO",
    image: "/placeholder.svg",
    source: "CoinDesk",
    timestamp: "4h atrás",
  },
  {
    id: 3,
    title: "Dividendos: empresas distribuem R$ 45 bi no trimestre",
    summary: "Setor bancário lidera pagamentos aos acionistas.",
    category: "DIVIDENDOS",
    image: "/placeholder.svg",
    source: "Valor Econômico",
    timestamp: "5h atrás",
  },
];

export const newsTimeline = [
  { time: "06:01", date: "10 de outubro 2025", source: "Exame", title: "Petrobras anuncia novo plano de investimentos", summary: "Estatal prevê R$ 102 bilhões em investimentos até 2027" },
  { time: "07:23", date: "10 de outubro 2025", source: "Estadão", title: "Vale reduz projeção de produção de minério", summary: "Mineradora ajusta expectativas para o segundo semestre" },
  { time: "08:45", date: "10 de outubro 2025", source: "Folha", title: "Banco Central mantém Selic em 10,75% ao ano", summary: "Decisão estava amplamente prevista pelo mercado" },
  { time: "09:12", date: "10 de outubro 2025", source: "InfoMoney", title: "Magazine Luiza apresenta resultados do 3T", summary: "Varejista surpreende mercado com lucro acima do esperado" },
  { time: "10:34", date: "10 de outubro 2025", source: "Bloomberg", title: "Dólar cai para R$ 4,87 com entrada de capital externo", summary: "Moeda americana registra queda pelo terceiro dia consecutivo" },
];

export const highestGains = [
  { ticker: "PETR4", name: "Petrobras PN", value: "38.45", change: 3.24, chart: [30, 32, 31, 35, 38] },
  { ticker: "VALE3", name: "Vale ON", value: "72.89", change: 2.87, chart: [68, 69, 70, 71, 73] },
  { ticker: "ITUB4", name: "Itaú Unibanco PN", value: "28.12", change: 2.45, chart: [26, 27, 27.5, 28, 28.1] },
  { ticker: "BBDC4", name: "Bradesco PN", value: "15.67", change: 2.12, chart: [14, 14.5, 15, 15.5, 15.7] },
  { ticker: "WEGE3", name: "WEG ON", value: "45.23", change: 1.98, chart: [43, 43.5, 44, 44.5, 45.2] },
];

export const highestLosses = [
  { ticker: "MGLU3", name: "Magazine Luiza ON", value: "12.34", change: -3.45, chart: [14, 13.5, 13, 12.5, 12.3] },
  { ticker: "VIIA3", name: "Via ON", value: "3.21", change: -2.98, chart: [3.5, 3.4, 3.3, 3.25, 3.2] },
  { ticker: "COGN3", name: "Cogna ON", value: "4.56", change: -2.67, chart: [5, 4.8, 4.7, 4.6, 4.56] },
  { ticker: "YDUQ3", name: "Yduqs ON", value: "18.90", change: -2.34, chart: [20, 19.5, 19.2, 19, 18.9] },
  { ticker: "HAPV3", name: "Hapvida ON", value: "8.23", change: -2.12, chart: [9, 8.7, 8.5, 8.3, 8.23] },
];

export const stootsIndexBest = [
  { ticker: "PETR4", name: "Petrobras PN", scores: { financial: 85, dividends: 92, recommendation: 88, stoots: 88 } },
  { ticker: "TAEE11", name: "Taesa Unit", scores: { financial: 78, dividends: 95, recommendation: 82, stoots: 85 } },
  { ticker: "BBSE3", name: "BB Seguridade ON", scores: { financial: 82, dividends: 90, recommendation: 80, stoots: 84 } },
];

export const stootsIndexWorst = [
  { ticker: "MGLU3", name: "Magazine Luiza ON", scores: { financial: 45, dividends: 30, recommendation: 42, stoots: 39 } },
  { ticker: "VIIA3", name: "Via ON", scores: { financial: 38, dividends: 25, recommendation: 35, stoots: 33 } },
  { ticker: "COGN3", name: "Cogna ON", scores: { financial: 42, dividends: 35, recommendation: 40, stoots: 39 } },
];

export const dividendsAgenda = [
  { day: "15", month: "OUT", ticker: "PETR4", company: "Petrobras PN", type: "DATA-COM", date: "15/10/2025", value: "1,42" },
  { day: "18", month: "OUT", ticker: "VALE3", company: "Vale ON", type: "DATA-COM", date: "18/10/2025", value: "0,87" },
  { day: "22", month: "OUT", ticker: "ITUB4", company: "Itaú Unibanco PN", type: "DATA-COM", date: "22/10/2025", value: "0,52" },
  { day: "25", month: "OUT", ticker: "TAEE11", company: "Taesa Unit", type: "DATA-COM", date: "25/10/2025", value: "1,15" },
];

export const documentsAgenda = [
  { day: "12", month: "OUT", ticker: "PETR4", company: "Petrobras PN", type: "Balanço 3T25", date: "12/10/2025" },
  { day: "14", month: "OUT", ticker: "VALE3", company: "Vale ON", type: "Relatório de Produção", date: "14/10/2025" },
  { day: "20", month: "OUT", ticker: "ITUB4", company: "Itaú Unibanco PN", type: "Resultado 3T25", date: "20/10/2025" },
  { day: "28", month: "OUT", ticker: "WEGE3", company: "WEG ON", type: "Divulgação de Resultados", date: "28/10/2025" },
];

export const featuredArticles = [
  {
    id: 1,
    title: "Como construir uma carteira diversificada de dividendos",
    summary: "Estratégias práticas para investidores que buscam renda passiva consistente.",
    image: "/placeholder.svg",
    category: "Estratégia",
  },
  {
    id: 2,
    title: "Análise: As melhores ações para 2025",
    summary: "Analistas apontam os setores e empresas mais promissores para o próximo ano.",
    image: "/placeholder.svg",
    category: "Análise",
  },
  {
    id: 3,
    title: "Guia completo: Como usar o Diagrama do Cerrado",
    summary: "Aprenda a avaliar seus ativos com a metodologia exclusiva do Stoots.",
    image: "/placeholder.svg",
    category: "Tutorial",
  },
];
