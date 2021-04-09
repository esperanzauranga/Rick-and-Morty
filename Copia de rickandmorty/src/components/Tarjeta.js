import React, { Component } from 'react'

// function Tarjeta(props) {
//     return (

class Tarjeta extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: this.props.colorFondo
        }
    }

    CambiarColor(nuevoColor) {
        this.setState ({
            color: nuevoColor
        });
        console.log("Cambiar color a:" + nuevoColor);
    }

    render () {

        const {image, name, origin, status, species} = this.props;
        
        return(
            <div className="lista" style={{backgroundColor: this.state.color}}
                onMouseOver={this.CambiarColor.bind(this, "pink")}
                onMouseOut={this.CambiarColor.bind(this, "whitesmoke")}>
                <img src={this.props.tarjetaData.image} alt='rick' />
                <h2>  {this.props.tarjetaData.name} </h2>
                <p> Estatus: {this.props.tarjetaData.status} </p>
                <p> Especie: {this.props.tarjetaData.species} </p>
                <p> Origen: {this.props.tarjetaData.origin.name} </p> 
                <button className="btnColor" 
                onClick = {this.CambiarColor.bind(this, 'grey')}
                > Cambiar color</button>
                <button className="btnEliminar" 
                onClick = {this.CambiarColor.bind(this, 'grey')}
                > Eliminar tarjeta </button>
            </div>
        )    
    }
}
//     );
// }

export default Tarjeta;
