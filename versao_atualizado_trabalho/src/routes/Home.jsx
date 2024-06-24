import React from 'react';




import './dashboard.css';

function Home() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logoFelishop.jpg" alt="FelisShop Logo" />
        </div>
        <nav className="nav-menu">
          <ul>
            <div className="menu">
              <ul className="menu-items">
                <li><a href="create_account.html">Cadastrar Funcionário</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="cadastrar_viagem.jsx">Cadastrar Viagem</a></li>
                <li><a href="cadastrar_de_despesas.html">Cadastrar Despesas da Viagem</a></li>
                <li><a href="registro_compras.html">Registrar Compras da Viagem</a></li>
                <li><a href="manter_cadastro_produtos.html">Manter Cadastro de Produtos</a></li>
                <li><a href="visualizar_historico_viagem.html">Visualizar Histórico das Viagens</a></li>
                <li><a href="visualizacao_historico_despesas.html">Visualizar Histórico das Despesas de uma Viagem</a></li>
                <li><a href="visualizar_historico_compras.html">Visualizar Histórico de Compras de uma Viagem</a></li>
                <li><a href="buscar_viagem.html">Buscar Viagem</a></li>
              </ul>
            </div>
            <div id="home-dropdown" className="dropdown-content" style={{ display: 'none' }}>
              {/* Conteúdo adicional pode ser adicionado aqui */}
            </div>
            <li><a href="profile.html">Perfil</a></li>
            <li><a href="settings.html">Configurações</a></li>
            <li><a href="logout.html">Sair</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Bem-vindo</h1>
        <div className="dashboard">
          <div className="widget">
            <h3>Total de Viagens</h3>
            <p>123</p>
          </div>
          <div className="widget">
            <h3>Despesas Totais</h3>
            <p>R$ 50.000</p>
          </div>
          {/* Adicionar mais widgets conforme necessário */}
        </div>
        <div className="tasks">
          <h3>Atividades Recentes</h3>
          <ul>
            <li>Viagem para São Paulo cadastrada</li>
            <li>Despesas de viagem para Rio de Janeiro atualizadas</li>
            <li>Nova compra registrada em Curitiba</li>
          </ul>
        </div>
        <div className="filters">
          <label htmlFor="category-filter">Filtrar Viagem por Categoria:</label>
          <select id="category-filter">
            <option value="all">Todas as Viagens</option>
            <option value="business">Negócios</option>
            <option value="leisure">Lazer</option>
          </select>
        </div>
      </main>
      <footer>
        <p>© 2024 FelisShop. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Home;
