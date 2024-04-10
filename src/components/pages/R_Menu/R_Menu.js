import React, { useState } from 'react';
import './R_Menu.css'; // Importez votre fichier CSS

const R_Menu = () => {
  const [ongletActif, setOngletActif] = useState('nouveauMenu');
  const [file, setFile] = useState('');
  const [nomMenu, setNomMenu] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [sauces, setSauces] = useState([]);
  const [boissons, setBoissons] = useState([]);
  const [mesMenus, setMesMenus] = useState([]); // État pour stocker les menus créés

  const handleSubmit = (event) => {
    event.preventDefault();
    // Créer un nouvel objet pour le menu
    const newMenu = {
      file,
      nomMenu,
      description,
      ingredients,
      sauces,
      boissons
    };
    // Ajouter le nouvel objet à l'état des menus
    setMesMenus([...mesMenus, newMenu]);
    // Réinitialiser les champs après la soumission
    setFile('');
    setNomMenu('');
    setDescription('');
    setIngredients([]);
    setSauces([]);
    setBoissons([]);
  };

  const handleAddItem = (type) => {
    switch (type) {
      case 'ingredient':
        setIngredients([...ingredients, '']);
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
      case 'ingredient':
        const updatedIngredients = [...ingredients];
        updatedIngredients.splice(index, 1);
        setIngredients(updatedIngredients);
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
      case 'ingredient':
        const updatedIngredients = [...ingredients];
        updatedIngredients[index] = event.target.value;
        setIngredients(updatedIngredients);
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
              <h3>Ingrédients</h3>
              {ingredients.map((ingredient, index) => (
                <div key={index}>
                  <input type="text" value={ingredient} onChange={(e) => handleInputChange(e, 'ingredient', index)} />
                  <button type="button" onClick={() => handleRemoveItem('ingredient', index)}>Supprimer</button>
                </div>
              ))}
              <button type="button" onClick={() => handleAddItem('ingredient')}>Ajouter ingrédient</button>
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
          <h2>Mes menus</h2>
          <div className="menu-grid">
            {mesMenus.map((menu, index) => (
              <div className="menu-card" key={index}>
                <h3>{menu.nomMenu}</h3>
                <p>{menu.description}</p>
                <h4>Ingrédients</h4>
                <ul>
                  {menu.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h4>Sauces</h4>
                <ul>
                  {menu.sauces.map((sauce, index) => (
                    <li key={index}>{sauce}</li>
                  ))}
                </ul>
                <h4>Boissons</h4>
                <ul>
                  {menu.boissons.map((boisson, index) => (
                    <li key={index}>{boisson}</li>
                  ))}
                </ul>
                <button onClick={() => handleDeleteMenu(index)}>Supprimer</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default R_Menu;
