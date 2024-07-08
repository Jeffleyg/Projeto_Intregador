import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rest from './api';
import '../historico_viagens.css';

const HistoricoViagensAdmin = () => {
  const [tripHistory, setTripHistory] = useState([]);
  const [editingTrip, setEditingTrip] = useState(null);

  useEffect(() => {
    const fetchTripHistory = async () => {
      try {
        const response = await rest.get('/listViagem');
        setTripHistory(response.data.trips || []);
      } catch (error) {
        console.error('Erro ao buscar histórico de viagens:', error);
      }
    };

    fetchTripHistory();
  }, []);

  const handleUpdateTrip = async () => {
    if (!editingTrip) return;

    try {
      const response = await rest.put(`/updateViagem/${editingTrip.idViagem}`, {
        cidade: editingTrip.cidade,
        dataDeIda: editingTrip.dataDeIda,
        dataDeVolta: editingTrip.dataDeVolta,
        objetivo: editingTrip.objetivo,
        descricao: editingTrip.descricao, // Adicione descrição se necessário
        valor: editingTrip.valor // Adicione valor se necessário
      });
  
      setTripHistory(prevTrips =>
        prevTrips.map(trip => (trip.idViagem === editingTrip.idViagem ? response.data.trip : trip))
      );
      setEditingTrip(null);
    } catch (error) {
      console.error('Erro ao atualizar a viagem:', error);
    }
  };

  const handleDeleteTrip = async (idViagem) => {
    try {
      await rest.delete(`/deleteViagem/${idViagem}`);
      setTripHistory(prevTrips => prevTrips.filter(trip => trip.idViagem !== idViagem));
    } catch (error) {
      console.error('Erro ao deletar a viagem:', error);
    }
  };

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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tripHistory.map((trip, index) => (
            <tr key={index}>
              {editingTrip && editingTrip.idViagem === trip.idViagem ? (
                <>
                  <td>{trip.idViagem}</td>
                  <td>{trip.email}</td>
                  <td><input type="text" value={editingTrip.cidade} onChange={(e) => setEditingTrip({ ...editingTrip, cidade: e.target.value })} /></td>
                  <td><input type="date" value={editingTrip.dataDeIda} onChange={(e) => setEditingTrip({ ...editingTrip, dataDeIda: e.target.value })} /></td>
                  <td><input type="date" value={editingTrip.dataDeVolta} onChange={(e) => setEditingTrip({ ...editingTrip, dataDeVolta: e.target.value })} /></td>
                  <td><input type="text" value={editingTrip.objetivo} onChange={(e) => setEditingTrip({ ...editingTrip, objetivo: e.target.value })} /></td>
                  <td>
                    <button onClick={handleUpdateTrip}>Salvar</button>
                    <button onClick={() => setEditingTrip(null)}>Cancelar</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{trip.idViagem}</td>
                  <td>{trip.email}</td>
                  <td>{trip.cidade}</td>
                  <td>{trip.dataDeIda}</td>
                  <td>{trip.dataDeVolta}</td>
                  <td>{trip.objetivo}</td>
                  <td>
                    <button onClick={() => setEditingTrip(trip)}>Editar</button>
                    <button onClick={() => handleDeleteTrip(trip.idViagem)}>Remover</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoViagensAdmin;
