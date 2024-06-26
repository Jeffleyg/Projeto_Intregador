import React, { useState } from 'react';
import '../cadastraViagem.css';

const CadastraViagem = () => {
    // State para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        idFuncionario: '',
        dataViagem: '',
        dataVoltaViagem: '',
        cidade: '',
        objetivo: '',
        descricao: ''
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
        // Simulação de envio dos dados e notificação por email
        console.log(formData);
        alert(`Viagem cadastrada para o funcionário ${formData.idFuncionario}. Um email será enviado para notificação.`);
        // Resetar o estado do formulário depois do envio, se necessário
        setFormData({
            idFuncionario: '',
            dataViagem: '',
            dataVoltaViagem: '',
            cidade: '',
            objetivo: '',
            descricao: ''
        });
    };

    return (
        <div className="cadastra-viagem">
            <h2>Cadastro de Viagem</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="idFuncionario">ID do Funcionário:</label>
                    <input type="text" id="idFuncionario" name="idFuncionario" value={formData.idFuncionario} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dataViagem">Data da Viagem:</label>
                    <input type="date" id="dataViagem" name="dataViagem" value={formData.dataViagem} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dataVoltaViagem">Data de Volta da Viagem:</label>
                    <input type="date" id="dataVoltaViagem" name="dataVoltaViagem" value={formData.dataVoltaViagem} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="cidade">Cidade:</label>
                    <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="objetivo">Objetivo:</label>
                    <input type="text" id="objetivo" name="objetivo" value={formData.objetivo} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="descricao">Descrição da Viagem:</label>
                    <textarea id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} rows="4" required></textarea>
                </div>
                <button type="submit">Cadastrar Viagem</button>
            </form>
        </div>
    );
};

export default CadastraViagem;
