import React from 'react'
import './Style.css'
function HeaderRoutes() {

  return (
    <header>
        <div class="header-content">
            <h1>Perfil do Usuário</h1>
            <nav>
                <ul>
                    <li><a href="dashboard.html">Dashboard</a></li>
                    <li><a href="ajuda.html">Ajuda</a></li>
                    <li><a href="settings.html">Configurações</a></li>
                    <li><a href="profile.html" class="active">Perfil</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default HeaderRoutes;
