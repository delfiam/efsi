import Navbarhome from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Personas from "../Personas";
import Lista from "../components/Lista";
import GhostSpider from "../img/GhostSpider.png";

export default function Home() {
    return (
        <div>
            <Navbarhome personas={Personas}></Navbarhome>
            <div className="content">
                <h2>Lista de personas</h2>
                <div>
                    <img src={GhostSpider} alt="GhostSpider" />
                    <Lista personas={Personas}> </Lista>
                </div>
            </div>
        </div>
    )
}