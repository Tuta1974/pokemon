import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PokemonCard from './PokemonCard';
import ReactPaginate from 'react-paginate';
import '../styles/react-paginate.css';
import ReactPaginate from 'react-paginate';
import '../styles/react-paginate.css';

function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);
  const [limit] = useState(12);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(20);

  const manejarClick =(data) => {
    setCurrentPage(data.selected);
  }

  const lastItem = (currentPage+ 1) * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItem = pokemons.slice(firstItem, lastItem);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1008')
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        console.log(data.next);
      
      });
  }, [limit]);



  return (
    <div>
      <Row className="g-4">
        {currentItem.map((pokemon) => (
          <Col key={pokemon.name} xs={12} sm={6} md={3} xl={2}>
            <PokemonCard pokemon={pokemon} />
          </Col>
        ))}
      </Row>
      <div className='py-3'>
        <ReactPaginate
        className='react-paginate'
        pageCount={Math.ceil(pokemons.length / itemsPerPage)}
        onPageChange={manejarClick}
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
      />
      </div>
      
    </div>
  );
  
}

export default PokemonGrid;
