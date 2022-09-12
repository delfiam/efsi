// Header (encabezado del sitio. no tiene funcionalidad
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar  expand="lg" className='nav'>
      <Container className='nav container'>
        <Navbar.Brand href="#home" >TP 9</Navbar.Brand>
      </Container>
    </Navbar>
    )
}