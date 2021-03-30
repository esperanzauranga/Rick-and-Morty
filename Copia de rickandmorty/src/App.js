import React from 'react'
import './App.css'
import Tarjeta from './components/Tarjeta'


import listaTarjetas from './rickandmorty.json';

function App() {
  return (
    <React.Fragment> 
      <header className = "header">
        <h1> Personajes de Rick and Morty </h1> 
      </header>
        
      <div className='contenedor'>
        {listaTarjetas.map(function (tarjeta, idx) {
          return (
          <div>
              <Tarjeta tarjetaData={tarjeta} key={idx}/>
           </div>
          )
        })
      }
    </div>

      <footer>
        Desarrolladores: Esperanza Uranga, Francesca Porro Toyos, Segundo Ustariz
      </footer>
    </React.Fragment>
 
  );
}

export default App;
