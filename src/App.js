import React, {Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';

class App extends Component {

  state = {
    error: '',
    consulta : {}
  }

  componentDidUpdate(){
    this.consultarApi();
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  consultarApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;

    //query con fetch api

    //leer url y agregar apikey

    //consultar con fetch

  }

  datosConsulta = respuesta => {
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })
    } else {
      this.setState({
        consulta: respuesta
      })
    }
  }

  render(){

    const error = this.state.error;
    let resultado;

    if(error){
      resultado = <Error mensaje= "Ambos campos son obligatorios"/>
    }

    return (
      <div className="app">
        <Header
          titulo = 'Clima React'
        />
        <Formulario
          datosConsulta = {this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
  
}

export default App;
