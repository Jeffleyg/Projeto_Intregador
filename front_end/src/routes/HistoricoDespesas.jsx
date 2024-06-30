import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rest from './api';
import '../historico_de_despesas.css';

const HistoricoDespesas = () => {
  const [expenseHistory, setExpenseHistory] = useState([]);

  useEffect(() => {
    const fetchExpenseHistory = async () => {
      try {
        const response = await rest.get('/listDespesasByUser');
        setExpenseHistory(response.data.despesas); // Certifique-se de que 'despesas' é o campo que a API retorna
      } catch (error) {
        console.error('Erro ao buscar histórico de despesas:', error);
      }
    };

    fetchExpenseHistory();
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
          </ul>
        </nav>
      </header>
      <h1>Histórico de Despesas de Viagem</h1>
      <table id="expense-history">
        <thead>
          <tr>
            <th>Código da Viagem</th>
            <th>ID do Funcionário</th>
            <th>Data da Nota Fiscal/Recibo</th>
            <th>Cidade da Nota Fiscal/Recibo</th>
            <th>Tipo de Despesa</th>
            <th>Valor Pago</th>
            <th>Descrição</th>
            <th>Nota Fiscal/Recibo</th>
          </tr>
        </thead>
        <tbody>
          {expenseHistory.map((expense, index) => (
            <tr key={index}>
              <td>{expense.tripCode}</td>
              <td>{expense.employeeId}</td>
              <td>{expense.receiptDate}</td>
              <td>{expense.receiptCity}</td>
              <td>{expense.expenseType}</td>
              <td>{expense.amountPaid}</td>
              <td>{expense.description}</td>
              <td><a href={`path/to/receipts/${expense.receipt}`} target="_blank" rel="noopener noreferrer">{expense.receipt}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoDespesas;
