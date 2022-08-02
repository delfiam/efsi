import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Personas from "./Personas";
import Estadisticas from './components/Estadisticas'
import Persona from "./components/Persona";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import Layout from "./components/Layout";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="/persona/:id" element={<Persona personas={Personas} />}></Route>
          <Route path="/estadistica" element={<Estadisticas personas={Personas} />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
