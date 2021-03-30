import React from 'react'

function Tarjeta(props) {
    return (
        <React.Fragment>
            <div className="lista">
                <img src={props.tarjetaData.image} alt='rick' />
                <h2>  {props.tarjetaData.name} </h2>
                <p> Estatus: {props.tarjetaData.status} </p>
                <p> Especie: {props.tarjetaData.species} </p>
                 <p> Origen: {props.tarjetaData.origin.name} </p> 
            </div>
        </React.Fragment>
    );
}

export default Tarjeta;
