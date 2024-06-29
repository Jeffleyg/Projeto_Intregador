// App.jsx
import React from 'react';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLoginSuccess={() => {}} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cadastrarFuncionario" element={<CreateEmployeeAccount />} />
        <Route path="/cadastrarDespesas" element={<CadastrarDespesas />} />
        <Route path="/configuracoes" element={<Settings />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/registroCompras" element={<RegistroCompras />} />
        <Route path="/historicoCompras" element={<HistoricoCompras />} />
        <Route path="/historicoDespesas" element={<HistoricoDespesas />} />
        <Route path="/historicoViagens" element={<HistoricoViagens />} />
        <Route path="/manterCadastro" element={<ManterCadastroCompras />} />
        <Route path="/cadastrarViagem" element={<CadastraViagem />} />
        <Route path="/buscaViagem" element={<BuscaViagem />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/viagem" element={<ViagemContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
