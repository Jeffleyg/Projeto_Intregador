import React, { useState } from 'react';
import rest from './api'; // Ajuste o caminho conforme necessário
import '../cadastrar_de_despesas.css';

const CadastrarDespesas = () => {
  const [formData, setFormData] = useState({
    idViagem: '',
    emailFuncionario: '',
    dataNota: '',
    cidadeNota: '',
    tipoDespesa: '',
    valor: '',
    descricao: '',
    notaFiscal: null
  });

  const handleTipoDespesaChange = (event) => {
    const tipo = event.target.value;
    setFormData(prevState => ({
      ...prevState,
      tipoDespesa: tipo
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await rest.post('/registerDespesa', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Despesa cadastrada:', response.data);
      alert('Despesa cadastrada com sucesso!');
      // Resetar o estado do formulário depois do envio
      setFormData({
        idViagem: '',
        emailFuncionario: '',
        dataNota: '',
        cidadeNota: '',
        tipoDespesa: '',
        valor: '',
        descricao: '',
        notaFiscal: null
      });
    } catch (error) {
      console.error('Erro ao cadastrar despesa:', error);
      alert('Falha ao cadastrar a despesa. Por favor, tente novamente mais tarde.');
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
            <li><a href="/historicoDespesas"> Histórico Despesas</a></li>
            <li><a href="/home">Home</a></li>
            <li><a href="/ajuda">Ajuda</a></li>
          </ul>
        </div>
      </header>
      <div className="container">
        <h1>Cadastrar despesas da viagem</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id_viagem">Código da viagem:</label>
          <input type="text" id="id_viagem" name="idViagem" value={formData.idViagem} onChange={handleChange} required /><br />

          <label htmlFor="email_funcionario">Email do funcionário:</label>
          <input type="email" id="email_funcionario" name="emailFuncionario" value={formData.emailFuncionario} onChange={handleChange} required /><br />

          <label htmlFor="data_nota">Data da nota fiscal/recibo:</label>
          <input type="date" id="data_nota" name="dataNota" value={formData.dataNota} onChange={handleChange} required /><br />

          <label htmlFor="cidade_nota">Cidade da nota fiscal/recibo:</label>
          <input type="text" id="cidade_nota" name="cidadeNota" value={formData.cidadeNota} onChange={handleChange} required /><br />

          <label htmlFor="tipo_despesa">Tipo de despesa:</label>
          <select id="tipo_despesa" name="tipoDespesa" value={formData.tipoDespesa} onChange={handleTipoDespesaChange} required>
            <option value="">Selecione</option>
            <option value="transporte">Transporte</option>
            <option value="alimentacao">Alimentação</option>
            <option value="hospedagem">Hospedagem</option>
            {/* Adicione mais opções conforme necessário */}
          </select><br />

          <label htmlFor="valor_pago">Valor pago:</label>
          <input type="number" id="valor_pago" name="valor" value={formData.valor} step="0.01" onChange={handleChange} required /><br />

          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} required></textarea><br />

          <label htmlFor="nota_fiscal">Nota Fiscal:</label>
          <input type="file" id="nota_fiscal" name="notaFiscal" onChange={handleChange} required /><br />

          <button type="submit">Cadastrar Despesa</button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarDespesas;
