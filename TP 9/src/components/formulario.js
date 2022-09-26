// Formulario (tiene los filtros de busqueda)
import React, { useState } from 'react';
import storm from '../img/storm.gif'
import Select from 'react-select';

export default function Form(props) {
    const opciones = [
        { value: 'AR', label: 'Argentina' },
        { value: 'US', label: 'Estados Unidos' },
        { value: 'MX', label: 'Mexico' },
        { value: 'CO', label: 'Colombia' },
        { value: 'CR', label: 'Costa Rica' },
        { value: 'ES', label: 'España' },
        { value: 'PE', label: 'Peru' },
    ]
    return (
        <div className="form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <h1 >¡Bienvenido!</h1>
                        <img src={storm} style={{width: '40%'}}></img>
                        <h2>¿De qué ciudad eres? </h2>
                        <form onSubmit={props.llamarAPI}>
                            <div>
                                <div className="label">
                                <label htmlFor="ciudad">Ciudad:</label>
                                </div>
                                <input
                                    type="text"
                                    name="ciudad"
                                    id="ciudad"
                                    onChange={c => props.setCiudad(c.target.value)}
                                    className="input"
                                    style={{height: '30px'}}
                                />

                            </div>
                            <div>
                                <div className='label'>
                                <label htmlFor="pais">Pais:</label>
                                </div>
                                <Select options={opciones} id="pais" name="pais" placeholder="Selecciona tu país" onChange={c => props.setPais(c.value)} className='input'/>
                            </div>
                            <div >
                                <input
                                    type="submit"
                                    value="Buscar Clima ☼"
                                    className="boton"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}