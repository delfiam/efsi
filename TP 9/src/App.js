import logo from './logo.svg';
import './App.css';
import Form from './components/formulario';
import Header from './components/header';
import Clima from './components/clima';

function App() {
  const llamarAPI = () => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=467eb2e2a1738c82e813a30610d7c354`)
       .then(res => {
         console.log(res);
      
         console.log(res.data);
 
       })
       .catch(error => {
         console.error('error', error)
         alert('Datos incorrectos')
       })
   }
  return (
    <div>
      <Header />
      <Form />
      <Clima />
    </div>
  );
}

export default App;
