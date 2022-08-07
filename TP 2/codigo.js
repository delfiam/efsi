let toDo=[{    
    tarea: "hacer tp",
    estaResuelto: false,
},
{
    tarea:"limpiar",
    estaResuelto: true,
},

]

function agregarTarea(){
    let tareaNueva =document.getElementById("tarea").value;
    toDo.push({
        tarea: tareaNueva,
        estaResuelto: false,
    });
    mostrarLista();
    document.getElementById('tarea').value = "";
   
}
  
  function mostrarLista(){
    let listaTareas = document.getElementById("tareas");
    listaTareas.innerHTML="";
  
    for (let i = 0; i < toDo.length; i++){
        let resuelto = document.createElement("input");
        let unaTarea = document.createElement("label");
        let space = document.createElement("br");
      resuelto.type= "checkbox";
      resuelto.checked = toDo[i].estaResuelto;
      unaTarea.innerText = toDo[i].tarea;
        
      resuelto.onchange = () => marcarResuelto(toDo[i]);
      if (toDo[i].estaResuelto) {
          unaTarea.style.textDecoration ="line-through";
      }
      
      listaTareas.appendChild(resuelto);
      listaTareas.appendChild(unaTarea);
      listaTareas.appendChild(space);
        
    }
  }
  
function marcarResuelto (tarea) {
    tarea.estaResuelto = true;
    mostrarLista();
}

  mostrarLista();