export default function PersonaCard({persona}){
    return (
        <div className="persona">
            <p>Nombre:</p>
            <span>{persona.nombre}</span>
            <p>Apellido:</p>
            <span>{persona.apellido}</span>
            <p>Email:</p>
            <span>{persona.email}</span>
            <p>Edad:</p>
            <span>{persona.edad}</span>
           
        </div>
    )
}