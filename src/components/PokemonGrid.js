import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);
  const [paginas, setPaginas] = useState('https://pokeapi.co/api/v2/pokemon?limit=6&offset=0');




  useEffect(() => {
    fetch(paginas)
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        console.log(data.next);
        setPaginas(data.next)
      });
  }, []);





  return (
    <Row className="container g-4 m-0">
      {pokemons.map(pokemon => (
        <Col key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
      <button className='btn-cargar'>Cargar más Pokémon</button>
    </Row>
    
  );
  
}

export default PokemonGrid;
