import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        console.log(data.results)}
        );
     
  }, []);


  return (
    <Row xs={1} md={6} className="g-4">
      {pokemons.map(pokemon => (
        
        <Col key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
    </Row>
 
  );
}

export default PokemonGrid;
