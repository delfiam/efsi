import * as React from 'react';
import '../css/bootstrap.min.css';
import '../css/styles.css'
import { listadoproductos } from './Productos';
import { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ProductosContext from './Context';
export default function CarritoCompra() {
    const {carrito, setCarrito } = useContext(ProductosContext);

    const eliminarProducto = (producto) => {
       carrito.filter((item) => item.id !== producto.id);
       setCarrito(carrito);
        listadoproductos.map((producto) => {
            producto.añadido = false;
        })
    }

    return (
            <div>
                {carrito.map((producto) => {
                    let imagen = producto.foto;
                    let nombre = producto.nombre;
                    let descripcion = producto.descripcion;
                    let precio = producto.precio;
                    return (
                            <div className="card ">
                                <img src={imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{nombre}</h5>
                                    <p className="card-text">{descripcion}</p>
                                    <p className="card-text">Precio: ${precio}</p>
                                    <Button variant="primary" onClick={eliminarProducto(producto)}>eliminarProducto</Button>
                                </div>
                            </div>

                    )
                })}
        </div>

    );
}