import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand className='brand' href="#inicio">{props.name}</Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        <CartWidget className='cart'></CartWidget>
        </Container>
      </Navbar>
  );
}

export default NavBar;