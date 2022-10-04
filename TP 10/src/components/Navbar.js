import Container from 'react-bootstrap/Container'
import '../css/bootstrap.min.css';
import  '../css/styles.css'
import Logo from '../img/Logo.png'
export default function Navbarf() {
    return (
        /*
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><img src="./img/logo.png" alt="" /></Navbar.Brand>
          <Nav classNameName="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Quienes somos</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
            <Nav.Link href="https://www.youtube.com/watch?v=q4GdJVvdxss">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */

      <header className="Container-sm">
            <nav className="navbar navbar-expand-lg bg-light">
                <Container className="Container">
                  <a className="navbar-brand" href="https://www.youtube.com/watch?v=BbXJ3_AQE_o" ><img src={Logo} className="navbarimg" alt=""/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <Container className="collapse navbar-collapse" id="navbarSupportedConten">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#" style={{color: "black"}}>Inicio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#" style={{color: "black"}}>Quienes somos</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#" style={{color: "black"}}>Productos</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/#" style={{color: "black"}}>Contacto</a>
                      </li>
                    </ul>
                  </Container>
                </Container>
              </nav>
        </header>
    );
}