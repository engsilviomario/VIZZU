
import React, { useState } from 'react';

const Support: React.FC = () => {
  const [ticketEnviado, setTicketEnviado] = useState(false);

  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-right duration-500">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tighter">Central de Ajuda</h2>
            <p className="text-slate-500 mt-2">Suporte especializado em Zabbix, Grafana e Monitoramento.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-emerald-500/50 transition cursor-pointer group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                <svg className="w-6 h-6 text-emerald-500 group-hover:text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
              </div>
              <h4 className="font-bold text-white">Chat em Tempo Real</h4>
              <p className="text-xs text-slate-500 mt-1">Tempo de espera: ~5 min</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl hover:border-blue-500/50 transition cursor-pointer group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                <svg className="w-6 h-6 text-blue-500 group-hover:text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h4 className="font-bold text-white">Suporte via E-mail</h4>
              <p className="text-xs text-slate-500 mt-1">Resposta em até 2 horas</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] border-l-4 border-l-emerald-500">
            <h4 className="font-black text-white uppercase text-xs tracking-widest mb-4">Base de Conhecimento</h4>
            <ul className="space-y-4">
              {['Configurando Proxy Zabbix', 'Customizando Painéis Grafana', 'Alertas via Telegram', 'Segurança de Dados'].map(item => (
                <li key={item} className="flex items-center text-sm text-slate-400 hover:text-emerald-400 cursor-pointer transition">
                  <svg className="w-4 h-4 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:w-1/2 bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl">
          <h3 className="text-xl font-black text-white mb-8">Abrir Novo Chamado</h3>
          {ticketEnviado ? (
            <div className="text-center py-16 animate-in zoom-in duration-300">
               <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                 <svg className="w-10 h-10 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
               </div>
               <h4 className="text-2xl font-black text-white">Chamado Criado!</h4>
               <p className="text-slate-500 mt-2 mb-8">Nossa equipe responderá em breve através do seu e-mail cadastrado.</p>
               <button onClick={() => setTicketEnviado(false)} className="text-emerald-500 font-bold hover:underline underline-offset-4">Abrir outro ticket</button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setTicketEnviado(true); }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Assunto</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition">
                    <option>Problema Técnico (Zabbix)</option>
                    <option>Dúvida de Faturamento</option>
                    <option>Personalização de Dashboard</option>
                    <option>Relatórios de Auditoria</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Descrição Detalhada</label>
                  <textarea rows={6} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none" placeholder="Conte-nos o que está acontecendo..."></textarea>
                </div>
              </div>
              <button type="submit" className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest transition shadow-xl shadow-emerald-900/20 transform active:scale-95">
                Enviar Chamado
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
