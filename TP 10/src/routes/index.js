import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Navbarf from "../components/Navbar";
import Footers from "../components/Footer";
import QuienesSomos from "../pages/quienesomos";
import ProductosPage from "../pages/productos";
import Contacto from "../pages/contacto";
import Layout from "./layout";

export default function Router  (){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/QuienesSomos" element={<QuienesSomos />}></Route>
          <Route path="/Productos" element={<ProductosPage />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
         </Route>
        </Routes>
      </BrowserRouter>
    )
}