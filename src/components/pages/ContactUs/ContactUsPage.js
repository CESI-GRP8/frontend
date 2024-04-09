import React, { useState } from 'react';
import './ContactUsPage.css'; // Assurez-vous d'importer le fichier CSS avec les styles fournis

function ContactezNous() {
  const [titre, setTitre] = useState('');
  const [demande, setDemande] = useState('');
  const [erreur, setErreur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre || !demande) {
      setErreur('Veuillez remplir tous les champs.');
      return;
    }
    // Envoyer la demande ici (par exemple, à un backend)
    console.log("Titre :", titre);
    console.log("Demande :", demande);
    // Réinitialiser les champs après l'envoi
    setTitre('');
    setDemande('');
    setErreur('');
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Contactez-nous</h2>
        <form onSubmit={handleSubmit}>
          <label>Titre*</label>
          <input 
            type="text" 
            value={titre} 
            onChange={(e) => setTitre(e.target.value)} 
            required 
          />
          <label>Expliquez-nous votre demande*</label>
          <textarea 
            value={demande} 
            onChange={(e) => setDemande(e.target.value)} 
            required 
          />
          <button className="submit-btn" type="submit">Envoyer</button>
        </form>
        {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
      </div>
    </div>
  );
}

export default ContactezNous;
