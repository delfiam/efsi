import { useParams } from "react-router-dom";
import PersonaCard from "../components/PersonaCard";
import Button from "react-bootstrap/Button";
import Navbarhome from "../components/Navbar";
export default function Persona({ personas }) {
    const { id } = useParams();
    let persona = personas.filter(p => p.id === id)
    console.log(persona)
    let p = persona[0]
    return (
        <div>
            <Navbarhome personas={personas}></Navbarhome>
            <div className="container">
                <PersonaCard persona={p}></PersonaCard>
                <Button variant="primary" href="/"> Volver </Button>
            </div>
        </div>
    )
}