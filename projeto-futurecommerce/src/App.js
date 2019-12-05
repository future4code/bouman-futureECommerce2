import React from 'react';
import logo from './logo.svg';
import './App.css';
import Produto from './Components/Produto/Produto'

function App() {
  return (
    <div className="App">
        <section>      
          <fieldset>
            <legend>
              <h2>Filtros</h2>
            </legend>

            <input type="number" placeholder="Valor mínimo:"></input><br/>
            <input type="number" placeholder="Valor máximo:"></input><br/>
            <input type="number" placeholder="Buscar produto:"></input><br/>
          </fieldset>
        </section>

        <section>
          <Produto/>
        </section>
    </div>
  );
}

export default App;
