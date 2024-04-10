import React, { useEffect, useState } from 'react';
import './MyProfilePage.css';
import axios from 'axios';

const MyProfilePage = () => {
  const [profile, setProfile] = useState({
    _id: '',
    firstname: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    sponsorCode: '',
    userSponsorCode: ''
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Effectuer une requête GET à l'API pour récupérer les données de profil de l'utilisateur
        const userId = localStorage.getItem('userId');
        if (userId) {
          const response = await axios.get(`http://localhost/1.0/accounts/users/${userId}`);
          // Mettre à jour l'état avec les données récupérées
          setProfile(response.data[0]);
          console.log('Données de profil récupérées :', response.data[0]);
        }
      } catch (error) {
        console.error('Error while fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Effectuer une requête PATCH à l'API pour mettre à jour les données du profil
      await axios.patch(`http://localhost/1.0/accounts/users/${profile._id}`, profile);
      console.log('Profil mis à jour avec succès :', profile);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div className="my-profile-page">
      <h2>Mon Profil</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">Prénom</label>
        <input
          id="firstName"
          type="text"
          name="firstname"
          value={profile.firstname}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Nom</label>
        <input
          id="lastName"
          type="text"
          name="surname"
          value={profile.surname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Numéro de téléphone</label>
        <input
          id="phoneNumber"
          type="tel"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Adresse</label>
        <input
          id="address"
          type="text"
          name="address"
          value={profile.address}
          onChange={handleChange}
        />

        <label htmlFor="sponsorCode">Code de parrainage</label>
        <input
          id="sponsorCode"
          type="text"
          name="sponsorCode"
          value={profile.sponsorCode}
          onChange={handleChange}
        />

        <label htmlFor="userSponsorCode">Code de parrain</label>
        <input
          id="userSponsorCode"
          type="text"
          name="userSponsorCode"
          value={profile.userSponsorCode}
          onChange={handleChange}
        />

        <button type="submit" className="update-profile-btn">Mettre à jour</button>
      </form>
    </div>
  );
};

export default MyProfilePage;
