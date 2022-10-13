import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} Link to='/' className='brand'>{props.name}</Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} Link to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} Link to='/g'>G</Nav.Link>
            <Nav.Link as={Link} Link to='/pg'>PG</Nav.Link>
            <Nav.Link as={Link} Link to='/pg13'>PG13</Nav.Link>
            <Nav.Link as={Link} Link to='/r'>R</Nav.Link>
            <Nav.Link as={Link} Link to='/r17'>R17+</Nav.Link>
          </Nav>
        <CartWidget className='cart'></CartWidget>
        </Container>
      </Navbar>
  );
}

export default NavBar;