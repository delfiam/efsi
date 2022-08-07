import React, {useState} from 'react'
import './App.css';
import Listado from './components/Listado';
import CrearCita from './components/CrearCIta';


function App() {
  const [citas, setCitas] = useState([])
  return (
    <div>
      <h1>
        Administrador de pacientes
      </h1>
      <div className='container'>
        <div className='row'>
          <CrearCita citas={setCitas}></CrearCita>
          <Listado props={{citas, setCitas}}></Listado>
        </div>
      </div>
    </div>
  );
}

export default App;
