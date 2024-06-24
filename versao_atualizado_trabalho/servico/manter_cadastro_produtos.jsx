import React from 'react';
import './Style.css';

function ManterCadastroProduto() {
  return (
    <div className="container">
      <h1>Manter Cadastro de Produto</h1>
      <form className="form">
        <label htmlFor="tipo-produto">Tipo de Produto</label>
        <select id="tipo-produto" name="tipo-produto">
          <option value="vestuario">Vestuário</option>
          <option value="cosmetico">Cosmético</option>
        </select>


        <label htmlFor="codigo-produto">Código do Produto</label>
        <input type="text" id="codigo-produto" name="codigo-produto" />

        <label htmlFor="nome-produto">Nome do Produto</label>
        <input type="text" id="nome-produto" name="nome-produto" />

        <label htmlFor="marca-produto">Marca do Produto</label>
        <input type="text" id="marca-produto" name="marca-produto" />

        <label htmlFor="quantidade-produto">Quantidade do Produto</label>
        <input type="number" id="quantidade-produto" name="quantidade-produto" />

        <label htmlFor="preco-produto">Preço do Produto</label>
        <input type="number" step="0.01" id="preco-produto" name="preco-produto" />

        <label htmlFor="data-compra">Data da Compra</label>
        <input type="date" id="data-compra" name="data-compra" />

        <label htmlFor="lugar-compra">Lugar da Compra</label>
        <input type="text" id="lugar-compra" name="lugar-compra" />

        <div className="buttons">
          <button type="button" className="cancel-button">Cancelar</button>
          <button type="submit" className="save-button">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default ManterCadastroProduto;
