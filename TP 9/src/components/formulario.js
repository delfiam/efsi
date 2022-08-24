// Formulario (tiene los filtros de busqueda)

export default function Form() {
    return (
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                        <form>
                            <div className="input-field col s12">
                                <input
                                    type="text"
                                    name="ciudad"
                                    id="ciudad"
                                />
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field">
                                <select name="pais" id="pais">
                                    <option value="">-- Seleccion un Pais --</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">México</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="PE">Perú</option>
                                </select>
                                <label htmlFor="pais">Pais:</label>
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
                </div>
            </div>
        </div>
    )
}