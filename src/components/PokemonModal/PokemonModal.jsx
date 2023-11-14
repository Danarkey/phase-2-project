import React from 'react'
import './PokemonModal.css'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

const PokemonModal = ({ pokemon, image, closeModal, type }) => {
    const typeColorMap = {
        bug: '#C3CE75',
        dark: '#333',
        dragon: '#F9BE00',
        electric: '#FFD86F',
        fairy: '#f469a9',
        fighting: '#d6b591',
        fire: '#FB6C6C',
        flying: '#BAB0D5',
        ghost: '#735797',
        grass: '#48D0B0',
        ground: '#B1736C',
        ice: '#7FCCEC',
        normal: '#C2C2A1',
        poison: '#7C538C',
        psychic: '#9B7FA6',
        rock: '#a6aab6',
        steel: '#CCCCDE',
        water: '#609FB5',
    };

    const modalStyle = {
        backgroundColor: typeColorMap[type] || 'gray',
    };

    const addToFavourites = async () => {
        try {
            const response = await fetch('http://localhost:3001/favourites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pokemon),
            });

            if (response.ok) {
                console.log('Pokemon added to favourites!');
            } else {
                console.error('Failed to add Pokemon to favourites');
            }
        } catch (error) {
            console.error('Error adding to favourites:', error);
        }
    };

    return (
        <>
            <ModalOverlay />
            <div className="modal" style={modalStyle} data-state="open">
                <button className="modal-close" onClick={closeModal}></button>
                {pokemon && (
                    <div className="pokemon-details">
                        <div>
                            <h2>{pokemon.name}</h2>
                            <div className="pokemon-content">
                                <img
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                />
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Stat</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pokemon.stats.map((stat) => (
                                            <tr key={stat.stat.name}>
                                                <td>{stat.stat.name}:</td>
                                                <td className="stat-value">
                                                    <span className="stat-number">{stat.base_stat}</span>
                                                    <div className="PokemonStats-bar" style={{ width: `${(stat.base_stat / 255) * 100}%` }}></div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <button className="FavouritesButton" onClick={addToFavourites}>Add to Favourites</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default PokemonModal;

