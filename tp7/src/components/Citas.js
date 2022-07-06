export default function Cita(props) {
    return (
        <div>
            <p>Mascota:</p>
            <span>{props.nombre}</span>
            <p>Fecha:</p>
            <span>{props.fecha}</span>
            <p>Hora:</p>
            <span>{props.hora}</span>
            <p>Sintomas:</p>
            <span>{props.sintomas}</span>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    )
}