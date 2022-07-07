import './App.css';
import { citas } from './components/FormCita';
import Listado from './components/Listado';
import CrearCita from './components/CrearCIta';

function App() {

  return (
    <div id="root">
      <h1>
        Administrador de pacientes
      </h1>
      <div className='container'>
        <div className='row'>
          <CrearCita></CrearCita>
          <Listado citas={citas}></Listado>
        </div>
      </div>
    </div>
  );
}

export default App;
