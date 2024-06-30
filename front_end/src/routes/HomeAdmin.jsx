/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import '../dashboard.css';

function HomeAdmin() {
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
                <li><Link to="/cadastrarFuncionarioAdmin">Cadastrar Funcionário</Link></li>
                <li><Link to="/cadastrarViagemAdmin">Cadastrar Viagem</Link></li>
                <li><Link to="/cadastrarDespesasAdmin">Cadastrar Despesas da Viagem</Link></li>
                <li><Link to="/registroComprasAdmin">Registrar Compras da Viagem</Link></li>
                <li><Link to="/manterCadastroAdmin">Manter Cadastro de Produtos</Link></li>
                <li><Link to="/manterCadastroAdmin">Manter Cadastro de Produtos</Link></li>
                <li><Link to="/listaViagemAdmin">Lista de viagem</Link></li>
                <li><Link to="/listaDespesaAdmin">Lista de despesa</Link></li>
                <li><Link to="/listaCompraAdmin">Lista de compra</Link></li>
                <li><Link to="/listaProdutoAdmin">Lista de produto</Link></li>
                <li><Link to="/listaFuncionarioAdmin">Lista de funcionario</Link></li>
                {/* <li><Link to="/excluirFuncionarioAdmin"> Excluir funcionario</Link></li>
                <li><Link to="/excluirProdutoAdmin"> Excluir produto</Link></li>
                <li><Link to="/excluirCompraAdmin"> Excluir compra</Link></li>
                <li><Link to="/excluirDespesaAdmin"> Excluir despesa</Link></li>
                <li><Link to="/excluirViagemAdmin"> Excluir viagem</Link></li>
                <li><Link to = "/excluirViagemAdmin"> Excluir viagem</Link></li>
                <li><Link to="/atualizarFuncionarioAdmin"> Atualizar funcionario</Link></li>
                <li><Link to="/atualizarProdutoAdmin"> Atualizar produto</Link></li>
                <li><Link to="/atualizarCompraAdmin"> Atualizar compra</Link></li>
                <li><Link to="/atualizarDespesaAdmin"> Atualizar despesa</Link></li> */}
                
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

export default HomeAdmin;
