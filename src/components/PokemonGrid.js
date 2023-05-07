import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PokemonCard from './PokemonCard';

function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(12);




  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        console.log(data.results);
        
      });
  }, [limit]);





  return (
    <Row className="container g-3 m-0">
      {pokemons.map(pokemon => (
        <Col key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
      <button onClick={()=>setLimit (limit+12)} className='btn-cargar'>Cargar más Pokémon</button>
    </Row>
 
    
  );
  
}

export default PokemonGrid;
