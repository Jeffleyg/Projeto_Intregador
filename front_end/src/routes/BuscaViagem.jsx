import React, { useState } from 'react';
import '../buscaViagem.css';

const BuscaViagem = ({ onSearch }) => {
    const [searchType, setSearchType] = useState('date');
    const [searchValue, setSearchValue] = useState('');

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
    };

    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        onSearch({ type: searchType, value: searchValue });
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

export default BuscaViagem;
