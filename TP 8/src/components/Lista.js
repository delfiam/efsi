import { Link } from "react-router-dom";

export default function Lista({personas}) {
<div className="lista">
{personas.map((p) => {
    let link = `/persona/${p.id}`;
    return (
        <div className="card">
            <p> {p.nombre} {p.apellido} </p>
            <Link to={link} className="link">Buscar persona</Link>
        </div>
    )
})}
</div>
}