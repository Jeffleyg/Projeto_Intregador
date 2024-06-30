import React, { useState } from 'react';
import $ from 'jquery';
import rest from './api'; // Ajuste o caminho conforme necessário
import '../cadastrar_de_despesas.css';

const CadastrarDespesasAdmin = () => {
  const [formData, setFormData] = useState({
    codigoViagem: '',
    idFuncionario: '',
    dataNota: '',
    cidadeNota: '',
    tipoDespesa: '',
    valorPago: '',
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
        codigoViagem: '',
        idFuncionario: '',
        dataNota: '',
        cidadeNota: '',
        tipoDespesa: '',
        valorPago: '',
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
          <label htmlFor="codigo_viagem">Código da viagem:</label>
          <input type="text" id="codigo_viagem" name="codigoViagem" value={formData.codigoViagem} onChange={handleChange} required /><br />

          <label htmlFor="id_funcionario">ID do funcionário:</label>
          <input type="text" id="id_funcionario" name="idFuncionario" value={formData.idFuncionario} onChange={handleChange} required /><br />

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
          <input type="number" id="valor_pago" name="valorPago" value={formData.valorPago} step="0.01" onChange={handleChange} required /><br />

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

            <input type="radio" id="airbnb" name="tipoHospedagem" value="airbnb" checked={formData.tipoHospedagem === 'airbnb'} onChange={handleChange} />
            <label htmlFor="airbnb">Airbnb / Aluguel de Casa</label><br />

            <input type="radio" id="acampamento" name="tipoHospedagem" value="acampamento" checked={formData.tipoHospedagem === 'acampamento'} onChange={handleChange} />
            <label htmlFor="acampamento">Acampamento</label><br />

            <input type="radio" id="outro_hospedagem" name="tipoHospedagem" value="outro" checked={formData.tipoHospedagem === 'outro'} onChange={handleChange} />
            <label htmlFor="outro_hospedagem">Outro (Especifique):</label>
            <input type="text" id="especificar_outro_hospedagem" name="especificarOutroHospedagem" value={formData.especificarOutroHospedagem} onChange={handleChange} /><br />
          </div>

          <div id="preferencia_estadia" className="opcoes" style={{ display: formData.tipoDespesa === 'hospedagem' ? 'block' : 'none' }}>
            <h3>Indique sua preferência de estadia durante a viagem:</h3>
            <input type="radio" id="curta_estadia" name="preferenciaEstadia" value="curta" checked={formData.preferenciaEstadia === 'curta'} onChange={handleChange} />
            <label htmlFor="curta_estadia">Curta estadia (1-3 noites)</label><br />

            <input type="radio" id="media_estadia" name="preferenciaEstadia" value="media" checked={formData.preferenciaEstadia === 'media'} onChange={handleChange} />
            <label htmlFor="media_estadia">Estadia média (4-7 noites)</label><br />

            <input type="radio" id="longa_estadia" name="preferenciaEstadia" value="longa" checked={formData.preferenciaEstadia === 'longa'} onChange={handleChange} />
            <label htmlFor="longa_estadia">Estadia longa (mais de 7 noites)</label><br />

            <input type="radio" id="outro_estadia" name="preferenciaEstadia" value="outro" checked={formData.preferenciaEstadia === 'outro'} onChange={handleChange} />
            <label htmlFor="outro_estadia">Outro (Especifique):</label>
            <input type="text" id="especificar_outro_estadia" name="especificarOutroEstadia" value={formData.especificarOutroEstadia} onChange={handleChange} /><br />
          </div>

          <div id="opcoes_transporte" className="opcoes" style={{ display: formData.tipoDespesa === 'transporte' ? 'block' : 'none' }}>
            <h3>Por favor, selecione o meio de transporte que você prefere durante a viagem:</h3>
            <input type="radio" id="aviao" name="meioTransporte" value="aviao" checked={formData.meioTransporte === 'aviao'} onChange={handleMeioTransporteChange} />
            <label htmlFor="aviao">Avião</label><br />

            <input type="radio" id="trem" name="meioTransporte" value="trem" checked={formData.meioTransporte === 'trem'} onChange={handleMeioTransporteChange} />
            <label htmlFor="trem">Trem</label><br />

            <input type="radio" id="onibus" name="meioTransporte" value="onibus" checked={formData.meioTransporte === 'onibus'} onChange={handleMeioTransporteChange} />
            <label htmlFor="onibus">Ônibus</label><br />

            <input type="radio" id="carro_alugado" name="meioTransporte" value="carro_alugado" checked={formData.meioTransporte === 'carro_alugado'} onChange={handleMeioTransporteChange} />
            <label htmlFor="carro_alugado">Carro alugado</label><br />

            <input type="radio" id="taxi_uber_lyft" name="meioTransporte" value="taxi_uber_lyft" checked={formData.meioTransporte === 'taxi_uber_lyft'} onChange={handleMeioTransporteChange} />
            <label htmlFor="taxi_uber_lyft">Táxi / Uber / Lyft</label><br />

            <input type="radio" id="caminhar" name="meioTransporte" value="caminhar" checked={formData.meioTransporte === 'caminhar'} onChange={handleMeioTransporteChange} />
            <label htmlFor="caminhar">Caminhar</label><br />

            <input type="radio" id="bicicleta" name="meioTransporte" value="bicicleta" checked={formData.meioTransporte === 'bicicleta'} onChange={handleMeioTransporteChange} />
            <label htmlFor="bicicleta">Bicicleta</label><br />

            <input type="radio" id="outro_transporte" name="meioTransporte" value="outro" checked={formData.meioTransporte === 'outro'} onChange={handleMeioTransporteChange} />
            <label htmlFor="outro_transporte">Outro (Especifique):</label>
            <input type="text" id="especificar_outro_transporte" name="especificarOutroTransporte" value={formData.especificarOutroTransporte} onChange={handleChange} style={{ display: formData.meioTransporte === 'outro' ? 'block' : 'none' }} /><br />
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarDespesasAdmin;
