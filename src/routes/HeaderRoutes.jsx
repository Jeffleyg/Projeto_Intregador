import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

function HeaderRoutes() {
  return (
    <header className="tet">
      <div className="header-content">
        <h1 className="pe">Perfil do Usuário</h1>
        <nav>
          <ul>
            <li><Link to="/home">Dashboard</Link></li>
            <li><Link to="/ajuda">Ajuda</Link></li>
            <li><Link to="/configuracoes">Configurações</Link></li>
            <li><Link to="/perfil" className="active">Perfil</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderRoutes;
