import Cita from "./Citas"
export default function Listado({citas}) {
    return (
        <div className='one-half column'>
            <h2>Administra tus citas</h2>
            <div>
            {
                citas.map( (cita) =>(
                    <Cita props={cita}></Cita>
                ))
            }
            </div>

        </div>
    )
}