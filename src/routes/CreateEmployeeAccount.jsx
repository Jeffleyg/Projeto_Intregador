import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../style_create_account.css';

function CreateEmployeeAccount() {
  const [formData, setFormData] = useState({
    photo: null,
    firstName: '',
    lastName: '',
    cpf: '',
    email: '',
    dob: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Account created successfully!');
    // Implementar o envio de email de confirmação aqui
    navigate('/login');
  };

  return (
    <div className="login-card-container">
      <div className="login-card">
        <h1>Create Employee Account</h1>
        <form id="createEmployeeForm" onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="file" name="photo" accept="image/*" onChange={handleChange} required />
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
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
          <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required />
          <input 
            type="text" 
            name="zipCode" 
            placeholder="ZIP Code" 
            pattern="\d{5}-?\d{3}" 
            title="ZIP Code should be in the format 12345-678 or 12345678" 
            onChange={handleChange} 
            required 
          />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          <input 
            type="text" 
            name="phoneNumber" 
            placeholder="Phone Number" 
            pattern="\d{10,11}" 
            title="Phone Number should have 10 to 11 digits" 
            onChange={handleChange} 
            required 
          />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
          <input type="text" name="employeeId" placeholder="Employee ID" onChange={handleChange} required />
          <button type="submit">Create Account</button>
        </form>
        <div className="login-card-footer">
          <Link to="/home">Back to login.</Link>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeAccount;
