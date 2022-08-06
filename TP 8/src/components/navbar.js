import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '../pages/Home';
import Estadisticas from '../pages/Estadisticas';
import Contacto from '../pages/Contacto';
import {Outlet} from "react-router-dom";

function Navbarhome({personas}) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">
            Directorio de Personas
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Estadisticas">Estadisticas</Nav.Link>
                    <Nav.Link href="/Contacto">Contacto</Nav.Link>
                    <NavDropdown title="Personas" id="collasible-nav-dropdown">
                         {personas.map((p) => {
                            let link = `/persona/${p.id}`;
                            return (
                                <NavDropdown.Item href={link}>{p.nombre} {p.apellido} </NavDropdown.Item>
                            )
                        })}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
    <Outlet></Outlet>
}

export default Navbarhome;