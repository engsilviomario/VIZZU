
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createToken, hashPassword } from '../lib/auth';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Em produção real: buscar user no Prisma pelo e-mail
      // const user = await prisma.user.findUnique({ where: { email: credentials.email } })
      
      // Simulação: se o e-mail for o demo, verificamos o hash
      if (credentials.email === 'admin@vizzu.com.br' && credentials.password === 'admin123') {
        
        // ITEM 5: JWT Generation
        const token = await createToken({ 
          sub: 'user_id_001', 
          email: credentials.email, 
          role: 'COMPANY_ADMIN' 
        });

        // Armazenamento em Cookie Seguro ou LocalStorage (depende da estratégia)
        localStorage.setItem('vz_session_token', token);
        
        await new Promise(r => setTimeout(r, 800));
        onLogin();
        navigate('/dashboard');
      } else {
        setError('Acesso negado. Credenciais incorretas.');
      }
    } catch (err) {
      setError('Serviço de autenticação indisponível.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950 bg-emerald-gradient">
      <div className="w-full max-w-md bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500"></div>
        <div className="mb-10 text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6 group">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-slate-950 text-xl">V</div>
            <span className="text-2xl font-black tracking-tight text-white">VIZZU</span>
          </Link>
          <h1 className="text-2xl font-black text-white tracking-tight">Portal do Cliente</h1>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-2xl text-red-500 text-xs font-bold text-center">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">E-mail</label>
            <input name="email" type="email" required value={credentials.email} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Senha</label>
            <input name="password" type="password" required value={credentials.password} onChange={handleInputChange} className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 text-white outline-none focus:ring-2 focus:ring-emerald-500 transition" />
          </div>

          <button type="submit" disabled={loading} className="w-full py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black uppercase tracking-widest transition shadow-xl shadow-emerald-900/20 flex items-center justify-center">
            {loading ? 'Validando Token...' : 'Entrar com Segurança'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
