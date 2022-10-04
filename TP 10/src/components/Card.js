import 'bootstrap/dist/css/bootstrap.min.css';
import  '../css/styles.css'
import Capa1 from '../img/Capa-1.png'

export default function Cards(){
    return(
        <div>
            <div style={{marginTop: 1.5}}>
                    <h3>Productos destacados</h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
                    <div className="col">
                            <div className="card ">
                                <img src={Capa1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">Lavatorios</h5>
                                <p className="card-text">Mueble colgante para lavatorio</p>
                                </div>
                            </div>
                    </div>
                
                
                    <div className="col">
                            <div className="card ">
                                <img src={Capa1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">Lavatorios</h5>
                                <p className="card-text">Mueble colgante para lavatorio</p>
                                </div>
                            </div>
                    </div>
                
                
                    <div className="col">
                            <div className="card ">
                                <img src={Capa1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">Lavatorios</h5>
                                <p className="card-text">Mueble colgante para lavatorio</p>
                                </div>
                            </div>
                    </div>
                
                    <div className="col">
                            <div className="card ">
                                <img src={Capa1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">Lavatorios</h5>
                                <p className="card-text">Mueble colgante para lavatorio</p>
                                </div>
                            </div>
                    </div>
                
                
                    <div className="col">
                            <div className="card ">
                                <img src={Capa1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">Lavatorios</h5>
                                <p className="card-text">Mueble colgante para lavatorio</p>
                                </div>
                            </div>
                    </div>
               
                    <div className="col">
                            <div className="card ">
                                <img src={Capa1} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                <h5 className="card-title">Lavatorios</h5>
                                <p className="card-text">Mueble colgante para lavatorio</p>
                                </div>
                            </div>
                    </div>
            
               
               
            </div>
        </div>
                
    );
}