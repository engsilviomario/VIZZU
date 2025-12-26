
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './shared/Navbar';

const Features: React.FC = () => {
  const features = [
    {
      title: "Integração Nativa Zabbix",
      description: "Conectamos diretamente ao seu Zabbix Server via API JSON-RPC, permitindo a gestão de hosts sem sair da nossa interface.",
      icon: <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    },
    {
      title: "Dashboards Grafana",
      description: "Visualizações de alto nível provisionadas automaticamente para cada cliente, com isolamento total de dados.",
      icon: <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
    },
    {
      title: "Alertas Multicanal",
      description: "Receba notificações críticas via Telegram, Slack, WhatsApp ou E-mail em milissegundos após a detecção.",
      icon: <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
    },
    {
      title: "Multi-tenancy Seguro",
      description: "Arquitetura projetada para isolar logicamente cada empresa, garantindo que os dados de um cliente nunca vazem para outro.",
      icon: <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Funcionalidades <span className="text-emerald-500 underline decoration-emerald-500/30">Enterprise</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Tudo o que você precisa para gerenciar infraestruturas complexas com a simplicidade de um SaaS moderno.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-10 bg-slate-900 border border-slate-800 rounded-[2.5rem] hover:border-emerald-500/40 transition group">
              <div className="mb-6 p-4 bg-slate-950 rounded-2xl w-fit group-hover:bg-emerald-500/10 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-emerald-600 rounded-[3rem] flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-emerald-900/20">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-black text-white mb-2">Pronto para elevar seu monitoramento?</h2>
            <p className="text-emerald-100">Comece seu teste gratuito de 14 dias agora mesmo.</p>
          </div>
          <Link to="/cadastro" className="px-10 py-5 bg-slate-950 text-emerald-400 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition shadow-2xl">
            Criar Minha Conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
