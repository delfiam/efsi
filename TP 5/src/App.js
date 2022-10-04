import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarf from './components/navbar';
import Footers from './components/footer';
import  Carrousel  from './components/carrousel';
import Cards from './components/card'
import Containers from './components/container'

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
