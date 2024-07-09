// ViagemContainer.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../viagemList.css';

const ViagemContainer = () => {
    const location = useLocation();
    const { viagens } = location.state || { viagens: [] }; // Recebe dados da navegação

    return (
        <div>
            <h2>Lista de Viagens</h2>
            <div className="viagem-list">
                <table>
                    <thead>
                        <tr>
                            <th>Id viagem</th>
                            <th>Email Funcionario</th>
                            <th>Data de Ida</th>
                            <th>Data de Volta</th>
                            <th>Cidade</th>
                            <th>Objetivo</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viagens.length > 0 ? (
                            viagens.map((viagem) => (
                                <tr key={viagem.id}>
                                    <td>{viagem.idViagem}</td>
                                    <td>{viagem.email}</td>
                                    <td>{new Date(viagem.dataDeIda).toLocaleDateString()}</td>
                                    <td>{new Date(viagem.dataDeVolta).toLocaleDateString()}</td>
                                    <td>{viagem.cidade}</td>
                                    <td>{viagem.objetivo}</td>
                                    <td>{viagem.descricao}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">Nenhuma viagem encontrada</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViagemContainer;
