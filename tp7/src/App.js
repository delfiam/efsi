import './App.css';
import FormCita from './components/FormCita';
import Cita from './components/Citas';
function App() {
  return (
      <div id="root">
        <h1>
          Administrador de pacientes
        </h1>
        <div className='container'>
          <div className='row'>
            <div className='one-half column'>
              <h2>Crear cita</h2>
              <FormCita></FormCita>
            </div>
            <div className='one-half column'>
              <h2>Administra tus citas</h2>
              <div className='cita'>
                <Cita></Cita>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
