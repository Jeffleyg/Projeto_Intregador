// Em ListaFuncionarios.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rest from './api';
import '../listaFuncionarios.css'; // Importe o CSS aqui

const ListaFuncionarios = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await rest.get('listUsuario');
        setUserList(response.data.users || []);
      } catch (error) {
        console.error('Erro ao buscar lista de funcionários:', error);
      }
    };

    fetchUserList();
  }, []);

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
            <li><Link to="/listaFuncionario">Lista de Funcionários</Link></li>
          </ul>
        </nav>
      </header>
      <h1>Lista de Funcionários</h1>
      <table id="user-list">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.cpf}</td>
              <td>{user.email}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.zipCode}</td>
              <td>{user.address}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaFuncionarios;
