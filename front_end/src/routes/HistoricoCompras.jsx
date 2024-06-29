import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rest from './api'; // Ajuste o caminho conforme a localização do arquivo de configuração do axios
import '../historico_compras.css';

const HistoricoCompras = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar dados da API
    const fetchPurchaseHistory = async () => {
      try {
        const response = await rest.get('/listCompra'); // Usa a instância rest configurada
        console.log('Dados recebidos:', response.data); // Verifique se os dados estão sendo recebidos corretamente
        setPurchaseHistory(response.data);
      } catch (err) {
        console.error('Erro ao buscar histórico de compras:', err); // Log do erro para depuração
        setError('Erro ao carregar histórico de compras');
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseHistory();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
          {purchaseHistory.length > 0 ? (
            purchaseHistory.map((purchase, index) => (
              <tr key={index}>
                <td>{purchase.codigoViagem}</td>
                <td>{purchase.idFuncionario}</td>
                <td>{purchase.dataCompra}</td>
                <td>{purchase.local}</td>
                <td>{purchase.tipoDespesa}</td>
                <td>{purchase.itensComprados}</td>
                <td>{purchase.valor}</td>
                <td><a href={`path/to/receipts/${purchase.notaFiscal}`} target="_blank" rel="noopener noreferrer">{purchase.notaFiscal}</a></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Nenhuma compra encontrada</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoCompras;
