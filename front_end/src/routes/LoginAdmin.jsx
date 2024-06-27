/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook de navegação
import '../style_login.css';
import rest from './api';

function LoginAdmin({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

      if (response.status === 200) {
          const authToken = response.data.token;
          navigate('/HomeAdmin', { state: { token: authToken } });
      } else {
          setError('Credenciais inválidas');
      }
  } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Email ou Senha invalida !');
  }
};

  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img src="logoFelishop.jpg" alt="logo" />
        </div>
        <div className="login-card-header">
          <h1>Sign In</h1>
          <div>Please login to use the platform</div>
        </div>
        <form className="login-card-form" id="loginForm" onSubmit={handleSubmit}>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded">mail</span>
            <input type="text" placeholder="Enter Email" id="emailForm" autoFocus required />
          </div>
          <div className="form-item">
            <span className="form-item-icon material-symbols-rounded">lock</span>
            <input type="password" placeholder="Enter Password" id="passwordForm" required />
          </div>
          <div className="form-item-other">
            <div className="checkbox">
              <input type="checkbox" id="rememberMeCheckbox" defaultChecked />
              <label htmlFor="rememberMeCheckbox">Remember me</label>
            </div>
            <a href="/forgotPassword">I forgot my password!</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        <div className="login-card-footer">
          Você é usuario? <a href='/'>Clique aqui!.</a>
        </div>
      </div>
      <div className="login-card-social">
        <div>Other Sign-In Options</div>
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
