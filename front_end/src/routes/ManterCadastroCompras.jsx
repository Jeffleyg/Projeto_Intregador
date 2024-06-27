import React, { useState } from 'react';
import '../manterCadastroCompras.css';

const ManterCadastroCompras = () => {
    // State para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        tipoProduto: '',
        codigo: '',
        nomeProduto: '',
        marcaProduto: '',
        quantidadeProduto: '',
        precoProduto: '',
        dataCompra: '',
        lugarCompra: ''
    });

    // Função para lidar com a mudança nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode lidar com o envio dos dados, por exemplo, enviar para um backend
        console.log(formData);
        // Resetar o estado do formulário depois do envio, se necessário
        setFormData({
            tipoProduto: '',
            codigo: '',
            nomeProduto: '',
            marcaProduto: '',
            quantidadeProduto: '',
            precoProduto: '',
            dataCompra: '',
            lugarCompra: ''
        });
    };

    return (
        <div className="cadastro-compras">
            <h2>Cadastro de Compras</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="tipoProduto">Tipo de Produto:</label>
                    <select id="tipoProduto" name="tipoProduto" value={formData.tipoProduto} onChange={handleChange} required>
                        <option value="">Selecione...</option>
                        <option value="vestuario">Vestuário</option>
                        <option value="cosmetico">Cosmético</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" name="codigo" value={formData.codigo} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="nomeProduto">Nome do Produto:</label>
                    <input type="text" id="nomeProduto" name="nomeProduto" value={formData.nomeProduto} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="marcaProduto">Marca do Produto:</label>
                    <input type="text" id="marcaProduto" name="marcaProduto" value={formData.marcaProduto} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantidadeProduto">Quantidade:</label>
                    <input type="number" id="quantidadeProduto" name="quantidadeProduto" value={formData.quantidadeProduto} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="precoProduto">Preço:</label>
                    <input type="number" id="precoProduto" name="precoProduto" value={formData.precoProduto} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dataCompra">Data da Compra:</label>
                    <input type="date" id="dataCompra" name="dataCompra" value={formData.dataCompra} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lugarCompra">Lugar da Compra:</label>
                    <input type="text" id="lugarCompra" name="lugarCompra" value={formData.lugarCompra} onChange={handleChange} required />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default ManterCadastroCompras;
