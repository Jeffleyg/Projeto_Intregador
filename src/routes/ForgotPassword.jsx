import React from 'react';
import '../style_password.css';

const ForgotPassword = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = document.querySelector('input[type="text"]').value;
        const cnpj = document.querySelectorAll('input[type="text"]')[1].value;

        // Verificação simples hardcoded
        if (email === "jeffley@example.com" && cnpj === "12.345.678/0001-12") {
            window.location.href = 'reset_password.html'; // Redireciona para a página de resetar senha
        } else {
            alert('Invalid email or CNPJ!');
        }
    };

    return (
        <div className="login-card-container">
            <div className="login-card">
                <h1>Reset Your Password</h1>
                <form id="forgotPasswordForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Email" required />
                    <input type="text" placeholder="Enter Employee ID" required />
                    <button type="submit">Submit</button>
                </form>
                <div className="login-card-footer">
                    Remembered your password? <a href="/login">Sign in here.</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
