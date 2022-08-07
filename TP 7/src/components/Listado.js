import Cita from "./Citas"

export default function Listado({ props }) {

    const eliminar = (id) => {
        let nuevas_citas = props.citas.filter(cita => cita.id !== id)
        props.setCitas(nuevas_citas)
    }
    return (
        <div className='one-half column'>
            <h2>Administra tus citas</h2>
            <div>
                {
                    props.citas.map((cita) => (
                        <Cita key={parseInt(cita.id)} props={{cita, eliminar}} ></Cita>
                    ))
                }
            </div>

        </div>
    )
}
