import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <Row className="g-4">
      {pokemons.map(pokemon => (
        <Col key={pokemon.name} xs={12} sm={6} md={3} xl={2}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
    </Row>
  );
}

export default PokemonGrid;
