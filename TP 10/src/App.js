import './css/styles.css'
import './css/bootstrap.min.css';
import Navbarf from './components/Navbar';
import Footers from './components/Footer';
import  Carrousel  from './components/Carrousel';
import Cards from './components/Card'
import Containers from './components/Container'
import Router from './routes';

function App() {
  return (
    <div className="App">
      <Router></Router>

    </div>
  );
}

export default App;
