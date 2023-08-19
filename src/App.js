import React, { useEffect, useState } from 'react';
import Rutas from './components/Rutas';

//Componete de recarga 
import Loading from './components/Loading';

import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [locked, setLocked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Recuperar el estado de isDarkMode del localStorage al cargar la página
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('isDarkMode');
    if (storedDarkMode !== null) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }
    // Simulando una carga asíncrona
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <div className="App">
      {isLoading ? 
      ( 
        <Loading />
      ) : 
      (
        <header className={`Primary_container ${isDarkMode ? "dark" : "clear"} ${locked ? 'width80' : 'width100'}`}>
          <div id='object'>
            <ul id='box'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Rutas locked={locked} setLocked={setLocked} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </header>
      )}
    </div>
  );
}

export default App;
