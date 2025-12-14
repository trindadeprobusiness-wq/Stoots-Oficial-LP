export interface Plan {
    name: string;
    description: string;
    price: string;
    yearlyPrice: string;
    period: string;
    features: string[];
    buttonText: string;
    href: string;
    isPopular: boolean;
    badge?: string | null;
    microcopy?: string;
    priceExplanation?: string;
    monthlyOption?: {
        price: string;
        text: string;
    };
}

export const stootsPlans3Tier: Plan[] = [
    {
        name: "GRATUITO",
        price: "0",
        yearlyPrice: "0",
        period: "para sempre",
        features: [
            "Gestão manual completa",
            "Até 20 ativos (Ações, FIIs, RF, Cripto)",
            "Gráfico de pizza por classe",
            "Dashboard visual básico",
            "Cotações em tempo real*",
            "Rentabilidade simples",
            "1 carteira",
        ],
        description: "Perfeito para começar a organizar seus investimentos",
        buttonText: "Começar gratuitamente",
        href: "/signup",
        isPopular: false,
        badge: null,
        microcopy: "Sem cartão • Acesso imediato",
    },
    {
        name: "STARTER",
        price: "9.90",
        yearlyPrice: "118.80",
        period: "mês",
        features: [
            "✨ Tudo do Gratuito +",
            "Ativos ilimitados",
            "Planejamento estratégico (metas %)",
            "Simulação de aportes + reequilíbrio",
            "Calculadora de juros compostos",
            "Gráfico de evolução patrimonial",
            "Histórico de proventos detalhado",
            "Comparação com CDI/Ibovespa",
            "Sem anúncios",
            "Suporte por email",
        ],
        description: "Para investidores que buscam organização e estratégia",
        buttonText: "Assinar Starter Anual",
        href: "/checkout/starter",
        isPopular: true,
        badge: "MAIS POPULAR",
        microcopy: "🛡️ Garantia de 7 dias",
        priceExplanation: "Cobrado anualmente (R$ 118,80/ano)",
    },
    {
        name: "PRO",
        price: "14.90",
        yearlyPrice: "178.80",
        period: "mês",
        features: [
            "✨ Tudo do Starter +",
            "Diagrama do Cerrado ilimitado",
            "Análise personalizada com pontuação",
            "Gráficos avançados de evolução",
            "Tabela detalhada (estilo Kinvo)",
            "Múltiplas visualizações de dados",
            "Exportação de relatórios (PDF)",
            "Suporte prioritário (24h)",
            "Acesso antecipado a novidades",
        ],
        description: "Análise profunda e controle total sobre seus investimentos",
        buttonText: "Assinar Pro Anual",
        href: "/checkout/pro",
        isPopular: false,
        badge: "AVANÇADO",
        microcopy: "Cancele quando quiser",
        priceExplanation: "Cobrado anualmente (R$ 178,80/ano)",
        monthlyOption: {
            price: "19.90",
            text: "ou R$ 19,90/mês (sem desconto)",
        },
    },
];
