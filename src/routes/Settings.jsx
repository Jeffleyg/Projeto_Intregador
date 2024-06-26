import React from 'react';
import { Link } from 'react-router-dom';
import '../settings.css';

class Settings extends React.Component {
  saveSettings = () => {
    // Adicione a lógica para salvar configurações aqui
    console.log('Configurações salvas!');
  };

  render() {
    return (
      <div>
        <header>
          <div className="header-content">
            <h1>Configurações</h1>
            <nav>
              <ul>
                <li><Link to="/home">Dashboard</Link></li>
                <li><Link to="/ajuda">Ajuda</Link></li>
                <li><Link to="/settings" className="active">Configurações</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <section>
            <h2>Preferências de Conta</h2>
            <div className="settings-option">
              <label htmlFor="language">Idioma:</label>
              <select id="language">
                <option value="pt">Português</option>
                <option value="en">Inglês</option>
              </select>
            </div>
            <div className="settings-option">
              <label htmlFor="timezone">Fuso Horário:</label>
              <select id="timezone">
                <option value="UTC-3">Brasília (UTC-3)</option>
                <option value="UTC">Londres (UTC)</option>
              </select>
            </div>
          </section>
          <section>
            <h2>Configurações de Segurança</h2>
            <div className="settings-option">
              <label htmlFor="password">Alterar Senha:</label>
              <input type="password" id="password" placeholder="Nova Senha" />
            </div>
            <div className="settings-option">
              <label htmlFor="twofa">Autenticação de Dois Fatores:</label>
              <input type="checkbox" id="twofa" /> Ativar
            </div>
            <button type="button" onClick={this.saveSettings}>Salvar Alterações</button>
          </section>
        </main>
        <footer>
          <p>© 2024 FelisShop. Todos os direitos reservados.</p>
        </footer>
      </div>
    );
  }
}

export default Settings;
