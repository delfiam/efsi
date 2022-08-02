import { useParams } from "react-router-dom";
import PersonaCard from "./PersonaCard";
export default function Persona({personas}) {
    const { id } = useParams();
    let persona = personas.filter(p => p.id == id)
    console.log(persona)
    return (
        <div className="persona">
            <PersonaCard persona={persona[0]}></PersonaCard>
        </div>
    )
}