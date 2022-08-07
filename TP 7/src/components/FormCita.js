import { useState } from "react"
export default function FormCita({ citas }) {
    

    const [nombreM, setNombreM] = useState("")
    const [nombreP, setNombreP] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [id, setId] = useState(0)

    const AgregarCitas = (e) =>{
        e.preventDefault()
        const cita = {
            id: id,
            nombreMascota: nombreM,
            nombrePropietario: nombreP,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas,
        }
        citas(c => [...c, cita])
    }


    return (
        <form onSubmit={AgregarCitas} >
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange={(e) => setNombreM(e.target.value)} required></input>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" className="u-full-width" placeholder="Nombre del dueño de la mascota" onChange={(e) => setNombreP(e.target.value)} required></input>
            <label>Fecha</label>
            <input type="date" name="fecha" className="u-full-width" placeholder="Fecha" onChange={(e) => setFecha(e.target.value)} required></input>
            <label>Hora</label>
            <input type="time" name="hora" className="u-full-width" placeholder="Hora" onChange={(e) => setHora(e.target.value)} required></input>
            <label>Sintomas</label>
            <textarea name="sintomas" className="u-full-width" onChange={(e) => setSintomas(e.target.value)} required></textarea>
            <button type="submit" className="u-full-width button-primary" onClick={() => setId(id + 1) } >Agregar Cita</button>
        </form>
    )

}


