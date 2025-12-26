
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { hashPassword } from '../lib/auth';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.senha !== formData.confirmarSenha) {
      return setError('As senhas não coincidem.');
    }
    if (formData.senha.length < 8) {
      return setError('A senha deve ter no mínimo 8 caracteres.');
    }

    setLoading(true);
    try {
      // ITEM 5: Bcrypt Hashing
      const passwordHash = await hashPassword(formData.senha);
      
      console.log('--- OPERAÇÃO DE REGISTRO SEGURA ---');
      console.log('Payload para API:', {
        user: formData.email,
        company: formData.empresa,
        hash: passwordHash // Enviando o hash, nunca a senha pura
      });

      // Simulação de transação Prisma
      await new Promise(r => setTimeout(r, 1500));
      
      alert('Registro concluído com segurança! Redirecionando para ativação do plano.');
      navigate('/checkout');
    } catch (err) {
      setError('Erro ao processar registro. Verifique os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950 bg-emerald-gradient font-sans">
      <div className="w-full max-w-2xl bg-slate-900 p-10 md:p-14 rounded-[3rem] border border-slate-800 shadow-2xl relative">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8 group">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-slate-950 text-xl">V</div>
            <span className="text-2xl font-black tracking-tight text-white">VIZZU</span>
          </Link>
          <h1 className="text-4xl font-black text-white tracking-tighter">Segurança <span className="text-emerald-500">Enterprise</span></h1>
          <p className="text-slate-500 mt-2">Sua infraestrutura protegida desde o primeiro clique.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-2xl text-red-500 text-sm font-bold flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            {error}
          </div>
        )}

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleRegister}>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Nome Completo</label>
            <input name="nome" type="text" required value={formData.nome} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sua Empresa (Tenant)</label>
            <input name="empresa" type="text" required value={formData.empresa} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">E-mail Corporativo</label>
            <input name="email" type="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Senha Forte</label>
            <input name="senha" type="password" required value={formData.senha} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Confirmar Senha</label>
            <input name="confirmarSenha" type="password" required value={formData.confirmarSenha} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition" />
          </div>

          <button type="submit" disabled={loading} className="md:col-span-2 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest transition shadow-xl shadow-emerald-900/20 mt-6 disabled:opacity-50">
            {loading ? 'Criptografando dados...' : 'Criar Conta Enterprise'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
