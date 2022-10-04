import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarf from './components/Navbar';
import Footers from './components/Footer';
import  Carrousel  from './components/Carrousel';
import Cards from './components/Card'
import Containers from './components/Container'

function App() {
  return (
    <div className="App">
        <Navbarf></Navbarf>
        <Carrousel></Carrousel>
      <div className='container'>
        <div>
        
        </div>
        <div>
          <Cards></Cards>
        </div>
        <hr className="mt-3 mb-3"/>
        <div>
          <Containers></Containers>
        </div>
      </div>
      
      <Footers></Footers>

    </div>
  );
}

export default App;
