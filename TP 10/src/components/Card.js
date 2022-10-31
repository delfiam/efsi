import '../css/bootstrap.min.css';
import '../css/styles.css'
import Capa1 from '../img/Capa-1.png'
import { listadoproductos } from './Productos';

export default function Cards() {
    return (
        <div>
            <div style={{ marginTop: 50, marginBottom: 50 }}>
                <h3>Productos destacados</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">


                {listadoproductos.map((producto) => {
                    let imagen = producto.foto;
                    let nombre = producto.nombre;
                    let descripcion = producto.descripcion;
                    let precio = producto.precio;
                    return (
                        <div className="col">
                            <div className="card ">
                                <img src={imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{nombre}</h5>
                                    <p className="card-text">{descripcion}</p>
                                    <p className="card-text">Precio: ${precio}</p>
                                </div>
                            </div>
                        </div>

                    )
                })}


            </div>
        </div>

    );
}