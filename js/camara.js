// Acámica
// Carrera: Desarrollo Web Full Stack
// Trabajo: Proyecto "gifOS"
// Nombre: Uladislao Pérez Elizalde  


// Variables a utilizar
var misGifos = [];
let c1 = document.getElementById('c1');

let c2 = document.getElementById('c2');
c2.style.display = 'none';

let c4 = document.getElementById('c4');
c4.style.display = 'none';

let cancelar1 = document.getElementById('cancelar1');

let cancelar2 = document.getElementById('cancelar2')
let copiarLink = document.getElementById('copiar-enlace');
let c5 = document.getElementById('c5');
c5.style.display = 'none';

let c6 = document.getElementById('c6');
c6.style.display = 'none';

let listo2 = document.getElementById('listo2');

const APIkey = 'jkgdyBtv4xZcpQ8J9XmZ2kkieubuB7x2';

let video = document.getElementById('video');

let arrow = document.getElementById('arrow');
let logo = document.getElementById('logo');

let estiloSeleccionado = localStorage.getItem('themes');
let hojaDeEstilo = document.getElementById('hojaDeEstilo');
let preGif = document.getElementById('pre-gif');

let chequeo = document.getElementById('chequeo');
let capturando = document.getElementById('capturando');
let botones1 = document.getElementById('botones1');
let botones2 = document.getElementById('botones2');
let form = new FormData();
let gifSubido = document.getElementById('gif-subido');
let descargar = document.getElementById('descargar-gifo');
const endpoint = 'https://upload.giphy.com/v1/gifs?' + '&api_key=' + APIkey;

// Variables a utilizar



// Carga de themes guardados
document.addEventListener('DOMContentLoaded', () => {
    if (estiloSeleccionado) {
        document.documentElement.setAttribute('themes', estiloSeleccionado)
        if (estiloSeleccionado === "day") { 
            hojaDeEstilo.href = "css/camaraDay.css";
        } if (estiloSeleccionado === "night") { 
            hojaDeEstilo.href = "css/camaraNight.css" ;
            logo.src = "imgs/gifOF_logo_dark.png"   
        }
    }
})
// Carga de themes guardados



// Volver a index
arrow.addEventListener('click', () => {
    window.location.assign("index.html"); 
})

logo.addEventListener('click', () => {
    window.location.assign("index.html"); 
})
// Volver a index



// Botones 
cancelar1.onclick = function () {
    c1.style.display = 'none';
}

function comenzar() { 
    navigator.mediaDevices.getUserMedia({
    video: {
    width: {min: 840},
    height: {min: 434}}
    })
    .then( function(stream) {
        video.srcObject = stream;
        video.play();
        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 190,
            quality: 30,
            width: 360,
            hidden: 240,
            }
        )
    }
    )
}

document.getElementById('comenzar').onclick = function () {
    comenzar();
    c1.style.display = 'none';
    c2.style.display = 'block';
    capturando.style.display = 'none';
    botones2.style.display = 'none';
}

document.getElementById('capturar').onclick = function () {
    capturando.style.display = 'inline';
    botones2.style.display = 'flex';
    chequeo.style.display = 'none';
    botones1.style.display = 'none';
    
    recorder.startRecording();
   
    document.getElementById('recording').style.backgroundColor = '#FF6161';
    document.getElementById('listo').style.backgroundColor = '#FF6161';
}   

document.getElementById('listo').onclick = function () {
    c2.style.display = 'none';
    c4.style.display = 'block';
    recorder.stopRecording(function() {
        preGif.style.display = 'block';
        preGif.src = URL.createObjectURL(recorder.blob);
       
        
        document.getElementById('repetir').style.margin = "25px 0px 0px 542px";
        document.getElementById('subir').style.margin = "25px 0px 0px 14px"; 
        document.getElementById('repetir').style.backgroundColor = '#FFF4FD'         
        }
    )
}

document.getElementById('subir').onclick = function (){
    c4.style.display = 'none';
    c5.style.display = 'block';
    cancelar2.style.margin = "25px 0px 0px 702px";

    form.append('file', recorder.blob, 'myGif.gif');
    console.log(form.get('file'));
    
    let req = new XMLHttpRequest();
    req.open('POST', endpoint, true);
    req.withCredentials = true;
    req.setRequestHeader('Access-Control-Allow-Origin', '*');
    req.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            let objetoGif = JSON.parse(req.response);
                    
            guardarLS(objetoGif.data.id);
            c6.style.display = 'block';
            c5.style.display = 'none'
        }
    };
    req.send(form);
    gifSubido.src = URL.createObjectURL(recorder.blob);
    descargar.onclick = function() {
    invokeSaveAsDialog(recorder.blob , 'myGif.gif');
    } 
}
        
cancelar2.addEventListener('click', () => {
    window.location.assign("camara.html"); 
})

copiarLink.onclick = function() {
    let link = URL.createObjectURL(recorder.blob);
    let input = document.createElement("input");
    input.setAttribute("value", link);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert('Link copiado con éxito!');
    
}
            
document.getElementById('repetir').onclick = function () {
    c4.style.display = 'none';
    c1.style.display = 'block';
    chequeo.style.display = 'inline';
    botones1.style.display = 'flex';
}

listo2.addEventListener('click', () => {
    window.location.assign("camara.html"); 
    c6.style.display = 'none';
    c1.style.display = 'block';
    chequeo.style.display = 'inline';
    botones1.style.display = 'flex';   
})
// Botones 



// Manipulando el LS
window.onload = function(){
    mostrarLS();
}

function guardarLS(id) {
    fetch('https://api.giphy.com/v1/gifs/'+ id + '?' + '&api_key=' + APIkey)
        .then(response => {
            return response.json();
        })
        .then(dataGif => {
            let url = dataGif.data.images.original.url;
            if (localStorage.getItem('misGifos')) {
                misGifos = JSON.parse(localStorage.getItem('misGifos'));
                misGifos.push(url);
                localStorage.setItem('misGifos', JSON.stringify(misGifos));
            } else {
                misGifos.push(url);
                localStorage.setItem('misGifos', JSON.stringify(misGifos));
            }   
        });
}

function mostrarLS() {
    if (localStorage.getItem("misGifos")) {
        let contenedor = document.getElementById("imgs1");
        misGifos = JSON.parse(localStorage.getItem("misGifos"));
        misGifos.forEach(gif => {
            if (gif) {
                let gifs = document.createElement("img");
                gifs.src = gif;
                contenedor.appendChild(gifs);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
            }
        })
    }
}
// Manipulando el LS