import { useParams } from "react-router-dom";
import PersonaCard from "../components/PersonaCard";
export default function Persona({ personas }) {
    const { id } = useParams();
    let persona = personas.filter(p => p.id === id)
    console.log(persona)
    let p = persona[0]
    return (
        <div className="persona">

            <p>Nombre: {p.nombre}</p>
            <p>Apellido: {p.apellido}</p>
            <p>Email: {p.email}</p>
            <p>Edad: {p.edad}</p>
            </div>
    )
}