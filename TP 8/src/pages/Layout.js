import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/estadistica">Estadisticas</Link>
                <Link className="link" to="/contacto">Contacto</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;