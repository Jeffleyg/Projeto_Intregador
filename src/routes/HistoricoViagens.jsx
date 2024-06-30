import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../historico_viagens.css';

const HistoricoViagens = () => {
  // Exemplo de estado inicial com histórico de viagens
  const [tripHistory, setTripHistory] = useState([
    {
      tripCode: '001',
      employeeId: '123',
      destination: 'São Paulo',
      startDate: '2024-06-01',
      endDate: '2024-06-10',
      purpose: 'Reunião de Negócios'
    },
    {
      tripCode: '002',
      employeeId: '124',
      destination: 'Rio de Janeiro',
      startDate: '2024-06-15',
      endDate: '2024-06-20',
      purpose: 'Conferência'
    }
  ]);

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
    <h1 className="is">Histórico de Viagens</h1>
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
              <td>{trip.tripCode}</td>
              <td>{trip.employeeId}</td>
              <td>{trip.destination}</td>
              <td>{trip.startDate}</td>
              <td>{trip.endDate}</td>
              <td>{trip.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoViagens;
