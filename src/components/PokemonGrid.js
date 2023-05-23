import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PokemonCard from './PokemonCard';
import ReactPaginate from 'react-paginate';
import '../styles/PokemonGrid.css';
import '../styles/react-paginate.css';

function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(20);

  const manejarClick = (data) => {
    setCurrentPage(data.selected);
  };

  const lastIndex = (currentPage + 1) * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = searchResults.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1008')
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  useEffect(() => {
    // Realiza la búsqueda por nombre y actualiza los resultados
    const resultsByName = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Realiza la búsqueda por ID y actualiza los resultados
    const resultsById = pokemons.filter((pokemon) =>
      pokemon.url.includes(searchTerm)
    );

    // Combina los resultados de ambas búsquedas y elimina duplicados
    const combinedResults = [...resultsByName, ...resultsById];
    const uniqueResults = Array.from(
      new Set(combinedResults.map((pokemon) => pokemon.name))
    ).map((name) => combinedResults.find((pokemon) => pokemon.name === name));

    setSearchResults(uniqueResults);
  }, [searchTerm, pokemons]);

  return (
    <div>
      <header className="py-3 d-flex justify-content-center ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="Pokemon"
        />
      </header>
      <main>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Filtro por nombre o ID..."
          />
        </div>
        <Row className="g-3">
          {currentItems.map((pokemon) => (
            <Col key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
              <PokemonCard pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </main>
      <div className="py-3">
        <ReactPaginate
          className="react-paginate"
          pageCount={Math.ceil(searchResults.length / itemsPerPage)}
          onPageChange={manejarClick}
          previousLabel={'<'}
          nextLabel={'>'}
        />
      </div>
    </div>
  );
}

export default PokemonGrid;
