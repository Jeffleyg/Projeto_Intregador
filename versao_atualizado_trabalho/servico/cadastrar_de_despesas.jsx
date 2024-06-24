import React from 'react';
import './Style.css';

function CadastrarDeDespesas() {
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
            <li><a href="#">visualizacao_historico_despesas</a></li>
            <li><a href="dashboard.html">Voltar ao Dashboard</a></li>
            <li><a href="ajuda.html">Ajuda</a></li>
          </ul>
        </div>
      </header>
      <div className="container">
        <h1>Cadastrar despesas da viagem</h1>
        <form>
          <label htmlFor="codigo_viagem">Código da viagem:</label>
          <input type="text" id="codigo_viagem" name="codigo_viagem" required /><br />
          
          <label htmlFor="id_funcionario">ID do funcionário:</label>
          <input type="text" id="id_funcionario" name="id_funcionario" required /><br />
          
          <label htmlFor="data_nota">Data da nota fiscal/recibo:</label>
          <input type="date" id="data_nota" name="data_nota" required /><br />
          
          <label htmlFor="cidade_nota">Cidade da nota fiscal/recibo:</label>
          <input type="text" id="cidade_nota" name="cidade_nota" required /><br />
          
          <label htmlFor="tipo_despesa">Tipo de despesa:</label>
          <select id="tipo_despesa" name="tipo_despesa" required>
            <option value="">Selecione...</option>
            <option value="alimentacao">Alimentação</option>
            <option value="transporte">Transporte</option>
            <option value="hospedagem">Hospedagem</option>
          </select><br />
          
          <label htmlFor="valor_pago">Valor pago:</label>
          <input type="number" id="valor_pago" name="valor_pago" step="0.01" required /><br />
          
          <label htmlFor="descricao">Descrição:</label>
          <textarea id="descricao" name="descricao" required></textarea><br />
          
          <label htmlFor="nota_fiscal">Nota fiscal/recibo (PDF/PNG):</label>
          <input type="file" id="nota_fiscal" name="nota_fiscal" accept=".pdf,.png" required /><br />

          {/* Opções de Alimentação */}
          <div id="opcoes_alimentacao" className="opcoes" style={{ display: 'none' }}>
            <h3>Indique suas preferências quanto às refeições durante a viagem:</h3>
            <input type="checkbox" id="cafe_manha" name="cafe_manha" />
            <label htmlFor="cafe_manha">Café da Manhã</label><br />
            
            <input type="checkbox" id="almoco" name="almoco" />
            <label htmlFor="almoco">Almoço</label><br />
            
            <input type="checkbox" id="jantar" name="jantar" />
            <label htmlFor="jantar">Jantar</label><br />
            
            <input type="checkbox" id="lanches" name="lanches" />
            <label htmlFor="lanches">Lanches</label><br />
            
            <input type="checkbox" id="todos" name="todos" />
            <label htmlFor="todos">Todos</label><br />
          </div>
          
          {/* Opções de Hospedagem */}
          <div id="opcoes_hospedagem" className="opcoes" style={{ display: 'none' }}>
            <h3>Por favor, selecione o tipo de hospedagem que você prefere durante a viagem:</h3>
            <input type="radio" id="hotel" name="tipo_hospedagem" value="hotel" />
            <label htmlFor="hotel">Hotel</label><br />
            
            <input type="radio" id="pousada" name="tipo_hospedagem" value="pousada" />
            <label htmlFor="pousada">Pousada</label><br />
            
            <input type="radio" id="hostel" name="tipo_hospedagem" value="hostel" />
            <label htmlFor="hostel">Hostel</label><br />
            
            <input type="radio" id="airbnb" name="tipo_hospedagem" value="airbnb" />
            <label htmlFor="airbnb">Airbnb / Aluguel de Casa</label><br />
            
            <input type="radio" id="acampamento" name="tipo_hospedagem" value="acampamento" />
            <label htmlFor="acampamento">Acampamento</label><br />
            
            <input type="radio" id="outro_hospedagem" name="tipo_hospedagem" value="outro" />
            <label htmlFor="outro_hospedagem">Outro (Especifique):</label>
            <input type="text" id="especificar_outro_hospedagem" name="especificar_outro_hospedagem" /><br />
            
          </div>
          
          {/* Preferência de Estadia */}
          <div id="preferencia_estadia" className="opcoes" style={{ display: 'none' }}>
            <h3>Indique sua preferência de estadia durante a viagem:</h3>
            <input type="radio" id="curta_estadia" name="preferencia_estadia" value="curta" />
            <label htmlFor="curta_estadia">Curta estadia (1-3 noites)</label><br />
            
            <input type="radio" id="media_estadia" name="preferencia_estadia" value="media" />
            <label htmlFor="media_estadia">Estadia média (4-7 noites)</label><br />
            
            <input type="radio" id="longa_estadia" name="preferencia_estadia" value="longa" />
            <label htmlFor="longa_estadia">Estadia longa (mais de 7 noites)</label><br />
            
            <input type="radio" id="outro_estadia" name="preferencia_estadia" value="outro" />
            <label htmlFor="outro_estadia">Outro (Especifique):</label>
            <input type="text" id="especificar_outro_estadia" name="especificar_outro_estadia" /><br />
          </div>
          
          {/* Meio de Transporte Preferido */}
          <div id="opcoes_transporte" className="opcoes" style={{ display: 'none' }}>
            <h3>Por favor, selecione o meio de transporte que você prefere durante a viagem:</h3>
            <input type="radio" id="aviao" name="meio_transporte" value="aviao" />
            <label htmlFor="aviao">Avião</label><br />
            
            <input type="radio" id="trem" name="meio_transporte" value="trem" />
            <label htmlFor="trem">Trem</label><br />
            
            <input type="radio" id="onibus" name="meio_transporte" value="onibus" />
            <label htmlFor="onibus">Ônibus</label><br />
            
            <input type="radio" id="carro_alugado" name="meio_transporte" value="carro_alugado" />
            <label htmlFor="carro_alugado">Carro alugado</label><br />
            
            <input type="radio" id="taxi_uber_lyft" name="meio_transporte" value="taxi_uber_lyft" />
            <label htmlFor="taxi_uber_lyft">Táxi / Uber / Lyft</label><br />
            
            <input type="radio" id="caminhar" name="meio_transporte" value="caminhar" />
            <label htmlFor="caminhar">Caminhar</label><br />
            
            <input type="radio" id="bicicleta" name="meio_transporte" value="bicicleta" />
            <label htmlFor="bicicleta">Bicicleta</label><br />
            
            <input type="radio" id="outro_transporte" name="meio_transporte" value="outro" />
            <label htmlFor="outro_transporte">Outro (Especifique):</label>
            <input type="text" id="especificar_outro_transporte" name="especificar_outro_transporte" /><br />
          </div>
          
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </>
  );
}

export default CadastrarDeDespesas;
