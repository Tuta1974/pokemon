import React from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(34, -1)}.png`;
 
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
      <Card.Title>Nº00{pokemon.url.slice(34, -1)}</Card.Title>
       <Card.Title>{pokemon.name}</Card.Title>
       
      </Card.Body>
    </Card>
  
 
  );
}

export default PokemonCard;