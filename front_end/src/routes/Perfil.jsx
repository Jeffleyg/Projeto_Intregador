import React, { useState, useEffect } from 'react';
import '../Style.css';
import HeaderRoutes from './HeaderRoutes';
import rest from './api';

function Perfil() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    notifications: false,
  });

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchProfile = async () => {
      try {
        const response = await rest.get('/getUsuarioProfile');
        setProfile({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          notifications: response.data.notifications || false,
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const updateProfile = async () => {
    try {
      const response = await rest.put('/updateUsuarioProfile', {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phoneNumber: profile.phoneNumber,
        password: profile.password,
        notifications: profile.notifications,
      });
      console.log('Profile updated:', response.data);
      alert('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Falha ao atualizar o perfil. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <>
      <HeaderRoutes />
      <main>
        <section className="profile-info">
          <h2>Informações Pessoais</h2>
          <div className="info">
            <label htmlFor="firstName">Nome:</label>
            <input type="text" id="firstName" value={profile.firstName} onChange={handleChange} />
          </div>
          <div className="info">
            <label htmlFor="lastName">Sobrenome:</label>
            <input type="text" id="lastName" value={profile.lastName} onChange={handleChange} />
          </div>
          <div className="info">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={profile.email} onChange={handleChange} />
          </div>
          <div className="info">
            <label htmlFor="phoneNumber">Telefone:</label>
            <input type="tel" id="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
          </div>
        </section>
        <section className="account-settings">
          <h2>Configurações de Conta</h2>
          <div className="settings">
            <label htmlFor="password">Alterar Senha:</label>
            <input type="password" id="password" value={profile.password} onChange={handleChange} />
          </div>
          <div className="settings">
            <label htmlFor="notifications">Notificações:</label>
            <input type="checkbox" id="notifications" checked={profile.notifications} onChange={handleChange} /> Ativar
          </div>
          <button type="button" onClick={updateProfile}>
            Atualizar Perfil
          </button>
        </section>
      </main>
    </>
  );
}

export default Perfil;
