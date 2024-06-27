import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../registro_compras.css';

const RegistroCompras = () => {
  const [items, setItems] = useState([]);
  
  const addItem = () => {
    setItems([...items, { name: '', quantity: '' }]);
  };

  const handleItemChange = (index, event) => {
    const newItems = [...items];
    newItems[index][event.target.name] = event.target.value;
    setItems(newItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
        <div className="menu">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="menu-items">
            <li><Link to="/cadastrarDespesas">Cadastrar despesas</Link></li>
            <li><Link to="/visualizarHistoricoViagem">Histórico de Compras de Viagem</Link></li>
            <li><Link to="/dashboard">Voltar ao Dashboard</Link></li>
            <li><Link to="/ajuda">Ajuda</Link></li>
          </ul>
        </div>
      </header>
      <h1>Registro de Compras de Viagem</h1>
      <form id="purchase-form" onSubmit={handleSubmit}>
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
          {items.map((item, index) => (
            <div key={index}>
              <input
                type="text"
                name="name"
                placeholder="Nome do item"
                value={item.name}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantidade"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, e)}
                required
              />
            </div>
          ))}
        </div>

        <label htmlFor="receipt">Recibo (PDF ou PNG):</label>
        <input type="file" id="receipt" name="receipt" accept="image/png, application/pdf" required />

        <label htmlFor="description">Descrição:</label>
        <textarea id="description" name="description" required></textarea>

        <button type="submit">Registrar Compra</button>
      </form>
    </div>
  );
};

export default RegistroCompras;
