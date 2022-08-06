

export default function PersonaCard(props){

    return (
        <div className="card">
            <p>Nombre: {props.persona.nombre}</p>
            <p>Apellido: {props.persona.apellido}</p>
            <p>Email: {props.persona.email}</p>
            <p>Edad: {props.persona.edad}</p>
        </div>
    )
}