
import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="p-8 space-y-10 animate-in slide-in-from-right duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">Configurações</h2>
          <p className="text-slate-500">Gerencie sua conta, segurança e integrações.</p>
        </div>
        <button className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition">Salvar Alterações</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Seção Perfil */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              Perfil do Administrador
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nome Completo</label>
                <input type="text" defaultValue="João Silva" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">E-mail de Contato</label>
                <input type="email" defaultValue="joao@empresa.com" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Empresa</label>
                <input type="text" defaultValue="Alpha Tech LTDA" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Cargo / Função</label>
                <input type="text" defaultValue="CTO" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition" />
              </div>
            </div>
          </div>

          {/* Seção API e Webhooks */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-xl">
            <h3 className="text-lg font-bold text-white mb-2">Integrações API</h3>
            <p className="text-sm text-slate-500 mb-8">Utilize estas chaves para conectar seu N8N ou serviços externos.</p>
            
            <div className="space-y-6">
              <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Vizzu Secret Key</p>
                  <code className="text-emerald-400 font-mono">vz_live_9928348829...</code>
                </div>
                <button className="text-xs font-bold text-slate-400 hover:text-white transition">Copiar</button>
              </div>
              <div className="p-5 bg-slate-950/50 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Webhook N8N Endpoint</p>
                  <code className="text-blue-400 font-mono">https://n8n.vizzu.com.br/...</code>
                </div>
                <button className="text-xs font-bold text-slate-400 hover:text-white transition">Configurar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Segurança */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6">Segurança</h3>
            <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition mb-3">Alterar Senha</button>
            <button className="w-full py-3 bg-slate-800/50 hover:bg-slate-800 text-slate-400 rounded-xl text-sm font-bold transition">Ativar MFA (2FA)</button>
          </div>

          {/* Preferências de Notificação */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6">Notificações</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300 font-medium">Alertas por E-mail</span>
                <div className="w-10 h-5 bg-emerald-500 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300 font-medium">Alertas Telegram</span>
                <div className="w-10 h-5 bg-slate-700 rounded-full relative"><div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-300 font-medium">Relatórios Mensais</span>
                <div className="w-10 h-5 bg-emerald-500 rounded-full relative"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
