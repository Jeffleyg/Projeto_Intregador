/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style_login.css';
import rest from './api';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await rest.post('/loginUsuario', { email, password });
      console.log('Login response:', response);
      
      if (response.data.auth) {
        const authToken = response.data.token; // Supondo que o token venha na resposta
        localStorage.setItem('token', authToken); // Armazena o token no localStorage
        onLoginSuccess(email); // Passa o email do usuário logado
        navigate('/home', { state: { token: authToken } }); // Navega para a página principal
      } else {
        alert('Usuário ou senha inválidos!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        setError(error.response.data.erro || 'Login error. Please try again later.');
      } else {
        setError('An error occurred during login. Please try again later.');
      }
    } finally {
      setLoading(false);
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
            <input
              type="text"
              placeholder="Entra Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              required
            />
          </div>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded">Senha</span>
            <input
              type="password"
              placeholder="Entra Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div> 
          <div className="form-item-other">
            <div className="checkbox">
              <input type="checkbox" id="rememberMeCheckbox" defaultChecked />
              <label htmlFor="rememberMeCheckbox">Lembra me</label>
            </div>
            <a href="/forgotPassword">Esquecei a minha senha!</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Conectando...' : 'Entrar'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="login-card-footer">
          Você é administrador? <a href="/loginAdmin">Clique aqui!</a>
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

export default Login;
