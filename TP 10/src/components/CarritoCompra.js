import * as React from 'react';
import '../css/bootstrap.min.css';
import '../css/styles.css'
import { listadoproductos } from './Productos';
import { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ProductosContext from './Context';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Row, Col } from 'react-bootstrap';
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
                  <Row xs={1} md={2} className="justify-content-md-center">
      {Array.from({ length: 4 }).map((_, idx) => (
          <Col md="auto">
            {carrito.map((producto) => {
                producto.id = carrito.indexOf(producto);
                let imagen = producto.foto;
                let nombre = producto.nombre;
                let descripcion = producto.descripcion;
                let precio = producto.precio;
                return (
                  
                        <Card className="card " style={{ width: '12rem', whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                            <Card.Img variant="top" src={imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{nombre}</h5>
                                <p className="card-text">{descripcion}</p>
                                <p className="card-text">Precio: ${precio}</p>
                                <Button variant="primary" onClick={() => eliminarProducto(producto.id)}>Eliminar producto</Button>
                            </div>
                        </Card>
                      
                )
            })}
              </Col>
            ))}
            </Row>
             <Card>
                            <Card.Body style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{carrito.length ? 'Total:' + obtenerpreciototal() : 'No hay elementos en el carrito'  }</Card.Body>
                        </Card>
        </div>

    );
}