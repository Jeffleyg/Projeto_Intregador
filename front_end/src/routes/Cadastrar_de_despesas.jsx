import React, { useState } from 'react';
import $ from 'jquery';
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
    notaFiscal: null,
    tipoHospedagem: '',
    especificarOutroHospedagem: '',
    preferenciaEstadia: '',
    especificarOutroEstadia: '',
    meioTransporte: '',
    especificarOutroTransporte: '',
    cafeManha: false,
    almoco: false,
    jantar: false,
    lanches: false,
    todos: false
  });

  const handleTipoDespesaChange = (event) => {
    const tipo = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      tipoDespesa: tipo
    }));
    $('.opcoes').hide();
    $(`#opcoes_${tipo}`).show();
  };

  const handleMeioTransporteChange = (event) => {
    const meio = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      meioTransporte: meio
    }));
    if (meio === 'outro') {
      $('#especificar_outro_transporte').show();
    } else {
      $('#especificar_outro_transporte').hide();
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
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
        notaFiscal: null,
        tipoHospedagem: '',
        especificarOutroHospedagem: '',
        preferenciaEstadia: '',
        especificarOutroEstadia: '',
        meioTransporte: '',
        especificarOutroTransporte: '',
        cafeManha: false,
        almoco: false,
        jantar: false,
        lanches: false,
        todos: false
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
            <li><a href="#">visualizacao_historico_despesas</a></li>
            <li><a href="/homeAdmin">Home</a></li>
            <li><a href="/ajudaAdmin">Ajuda</a></li>
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
            <option value="">Selecione...</option>
            <option value="alimentacao">Alimentação</option>
            <option value="transporte">Transporte</option>
            <option value="hospedagem">Hospedagem</option>
          </select><br />

          <label htmlFor="valor_pago">Valor pago:</label>
          <input type="number" id="valor_pago" name="valor" value={formData.valor} step="0.01" onChange={handleChange} required /><br />

          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} required></textarea><br />

          <label htmlFor="nota_fiscal">Nota fiscal/recibo (PDF/PNG):</label>
          <input type="file" id="nota_fiscal" name="notaFiscal" onChange={handleChange} accept=".pdf,.png" required /><br />

          <div id="opcoes_alimentacao" className="opcoes" style={{ display: formData.tipoDespesa === 'alimentacao' ? 'block' : 'none' }}>
            <h3>Indique suas preferências quanto às refeições durante a viagem:</h3>
            <input type="checkbox" id="cafe_manha" name="cafeManha" checked={formData.cafeManha} onChange={handleChange} />
            <label htmlFor="cafe_manha">Café da Manhã</label><br />

            <input type="checkbox" id="almoco" name="almoco" checked={formData.almoco} onChange={handleChange} />
            <label htmlFor="almoco">Almoço</label><br />

            <input type="checkbox" id="jantar" name="jantar" checked={formData.jantar} onChange={handleChange} />
            <label htmlFor="jantar">Jantar</label><br />

            <input type="checkbox" id="lanches" name="lanches" checked={formData.lanches} onChange={handleChange} />
            <label htmlFor="lanches">Lanches</label><br />

            <input type="checkbox" id="todos" name="todos" checked={formData.todos} onChange={handleChange} />
            <label htmlFor="todos">Todos</label><br />
          </div>

          <div id="opcoes_hospedagem" className="opcoes" style={{ display: formData.tipoDespesa === 'hospedagem' ? 'block' : 'none' }}>
            <h3>Por favor, selecione o tipo de hospedagem que você prefere durante a viagem:</h3>
            <input type="radio" id="hotel" name="tipoHospedagem" value="hotel" checked={formData.tipoHospedagem === 'hotel'} onChange={handleChange} />
            <label htmlFor="hotel">Hotel</label><br />

            <input type="radio" id="pousada" name="tipoHospedagem" value="pousada" checked={formData.tipoHospedagem === 'pousada'} onChange={handleChange} />
            <label htmlFor="pousada">Pousada</label><br />

            <input type="radio" id="hostel" name="tipoHospedagem" value="hostel" checked={formData.tipoHospedagem === 'hostel'} onChange={handleChange} />
            <label htmlFor="hostel">Hostel</label><br />

            <input type="radio" id="outro" name="tipoHospedagem" value="outro" checked={formData.tipoHospedagem === 'outro'} onChange={handleChange} />
            <label htmlFor="outro">Outro</label><br />

            <input type="text" id="especificar_outro_hospedagem" name="especificarOutroHospedagem" placeholder="Especificar outro tipo" style={{ display: formData.tipoHospedagem === 'outro' ? 'block' : 'none' }} value={formData.especificarOutroHospedagem} onChange={handleChange} /><br />
          </div>

          <div id="opcoes_transporte" className="opcoes" style={{ display: formData.tipoDespesa === 'transporte' ? 'block' : 'none' }}>
            <h3>Por favor, selecione o meio de transporte utilizado:</h3>
            <input type="radio" id="onibus" name="meioTransporte" value="onibus" checked={formData.meioTransporte === 'onibus'} onChange={handleMeioTransporteChange} />
            <label htmlFor="onibus">Ônibus</label><br />

            <input type="radio" id="trem" name="meioTransporte" value="trem" checked={formData.meioTransporte === 'trem'} onChange={handleMeioTransporteChange} />
            <label htmlFor="trem">Trem</label><br />

            <input type="radio" id="aviao" name="meioTransporte" value="aviao" checked={formData.meioTransporte === 'aviao'} onChange={handleMeioTransporteChange} />
            <label htmlFor="aviao">Avião</label><br />

            <input type="radio" id="outro" name="meioTransporte" value="outro" checked={formData.meioTransporte === 'outro'} onChange={handleMeioTransporteChange} />
            <label htmlFor="outro">Outro</label><br />

            <input type="text" id="especificar_outro_transporte" name="especificarOutroTransporte" placeholder="Especificar outro meio de transporte" style={{ display: formData.meioTransporte === 'outro' ? 'block' : 'none' }} value={formData.especificarOutroTransporte} onChange={handleChange} /><br />
          </div>

          <button type="submit">Cadastrar Despesa</button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarDespesas;
