import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="app">
      <Header
        titulo = 'Clima React'
      />
      <Formulario/>
    </div>
  );
}

export default App;
