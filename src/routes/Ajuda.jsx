import React from 'react';
import { Link } from 'react-router-dom';
import '../ajuda.css';

const Ajuda = () => {
  return (
    <div>
      <header>
        <div className="header-content">
          <h1>Central de Ajuda</h1>
          <nav>
            <ul>
              <li><Link to="/home">Dashboard</Link></li>
              <li><Link to="/ajuda" className="active">Ajuda</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <h2>Perguntas Frequentes</h2>
          <article>
            <h3>Como posso visualizar o histórico de compras?</h3>
            <p>Para visualizar o histórico de compras, acesse a página principal de histórico e selecione a viagem desejada para ver os detalhes.</p>
          </article>
          <article>
            <h3>O que fazer se encontrar um erro no histórico?</h3>
            <p>Se você encontrar algum erro nos dados apresentados, por favor, entre em contato com a equipe de suporte técnico através do e-mail suporte@felishop.com.</p>
          </article>
        </section>
        <section>
          <h2>Contato</h2>
          <p>Para mais informações ou assistência, por favor, entre em contato:</p>
          <ul>
            <li>Email: suporte@felishop.com</li>
            <li>Telefone: (11) 1234-5678</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2024 FelisShop. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Ajuda;
