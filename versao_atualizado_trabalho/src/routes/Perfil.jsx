import React from 'react';
import './Style.css';
import HeaderRoutes from './HeaderRoutes';

function Perfil() {
  return (
    <>
        <HeaderRoutes />
      <head>
        <meta charSet="UTF-8" />
        <title>Perfil do Usuário - Histórico de Compras de Viagem</title>
        <link rel="stylesheet" href="profile.css" />
        <script src="script.js" defer></script>
      </head>
      <body>
        <main>
          <section className="profile-info">
            <h2>Informações Pessoais</h2>
            <div className="info">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" defaultValue="Maria Silva" />
            </div>
            <div className="info">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" defaultValue="maria.silva@example.com" />
            </div>
            <div className="info">
              <label htmlFor="phone">Telefone:</label>
              <input type="tel" id="phone" defaultValue="(11) 99876-5432" />
            </div>
          </section>
          <section className="account-settings">
            <h2>Configurações de Conta</h2>
            <div className="settings">
              <label htmlFor="password">Alterar Senha:</label>
              <input type="password" id="password" />
            </div>
            <div className="settings">
              <label htmlFor="notifications">Notificações:</label>
              <input type="checkbox" id="notifications" defaultChecked /> Ativar
            </div>
            <button type="button" onClick={() => updateProfile()}>
              Atualizar Perfil
            </button>
          </section>
        </main>
        <footer>
          <p>© 2024 FelisShop. Todos os direitos reservados.</p>
        </footer>
      </body>
    </>
  );
}

export default Perfil;
