/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rest from './api';
import '../historico_viagens.css';

const HistoricoViagens = ({ userEmail }) => {
  const [tripHistory, setTripHistory] = useState([]);

  useEffect(() => {
    const fetchTripHistory = async () => {
      if (!userEmail) {
        console.warn('Nenhum email de usuário fornecido');
        return;
      }

      try {
        const response = await rest.get(`/listViagemByUser/${userEmail}`);
        console.log('Dados recebidos da API:', response.data); // Adicionado para depuração
        setTripHistory(response.data.trips || []);
      } catch (error) {
        console.error('Erro ao buscar histórico de viagens:', error);
      }
    };

    fetchTripHistory();
  }, [userEmail]);

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
        <nav>
          <ul className="menu-items">
            <li><Link to="/cadastrarDespesas">Cadastrar despesas</Link></li>
            <li><Link to="/visualizarHistoricoCompras">Histórico de Compras de Viagem</Link></li>
            <li><Link to="/dashboard">Voltar ao Dashboard</Link></li>
            <li><Link to="/ajuda">Ajuda</Link></li>
          </ul>
        </nav>
      </header>
      <h1>Histórico de Viagens</h1>
      <table id="trip-history">
        <thead>
          <tr>
            <th>Código da Viagem</th>
            <th>Email do Funcionário</th>
            <th>Destino</th>
            <th>Data de Início</th>
            <th>Data de Fim</th>
            <th>Propósito</th>
          </tr>
        </thead>
        <tbody>
          {tripHistory.length > 0 ? (
            tripHistory.map((trip, index) => (
              <tr key={index}>
                <td>{trip.idViagem}</td>
                <td>{trip.email}</td>
                <td>{trip.cidade}</td>
                <td>{trip.dataDeIda}</td>
                <td>{trip.dataDeVolta}</td>
                <td>{trip.objetivo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhuma viagem encontrada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoViagens;
