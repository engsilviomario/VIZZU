
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Assets from './dashboard/Assets';
import Subscription from './dashboard/Subscription';
import Support from './dashboard/Support';
import Settings from './dashboard/Settings';

const DashboardHome: React.FC = () => {
  const data = [
    { name: 'Seg', alertas: 40 },
    { name: 'Ter', alertas: 30 },
    { name: 'Qua', alertas: 65 },
    { name: 'Qui', alertas: 45 },
    { name: 'Sex', alertas: 90 },
    { name: 'Sab', alertas: 20 },
    { name: 'Dom', alertas: 15 },
  ];

  return (
    <div className="p-10 space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter">Visão Geral</h2>
          <p className="text-slate-500 mt-1">Status em tempo real da sua rede monitorada.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group border-t-4 border-t-emerald-500">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Minha Assinatura</p>
              <h3 className="text-2xl font-black text-white mt-2">Plano PRO</h3>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-emerald-500/20 tracking-tighter">Ativo</span>
          </div>
          <div className="space-y-4">
             <div className="flex justify-between items-end"><span className="text-slate-400 text-xs">Expira em 25 dias</span></div>
             <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-emerald-500 h-full w-[83%] shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div></div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl group hover:border-slate-700 transition-all">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Ativos Zabbix</p>
              <h3 className="text-4xl font-black text-white mt-2">85<span className="text-slate-600 text-lg font-medium tracking-tighter">/100</span></h3>
            </div>
            <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-emerald-500/10 transition-colors">
               <svg className="w-6 h-6 text-slate-400 group-hover:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
          </div>
          <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">Expandir Plano</button>
        </div>

        <div className="bg-emerald-600 p-8 rounded-[2rem] shadow-2xl flex flex-col justify-between group relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-20"><svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/></svg></div>
           <h4 className="text-white font-black text-2xl mb-4 leading-tight">Métricas em tempo real</h4>
           <button className="w-full py-4 bg-slate-950 text-emerald-400 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl transform active:scale-95 transition-all">Abrir Grafana</button>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl">
         <h3 className="font-black text-xl mb-10 flex items-center"><span className="w-3 h-3 bg-emerald-500 rounded-full mr-4 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span> Tendência de Alertas Críticos</h3>
         <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs><linearGradient id="colA" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/><stop offset="95%" stopColor="#10b981" stopOpacity={0}/></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#475569" fontSize={11} tickLine={false} axisLine={false} dy={15} />
                <YAxis stroke="#475569" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }} itemStyle={{ color: '#10b981', fontWeight: 'bold' }} cursor={{ stroke: '#10b981', strokeWidth: 2 }} />
                <Area type="monotone" dataKey="alertas" stroke="#10b981" fillOpacity={1} fill="url(#colA)" strokeWidth={4} animationDuration={2000} />
              </AreaChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Início', path: '/dashboard', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
    { name: 'Meus Ativos', path: '/dashboard/ativos', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-7 0V4"></path></svg> },
    { name: 'Assinatura', path: '/dashboard/assinatura', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg> },
    { name: 'Suporte', path: '/dashboard/suporte', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> },
    { name: 'Configurações', path: '/dashboard/configuracoes', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 font-sans">
      <aside className="w-80 bg-slate-900/40 border-r border-slate-800/60 backdrop-blur-2xl flex flex-col fixed inset-y-0 z-40 transition-all">
        <div className="p-10">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center font-black text-slate-950 text-2xl shadow-2xl shadow-emerald-500/30 group-hover:rotate-12 transition-all">V</div>
            <span className="font-black text-3xl tracking-tighter text-white">VIZZU</span>
          </Link>
        </div>
        
        <nav className="flex-grow px-8 mt-6">
          <ul className="space-y-3">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link to={item.path} className={`flex items-center space-x-4 px-6 py-4 rounded-2xl text-sm font-black transition-all ${isActive ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-900/20' : 'text-slate-500 hover:bg-slate-800/50 hover:text-slate-200'}`}>
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex items-center space-x-4">
             <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center font-black text-slate-500 text-xs">JS</div>
             <div className="flex-grow truncate"><p className="text-xs font-black text-white truncate">João Silva</p><p className="text-[10px] text-slate-500">PRO Plan</p></div>
          </div>
        </div>
      </aside>

      <main className="flex-grow ml-80 min-h-screen">
        <header className="h-24 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/40 sticky top-0 z-30 px-10 flex justify-between items-center">
           <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
              <Link to="/dashboard" className="hover:text-emerald-500 transition">Dashboard</Link>
              <span>/</span>
              <span className="text-slate-300">Página Atual</span>
           </div>
           <div className="flex items-center space-x-6">
              <button className="p-3 bg-slate-900 text-slate-400 rounded-xl hover:text-white transition relative"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg><span className="absolute top-3 right-3 w-2 h-2 bg-emerald-500 rounded-full border-2 border-slate-950"></span></button>
           </div>
        </header>

        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/ativos" element={<Assets />} />
          <Route path="/assinatura" element={<Subscription />} />
          <Route path="/suporte" element={<Support />} />
          <Route path="/configuracoes" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
