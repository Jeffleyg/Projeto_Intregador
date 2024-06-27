import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../historico_compras.css';

const HistoricoCompras = () => {
  // Exemplo de estado inicial com histórico de compras
  const [purchaseHistory, setPurchaseHistory] = useState([
    {
      tripCode: '001',
      employeeId: '123',
      purchaseDate: '2024-06-01',
      location: 'São Paulo',
      expenseType: 'Vestuário',
      itemsBought: 'Camisa, Calça',
      totalAmount: 'R$ 150,00',
      receipts: 'recibo1.pdf'
    },
    {
      tripCode: '002',
      employeeId: '124',
      purchaseDate: '2024-06-15',
      location: 'Rio de Janeiro',
      expenseType: 'Cosméticos',
      itemsBought: 'Perfume, Creme',
      totalAmount: 'R$ 200,00',
      receipts: 'recibo2.pdf'
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
            <li><Link to="/registroCompras">Registro de Compras da viagem</Link></li>
            <li><Link to="/dashboard">Voltar ao Dashboard</Link></li>
            <li><Link to="/ajuda">Ajuda</Link></li>
          </ul>
        </nav>
      </header>
      <h1>Histórico de Compras de Viagem</h1>
      <table id="purchase-history">
        <thead>
          <tr>
            <th>Código da Viagem</th>
            <th>ID do Funcionário</th>
            <th>Data da Compra</th>
            <th>Local</th>
            <th>Tipo de Despesa</th>
            <th>Itens Comprados</th>
            <th>Valor Total</th>
            <th>Recibos</th>
          </tr>
        </thead>
        <tbody>
          {purchaseHistory.map((purchase, index) => (
            <tr key={index}>
              <td>{purchase.tripCode}</td>
              <td>{purchase.employeeId}</td>
              <td>{purchase.purchaseDate}</td>
              <td>{purchase.location}</td>
              <td>{purchase.expenseType}</td>
              <td>{purchase.itemsBought}</td>
              <td>{purchase.totalAmount}</td>
              <td><a href={`path/to/receipts/${purchase.receipts}`} target="_blank" rel="noopener noreferrer">{purchase.receipts}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoCompras;
