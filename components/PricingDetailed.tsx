
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './shared/Navbar';

const PricingDetailed: React.FC = () => {
  const plans = [
    { name: "Starter", price: "99", hosts: "50", features: [true, true, false, false, false], color: "slate" },
    { name: "Pro", price: "249", hosts: "250", features: [true, true, true, true, false], color: "emerald", popular: true },
    { name: "Business", price: "599", hosts: "Unlimited", features: [true, true, true, true, true], color: "blue" }
  ];

  const featuresList = [
    "Integração Zabbix Agent",
    "Dashboards Padrão",
    "Alertas via Telegram/Slack",
    "Suporte Prioritário",
    "Customização de Grafana"
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Planos e Preços</h1>
          <p className="text-slate-400 text-lg">Escalabilidade real para o seu NOC ou MSP.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((p, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] bg-slate-900 border-2 flex flex-col h-full relative ${p.popular ? 'border-emerald-500 shadow-2xl shadow-emerald-900/20 scale-105' : 'border-slate-800'}`}>
              {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest">Recomendado</div>}
              <h3 className="text-xl font-bold mb-2 text-slate-400 uppercase tracking-widest">{p.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-black text-white">R$ {p.price}</span>
                <span className="text-slate-500 ml-2">/mês</span>
              </div>
              <div className="mb-8 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                <p className="text-sm font-bold text-white mb-1">Capacidade</p>
                <p className="text-slate-400 text-xs">Até {p.hosts} ativos monitorados</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                {featuresList.map((f, idx) => (
                  <li key={idx} className={`flex items-center text-sm ${p.features[idx] ? 'text-slate-200' : 'text-slate-600 line-through'}`}>
                    <svg className={`w-5 h-5 mr-3 ${p.features[idx] ? 'text-emerald-500' : 'text-slate-800'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/checkout" className={`w-full py-4 rounded-xl font-black uppercase tracking-widest transition text-center ${p.popular ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}>
                Assinar Plano
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingDetailed;
