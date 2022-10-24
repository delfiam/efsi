import { Link, Outlet } from "react-router-dom";
import Footers from "../components/Footer";
import Navbarf from "../components/Navbar";
const Layout = () => {
    return (
        <>
            <Navbarf>
                <Link to="/">Home</Link>
                <Link to="/QuienesSomos">Quienes Somos</Link>
                <Link to="/Productos">Productos</Link>
                <Link to="/Contacto">Contacto</Link>
            </Navbarf>
            <Outlet />
            <Footers />
            
        </>
    );
};

export default Layout;
