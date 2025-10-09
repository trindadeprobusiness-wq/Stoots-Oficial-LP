import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Meus dados estão seguros no STOOTS?",
      answer: "Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos os mais rigorosos protocolos de segurança da indústria financeira. Seus dados nunca são compartilhados com terceiros e você mantém controle total sobre suas informações."
    },
    {
      question: "Quais tipos de ativos posso gerenciar?",
      answer: "STOOTS suporta todos os principais tipos de investimentos: ações, FIIs, renda fixa (CDB, LCI, LCA, Tesouro Direto), fundos de investimento, criptomoedas, previdência privada e mais. Nossa plataforma é flexível e permite cadastrar qualquer ativo personalizado."
    },
    {
      question: "O STOOTS se integra com minha corretora?",
      answer: "Atualmente o cadastro de ativos é manual, o que garante maior privacidade e controle. Estamos desenvolvendo integrações automáticas com as principais corretoras brasileiras para lançamento em breve."
    },
    {
      question: "Como funciona o Diagrama do Cerrado?",
      answer: "É uma metodologia de análise totalmente customizável. Você cria checklists personalizados com critérios específicos para avaliar seus investimentos. Cada critério recebe pontuação (+1 ou -1) e você obtém uma visão clara da qualidade de cada ativo. Incluímos um modelo profissional pronto para uso, mas você pode adaptá-lo completamente ao seu estilo."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, não há períodos de fidelidade ou taxas de cancelamento. Você pode cancelar sua assinatura a qualquer momento pelo próprio painel. Após o cancelamento, manterá acesso até o final do período pago."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Dúvidas Frequentes
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Tudo o que você precisa saber sobre o STOOTS
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
            <p className="text-lg text-foreground/90">
              Ainda tem dúvidas? Entre em contato com nosso suporte em{" "}
              <a href="mailto:contato@stoots.com.br" className="text-primary font-semibold hover:underline">
                contato@stoots.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
