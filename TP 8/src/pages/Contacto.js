export default function Contacto (){
    return(
        <form>
            <label>Nombre </label>
            <input type="text" name="nombre" className="u-full-width" placeholder="Nombre"  ></input>
            <label>Apellido </label>
            <input type="text" name="Apellido" className="u-full-width" placeholder="Apellido"  ></input>
            <label>Email </label>
            <input type="text" name="Email" className="u-full-width" placeholder="Email"  ></input>
            <label>Edad </label>
            <input type="number" name="Edad" className="u-full-width" placeholder="Edad"  ></input>
        </form>
    )
}