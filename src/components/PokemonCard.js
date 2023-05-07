import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/PokemonCard.css'

function PokemonCard({ pokemon }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    fetch(pokemon.url)
      .then(response => response.json())
      .then(data => setPokemonInfo(data))
      .catch(error => console.log(error));
  }, [pokemon.url]);

  if (!pokemonInfo) return null;

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(34, -1)}.png`;
  const pokemonNumber = `#${pokemonInfo.id.toString().padStart(3, '0')}`;
  const pokemonTypes = pokemonInfo.types.map(type => type.type.name);

  const getTypeColor = (type) => {
    switch (type) {
      case 'normal':
        return '#A8A878';
      case 'fire':
        return '#F08030';
      case 'water':
        return '#6890F0';
      case 'electric':
        return '#F8D030';
      case 'grass':
        return '#78C850';
      case 'ice':
        return '#98D8D8';
      case 'fighting':
        return '#C03028';
      case 'poison':
        return '#A040A0';
      case 'ground':
        return '#E0C068';
      case 'flying':
        return '#A890F0';
      case 'psychic':
        return '#F85888';
      case 'bug':
        return '#A8B820';
      case 'rock':
        return '#B8A038';
      case 'ghost':
        return '#705898';
      case 'dragon':
        return '#7038F8';
      case 'dark':
        return '#705848';
      case 'steel':
        return '#B8B8D0';
      case 'fairy':
        return '#EE99AC';
      default:
        return '#000';
    }
  };

  return (
    <Card className="shadow-sm poke-card">
      <Card.Img className="imagen-card" variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{pokemonNumber}</Card.Subtitle>
        <Card.Title className='text-capitalize' style={{fontWeight: '800'}}>
          {pokemon.name}
        </Card.Title>
        <Card.Text>
          {pokemonTypes.map((type, index) => (
            <span
              key={index}
              style={{ backgroundColor: getTypeColor(type) }}
              className='badge rounded-pill me-1'
            >
              {type}
            </span>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;



