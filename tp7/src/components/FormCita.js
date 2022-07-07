import { useState } from "react"
const citas = []

function AgregarCitas(nM,nP, f, h , s) {
    const c = {
        nombreMascota: nM,
        nombrePropietario: nP,
        fecha: f,
        hora: h,
        sintomas: s,
    }
    citas.push(c)
    return citas
}
function FormCita() {

    const [nombreM, setNombreM] = useState("")
    const [nombreP, setNombreP] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")



    return (
        <form>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={(e) => setNombreM(e.target.value)}></input>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre del dueño de la mascota" onChange={(e) => setNombreP(e.target.value)}></input>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" placeholder="Fecha" onChange={(e) => setFecha(e.target.value)}></input>
            <label>Hora</label>
            <input type="time" name="hora" className="u-full-width" placeholder="Hora" onChange={(e) => setHora(e.target.value)}></input>
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width" onChange={(e) => setSintomas(e.target.value)}></textarea>
            <button type="submit" className="u-full-width button-primary" onClick={AgregarCitas(nombreM, nombreP, fecha,hora, sintomas)}>Agregar Cita</button>
        </form>
    )
}
console.log()
export {citas, FormCita}
