/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style_create_account.css';
import rest from './api';

function CreateEmployeeAccount() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    dateOfBirth: '',
    zipCode: '',
    address: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    employeeId: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const response = await rest.post('registerUsuario', formData);
      console.log(response.data); // Aqui você pode processar a resposta do backend conforme necessário
      alert('Conta cria com sucesso!');
      navigate('/homeAdmin');
    } catch (error) {
      console.error('Erro ao criar a conta de usuario', error);
      alert('Falha ao criar a conta de usuario! Verifique os campos e tente novamente.');
    }
  };

  return (
    <div className="login-card">
      <div className="login-card-header">
        <h1>Criar Conta de Usuario</h1>
      </div>
      <form id="createEmployeeForm" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="firstName" placeholder="Nome" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Sobrenome" onChange={handleChange} required />
        <input 
          type="text" 
          name="cpf" 
          placeholder="CPF" 
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
          title="CPF should be in the format 000.000.000-00" 
          onChange={handleChange} 
          required 
        />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="date" name="dateOfBirth" placeholder="Data de nascimento" onChange={handleChange} required />
        <input 
          type="text" 
          name="zipCode" 
          placeholder="Cep" 
          pattern="\d{5}-?\d{3}" 
          title="Cep deverá ser no formato 00000-000" 
          onChange={handleChange} 
          required 
        />
        <input type="text" name="address" placeholder="Endereço" onChange={handleChange} required />
        <input 
          type="text" 
          name="phoneNumber" 
          placeholder="Numero de telefone" 
          pattern="\d{10,11}" 
          title="Numero de telefone deverá ser no formato 0000000000 ou 00000000000" 
          onChange={handleChange} 
          required 
        />
        <input type="password" name="password" placeholder="Senha" onChange={handleChange} required />
        <input type="password" name="confirmPassword" placeholder="Confirma Senha" onChange={handleChange} required />
        <button type="submit">Cria conta</button>
      </form>
      <div className="login-card-footer">
        <Link to="/homeAdmin">Volta ao Menu.</Link>
      </div>
    </div>
  );
}

export default CreateEmployeeAccount;
