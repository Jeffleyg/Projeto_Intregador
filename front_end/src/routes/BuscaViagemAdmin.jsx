import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rest from './api';  // Importa o módulo do axios que você configurou
import '../buscaViagem.css';

const BuscaViagemAdmin = () => {
    const [searchType, setSearchType] = useState('date');
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = async () => {
        try {
            console.log('Enviando requisição para busca de viagens...');
            const response = await rest.get('/searchViagem', { // Corrigido o caminho para incluir '/'
                params: {
                    type: searchType,
                    value: searchValue
                }
            });
            console.log('Resposta recebida:', response.data);
            // Navegar para a página de exibição de viagens com os dados da busca
            navigate('/viagemAdmin', { state: { viagens: response.data } });
        } catch (error) {
            console.error('Erro ao buscar viagens:', error);
            if (error.response) {
                console.error('Erro de resposta:', error.response.data);
                console.error('Status do erro:', error.response.status);
            } else {
                console.error('Erro sem resposta:', error.message);
            }
        }
    };

    return (
        <div className="busca-viagem">
            <h2>Buscar Viagens</h2>
            <div className="search-options">
                <label>
                    <input type="radio" name="searchType" value="date" checked={searchType === 'date'} onChange={handleSearchTypeChange} />
                    Por Data
                </label>
                <label>
                    <input type="radio" name="searchType" value="location" checked={searchType === 'location'} onChange={handleSearchTypeChange} />
                    Por Local
                </label>
            </div>
            <div className="search-input">
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleSearchInputChange}
                    placeholder={searchType === 'date' ? 'Digite a data (YYYY-MM-DD)' : 'Digite o local'}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </div>
    );
};

export default BuscaViagemAdmin;
