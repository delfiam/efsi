import FormCita from "./FormCita"
export default function CrearCita({ citas }) {
    return (
        <div className='one-half column'>
            <h2>Crear cita</h2>
            <FormCita citas={citas}></FormCita>
        </div>
    )
}