import { Link, Outlet } from "react-router-dom";
import Navbarf from "../components/Navbar";
const Layout = () => {
 return (
   <>
<Navbarf>
<Link to="/home">Home</Link>
<Link to="/quienes-somos">Quienes Somos</Link>
<Link to="/contacto">Contacto</Link>
</Navbarf>
<Outlet />
   </>
 );
};

export default Layout;
