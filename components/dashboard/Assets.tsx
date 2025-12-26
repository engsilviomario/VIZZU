
import React from 'react';

const Assets: React.FC = () => {
  const ativos = [
    { id: '1', nome: 'Firewall Matriz', ip: '10.0.0.1', status: 'ONLINE', latencia: '1ms', cpu: 12, mem: 45 },
    { id: '2', nome: 'Servidor ERP', ip: '10.0.0.50', status: 'ONLINE', latencia: '4ms', cpu: 65, mem: 80 },
    { id: '3', nome: 'Switch Core L3', ip: '10.0.0.2', status: 'ALERTA', latencia: '15ms', cpu: 88, mem: 30 },
    { id: '4', nome: 'AP Corredor B', ip: '192.168.10.5', status: 'OFFLINE', latencia: '-', cpu: 0, mem: 0 },
  ];

  return (
    <div className="p-8 space-y-6 animate-in slide-in-from-right duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-white">Gerenciamento de Ativos</h2>
          <p className="text-slate-500">Monitore hosts individuais via Zabbix API.</p>
        </div>
        <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition shadow-lg shadow-emerald-900/20 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          Vincular Novo Host
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/50">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Status</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Ativo</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Latência</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">CPU</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Memória</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {ativos.map((ativo) => (
                <tr key={ativo.id} className="hover:bg-slate-800/30 transition group">
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      ativo.status === 'ONLINE' ? 'bg-emerald-500/10 text-emerald-500' :
                      ativo.status === 'ALERTA' ? 'bg-amber-500/10 text-amber-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        ativo.status === 'ONLINE' ? 'bg-emerald-500' :
                        ativo.status === 'ALERTA' ? 'bg-amber-500' : 'bg-red-500'
                      }`}></span>
                      {ativo.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <p className="font-bold text-white">{ativo.nome}</p>
                    <p className="text-xs text-slate-500 font-mono">{ativo.ip}</p>
                  </td>
                  <td className="px-8 py-6 text-slate-400 font-medium">{ativo.latencia}</td>
                  <td className="px-8 py-6">
                    <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden mb-1">
                      <div className={`h-full transition-all ${ativo.cpu > 80 ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${ativo.cpu}%` }}></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold">{ativo.cpu}%</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden mb-1">
                      <div className={`h-full transition-all ${ativo.mem > 80 ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${ativo.mem}%` }}></div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-bold">{ativo.mem}%</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-700 rounded-lg transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assets;
