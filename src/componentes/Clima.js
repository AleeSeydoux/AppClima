import React, {Component} from 'react';

class Clima extends Component {
    render() { 
        console.log(this.props.resultado);
        return ( 
            <div className="container">
                <h1>desde clima.js</h1>
            </div>
         );
    }
}
 
export default Clima;