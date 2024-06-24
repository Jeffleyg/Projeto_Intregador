import React from 'react';
import './Style.css';

function RegistroCompras() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
        <div className="menu">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="menu-items">
            <li><a href="cadastrar_de_despesas.html">Cadastrar despesas</a></li>
            <li><a href="visualizao_historico_viagem.html">Histórico de Compras de Viagem</a></li>
            <li><a href="dashboard.html">Voltar ao Dashboard</a></li>
            <li><a href="ajuda.html">Ajuda</a></li>
          </ul>
        </div>
      </header>
      <h1>Registro de Compras de Viagem</h1>
      <form id="purchase-form">
        <label htmlFor="trip-code">Código da Viagem:</label>
        <input type="text" id="trip-code" name="trip-code" required />

        <label htmlFor="employee-id">ID do Funcionário:</label>
        <input type="text" id="employee-id" name="employee-id" required />

        <label htmlFor="purchase-date">Data da Compra:</label>
        <input type="date" id="purchase-date" name="purchase-date" required />

        <label htmlFor="location">Local (automático):</label>
        <input type="text" id="location" name="location" readOnly />

        <label htmlFor="expense-type">Tipo de Despesa:</label>
        <select id="expense-type" name="expense-type" required>
          <option value="clothing">Vestuário</option>
          <option value="cosmetics">Cosméticos</option>
        </select>

        <div id="item-list">
          <label>Itens Comprados:</label>
          <button type="button" onClick={addItem}>Adicionar Item</button>
        </div>

        <label htmlFor="receipt">Recibo (PDF ou PNG):</label>
        <input type="file" id="receipt" name="receipt" accept="image/png, application/pdf" required />

        <label htmlFor="description">Descrição:</label>
        <textarea id="description" name="description" required></textarea>

        <button type="submit">Registrar Compra</button>
      </form>
    </>
  );
}


export default RegistroCompras;
