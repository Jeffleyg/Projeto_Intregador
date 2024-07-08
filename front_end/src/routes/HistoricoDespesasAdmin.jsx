import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rest from './api';
import '../historico_de_despesas.css';

const HistoricoDespesasAdmin = () => {
  const [expenseHistory, setExpenseHistory] = useState([]);

  useEffect(() => {
    const fetchExpenseHistory = async () => {
      try {
        const response = await rest.get('/listAllDespesas');
        setExpenseHistory(response.data.despesas); // Certifique-se de que 'despesas' é o campo que a API retorna
      } catch (error) {
        console.error('Erro ao buscar histórico de despesas:', error);
      }
    };

    fetchExpenseHistory();
  }, []);

  const handleRemove = async (id) => {
    try {
      await rest.delete(`/deleteDespesa/${id}`);
      setExpenseHistory(expenseHistory.filter(expense => expense.id !== id));
    } catch (error) {
      console.error('Erro ao remover despesa:', error);
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
      </header>
      <h1>Histórico de Despesas de Viagem</h1>
      <table id="expense-history">
        <thead>
          <tr>
            <th>Código da Viagem</th>
            <th>Email do Funcionário</th>
            <th>Data da Nota Fiscal/Recibo</th>
            <th>Cidade da Nota Fiscal/Recibo</th>
            <th>Tipo de Despesa</th>
            <th>Valor Pago</th>
            <th>Descrição</th>
            <th>Nota Fiscal/Recibo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {expenseHistory.map((expense, index) => (
            <tr key={index}>
              <td>{expense.idViagem}</td>
              <td>{expense.emailFuncionario}</td>
              <td>{expense.dataNota}</td>
              <td>{expense.cidadeNota}</td>
              <td>{expense.tipoDespesa}</td>
              <td>{expense.valor}</td>
              <td>{expense.descricao}</td>
              <td><a href={`path/to/receipts/${expense.notafiscal}`} target="_blank" rel="noopener noreferrer">{expense.receipt}</a></td>
              <td>
                <button onClick={() => handleRemove(expense.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoDespesasAdmin;
