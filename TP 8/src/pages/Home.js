import Layout from "./Layout";
import PersonaCard from "../components/PersonaCard";
import { Link } from "react-router-dom";
import Navbarhome from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Personas from "../Personas";

export default function Home({ personas }) {
    return (
        <div>
            <header>
                <Layout></Layout>
            </header>
            <Navbarhome personas={Personas}></Navbarhome>
            <div className="content">
                <h2>Lista de personas</h2>
                <div>
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
                </div>
            </div>
        </div>
    )
}