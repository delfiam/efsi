export default function Cita({props}) {
    console.log(props)
    return (
        <div class="cita">
            <p>Mascota:</p>
            <span>{props.cita.nombreMascota}</span>
            <p>Mascota:</p>
            <span>{props.cita.nombrePropietario}</span>
            <p>Fecha:</p>
            <span>{props.cita.fecha}</span>
            <p>Hora:</p>
            <span>{props.cita.hora}</span>
            <p>Sintomas:</p>
            <span>{props.cita.sintomas}</span>
            <button className="button eliminar u-full-width" onClick={() => props.eliminar(props.cita.id)}>Eliminar</button>
        </div>
    )
}
