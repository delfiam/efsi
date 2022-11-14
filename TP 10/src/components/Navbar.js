import Container from 'react-bootstrap/Container'
import { useState, useContext, useEffect } from 'react';
import '../css/bootstrap.min.css';
import '../css/styles.css'
import Logo from '../img/Logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';
import { HiShoppingCart } from 'react-icons/hi2'
import ProductosContext from './Context';
import CarritoCompra from './CarritoCompra';
export default function Navbarf() {
  const { carrito, setCarrito } = useContext(ProductosContext);
  return (
    <>
      <header className="Container-sm">
        <nav className="navbar navbar-expand-lg bg-light">
          <Container className="Container">
            <a className="navbar-brand" href="https://www.youtube.com/watch?v=BbXJ3_AQE_o" ><img src={Logo} className="navbarimg" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Container className="collapse navbar-collapse" id="navbarSupportedConten">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/" style={{ color: "black" }}>Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/QuienesSomos" style={{ color: "black" }}>Quienes somos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Productos" style={{ color: "black" }}>Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contacto" style={{ color: "black" }}>Contacto</a>
                </li>
                <li className="nav-item">
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={<HiShoppingCart />}>
                    <NavDropdown.Item ><CarritoCompra/></NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
            </Container>
          </Container>
        </nav>
      </header>
    </>
  );

}