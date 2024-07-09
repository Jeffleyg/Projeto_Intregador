/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import '../style_login.css';
import rest from './api';

function LoginAdmin({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const email = document.getElementById('emailForm').value;
    const password = document.getElementById('passwordForm').value;

    const formData = {
      email: email,
      password: password,
  };

  try {
      const response = await rest.post('loginAdmin', formData);
      console.log('login response:', response);

      if (response.status === 200) {
          const authToken = response.data.token;
          navigate('/HomeAdmin', { state: { token: authToken } });
      } else {
          alert('Usuário ou senha inválidos!');
      }
  } catch (error) {
      console.error('Erro ao fazer login:', error);
      if (error.response) {
          console.error('Erro de resposta:', error.response.data);
          alert(`Erro no login: ${error.response.data.erro || 'Tente novamente mais tarde.'}`);
      } else {
        alert('An error occurred during login. Please try again later.');
  }
}
};

  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img src="logoFelishop.jpg" alt="logo" />
        </div>
        <div className="login-card-header">
          <h1>Fazer Login</h1>
          <div>Por favor, faça login para usar a plataforma</div>
        </div>
        <form className="login-card-form" id="loginForm" onSubmit={handleSubmit}>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded">Email</span>
            <input type="text" placeholder="Entra Email" id="emailForm" autoFocus required />
          </div>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded">Senha</span>
            <input type="password" placeholder="Entra Senha" id="passwordForm" required />
          </div>
          <div className="form-item-other">
            <div className="checkbox">
              <input type="checkbox" id="rememberMeCheckbox" defaultChecked />
              <label htmlFor="rememberMeCheckbox">Lembra me</label>
            </div>
            <a href="/forgotPassword">Esquecei a minha senha!</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Entrar'}
          </button>
        </form>
        <div className="login-card-footer">
          Você é usuario? <a href='/'>Clique aqui!.</a>
        </div>
      </div>
      <div className="login-card-social">
        <div>Outra opçaõ de login</div>
        <div className="login-card-social-btns">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook"
              width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
              strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24"
              height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none"
              strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
