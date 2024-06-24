import React from 'react';
import './Header.css';
function Header() {

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li>
              <div className="menu">
                <ul className="menu-items">
                  <li><a href="create_account.html">Cadastrar Funcionário</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="cadastrar_viagem.html">Cadastrar Viagem</a></li>
                  <li><a href="cadastrar_de_despesas.html">Cadastrar Despesas da Viagem</a></li>
                  <li><a href="registro_compras.html">Registrar Compras da Viagem</a></li>
                  <li><a href="manter_cadastro_produtos.html">Manter Cadastro de Produtos</a></li>
                  <li><a href="visualizar_historico_viagem.html">Visualizar Histórico das Viagens</a></li>
                  <li><a href="visualizacao_historico_despesas.html">Visualizar Histórico das Despesas de uma Viagem</a></li>
                  <li><a href="visualizar_historico_compras.html">Visualizar Histórico de Compras de uma Viagem</a></li>
                  <li><a href="buscar_viagem.html">Buscar Viagem</a></li>
                </ul>
              </div>
            </li>
            <div id="home-dropdown" className="dropdown-content" style={{ display: 'none' }}>
              {/* Conteúdo adicional pode ser adicionado aqui */}
            </div>
            <li><a href="profile.html">Perfil</a></li>
            <li><a href="settings.html">Configurações</a></li>
            <li><a href="logout.html">Sair</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
