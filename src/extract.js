import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Extract() {
  const [eleves, setEleves] = useState([]);
  const [student, setStudent] = useState([]);

  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    axios
    .get('http://localhost:3000/v2/list-documents')
    .then((res) => {
        setEleves(res.data);
    })
    .catch((error) => {
    });

  }, []);

  

  const handleReadAll = () =>{
    axios
    .get('http://localhost:3000/v2/list-documents')
    .then((res) => {
        setEleves(res.data);
    })
    .catch((error) => {
    });
  }



  const handleImageUpload = (event) => {
    try {
      setLoading(true); // Activer le chargement
  
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
  
      axios.post('http://localhost:3000/v2/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        handleReadAll();
        setStudent(response.data);
      })
      .catch(error => {
        // Gérer les erreurs ici
        console.error('Erreur lors du téléchargement de l\'image:', error);
      })
      .finally(() => {
        setLoading(false); // Désactiver le chargement une fois la requête terminée
      }); 
    } catch (error) {
      console.error('Erreur lors du téléchargement de l\'image:', error);
    }
  };
  
  
  if(!eleves.length)
       {
          return(
            <div className="container">
               {loading && <div className="alert alert-info" role="alert">Chargement en cours...</div>}
               <div className="mt-3">
               <input 
                  className="form-control" 
                  accept=".jpg, .png" 
                  type="file" 
                  onChange={handleImageUpload} 
                  style={{ height: '40px', border: '1px solid #ccc' }} 
                />
            <div>
                <h2 className='student'>Aucun élève</h2>
            </div>
               </div>
           
            </div>
          )
       }
  else{

    return (
      <div className="contenu">
         {loading && <div className="alert alert-info" role="alert">Chargement en cours...</div>}
        {/* Header */}
        {/* Body */}
        <div className="mt-3">
          {/* Input de type file pour télécharger une image */}
          
          <input 
            className="form-control" 
            accept=".jpg, .png" 
            type="file" 
            onChange={handleImageUpload} 
            style={{ height: '40px', border: '1px solid #ccc' }} 
          />
          <br></br>
  
  
  
          {/* Tableau affichant la liste des élèves */}
         
          <table className="table table-striped table-bordered table-hover mt-1 ">
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
                <th scope="col">Paiement</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              
            {(student.length > 0 ? student : eleves).map((person, index) => (
            <tr key={person.DocumentKey}>
              <td>{index + 1}</td>
              <td>{person.nom}</td>
              <td>{person.classe}</td>
              <td>{person.total}</td>
              <td>{person.inscription}</td>
              <td>{person.scolarite}</td>
              <td>{person.numeroDuRecu}</td>
              <td>{person.date}</td>
              <td>{person.modePaiement}</td>
              <td>  
                <button className="btn btn-warning btn-sm m-1">Modifier</button>
                <button className="btn btn-danger btn-sm m-1">Supprimer</button>
              </td>
            </tr>
          ))}
            </tbody>
          </table>
        </div>
      </div>
    );

  }
  
}

export default Extract;
