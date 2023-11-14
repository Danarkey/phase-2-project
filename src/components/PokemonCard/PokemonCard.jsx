import React from 'react'
import './PokemonCard.css'

const PokemonCard = ({ id, image, name, type, openModal }) => {
    const style = type + " card-container";

    return (
        <div className={style} onClick={() => openModal()}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
        </div>
    );
};

export default PokemonCard