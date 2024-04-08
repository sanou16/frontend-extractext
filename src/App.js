import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Extract from './extract';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListeDesEleves from './ListeDesEleves';


function App() {
  return (
    <BrowserRouter>
      <div>
         <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Accueil</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/liste">Liste des élèves</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Routes>
          <Route path="/" element={  <Extract /> }/>
          <Route path="/liste" element={ <ListeDesEleves /> } />
          {/* Définissez d'autres routes si nécessaire */}
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
