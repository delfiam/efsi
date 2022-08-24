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

function llamarAPI() {
    return (
        /* esto es copiado del tp 4 de efsi no te olvides de cambiarlodsjfklsdj */
        axios({
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/APPID=467eb2e2a1738c82e813a30610d7c354',
            params: {
              q: document.getElementById("").value,
            }
          }).then(response => {
            console.log(response);
            let lista = document.getElementById("datos");
            lista.innerHTML = "";
            response.data.Search.forEach(busqueda => {
                let tdt = document.createElement("td");
          
                let tdb = document.createElement("button");
          
          
                tdt.innerText = `${busqueda.Title}`;
          
          
                tdt.style.margin = 2;
                tdb.className = "btn";
                tdty.innerText = `${busqueda.Type}`;
                tdy.innerText = `${busqueda.Year}`;
                lista.appendChild(tr);
          
              });}
        
    )
    )
}
