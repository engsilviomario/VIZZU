
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    { name: "Funcionalidades", path: "/funcionalidades" },
    { name: "Preços", path: "/precos" },
    { name: "FAQ", path: "/faq" }
  ];

  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 w-full flex justify-between items-center z-50 sticky top-0 bg-slate-950/80 backdrop-blur-md">
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-emerald-500/20">V</div>
          <span className="text-2xl font-black tracking-tight text-white">VIZZU</span>
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
        {menuItems.map(item => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`hover:text-emerald-400 transition ${location.pathname === item.path ? 'text-emerald-400' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition px-4 py-2">
          Entrar
        </Link>
        <Link to="/cadastro" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition shadow-xl shadow-emerald-900/20">
          Começar Grátis
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
