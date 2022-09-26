import Form from "../components/formulario";
import Header from "../components/header";
import Clima from "../components/clima";
import React, { useState } from 'react';
import axios from "axios";

export default function Home() {
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const llamarAPI = () => {
        console.log("llamando a la api");
       
        console.log(pais);
        event.preventDefault();
        if ((pais === undefined) || (ciudad === "")) {
            console.log("no hay datos");
        }
        else {
            const { data } = axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + ciudad + ',' + pais + '&APPID=467eb2e2a1738c82e813a30610d7c354')
                .then(res => {
                    console.log(res);
                    console.log(res.data);
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
        </div>
    );
}
