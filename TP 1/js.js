

function validarNotas(){
    let mate = document.getElementById("mate").value;
    let lengua = document.getElementById("lengua").value;
    let efsi = document.getElementById("efsi").value;
    let lenguatexto = document.getElementById("lengua");
    let matetexto = document.getElementById("mate");
    let efsitexto = document.getElementById("efsi");
    if(lengua<1 || lengua>10|| lengua == null){
        lenguatexto.style.backgroundColor = "red";
    }
    else{
        lenguatexto.style.backgroundColor = "green";
    }
    if(efsi<1 || efsi>10 || efsi == null){
        efsitexto.style.backgroundColor = "red";
    }
    else{
        efsitexto.style.backgroundColor = "green";
    }
    if(mate<1 || mate>10|| mate == null){
        matetexto.style.backgroundColor = "red";
    }
    else{
        matetexto.style.backgroundColor = "green";
    }
}


function hacerPromedio(){
    let mate = document.getElementById("mate").value;
    let lengua = document.getElementById("lengua").value;
    let efsi = document.getElementById("efsi").value;
    let texto = document.getElementById("promedioTexto");
    const foto = document.querySelector("img");
     if(parseInt(mate) >= 0 && parseInt(efsi) >= 0 && parseInt(lengua) >= 0) {
        let sumapromedio = parseInt(efsi) + parseInt(lengua) + parseInt(mate);
        let promedio = sumapromedio / 3 ; 
        
        texto.innerText = "el promedio es: " + promedio;
        if(promedio>=6){
            texto.style.color ="green";
            foto.src = "https://c.tenor.com/sxI6wTD8TnwAAAAd/spiderman-andrew-garfield.gif";
        }
        else {
            texto.style.color ="red";
            foto.src = "https://c.tenor.com/4JVPWD8GrXkAAAAC/spider-man-shocked.gif";
        }

    }
    else {
        alert("debe ingresar todas las notas" ); 
    }

    
}

function mayorNota(){
    let mate = parseInt(document.getElementById("mate").value);
    let lengua = parseInt(document.getElementById("lengua").value);
    let efsi = parseInt(document.getElementById("efsi").value);
    let mayornota = Math.max(mate, lengua, efsi);
    let texto = document.getElementById("mayorNotaTexto");
    let foto = document.getElementById("mayornotafoto");


    switch (mayornota){
        case efsi & mate & lengua:
            texto.innerText="la mayores notas son todas";
            texto.style.color = "blue";
            foto.src = "https://c.tenor.com/PrrUThkiXAwAAAAC/hatsune-miku-miku.gif"
            break;
                case lengua & mate:
            texto.innerText="la mayores notas son de lengua y matematica";
            texto.style.color = "blue";
            foto.src = "https://c.tenor.com/zEZM9v0udjsAAAAC/the-batman-robert-pattinson.gif";
            break;
        case lengua & efsi:
            texto.innerText="la mayores notas son de lengua y efsi";
            texto.style.color = "blue";
            foto.src = "https://c.tenor.com/zEZM9v0udjsAAAAC/the-batman-robert-pattinson.gif";
            break;
        case efsi & mate:
            texto.innerText="la mayores notas son de efsi y matematica";
            texto.style.color = "blue";
            foto.src = "https://c.tenor.com/zEZM9v0udjsAAAAC/the-batman-robert-pattinson.gif";
            break;
        case lengua: 
            texto.innerText="la mayor nota es la de lengua";
            texto.style.color = "blue";
            foto.src = "https://i.gifer.com/9Ry5.gif";
            break;
        case mate:
            texto.innerText="la mayor nota es la de matemática";
            texto.style.color = "blue";
            foto.src = "https://c.tenor.com/Pxb5QTcT4cwAAAAC/minion-congrats.gif";
            break;
        case efsi:
            texto.innerText="la mayor nota es la de efsi";
            texto.style.color = "blue";
            foto.src = "https://media2.giphy.com/media/azK3OLlL8O9gI/200w.gif?cid=82a1493bexyydtaz0okbytfcg3x52j0kbjlecifd9vqkf3mq&rid=200w.gif&ct=g";
            break;
  
    }

   
}