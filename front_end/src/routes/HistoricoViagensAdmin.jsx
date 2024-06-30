import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rest from './api';
import '../historico_viagens.css';

const HistoricoViagensAdmin = () => {
  const [tripHistory, setTripHistory] = useState([]);

  useEffect(() => {
    const fetchTripHistory = async () => {
      try {
        const response = await rest.get('/listViagensByUser');
        setTripHistory(response.data.trips); // Certifique-se de que 'trips' é o campo que a API retorna
      } catch (error) {
        console.error('Erro ao buscar histórico de viagens:', error);
      }
    };

    fetchTripHistory();
  }, []);

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
      </header>
      <h1>Histórico de Viagens</h1>
      <table id="trip-history">
        <thead>
          <tr>
            <th>Código da Viagem</th>
            <th>ID do Funcionário</th>
            <th>Destino</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
            <th>Propósito</th>
          </tr>
        </thead>
        <tbody>
          {tripHistory.map((trip, index) => (
            <tr key={index}>
              <td>{trip.id}</td>
              <td>{trip.idFuncionario}</td>
              <td>{trip.cidade}</td>
              <td>{trip.dataDeIda}</td>
              <td>{trip.dataDeVolta}</td>
              <td>{trip.objetivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoViagensAdmin;
