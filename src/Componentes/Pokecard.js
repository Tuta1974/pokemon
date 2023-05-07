import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

function Pokecard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{"backgroundColor":"#f2f2f2"}} src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
      <Card.Body>
        <Card.Text className='m-0' > Nº0001</Card.Text>
        <Card.Title className='m-0'>Bulbasaur</Card.Title>
        <div>
        <Badge bg="success" className='m-2' style={{ width: '30%' }} >Planta</Badge>
        <Badge bg="danger" className='m-2' style={{ width: '30%' }} >Veneno</Badge>
        </div>

      </Card.Body>
    </Card>
  );
}

export default Pokecard;