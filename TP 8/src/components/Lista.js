import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export default function Lista({personas}) {
    return (
    <div className="lista">
        {personas.map((p) => {
            let link = `/persona/${p.id}`;
            return (
                <div className="card">
                    <p> {p.nombre} {p.apellido} </p>
                   <Button href={link}> Buscar persona </Button>
                </div>
            )
        })}
    </div>
    )
}