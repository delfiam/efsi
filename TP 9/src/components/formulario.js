// Formulario (tiene los filtros de busqueda)
import React, {useState} from 'react';
import llamarAPI from './clima';
import Select from 'react-select';

export default function Form() {
    const [pais, setPais] = useState('');
    const [ciudad, setCiudad] = useState('');
    const opciones = [
        { value: 'AR', label: 'Argentina' },
        {value: 'US', label: 'Estados Unidos'},
        {value: 'MX', label: 'Mexico'},
        {value: 'CO', label: 'Colombia'},
        {value: 'CR', label: 'Costa Rica'},
        {value: 'ES', label: 'España'},
        {value: 'PE', label: 'Peru'},
    ]
    return (
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <form onSubmit={llamarAPI}>
                            <div className="input-field col s12">
                            <label htmlFor="ciudad">Ciudad:</label>
                                <input
                                    type="text"
                                    name="ciudad"
                                    id="ciudad"
                                    onChange={c => setCiudad(c.target.value)}
                                />
                              
                            </div>
                            <div className="input-field">
                            <label htmlFor="pais">Pais:</label>
                           <Select options={opciones} id="pais" name="pais" placeholder="Selecciona tu país" />
                            </div>
                            <div className="input-field col s12">
                                <input
                                    type="submit"
                                    value="Buscar Clima"
                                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}