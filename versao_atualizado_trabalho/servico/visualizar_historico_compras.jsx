import React from 'react';
import './Style.css';

function VisualizarHistoricoCompras() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
        <nav>
          <ul className="menu-items">
            <li><a href="registro_compras.html">Registro de Compras da viagem</a></li>
            <li><a href="dashboard.html">Voltar ao Dashboard</a></li>
            <li><a href="ajuda.html">Ajuda</a></li>
          </ul>
        </nav>
      </header>
      <h1>Histórico de Compras de Viagem</h1>
      <table id="purchase-history">
        <thead>
          <tr>
            <th>Código da Viagem</th>
            <th>ID do Funcionário</th>
            <th>Data da Compra</th>
            <th>Local</th>
            <th>Tipo de Despesa</th>
            <th>Itens Comprados</th>
            <th>Valor Total</th>
            <th>Recibos</th>
          </tr>
        </thead>
        <tbody>
          {/* Linhas adicionadas dinamicamente */}
        </tbody>
      </table>
    </>
  );
}

export default VisualizarHistoricoCompras;
