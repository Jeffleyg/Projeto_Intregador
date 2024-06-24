import React from 'react';
import './Style.css';

function VisualizacaoHistoricoDespesas() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
        <nav>
          <ul className="menu-items">
            <li><a href="cadastrar_de_despesas.html">Cadastrar despesas</a></li>
            <li><a href="visualizar_historico_compras.html">Histórico de Compras de Viagem</a></li>
            <li><a href="dashboard.html">Voltar ao Dashboard</a></li>
            <li><a href="ajuda.html">Ajuda</a></li>
          </ul>
        </nav>
      </header>
      <h1>Histórico de Despesas de Viagem</h1>
      <table id="expense-history">
        <thead>
          <tr>
            <th>Código da Viagem</th>
            <th>ID do Funcionário</th>
            <th>Data da Nota Fiscal/Recibo</th>
            <th>Cidade da Nota Fiscal/Recibo</th>
            <th>Tipo de Despesa</th>
            <th>Valor Pago</th>
            <th>Descrição</th>
            <th>Nota Fiscal/Recibo</th>
          </tr>
        </thead>
        <tbody>
          {/* Linhas adicionadas dinamicamente */}
        </tbody>
      </table>
    </>
  );
}

export default VisualizacaoHistoricoDespesas;
