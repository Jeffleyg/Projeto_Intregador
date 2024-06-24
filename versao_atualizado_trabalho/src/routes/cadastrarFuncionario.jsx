import React, { useEffect } from 'react';
import './style_create_account.css';

function cadastraFuncionario() {
  useEffect(() => {
    const form = document.getElementById('createEmployeeForm');
    form.onsubmit = function (event) {
      event.preventDefault();
      const password = form.querySelector('input[type="password"]').value;
      const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      alert('Account created successfully!');
      // Implementar o envio de email de confirmação aqui
      window.location.href = 'login.html'; // Redireciona para o login
    };
  }, []);

  return (
    <div className="login-card-container">
      <div className="login-card">
        <h1>Create Employee Account</h1>
        <form id="createEmployeeForm" encType="multipart/form-data">
          <input type="file" name="photo" accept="image/*" required />
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="text" placeholder="CPF" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="CPF should be in the format 000.000.000-00" required />
          <input type="email" placeholder="Email" required />
          <input type="date" placeholder="Date of Birth" required />
          <input type="text" placeholder="ZIP Code" pattern="\d{5}-?\d{3}" title="ZIP Code should be in the format 12345-678 or 12345678" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="Phone Number" pattern="\d{10,11}" title="Phone Number should have 10 to 11 digits" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <input type="text" placeholder="Employee ID" required />
          <button type="submit">Create Account</button>
        </form>
        <div className="login-card-footer">
          <a href="login.html">Back to login.</a>
        </div>
      </div>
    </div>
  );
}

export default cadastraFuncionario;
