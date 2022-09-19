import logo from './logo.svg';
import './App.css';
import Form from './components/formulario';
import Header from './components/header';
import Clima from './components/clima';

function App() {
  return (
    <div>
    <div>
      <Header></Header>
      </div>
      <div>
        <Form/>
    </div>    
    <div>
      <Clima></Clima>
    </div>
    </div>
  );
}

export default App;
