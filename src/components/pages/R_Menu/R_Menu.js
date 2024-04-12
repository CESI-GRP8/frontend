import React, { useState } from 'react';
import axios from 'axios'; // Importez Axios pour les requêtes HTTP
import './R_Menu.css'; // Importez votre fichier CSS

const R_Menu = () => {
  const [mesMenus, setMesMenus] = useState([]);
  const [ongletActif, setOngletActif] = useState('nouveauMenu');
  const [file, setFile] = useState('');
  const [nomMenu, setNomMenu] = useState('');
  const [description, setDescription] = useState('');
  const [crudites, setCrudites] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [boissons, setBoissons] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('name', nomMenu);
      formData.append('description', description);
      formData.append('crudites', JSON.stringify(crudites));
      formData.append('sauces', JSON.stringify(sauces));
      formData.append('boissons', JSON.stringify(boissons));
      
      const response = await axios.post('http://localhost/1.0/restaurant/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log('Nouveau menu créé:', response.data);
      
      // Réinitialiser les champs après la soumission
      setFile('');
      setNomMenu('');
      setDescription('');
      setCrudites([]);
      setSauces([]);
      setBoissons([]);
    } catch (error) {
      console.error('Erreur lors de la création du menu:', error);
    }
  };

  const handleAddItem = (type) => {
    switch (type) {
      case 'crudite':
        setCrudites([...crudites, '']);
        break;
      case 'sauce':
        setSauces([...sauces, '']);
        break;
      case 'boisson':
        setBoissons([...boissons, '']);
        break;
      default:
        break;
    }
  };

  const handleRemoveItem = (type, index) => {
    switch (type) {
      case 'crudite':
        const updatedCrudites = [...crudites];
        updatedCrudites.splice(index, 1);
        setCrudites(updatedCrudites);
        break;
      case 'sauce':
        const updatedSauces = [...sauces];
        updatedSauces.splice(index, 1);
        setSauces(updatedSauces);
        break;
      case 'boisson':
        const updatedBoissons = [...boissons];
        updatedBoissons.splice(index, 1);
        setBoissons(updatedBoissons);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event, type, index) => {
    switch (type) {
      case 'crudite':
        const updatedCrudites = [...crudites];
        updatedCrudites[index] = event.target.value;
        setCrudites(updatedCrudites);
        break;
      case 'sauce':
        const updatedSauces = [...sauces];
        updatedSauces[index] = event.target.value;
        setSauces(updatedSauces);
        break;
      case 'boisson':
        const updatedBoissons = [...boissons];
        updatedBoissons[index] = event.target.value;
        setBoissons(updatedBoissons);
        break;
      default:
        break;
    }
  };

  const handleDeleteMenu = (index) => {
    const updatedMenus = [...mesMenus];
    updatedMenus.splice(index, 1);
    setMesMenus(updatedMenus);
  };

  return (
    <div>
      <div className="onglets">
        <button className={ongletActif === 'nouveauMenu' ? 'active' : ''} onClick={() => setOngletActif('nouveauMenu')}>Nouveau menu</button>
        <button className={ongletActif === 'mesMenus' ? 'active' : ''} onClick={() => setOngletActif('mesMenus')}>Mes menus</button>
      </div>
      {ongletActif === 'nouveauMenu' && (
        <div className="nouveau-menu">
          <h2>Créer un nouveau menu</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Choisir un fichier :
              <input type="file" value={file} onChange={(e) => setFile(e.target.value)} />
            </label><br />
            <label>
              Nom du menu :
              <input type="text" value={nomMenu} onChange={(e) => setNomMenu(e.target.value)} />
            </label><br />
            <label>
              Description :
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label><br />
            <div>
              <h3>Crudités</h3>
              {crudites.map((crudite, index) => (
                <div key={index}>
                  <input type="text" value={crudite} onChange={(e) => handleInputChange(e, 'crudite', index)} />
                  <button type="button" onClick={() => handleRemoveItem('crudite', index)}>Supprimer</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('crudite')}>Ajouter crudité</button>
            </div><br />
            <div>
              <h3>Sauces</h3>
              {sauces.map((sauce, index) => (
                <div key={index}>
                  <input type="text" value={sauce} onChange={(e) => handleInputChange(e, 'sauce', index)} />
                  <button type="button" onClick={() => handleRemoveItem('sauce', index)}>Supprimer</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('sauce')}>Ajouter sauce</button>
            </div><br />
            <div>
              <h3>Boissons</h3>
              {boissons.map((boisson, index) => (
                <div key={index}>
                  <input type="text" value={boisson} onChange={(e) => handleInputChange(e, 'boisson', index)} />
                  <button type="button" onClick={() => handleRemoveItem('boisson', index)}>Supprimer</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('boisson')}>Ajouter boisson</button>
            </div><br />
            <button type="submit" className="submit-button">Créer</button>
          </form>
        </div>
      )}
      {ongletActif === 'mesMenus' && (
        <div className="mes-menus">
          {/* Affichage des menus existants */}
        </div>
      )}
    </div>
  );
};

export default R_Menu;
