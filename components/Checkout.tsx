
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de processamento
    setTimeout(() => {
      setLoading(false);
      alert('Simulação: Pagamento Confirmado!');
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <Link to="/" className="mb-8 flex items-center space-x-2">
        <div className="w-10 h-10 bg-emerald-500 rounded flex items-center justify-center font-bold text-slate-950 text-xl">V</div>
        <span className="text-2xl font-bold tracking-tight text-white">VIZZU</span>
      </Link>

      <div className="w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Resumo do Pedido */}
        <div className="w-full md:w-1/2 p-10 bg-slate-950/50 border-r border-slate-800">
          <h2 className="text-xl font-bold mb-6">Resumo da Assinatura</h2>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <div>
                <p className="font-bold text-emerald-400">Plano PRO</p>
                <p className="text-xs text-slate-500">250 ativos • Dashboards Ilimitados</p>
              </div>
              <p className="font-bold">R$ 249,00</p>
            </div>
            <div className="flex justify-between text-slate-400 px-2 text-sm">
              <span>Subtotal</span>
              <span>R$ 249,00</span>
            </div>
            <div className="flex justify-between text-slate-400 px-2 text-sm">
              <span>Taxas</span>
              <span>R$ 0,00</span>
            </div>
            <div className="pt-4 border-t border-slate-800 flex justify-between font-bold text-lg px-2">
              <span>Total hoje</span>
              <span className="text-emerald-500">R$ 249,00</span>
            </div>
          </div>
          <div className="p-4 bg-slate-800/30 rounded-xl text-xs text-slate-500 leading-relaxed italic">
            "Ao assinar, você concorda com a renovação automática mensal. Você pode cancelar a qualquer momento nas configurações do painel."
          </div>
        </div>

        {/* Formulário de Pagamento */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-xl font-bold mb-6">Informações de Pagamento</h2>
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Nome no Cartão</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" 
                placeholder="JOAO A SILVA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Número do Cartão</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" 
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Validade</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" 
                  placeholder="MM/AA"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">CVV</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" 
                  placeholder="000"
                />
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full py-4 mt-6 bg-emerald-600 hover:bg-emerald-500 rounded-xl font-bold text-lg transition flex items-center justify-center space-x-2 ${loading ? 'opacity-70' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processando...</span>
                </>
              ) : (
                <span>Confirmar Pagamento</span>
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-4">
              Ambiente 100% seguro com criptografia SSL 256-bit.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
