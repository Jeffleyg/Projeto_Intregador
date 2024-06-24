import React from 'react';
import './Style.css';

function CadastrarViagem() {
  return (
    <div className="container">
      <h1>Cadastrar viagem</h1>
      <form className="form">
        <label htmlFor="id-funcionario">ID Funcionário</label>
        <input type="text" id="id-funcionario" name="id-funcionario" />

        <div className="form-group">
          <label htmlFor="data-ida">Data Ida</label>
          <input type="date" id="data-ida" name="data-ida" />
          <label htmlFor="data-volta">Data de volta</label>
          <input type="date" id="data-volta" name="data-volta" />
        </div>

        <label htmlFor="cidade">Cidade</label>
        <input type="text" id="cidade" name="cidade" />

        <label htmlFor="objetivo">Objetivo</label>
        <input type="text" id="objetivo" name="objetivo" />

        <label htmlFor="descricao">Descrição</label>
        <textarea id="descricao" name="descricao"></textarea>

        <div className="buttons">
          <button type="button" className="cancel-button">Cancelar</button>
          <button type="submit" className="save-button">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarViagem;
