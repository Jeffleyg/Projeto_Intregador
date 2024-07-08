/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import '../dashboard.css';

// Register the required components of Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function HomeAdmin() {
  // Data for Bar Chart
  const barChartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Viagens',
        data: [30, 45, 28, 60, 35],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for Pie Chart
  const pieChartData = {
    labels: ['Negócios', 'Lazer', 'Estudos', 'Outros'],
    datasets: [
      {
        data: [55, 25, 15, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div> 
        <nav className="nav-menu">
          <ul className="menu-items">
            <li><Link to="/homeAdmin">Home</Link></li>
            <li><Link to="/perfilAdmin">Perfil</Link></li>
            <li>
              <Link to="#">Cadastros</Link>
              <ul>
                <li><Link to="/cadastrarFuncionario">Cadastrar Funcionário</Link></li>
                <li><Link to="/cadastrarViagemAdmin">Cadastrar Viagem</Link></li>
                <li><Link to="/cadastrarDespesasAdmin">Cadastrar Despesas da Viagem</Link></li>
                <li><Link to="/registroComprasAdmin">Registrar Compras da Viagem</Link></li>
                <li><Link to="/manterCadastroAdmin">Manter Cadastro de Produtos</Link></li>
                <li><Link to="/listaFuncionario">Lista de funcionario</Link></li>
              </ul>
            </li>
            <li>
              <Link to="#">Visualizações</Link>
              <ul>
                <li><Link to="/HistoricoViagensAdmin"> Histórico das Viagens</Link></li>
                <li><Link to="/HistoricoDespesasAdmin"> Histórico das Despesas de uma Viagem</Link></li>
                <li><Link to="/HistoricoComprasAdmin"> Histórico de Compras de uma Viagem</Link></li>
                <li><Link to="/buscaViagemAdmin">Buscar Viagem</Link></li>
              </ul>
            </li>
            <li><Link to="/">Sair</Link></li>
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
          {/* Adicionar gráficos */}
          <div className="chart-container">
            <h3>Viagens por Mês</h3>
            <Bar data={barChartData} />
          </div>
          <div className="chart-container">
            <h3>Distribuição por Categoria</h3>
            <Pie data={pieChartData} />
          </div>
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

export default HomeAdmin;
