import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListeDesEleves = () => {
  const [eleves, setEleves] = useState([]);

  useEffect(() => {
    const fetchEleves = async () => {
      try {
        const response = await axios.get('http://localhost:3000/v2/list-documents');
        setEleves(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des élèves:', error);
      }
    };

    fetchEleves();
  }, []);

  if(!eleves.length)
       {
          return(
            <div className="container">
               <div className="mt-3">
                 <h2 className='student'>Aucun élève</h2>
                <div>
                
                 </div>
            </div>
           
            </div>
          )
       }
  else{
    return (
        <div className='container'>
          <h1>Liste des élèves</h1>
          <table className="table table-striped table-bordered table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">Nom & Prénom(s)</th>
                <th scope="col">Classe</th>
                <th scope="col">Total</th>
                <th scope="col">Inscription</th>
                <th scope="col">Scolarité</th>
                <th scope="col">N° Reçu</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {eleves.map((eleve,index) => (
                <tr key={eleve.DocumentKey}>
                  <td>{index + 1}</td>
                  <td>{eleve.nom}</td>
                  <td>{eleve.classe}</td>
                  <td>{eleve.total}</td>
                  <td>{eleve.inscription}</td>
                  <td>{eleve.scolarite}</td>
                  <td>{eleve.numeroDuRecu}</td>
                  <td>{eleve.date}</td>
                  <td>  
                    <button className="btn btn-warning  btn-sm m-1">Modifier</button>
                    <button className="btn btn-danger   btn-sm m-1">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

  }
 
};

export default ListeDesEleves;
