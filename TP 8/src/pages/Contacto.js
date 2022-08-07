import FormC from "../components/Form";
import Navbarhome from "../components/Navbar";
import Personas from "../Personas";

export default function Contacto() {
    return (
        <div>
            <Navbarhome personas={Personas} />
           <FormC></FormC>
        </div>
    )
}