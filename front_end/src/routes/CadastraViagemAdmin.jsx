import React, { useState } from 'react';
import '../cadastraViagem.css';
import rest from './api'; // Ajuste o caminho conforme necessário

const CadastraViagem = () => {
    const [formData, setFormData] = useState({
        idViagem: '',
        dataDeIda: '',
        dataDeVolta: '',
        cidade: '',
        objetivo: '',
        descricao: '',
        emailUsuario: '',
        emailAdmin: ''
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
            const response = await rest.post('/registerViagem', formData);
            console.log('Viagem cadastrada:', response.data);
            alert('Viagem cadastrada com sucesso! Um email será enviado para notificação.');
            setFormData({
                idViagem: '',
                dataDeIda: '',
                dataDeVolta: '',
                cidade: '',
                objetivo: '',
                descricao: '',
                emailUsuario: '',
                emailAdmin: ''
            });
        } catch (error) {
            console.error('Erro ao cadastrar viagem:', error);
            if (error.response) {
                console.error('Dados do erro:', error.response.data);
                console.error('Status do erro:', error.response.status);
                console.error('Cabeçalhos do erro:', error.response.headers);
            }
            alert('Falha ao cadastrar a viagem. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div className="cadastra-viagem">
            <h2>Cadastro de Viagem</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="idViagem">ID da Viagem:</label>
                    <input type="text" id="idViagem" name="idViagem" value={formData.idViagem} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dataDeIda">Data da Viagem:</label>
                    <input type="date" id="dataDeIda" name="dataDeIda" value={formData.dataDeIda} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="dataDeVolta">Data de Volta da Viagem:</label>
                    <input type="date" id="dataDeVolta" name="dataDeVolta" value={formData.dataDeVolta} onChange={handleChange} required />
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
                <div className="form-group">
                    <label htmlFor="emailUsuario">Email do Usuário:</label>
                    <input type="email" id="emailUsuario" name="emailUsuario" value={formData.emailUsuario} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="emailAdmin">Email do Admin:</label>
                    <input type="email" id="emailAdmin" name="emailAdmin" value={formData.emailAdmin} onChange={handleChange} required />
                </div>
                <button type="submit">Cadastrar Viagem</button>
            </form>
        </div>
    );
};

export default CadastraViagem;
