/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rest from './api'; // Ajuste o caminho conforme necessário
import '../registro_compras.css';

const RegistroComprasAdmin = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    tripCode: '',
    employeeId: '',
    purchaseDate: '',
    location: '',
    expenseType: '',
    receipt: null,
    description: ''
  });

  const addItem = () => {
    setItems([...items, { name: '', quantity: '' }]);
  };

  const handleItemChange = (index, event) => {
    const newItems = [...items];
    newItems[index][event.target.name] = event.target.value;
    setItems(newItems);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    setFormData(prevState => ({
      ...prevState,
      receipt: event.target.files[0]
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Preparar os dados para envio
    const data = new FormData();
    data.append('tripCode', formData.tripCode);
    data.append('employeeId', formData.employeeId);
    data.append('purchaseDate', formData.purchaseDate);
    data.append('location', formData.location);
    data.append('expenseType', formData.expenseType);
    data.append('receipt', formData.receipt);
    data.append('description', formData.description);

    // Adiciona itens ao FormData
    items.forEach((item, index) => {
      data.append(`items[${index}][name]`, item.name);
      data.append(`items[${index}][quantity]`, item.quantity);
    });

    try {
      await rest.post('/registerCompra', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Compra registrada com sucesso!');
      // Limpar o formulário após o envio
      setFormData({
        tripCode: '',
        employeeId: '',
        purchaseDate: '',
        location: '',
        expenseType: '',
        receipt: null,
        description: ''
      });
      setItems([]);
    } catch (error) {
      console.error('Erro ao registrar compra:', error);
      alert('Ocorreu um erro ao registrar a compra.');
    }
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
        <label htmlFor="tripCode">Código da Viagem:</label>
        <input
          type="text"
          id="tripCode"
          name="tripCode"
          value={formData.tripCode}
          onChange={handleChange}
          required
        />

        <label htmlFor="employeeId">ID do Funcionário:</label>
        <input
          type="text"
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />

        <label htmlFor="purchaseDate">Data da Compra:</label>
        <input
          type="date"
          id="purchaseDate"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="location">Local (automático):</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          readOnly
        />

        <label htmlFor="expenseType">Tipo de Despesa:</label>
        <select
          id="expenseType"
          name="expenseType"
          value={formData.expenseType}
          onChange={handleChange}
          required
        >
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
        <input
          type="file"
          id="receipt"
          name="receipt"
          accept="image/png, application/pdf"
          onChange={handleFileChange}
          required
        />

        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Registrar Compra</button>
      </form>
    </div>
  );
};

export default RegistroComprasAdmin;
