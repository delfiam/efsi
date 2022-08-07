import Navbarhome from "../components/Navbar";
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Personas from "../Personas";
import Lista from "../components/Lista";
import GhostSpider from "../img/Ghost Spider.png";

export default function Home() {
    return (
        <div>
            <Navbarhome personas={Personas}></Navbarhome>
            <h1>Lista de personas</h1>
            <div className="content">
                <div>
                </div>
                    <Row>
                        <Col sm>
                    <img className="ghostimg" src={GhostSpider} alt="GhostSpider" />
                        </Col>
                        <Col sm={7}>
                    <Lista personas={Personas}> </Lista>
                        </Col>
                    </Row>
            </div>
        </div>
    )
}