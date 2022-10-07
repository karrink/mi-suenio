import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} Link to='/' className='brand'>{props.name}</Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} Link to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} Link to='/'>Productos</Nav.Link>
          </Nav>
        <CartWidget className='cart'></CartWidget>
        </Container>
      </Navbar>
  );
}

export default NavBar;