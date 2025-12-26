
import React from 'react';
import { Link } from 'react-router-dom';

const Subscription: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-right duration-500">
      <div>
        <h2 className="text-3xl font-black text-white">Sua Assinatura</h2>
        <p className="text-slate-500">Acompanhe seu ciclo de faturamento e limites de ativos.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Card Plano Atual */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
            </div>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Plano Atual</p>
            <h3 className="text-4xl font-black text-white mb-6">VIZZU PRO</h3>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-slate-500 text-xs font-bold mb-1">Status</p>
                <p className="text-emerald-400 font-black">ATIVO</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold mb-1">Próximo Vencimento</p>
                <p className="text-white font-black">25 de Maio, 2024</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold mb-1">Valor Mensal</p>
                <p className="text-white font-black">R$ 249,00</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold mb-1">Método</p>
                <p className="text-white font-black">Cartão •••• 4432</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link to="/checkout" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition">Alterar Plano</Link>
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition">Ver Faturas</button>
            </div>
          </div>

          {/* Histórico */}
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden">
            <div className="px-8 py-5 bg-slate-950/50 border-b border-slate-800">
              <h4 className="font-black text-sm text-white uppercase tracking-widest">Histórico de Cobrança</h4>
            </div>
            <div className="divide-y divide-slate-800">
              {[1, 2, 3].map(i => (
                <div key={i} className="px-8 py-5 flex justify-between items-center hover:bg-slate-800/20 transition">
                  <div>
                    <p className="font-bold text-white">Mensalidade Vizzu - Abril</p>
                    <p className="text-xs text-slate-500">Fatura #00{i+120} • 25 Abr 2024</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-white">R$ 249,00</p>
                    <button className="text-[10px] font-black text-emerald-500 uppercase tracking-widest hover:underline">Recibo PDF</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uso de Recursos */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] flex flex-col justify-between">
          <div>
            <h4 className="font-black text-white mb-8">Uso do Período</h4>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                  <span>Ativos Monitorados</span>
                  <span className="text-white">85 / 100</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[85%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
                  <span>Usuários Adicionais</span>
                  <span className="text-white">3 / 5</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[60%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
            <p className="text-xs text-slate-500 leading-relaxed">Precisando de mais recursos? Fale com nosso time de vendas para um upgrade personalizado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
