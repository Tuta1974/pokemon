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

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`;
  const pokemonNumber = `N.º ${pokemonInfo.id.toString().padStart(4, '0')}`;
  const pokemonTypes = pokemonInfo.types.map(type => type.type.name);

  const getTypeColor = (type) => {
    switch (type) {
      case 'normal':
        return 'linear-gradient(#a4acaf 50%,#a4acaf 50%)';
      case 'fire':
        return 'linear-gradient(#fd7d24 50%,#fd7d24 50%)';
      case 'water':
        return 'linear-gradient(#4592c3 50%,#4592c3 50%)';
      case 'electric':
        return 'linear-gradient(#a4acaf 50%,#a4acaf 50%)';
      case 'grass':
        return 'linear-gradient(#9bcc50 50%,#9bcc50 50%)';
      case 'ice':
        return 'linear-gradient(#51c4e7 50%,#51c4e7 50%)';
      case 'fighting':
        return 'linear-gradient(#d56723 50%,#d56723 50%)';
      case 'poison':
        return 'linear-gradient(#b97fc9 50%,#b97fc9 50%)';
      case 'ground':
        return 'linear-gradient(#f7de3f 50%,#ab9842 50%)';
      case 'flying':
        return 'linear-gradient(#3dc7ef 50%,#bdb9b8 50%)';
      case 'psychic':
        return 'linear-gradient(#f366b9 50%,#f366b9 50%)';
      case 'bug':
        return 'linear-gradient(#729f3f 50%,#729f3f 50%)';
      case 'rock':
        return 'linear-gradient(#a38c21 50%,#a38c21 50%)';
      case 'ghost':
        return 'linear-gradient(#51c4e7 50%,#51c4e7 50%)';
      case 'dragon':
        return 'linear-gradient(#53a4cf 50%,#f16e57 50%)';
      case 'dark':
        return 'linear-gradient(#707070 50%,#707070 50%)';
      case 'steel':
        return 'linear-gradient(#9eb7b8 50%,#9eb7b8 50%)';
      case 'fairy':
        return 'linear-gradient(#ab9842 50%,#ab9842 50%)';
      default:
        return 'linear-gradient(#000 50%,#000 50%)';
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
              style={{ backgroundImage: getTypeColor(type) , width: "85px", textTransform: "capitalize"}}
              className='badge me-1'
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



