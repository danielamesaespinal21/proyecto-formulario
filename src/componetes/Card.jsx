import React from 'react'

const Card = (props) => {
    return (
        <div style={{
            backgroundColor:'#E9ECC4',
        }}>
            <p>Hola {props.nombre}</p>
            <p>Sabemos que tu color Favorito es:</p>
            <p>{props.color}</p>
        </div>
    )
}

export default Card