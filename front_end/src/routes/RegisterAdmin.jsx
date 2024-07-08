import React, { useState } from 'react';
import rest from './api'; // Importa a instância do axios configurada
import '../registerAdmin.css'; // Importe o CSS para estilizar o formulário

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await rest.post('registerAdmin', formData);
      alert('Administrador registrado com sucesso!');
      setError('');
    } catch (error) {
      setError('Erro ao registrar administrador. Verifique os dados e tente novamente.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="register-admin-container">
      <h1>Registrar Administrador</h1>
      <form onSubmit={handleSubmit} className="register-admin-form">
        <div className="form-group">
          <label htmlFor="firstName">Nome</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Sobrenome</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default RegisterAdmin;
