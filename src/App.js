import React, {Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

class App extends Component {

  datosConsulta = respuesta => {
    console.log(respuesta); 
  }

  render(){
    return (
      <div className="app">
        <Header
          titulo = 'Clima React'
        />
        <Formulario
          datosConsulta = {this.datosConsulta}
        />
      </div>
    );
  }
  
}

export default App;
