
import React from 'react';
import Navbar from './shared/Navbar';

const FAQDetailed: React.FC = () => {
  const faqs = [
    { q: "Preciso instalar algo no meu servidor?", a: "Sim, para monitoramento detalhado recomendamos o Zabbix Agent, mas também suportamos monitoramento via SNMP e ICMP diretamente do nosso proxy." },
    { q: "Como os dados são transmitidos?", a: "Todos os dados são criptografados via TLS 1.3 e transportados através de túneis seguros entre sua infraestrutura e nossa nuvem." },
    { q: "Posso cancelar a qualquer momento?", a: "Sem fidelidade. Você pode cancelar sua assinatura mensal diretamente pelo painel e seus dados serão exportados caso deseje." },
    { q: "Existe suporte para WhatsApp?", a: "Sim, a partir do plano Professional você pode configurar triggers para disparar alertas diretamente no WhatsApp da sua equipe de plantão." }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Central de <span className="text-emerald-500">Dúvidas</span></h1>
          <p className="text-slate-400">Tudo o que você precisa saber antes de começar.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
              <p className="text-slate-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-12 border border-slate-800 rounded-[2.5rem] bg-slate-900/50">
          <h4 className="text-xl font-bold text-white mb-4">Ainda tem dúvidas?</h4>
          <p className="text-slate-500 mb-8">Nossa equipe técnica está pronta para te atender via chat.</p>
          <button className="px-8 py-3 bg-emerald-600/10 text-emerald-500 border border-emerald-500/20 rounded-xl font-bold hover:bg-emerald-600 hover:text-white transition">Falar com Suporte</button>
        </div>
      </div>
    </div>
  );
};

export default FAQDetailed;
