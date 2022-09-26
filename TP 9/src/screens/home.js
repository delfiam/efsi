/*Key de api: 467eb2e2a1738c82e813a30610d7c354

Ejemplo de url: http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires,argentina&APPID=467eb2e2a1738c82e813a30610d7c354
 */ 
import Form from "../components/formulario";
import Header from "../components/header";
import Clima from "../components/clima";
import React, { useState } from 'react';
import axios from "axios";

export default function Home() {
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [temperatura, setTemp] = useState({temp_max: 0, temp_min: 0, temp: 0});
    const llamarAPI = () => {
        console.log("llamando a la api");
        console.log(pais);
        event.preventDefault();
        if ((pais === '') || (ciudad === "")) {
            console.log("no hay datos");
        }
        else {
            return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad + ',' + pais + '&APPID=467eb2e2a1738c82e813a30610d7c354')
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    const kelvin = 273.15;
                    const temp = parseInt(res.data.main.temp) - kelvin;
                    const temp_max = parseInt(res.data.main.temp_max) - kelvin;
                    const temp_min = parseInt(res.data.main.temp_min) - kelvin;
                    setTemp({temp_max: temp_max, temp_min: temp_min, temp: temp});
                    console.log(temp)
                    console.log(temperatura.temp)
                })
                .catch(error => {
                    console.error('error', error)
                    alert('Datos incorrectos')
                })
        }
    }
    return (
        <div>
            <Header />
            <Form llamarAPI={llamarAPI} setCiudad={setCiudad} setPais={setPais} />
            <Clima temperatura={temperatura}/>
        </div>
    );
}

