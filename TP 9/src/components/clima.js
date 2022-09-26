/* 
Los campos que deben usar son:
main.temp
main.temp_max
main.temp_min
para que la temperatura se muestre en la unidad de medida que conocemos hay que restarle un valor fijo llamado Kelvin. Ese valor es 273.15
*/
import React, { useState } from 'react';

export default function Clima(props) {
console.log(props.temperatura.temp)
  return (
    <div className="col m6 s12">
      <div className="card-panel white col s12">
        <div className="clima">
          <h2>El clima de {props.ciudad} es:</h2>
          <p className="temperatura">
       {Math.round(props.temperatura.temp)} <span> °C </span>
          </p>
          <p>
            Temperatura Maxima:  {Math.round(props.temperatura.temp_max)} <span> °C </span>
          </p>
          <p>
            Temperatura Minima: {Math.round(props.temperatura.temp_min)} <span> °C </span>
          </p>
        </div>
      </div>
    </div>
  )

}
