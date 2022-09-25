/* 
Key de api: 467eb2e2a1738c82e813a30610d7c354

Ejemplo de url: http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires,argentina&APPID=467eb2e2a1738c82e813a30610d7c354
Los campos que deben usar son: 

main.temp
main.temp_max
main.temp_min
para que la temperatura se muestre en la unidad de medida que conocemos hay que restarle un valor fijo llamado Kelvin. Ese valor es 273.15
*/

import axios from "axios";

export default function Clima(pais, ciudad) {
  const [temperatura, SetTemp] = useState({temp_max: 0, temp_min: 0, temp: 0});
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
    <div className="col m6 s12">
      <div className="card-panel white col s12">
        <div className="black-text">
          <h2>El clima de Buenos Aires es:</h2>
          <p className="temperatura">
            23.29 <span> &#x2103; </span>
          </p>
          <p>
            Temperatura Maxima
            25.57 <span> &#x2103; </span>
          </p>
          <p>
            Temperatura Minima
            21.85 <span> &#x2103; </span>
          </p>
        </div>
      </div>
    </div>
  )

}
