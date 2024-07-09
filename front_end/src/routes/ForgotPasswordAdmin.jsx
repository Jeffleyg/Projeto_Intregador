import React from 'react';
import rest from './api'; // Ajuste o caminho para o local correto do seu arquivo `rest`
import '../style_password.css';

const ForgotPassword = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = document.querySelector('input[type="text"]').value;

        try {
            const response = await rest.post('/forgotPassword', { email });
            alert(response.data.message);
            // Redireciona para a página de resetar senha, se necessário
            // window.location.href = 'homeAdmin';
        } catch (error) {
            console.error('Erro ao enviar email de recuperação de senha:', error);
            alert('Erro ao enviar email de recuperação de senha. Tente novamente mais tarde.');
        }
    };

    return (
        <div className="login-card-container">
            <div className="login-card">
                <h1>Redefinir sua senha</h1>
                <form id="forgotPasswordForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Entra Email" required />
                    <button type="submit">Enviar</button>
                </form>
                <div className="login-card-footer">
                    Relembrou sua senha? <a href="/">Clique aqui.</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
