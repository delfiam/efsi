import * as React from 'react';
import '../css/bootstrap.min.css';
import '../css/styles.css'
import { listadoproductos } from './Productos';
import { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ProductosContext from './Context';
import Card from 'react-bootstrap/Card';
export default function CarritoCompra() {
    const [carrito, setCarrito] = useContext(ProductosContext);

    const eliminarProducto = (id) => {
        let eliminado = carrito.filter((i, idx) => idx !== id)
        setCarrito(eliminado);
        console.log(carrito);
    }
    const obtenerpreciototal = () => {
        let total = 0;
        carrito.forEach((producto) => {
            total += producto.precio;
        })
        return total;
    }

  
    return (
        <div>
            {carrito.map((producto) => {
                producto.id = carrito.indexOf(producto);
                let imagen = producto.foto;
                let nombre = producto.nombre;
                let descripcion = producto.descripcion;
                let precio = producto.precio;
                return (
                        <div className="card " style={{ width: '15rem' }}>
                            <img src={imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{nombre}</h5>
                                <p className="card-text">{descripcion}</p>
                                <p className="card-text">Precio: ${precio}</p>
                                <Button variant="primary" onClick={() => eliminarProducto(producto.id)}>Eliminar producto</Button>
                            </div>
                        </div>
                )
            })}
             <Card>
                            <Card.Body style={{width: 50}}>{carrito.length ? 'Total:' + obtenerpreciototal() : 'No hay elementos en el carrito'  }</Card.Body>
                        </Card>
        </div>

    );
}