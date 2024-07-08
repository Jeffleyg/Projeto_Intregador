/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import rest from './api'; // Ajuste o caminho conforme necessário
import '../registro_compras.css';

const RegistroCompras = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    codigoViagem: '',
    email: '',
    dataCompra: '',
    local: '',
    tipoDespesa: '',
    valor: null,
    descricao: ''
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
      valor: event.target.files[0]
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Preparar os dados para envio
    const data = new FormData();
    data.append('codigoViagem', formData.codigoViagem);
    data.append('email', formData.email);
    data.append('dataCompra', formData.dataCompra);
    data.append('local', formData.local);
    data.append('tipoDespesa', formData.tipoDespesa);
    data.append('valor', formData.valor);
    data.append('descricao', formData.descricao);

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
        codigoViagem: '',
        email: '',
        dataCompra: '',
        local: '',
        tipoDespesa: '',
        valor: null,
        descricao: '',
        notaFiscal: null
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
        <label htmlFor="codigoViagem">Código da Viagem:</label>
        <input
          type="text"
          id="codigoViagem"
          name="codigoViagem"
          value={formData.codigoViagem}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">email do Funcionário:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="dataCompra">Data da Compra:</label>
        <input
          type="date"
          id="dataCompra"
          name="dataCompra"
          value={formData.dataCompra}
          onChange={handleChange}
          required
        />

        <label htmlFor="local">Local (automático):</label>
        <input
          type="text"
          id="local"
          name="local"
          value={formData.local}
          readOnly
        />

        <label htmlFor="tipoDespesa">Tipo de Despesa:</label>
        <select
          id="tipoDespesa"
          name="tipoDespesa"
          value={formData.tipoDespesa}
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

        <label htmlFor="valor">Recibo (PDF ou PNG):</label>
        <input
          type="file"
          id="valor"
          name="valor"
          accept="image/png, application/pdf"
          onChange={handleFileChange}
          required
        />

        <label htmlFor="descricao">Descrição:</label>
        <textarea
          id="descricao"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Registrar Compra</button>
      </form>
    </div>
  );
};

export default RegistroCompras;
