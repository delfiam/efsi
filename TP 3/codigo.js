function buscarDetalle(ids){
  return axios({
      method: 'get',
      url: 'http://www.omdbapi.com/?apikey=3069e472&',
      params:{
          i:(ids),
          plot: "full",
      
      }
    }).then(response => {
        console.log(response);
        let det = response.data.Plot;
        return det;
      });

    }
    
function buscarPelicula(){
  axios({
      method: 'get',
      url: 'http://www.omdbapi.com/?apikey=3069e472&',
      params:{
          s:document.getElementById("inputNombre").value,
          type: document.getElementById("inputTipo").value,
          y: document.getElementById("inputAño").value
      }
    }).then(response => {
        console.log(response);
        let lista = document.getElementById("datos");
        let modal = document.getElementById("detalle");
        lista.innerHTML = "";

        response.data.Search.forEach(busqueda => {
          let tdt = document.createElement("td");
          let tdty = document.createElement("td");
          let tdy = document.createElement("td");
          let tdp = document.createElement("img");
          let tr = document.createElement("tr");
          let td = document.createElement("td");

          let tdb = document.createElement("button");


          tdt.innerText = `${busqueda.Title}`;


          tdt.style.margin = 2;
          tdty.style.margin = 2;
          tdp.style.margin = 2;
          tdb.className = "btn";
          tdty.innerText = `${busqueda.Type}`;
          tdy.innerText = `${busqueda.Year}`;
          tdp.src = `${busqueda.Poster}`;
          tdb.innerText = "Ver detalle";
          let det;
          buscarDetalle(busqueda.imdbID).then((res) => det = res);
          tdb.onclick = function(){
            modal.innerHTML = "";
            var myModal = new bootstrap.Modal(document.getElementById('modalDetalle'), {
              keyboard: false
            });
            let detalles = document.createElement("p");

            detalles.innerText = det;
            detalles.style.color = "black";
            if (det = undefined) {
              detalles.innerText = "No hay argumento";
            }
            modal.appendChild(detalles);
            myModal.show();

          }
          tr.appendChild(tdp);
          tr.appendChild(tdt);
          tr.appendChild(tdty);
          tr.appendChild(tdy);
          tr.appendChild(td);
          td.appendChild(tdb);
          lista.appendChild(tr);
          
        });
        
    });
  }
