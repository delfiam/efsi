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

export default function llamarAPI(pais, ciudad) {
  axios.get("http://api.openweathermap.org/data/2.5/weather?q=" +ciudad+ ',' + pais)
  .then (res=> {
    let ciudadT = document.getElementById('ciudad');
    ciudadT.innerText = res;

  })
  .catch(error => {
    console.error('error', error)
    alert('Datos incorrectos')
  })

    return (
     <Text>Hola</Text>
    )
    
}
