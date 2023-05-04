import React from 'react';
import Card from 'react-bootstrap/Card';

function PokemonCard({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.slice(34, -1)}.png`;

  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;