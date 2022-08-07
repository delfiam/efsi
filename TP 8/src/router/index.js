import { BrowserRouter, Routes, Route } from "react-router-dom";
import Persona from "../pages/Persona";
import Estadisticas from "../pages/Estadisticas";
import Personas from "../Personas";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarhome from "../components/Navbar";

export default function Router  (){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbarhome />}></Route>
          <Route index element={<Home personas={Personas} />}></Route>
          <Route path="/persona/:id" element={<Persona personas={Personas} />}></Route>
          <Route path="/estadistica" element={<Estadisticas personas={Personas} />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter>
    )
}