import React, { useState } from 'react';
import '../cadastraViagem.css';
import rest from './api'; // Ajuste o caminho conforme necessário

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar os dados para a API
            const response = await rest.post('/registerViagem', formData);
            console.log('Viagem cadastrada:', response.data);
            alert('Viagem cadastrada com sucesso! Um email será enviado para notificação.');
            // Resetar o estado do formulário depois do envio
            setFormData({
                idFuncionario: '',
                dataViagem: '',
                dataVoltaViagem: '',
                cidade: '',
                objetivo: '',
                descricao: ''
            });
        } catch (error) {
            console.error('Erro ao cadastrar viagem:', error);
            alert('Falha ao cadastrar a viagem. Por favor, tente novamente mais tarde.');
        }
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