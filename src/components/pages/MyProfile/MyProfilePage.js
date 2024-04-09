import React from 'react';
import { useUserProfile } from '../../../context/UserProfileContext'; // Ajustez le chemin selon votre structure
import './MyProfilePage.css';

const MyProfilePage = () => {
  const { profile, setProfile } = useUserProfile();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Mise à jour de l'adresse si le champ modifié appartient à l'adresse
    if (["country", "city", "streetAddress", "buildingType", "deliveryInstructions"].includes(name)) {
      setProfile({
        ...profile,
        address: { ...profile.address, [name]: value },
      });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour sauvegarder les modifications du profil localement
    localStorage.setItem('userProfile', JSON.stringify(profile));
    console.log("Profil mis à jour avec succès :", profile);
  };
  

  return (
    <div className="my-profile-page">
      <h2>Mon Profil</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        {/* Les champs de formulaire restent similaires */}
        {/* Utilisez profile pour définir les valeurs et handleChange pour les mises à jour */}
        <label htmlFor="referralCode">Code de parrainage</label>
        <input
          id="referralCode"
          type="text"
          name="referralCode"
          value={profile.referralCode}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Nom *</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={profile.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="firstName">Prénom *</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={profile.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Numéro de téléphone *</label>
        <input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleChange}
          required
        />

        {/* Assurez-vous que les champs d'adresse utilisent profile.address pour leurs valeurs */}
        <label htmlFor="country">Pays</label>
        <select
          id="country"
          name="country"
          value={profile.address.country}
          onChange={handleChange}
        >
          <option value="">Sélectionnez votre pays</option>
          <option value="FR">France</option>
        </select>

        <label htmlFor="city">Ville</label>
        <input
          id="city"
          type="text"
          name="city"
          value={profile.address.city}
          onChange={handleChange}
        />

        <label htmlFor="streetAddress">N° de voie, Rue</label>
        <input
          id="streetAddress"
          type="text"
          name="streetAddress"
          value={profile.address.streetAddress}
          onChange={handleChange}
        />

        <label htmlFor="buildingType">Type de bâtiment</label>
        <input
          id="buildingType"
          type="text"
          name="buildingType"
          value={profile.address.buildingType}
          onChange={handleChange}
        />

        <label htmlFor="deliveryInstructions">Instructions pour le livreur</label>
        <textarea
          id="deliveryInstructions"
          name="deliveryInstructions"
          value={profile.address.deliveryInstructions}
          onChange={handleChange}
          rows="4"
        />

        <button type="submit" className="update-profile-btn">Mettre à jour</button>
      </form>
    </div>
  );
};

export default MyProfilePage;
