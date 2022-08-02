import PersonaCard from "./PersonaCard";

export default function Estadisticas({ personas}) {
    let personas_mayores = personas.filter(p => p.edad > 35)
    let edades = personas.map(p=> p.edad)
    let persona_mayor = Math.max(edades);
    let persona_menor = Math.min(edades); 
    console.log(persona_mayor)

    return (
        <div>
            <div>
                <p>hola</p>
                {personas_mayores.map((p) => (
                    <PersonaCard key={parseInt(p.id)} persona={p}></PersonaCard>
                    ))
                }
            </div>
            <div>
                {persona_mayor.map(p => (
                    <PersonaCard persona={p}></PersonaCard>
                    ))
                }
            </div>
            <div>
                {persona_menor.map(p => (
                    <PersonaCard persona={p}></PersonaCard>
                    ))
                }
            </div>

        </div>
    )
}