/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../dashboard.css';

function Home() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
        <nav className="nav-menu">
          <ul className="menu-items">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/perfil">Perfil</Link></li>
            <li>
              <Link to="#">Cadastros</Link>
              <ul>
                <li><Link to="/cadastrarViagem">Cadastrar Viagem</Link></li>
                <li><Link to="/cadastrarDespesas">Cadastrar Despesas da Viagem</Link></li>
                <li><Link to="/registroCompras">Registrar Compras da Viagem</Link></li>
                <li><Link to="/manterCadastro">Manter Cadastro de Produtos</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#">Visualizações</Link>
              <ul>
                <li><Link to="/HistoricoViagens"> Histórico das Viagens</Link></li>
                <li><Link to="/HistoricoDespesas"> Histórico das Despesas de uma Viagem</Link></li>
                <li><Link to="/HistoricoCompras"> Histórico de Compras de uma Viagem</Link></li>
                <li><Link to="/buscaViagem">Buscar Viagem</Link></li>
              </ul>
            </li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Bem-vindo</h1>
        <div className="dashboard">
          <div className="widget">
            <h3>Total de Viagens</h3>
            <p>123</p>
          </div>
          <div className="widget">
            <h3>Despesas Totais</h3>
            <p>R$ 50.000</p>
          </div>
          {/* Adicionar mais widgets conforme necessário */}
        </div>
        <div className="tasks">
          <h3>Atividades Recentes</h3>
          <ul>
            <li>Viagem para São Paulo cadastrada</li>
            <li>Despesas de viagem para Rio de Janeiro atualizadas</li>
            <li>Nova compra registrada em Curitiba</li>
          </ul>
        </div>
        <div className="filters">
          <label htmlFor="category-filter">Filtrar Viagem por Categoria:</label>
          <select id="category-filter">
            <option value="all">Todas as Viagens</option>
            <option value="business">Negócios</option>
            <option value="leisure">Lazer</option>
          </select>
        </div>
      </main>
    </>
  );
}

export default Home;
