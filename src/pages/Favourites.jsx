import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard/PokemonCard';

const FavouritesPage = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const response = await fetch('http://localhost:3001/favourites');
                if (response.ok) {
                    const data = await response.json();
                    setFavourites(data);
                } else {
                    console.error('Failed to fetch favourites');
                }
            } catch (error) {
                console.error('Error fetching favourites:', error);
            }
        };

        fetchFavourites();
    }, []);

    return (
        <div>
            <h2>Your Favourites</h2>
            <div className="pokemon-container">
                <div className="all-container">
                    {favourites.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            id={pokemon.id}
                            image={pokemon.sprites.front_default}
                            name={pokemon.name}
                            type={pokemon.types[0].type.name}
                        // You may need to adjust the props based on your actual data structure
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavouritesPage;