
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './shared/Navbar';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Navbar />

      {/* Hero Section Master */}
      <section className="relative pt-24 pb-40 px-6">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 mb-8 text-[10px] font-black tracking-[0.4em] text-emerald-400 uppercase bg-emerald-400/5 rounded-full border border-emerald-400/20">
             Centralize seu NOC com VIZZU
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">
            CONTROLE <br />
            <span className="text-emerald-500">ABSOLUTO.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
            A primeira plataforma SaaS que transforma seu Zabbix em uma experiência de monitoramento White-Label para seus clientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/cadastro" className="group relative px-12 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:-translate-y-1">
              Começar Agora — É Grátis
            </Link>
            <Link to="/funcionalidades" className="px-12 py-6 bg-slate-900/50 hover:bg-slate-800 text-white border border-slate-800 rounded-[2rem] font-black uppercase tracking-widest transition backdrop-blur-xl">
              Ver Demonstração
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-y border-slate-900/50 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.5em] mb-12">Monitorando infraestruturas de alto nível</p>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125">
             <span className="text-2xl font-black italic">DATA CENTER</span>
             <span className="text-2xl font-black italic">ISP PROVIDER</span>
             <span className="text-2xl font-black italic">ENTERPRISE</span>
             <span className="text-2xl font-black italic">CLOUD OPS</span>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
           {[
             { t: "Adeus Planilhas", d: "Pare de gerenciar ativos em Excel. Tenha tudo integrado à API do seu Zabbix." },
             { t: "Dashboards Prontos", d: "Não perca horas criando painéis no Grafana. Nós provisionamos tudo para você." },
             { t: "Faturamento Automático", d: "Sua assinatura cresce conforme seus ativos. Sem sustos no final do mês." }
           ].map((item, i) => (
             <div key={i} className="p-10 bg-slate-900/50 border border-slate-800 rounded-[3rem] hover:border-emerald-500/30 transition group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl mb-6 flex items-center justify-center text-emerald-500 font-black">{i+1}</div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">{item.t}</h3>
                <p className="text-slate-500 leading-relaxed">{item.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Floating CTA for Mobile/Scroll */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
         <Link to="/cadastro" className="px-8 py-4 bg-white text-slate-950 rounded-full font-black uppercase text-[10px] tracking-widest shadow-2xl hover:scale-105 transition flex items-center gap-3">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Criar Minha Conta VIZZU
         </Link>
      </div>

      <footer className="py-20 px-6 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-slate-950 text-xl">V</div>
             <span className="font-black text-2xl tracking-tighter text-white uppercase">VIZZU</span>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
             <Link to="/funcionalidades" className="hover:text-emerald-400">Funcionalidades</Link>
             <Link to="/precos" className="hover:text-emerald-400">Preços</Link>
             <Link to="/faq" className="hover:text-emerald-400">Suporte</Link>
          </div>
          <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest">© 2024 VIZZU - Enterprise Monitoring</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
