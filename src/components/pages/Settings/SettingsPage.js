import React, { useState } from 'react';
import './SettingsPage.css'; // Assurez-vous d'importer le fichier CSS avec les styles fournis


const AccountSettings = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      alert("Le nouveau mot de passe et la confirmation du mot de passe ne correspondent pas.");
      return;
    }
    // Mettez ici la logique pour changer le mot de passe
    console.log('Changer le mot de passe avec:', newPassword);
    setPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const handleDeleteAccount = () => {
    if (deleteConfirmation === 'DELETE') {
      // Mettez ici la logique pour supprimer le compte
      console.log('Compte supprimé !');
    } else {
      alert('Confirmation incorrecte. Veuillez entrer "DELETE" pour supprimer le compte.');
    }
  };

  return (
    <div>
      <h2>Modifier le mot de passe</h2>
      <input 
        type="password" 
        placeholder="Ancien mot de passe" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Nouveau mot de passe" 
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Confirmer le nouveau mot de passe" 
        value={confirmNewPassword} 
        onChange={(e) => setConfirmNewPassword(e.target.value)} 
      />
      <button onClick={handleChangePassword}>Changer le mot de passe</button>

      <h2>Supprimer le compte</h2>
      {confirmDelete ? (
        <>
          <input 
            type="text" 
            placeholder="Entrez DELETE pour confirmer" 
            value={deleteConfirmation} 
            onChange={(e) => setDeleteConfirmation(e.target.value)} 
          />
          <button onClick={handleDeleteAccount}>Confirmer la suppression</button>
        </>
      ) : (
        <button onClick={() => setConfirmDelete(true)}>Supprimer le compte</button>
      )}
    </div>
  );
};

export default AccountSettings;
