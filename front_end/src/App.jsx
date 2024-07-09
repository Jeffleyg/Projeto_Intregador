import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';
import Perfil from './routes/Perfil';
import CreateEmployeeAccount from './routes/CreateEmployeeAccount';
import CadastrarDespesas from './routes/Cadastrar_de_despesas';
import Settings from './routes/Settings';
import Ajuda from './routes/Ajuda';
import RegistroCompras from './routes/RegistroCompras';
import HistoricoCompras from './routes/HistoricoCompras';
import HistoricoDespesas from './routes/HistoricoDespesas';
import HistoricoViagens from './routes/HistoricoViagens';
import ManterCadastroCompras from './routes/ManterCadastroCompras';
import CadastraViagem from './routes/CadastraViagem';
import BuscaViagem from './routes/BuscaViagem';
import ForgotPassword from './routes/ForgotPassword';
import LoginAdmin from './routes/LoginAdmin';
import HomeAdmin from './routes/HomeAdmin';
import ViagemContainer from './routes/ViagemContainer';
import CadastrarDespesasAdmin from './routes/Cadastrar_de_despesasAdmin';
import SettingsAdmin from './routes/SettingsAdmin';
import AjudaAdmin from './routes/AjudaAdmin';
import RegistroComprasAdmin from './routes/RegistroComprasAdmin';
import HistoricoComprasAdmin from './routes/HistoricoComprasAdmin';
import HistoricoDespesasAdmin from './routes/HistoricoDespesasAdmin';
import HistoricoViagensAdmin from './routes/HistoricoViagensAdmin';
import ManterCadastroComprasAdmin from './routes/ManterCadastroComprasAdmin';
import CadastraViagemAdmin from './routes/CadastraViagemAdmin';
import BuscaViagemAdmin from './routes/BuscaViagemAdmin';
import ForgotPasswordAdmin from './routes/ForgotPasswordAdmin';
import ViagemContainerAdmin from './routes/ViagemContainerAdmin';
import PerfilAdmin from './routes/PerfilAdmin';
import HeaderRoutes from './routes/HeaderRoutes';
import ListaFuncionarios from './routes/ListaFuncionarios';
import RegisterAdmin from './routes/RegisterAdmin';

function App() {
  const [userEmail, setUserEmail] = useState('');

  const handleLoginSuccess = (email) => {
    setUserEmail(email);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cadastrarFuncionario" element={<CreateEmployeeAccount />} />
        <Route path="/cadastrarDespesas" element={<CadastrarDespesas />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/registroCompras" element={<RegistroCompras />} />
        <Route path="/historicoCompras" element={<HistoricoCompras />} />
        <Route path="/historicoDespesas" element={<HistoricoDespesas userEmail={userEmail} />} />
        <Route path="/historicoViagens" element={<HistoricoViagens userEmail={userEmail} />} />
        <Route path="/manterCadastro" element={<ManterCadastroCompras />} />
        <Route path="/cadastrarViagem" element={<CadastraViagem />} />
        <Route path="/buscaViagem" element={<BuscaViagem />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/viagem" element={<ViagemContainer />} />
        <Route path="/cadastrarDespesasAdmin" element={<CadastrarDespesasAdmin />} />
        <Route path="/configuracoesAdmin" element={<SettingsAdmin />} />
        <Route path="/ajudaAdmin" element={<AjudaAdmin />} />
        <Route path="/registroComprasAdmin" element={<RegistroComprasAdmin />} />
        <Route path="/historicoComprasAdmin" element={<HistoricoComprasAdmin />} />
        <Route path="/historicoDespesasAdmin" element={<HistoricoDespesasAdmin />} />
        <Route path="/historicoViagensAdmin" element={<HistoricoViagensAdmin />} />
        <Route path="/manterCadastroAdmin" element={<ManterCadastroComprasAdmin />} />
        <Route path="/cadastrarViagemAdmin" element={<CadastraViagemAdmin />} />
        <Route path="/buscaViagemAdmin" element={<BuscaViagemAdmin />} />
        <Route path="/forgotPasswordAdmin" element={<ForgotPasswordAdmin />} />
        <Route path="/viagemAdmin" element={<ViagemContainerAdmin />} />
        <Route path="/perfilAdmin" element={<PerfilAdmin />} />
        <Route path="/headerRoutes" element={<HeaderRoutes />} />
        <Route path="/listaFuncionario" element={<ListaFuncionarios />} />
        <Route path="/registerAdmin" element={<RegisterAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
