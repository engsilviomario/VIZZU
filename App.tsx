
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Checkout from './components/Checkout';
import Features from './components/Features';
import PricingDetailed from './components/PricingDetailed';
import FAQDetailed from './components/FAQDetailed';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
  // Simulação básica de autenticação para o demo
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/funcionalidades" element={<Features />} />
          <Route path="/precos" element={<PricingDetailed />} />
          <Route path="/faq" element={<FAQDetailed />} />
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/cadastro" element={<Register />} />
          <Route 
            path="/dashboard/*" 
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
