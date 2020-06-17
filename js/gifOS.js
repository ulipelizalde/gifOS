// Acámica
// Carrera: Desarrollo Web Full Stack
// Trabajo: Proyecto "gifOS"
// Nombre: Uladislao Pérez Elizalde  

// Variables a utilizar
let barraTendencias = document.getElementById('tendencias');
let botonBuscar = document.getElementById('boton-buscar');

let botonN = document.getElementById('b1');
let botonJG = document.getElementById('b2');
let botonCT = document.getElementById('b3');

let botonJP = document.getElementById('vmjp');
let botonT = document.getElementById('vmt');
let botonM = document.getElementById('vmm');
let botonTLK = document.getElementById('vmtlk');

let botonThemes = document.getElementById('boton-themes');
let menuThemes = document.getElementById('themes');

let url = 'https://api.giphy.com/v1/gifs/trending?';
let apiKey = 'jkgdyBtv4xZcpQ8J9XmZ2kkieubuB7x2';
let endpoint = url + '&api_key=' + apiKey;

let botonCrear = document.getElementById('crear');
let resp = 'https://api.giphy.com/v1/gifs/search?q=' + 'Jurassic Park' + '&api_key=' + apiKey;
let respT = 'https://api.giphy.com/v1/gifs/search?q=' + 'Tennis' + '&api_key=' + apiKey;
let respM = 'https://api.giphy.com/v1/gifs/search?q=' + 'Marvel' + '&api_key=' + apiKey;
let respTLK = 'https://api.giphy.com/v1/gifs/search?q=' + 'The Lion King' + '&api_key=' + apiKey;

let hojaDeEstilo = document.getElementById('hojaDeEstilo');
let logo = document.getElementById('logo');
let lupa = document.getElementById('lupa');
let body = document.getElementById('body');
let dropdown = document.getElementById('dropdown');
let busquedaDesplegable = document.getElementById('busq-desplegable');
let inputBusqueda = document.getElementById('search');

let palabraBtn = document.getElementById('palabraBtn');
// Variables a utilizar



// Navegador de index a camara
botonCrear.addEventListener('click', () => {
    window.location.assign("camara.html");
})
// Navegador de index a camara



// Menu de themes
menuThemes.style.display = 'none';
botonThemes.onclick = function () {
    if (menuThemes.style.display == "none") {
        menuThemes.style.display = "block";
    } else {
        menuThemes.style.display = "none";
    }
}
// Menu de themes



// Obteniendo gifs trending
fetch(endpoint).then(trending => {
        return trending.json();
    })
    .then(trend => {
        console.log(trend.data);
        for (let gif = 0; trend.data.length; gif++) {
            let contenedor = document.getElementById('imgs1');
            let divGif = document.createElement('div');
            let gifs = document.createElement('img');
            let contTitle = document.createElement("div");
            let title = document.createElement('h4');

            title.innerText = trend.data[gif].title;
            contenedor.appendChild(divGif);
            gifs.src = trend.data[gif].images.downsized.url;
            divGif.appendChild(gifs);
            divGif.appendChild(contTitle);
            contTitle.appendChild(title);
            gifs.setAttribute('height', '295px');
            gifs.setAttribute('width', '305px;');
            gifs.style.marginBottom = "10px";
            divGif.classList.add('divGif');
            contTitle.classList.add('contTitle');
            title.style.fontSize = '15px'
            title.style.display = "none";
            contTitle.style.display = "none";

            divGif.onmouseover = function() {
                title.style.color = "#ffffff";
                title.style.display = "block";
                contTitle.style.position = "absolute";
                title.style.position = "absolute";
                title.style.top = "3px";
                title.style.left = "3px";
                contTitle.style.display = "block";
            }
            
            divGif.onmouseout = function() {
                contTitle.style.display = "none";
                title.style.display = "none";
            }
        }

    })
    .catch(error => {
        return error;
    });
// Obteniendo gifs trending



//Botones menu desplegable
function sugNetflix() {
    let contenedor = document.getElementById('imgs1');
    contenedor.innerHTML = '';
    const devolucion = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'Netflix' + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(netflix => {
            console.log(netflix.data);
            for (let index = 0; netflix.data.length; index++) {
                let contenedor = document.getElementById('imgs1');
                let divGif = document.createElement('div');
                let gifs = document.createElement('img');
                let contTitle = document.createElement("div");
                let title = document.createElement('h4');

                title.innerText = netflix.data[index].title;
                contenedor.appendChild(divGif);
                gifs.src = netflix.data[index].images.downsized.url;
                divGif.appendChild(gifs);
                divGif.appendChild(contTitle);
                contTitle.appendChild(title);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
                divGif.classList.add('divGif');
                contTitle.classList.add('contTitle');
                title.style.fontSize = '15px'
                title.style.display = "none";
                contTitle.style.display = "none";

            divGif.onmouseover = function() {
                title.style.color = "#ffffff";
                title.style.display = "block";
                contTitle.style.position = "absolute";
                title.style.position = "absolute";
                title.style.top = "3px";
                title.style.left = "3px";
                contTitle.style.display = "block";
            }
            
            divGif.onmouseout = function() {
                contTitle.style.display = "none";
                title.style.display = "none";
            }
            }
        })
        .catch(error => {
                return error;
        });
        return devolucion;
}

botonN.onclick = function () {
    sugNetflix();
    barraTendencias.innerHTML = "Netflix:";
    barraTendencias.scrollIntoView()
}

function sugJeff() {
    let contenedor = document.getElementById('imgs1');
    contenedor.innerHTML = '';
    const devolucion = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'Jeff Goldblum' + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(jeff => {
            console.log(jeff.data);
            for (let index = 0; jeff.data.length; index++) {
                let contenedor = document.getElementById('imgs1');
                let divGif = document.createElement('div');
                let gifs = document.createElement('img');
                let contTitle = document.createElement("div");
                let title = document.createElement('h4');

                title.innerText = jeff.data[index].title;
                contenedor.appendChild(divGif);
                gifs.src = jeff.data[index].images.downsized.url;
                divGif.appendChild(gifs);
                divGif.appendChild(contTitle);
                contTitle.appendChild(title);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
                divGif.classList.add('divGif');
                contTitle.classList.add('contTitle');
                title.style.fontSize = '15px'
                title.style.display = "none";
                contTitle.style.display = "none";

            divGif.onmouseover = function() {
                title.style.color = "#ffffff";
                title.style.display = "block";
                contTitle.style.position = "absolute";
                title.style.position = "absolute";
                title.style.top = "3px";
                title.style.left = "3px";
                contTitle.style.display = "block";
            }
            
            divGif.onmouseout = function() {
                contTitle.style.display = "none";
                title.style.display = "none";
            }
            }
        })
        .catch(error => {
            return error;
        });
        return devolucion;
}

botonJG.onclick = function () {
    sugJeff();
    barraTendencias.innerHTML = 'Jeff Goldblum:';
    barraTendencias.scrollIntoView()
}
    
function sugCT() {
    let contenedor = document.getElementById('imgs1');
    contenedor.innerHTML = '';
    const devolucion = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'Colin Trevorrow' + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(trevorrow => {
            console.log(trevorrow.data);
            for (let index = 0; trevorrow.data.length; index++) {
                let contenedor = document.getElementById('imgs1');
                let divGif = document.createElement('div');
                let gifs = document.createElement('img');
                let contTitle = document.createElement("div");
                let title = document.createElement('h4');

                title.innerText = trevorrow.data[index].title;
                contenedor.appendChild(divGif);
                gifs.src = trevorrow.data[index].images.downsized.url;
                divGif.appendChild(gifs);
                divGif.appendChild(contTitle);
                contTitle.appendChild(title);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
                divGif.classList.add('divGif');
                contTitle.classList.add('contTitle');
                title.style.fontSize = '15px'
                title.style.display = "none";
                contTitle.style.display = "none";
    
                divGif.onmouseover = function() {
                    title.style.color = "#ffffff";
                    title.style.display = "block";
                    contTitle.style.position = "absolute";
                    title.style.position = "absolute";
                    title.style.top = "3px";
                    title.style.left = "3px";
                    contTitle.style.display = "block";
                }
                
                divGif.onmouseout = function() {
                    contTitle.style.display = "none";
                    title.style.display = "none";
                }
                }
            })
            .catch(error => {
                return error;
            });
        return devolucion;
}

botonCT.onclick = function () {
    sugCT();
    barraTendencias.innerHTML = "Colin Trevorrow:";
    barraTendencias.scrollIntoView()
}
//Botones menu desplegable



// Gifs sugerencias
fetch(resp).then(response => {
        return response.json();
    })
    .then(jp => {
        console.log(jp.data);
        let imgP = document.getElementById('jpimg');
        imgP.src = jp.data[0].images.downsized.url
        imgP.setAttribute('height', '272x');
        imgP.setAttribute('width', '278px;');})
    .catch(error => {
                return error;
            });


fetch(respT).then(response => {
        return response.json();
    })
    .then(tenis => {
        console.log(tenis.data);
        let imgP = document.getElementById('tennisimg');
        imgP.src = tenis.data[0].images.downsized.url
        imgP.setAttribute('height', '272x');
        imgP.setAttribute('width', '278px;');})
    .catch(error => {
                return error;
            });


fetch(respM).then(response => {
        return response.json();
    })
    .then(marvel => {
        console.log(marvel.data);
        let imgP = document.getElementById('marvelimg');
        imgP.src = marvel.data[0].images.downsized.url
        imgP.setAttribute('height', '272x');
        imgP.setAttribute('width', '278px;');})
    .catch(error => {
                return error;
            });


fetch(respTLK).then(response => {
        return response.json();
    })
    .then(tlk => {
        console.log(tlk.data);
        let imgP = document.getElementById('tlkimg');
        imgP.src = tlk.data[0].images.downsized.url
        imgP.setAttribute('height', '272x');
        imgP.setAttribute('width', '278px;');})
    .catch(error => {
                return error;
            });
// Gifs sugerencias



// Resultados de sugerencias
function verMasJP() {
    let contenedor = document.getElementById('imgs1');
    contenedor.innerHTML = '';
    const devolucion = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'Jurassic Park' + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(vmas => {
            console.log(vmas.data);
            for (let index = 1; vmas.data.length; index++) {
                let contenedor = document.getElementById('imgs1');
                let divGif = document.createElement('div');
                let gifs = document.createElement('img');
                let contTitle = document.createElement("div");
                let title = document.createElement('h4');

                title.innerText = vmas.data[index].title;
                contenedor.appendChild(divGif);
                gifs.src = vmas.data[index].images.downsized.url;
                divGif.appendChild(gifs);
                divGif.appendChild(contTitle);
                contTitle.appendChild(title);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
                divGif.classList.add('divGif');
                contTitle.classList.add('contTitle');
                title.style.fontSize = '15px'
                title.style.display = "none";
                contTitle.style.display = "none";

            divGif.onmouseover = function() {
                title.style.color = "#ffffff";
                title.style.display = "block";
                contTitle.style.position = "absolute";
                title.style.position = "absolute";
                title.style.top = "3px";
                title.style.left = "3px";
                contTitle.style.display = "block";
            }
            
            divGif.onmouseout = function() {
                contTitle.style.display = "none";
                title.style.display = "none";
            }
            }
            })
            .catch(error => {
                return error;
            });
        return devolucion;
    }

function verMasT() {
    let contenedor = document.getElementById('imgs1');
    contenedor.innerHTML = '';
    const devolucion = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'Tenis' + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(vmas => {
            console.log(vmas.data);
            for (let index = 1; vmas.data.length; index++) {
                let contenedor = document.getElementById('imgs1');
                let divGif = document.createElement('div');
                let gifs = document.createElement('img');
                let contTitle = document.createElement("div");
                let title = document.createElement('h4');

                title.innerText = vmas.data[index].title;
                contenedor.appendChild(divGif);
                gifs.src = vmas.data[index].images.downsized.url;
                divGif.appendChild(gifs);
                divGif.appendChild(contTitle);
                contTitle.appendChild(title);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
                divGif.classList.add('divGif');
                contTitle.classList.add('contTitle');
                title.style.fontSize = '15px'
                title.style.display = "none";
                contTitle.style.display = "none";

            divGif.onmouseover = function() {
                title.style.color = "#ffffff";
                title.style.display = "block";
                contTitle.style.position = "absolute";
                title.style.position = "absolute";
                title.style.top = "3px";
                title.style.left = "3px";
                contTitle.style.display = "block";
            }
            
            divGif.onmouseout = function() {
                contTitle.style.display = "none";
                title.style.display = "none";
            }
                }
            })
            .catch(error => {
                return error;
            });
        return devolucion;
    }
    
function verMasM() {
    let contenedor = document.getElementById('imgs1');
    contenedor.innerHTML = '';
    const devolucion = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'Marvel' + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(vmas => {
            console.log(vmas.data);
            for (let index = 1; vmas.data.length; index++) {
                let contenedor = document.getElementById('imgs1');
                let divGif = document.createElement('div');
                let gifs = document.createElement('img');
                let contTitle = document.createElement("div");
                let title = document.createElement('h4');

                title.innerText = vmas.data[index].title;
                contenedor.appendChild(divGif);
                gifs.src = vmas.data[index].images.downsized.url;
                divGif.appendChild(gifs);
                divGif.appendChild(contTitle);
                contTitle.appendChild(title);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
                divGif.classList.add('divGif');
                contTitle.classList.add('contTitle');
                title.style.fontSize = '15px'
                title.style.display = "none";
                contTitle.style.display = "none";

            divGif.onmouseover = function() {
                title.style.color = "#ffffff";
                title.style.display = "block";
                contTitle.style.position = "absolute";
                title.style.position = "absolute";
                title.style.top = "3px";
                title.style.left = "3px";
                contTitle.style.display = "block";
            }
            
            divGif.onmouseout = function() {
                contTitle.style.display = "none";
                title.style.display = "none";
            }
                }
            })
            .catch(error => {
                return error;
            });
        return devolucion;
    }

function verMasTLK() {
    let contenedor = document.getElementById('imgs1');
    contenedor.innerHTML = '';
    const devolucion = fetch('https://api.giphy.com/v1/gifs/search?q=' + 'The Lion King' + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(vmas => {
            console.log(vmas.data);
            for (let index = 1; vmas.data.length; index++) {
                let contenedor = document.getElementById('imgs1');
                let divGif = document.createElement('div');
                let gifs = document.createElement('img');
                let contTitle = document.createElement("div");
                let title = document.createElement('h4');

                title.innerText = vmas.data[index].title;
                contenedor.appendChild(divGif);
                gifs.src = vmas.data[index].images.downsized.url;
                divGif.appendChild(gifs);
                divGif.appendChild(contTitle);
                contTitle.appendChild(title);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
                divGif.classList.add('divGif');
                contTitle.classList.add('contTitle');
                title.style.fontSize = '15px'
                title.style.display = "none";
                contTitle.style.display = "none";

            divGif.onmouseover = function() {
                title.style.color = "#ffffff";
                title.style.display = "block";
                contTitle.style.position = "absolute";
                title.style.position = "absolute";
                title.style.top = "3px";
                title.style.left = "3px";
                contTitle.style.display = "block";
            }
            
            divGif.onmouseout = function() {
                contTitle.style.display = "none";
                title.style.display = "none";
            }
                }
            })
            .catch(error => {
                return error;
            });
        return devolucion;
    }
// Resultados de sugerencias



// Botones que buscan gifs de la API
botonBuscar.onclick = function () {
    if (inputBusqueda.value.length > 0) {
        busquedaGeneral();
        obtenerResultados();
    }
}   

botonJP.onclick = function () {
    busquedaJP();
    verMasJP();
}

botonT.onclick = function () {
    busquedaT();
    verMasT();
}
    
botonM.onclick = function () {
    busquedaM();
    verMasM();
}

botonTLK.onclick = function () {
    busquedaTLK();
    verMasTLK();
}
// Botones que buscan gifs de la API



// Funcion para cambiar el texto de Tendencias 
function busquedaJP() {
    barraTendencias.innerHTML = "Jurassic Park:";
    barraTendencias.scrollIntoView()
}

function busquedaT() {
    barraTendencias.innerHTML = "Tennis:";
    barraTendencias.scrollIntoView()
}

function busquedaM() {
    barraTendencias.innerHTML = "Marvel:";
    barraTendencias.scrollIntoView()
    };

function busquedaTLK() {
    barraTendencias.innerHTML = "The Lion King:";
    barraTendencias.scrollIntoView()
    };
    
function busquedaGeneral() {
    let busqueda = document.getElementById('search').value;
    barraTendencias.innerHTML = busqueda + ':';
    barraTendencias.scrollIntoView()
    };
// Funcion para cambiar el texto de Tendencias 



// Buscar con la tecla enter    
function enter(event){
    let busqueda = document.getElementById('search').value;
    if(event.keyCode === 13 && inputBusqueda.value.length > 0) {
        inputBusqueda.removeAttribute('onSubmit')
        event.preventDefault(); 
        obtenerResultados()
        barraTendencias.scrollIntoView()
        barraTendencias.innerHTML = busqueda + ':'; 
    }
}
// Buscar con la tecla enter 



// Funcion para obtener resultados de la API
function obtenerResultados(search) {
    if (search == undefined) {
        var busqueda = document.getElementById('search').value;
    }
    let contenedor = document.getElementById('imgs1');
    contenedor.innerHTML = '';
    const devolucion = fetch('https://api.giphy.com/v1/gifs/search?q=' + busqueda + '&api_key=' + apiKey)
        .then(response => {
            return response.json();
        })
        .then(res => {
            console.log(res.data);
            for (let gif = 0; res.data.length; gif++) {
                let contenedor = document.getElementById('imgs1');
                let divGif = document.createElement('div');
                let gifs = document.createElement('img');
                let contTitle = document.createElement("div");
                let title = document.createElement('h4');

                title.innerText = res.data[gif].title;
                contenedor.appendChild(divGif);
                gifs.src = res.data[gif].images.downsized.url;
                divGif.appendChild(gifs);
                divGif.appendChild(contTitle);
                contTitle.appendChild(title);
                gifs.setAttribute('height', '295px');
                gifs.setAttribute('width', '305px;');
                gifs.style.marginBottom = "10px";
                divGif.classList.add('divGif');
                contTitle.classList.add('contTitle');
                title.style.fontSize = '15px'
                title.style.display = "none";
                contTitle.style.display = "none";

            divGif.onmouseover = function() {
                title.style.color = "#ffffff";
                title.style.display = "block";
                contTitle.style.position = "absolute";
                title.style.position = "absolute";
                title.style.top = "3px";
                title.style.left = "3px";
                contTitle.style.display = "block";
            }
            
            divGif.onmouseout = function() {
                contTitle.style.display = "none";
                title.style.display = "none";
            }
                }
            }
        )
    .catch(error => {
        return error;
    }
    );
    guardarLS(busqueda);
    mostrarLS(busqueda);
    return devolucion;
}
// Funcion para obtener resultados de la API



// Busquedas guardadas en el localStorage
function guardarLS(search){
    let dataBusqueda = getLS();
    dataBusqueda.unshift(search);
    localStorage.setItem('busquedas', JSON.stringify(dataBusqueda))
}

function getLS() {
    if(localStorage.getItem('busquedas') === null) {
        busquedas = []
    } 
    else {
        busquedas = JSON.parse(localStorage.getItem('busquedas'));
        if(busquedas.length > 3) {
            busquedas.pop()
        }
    }
    return busquedas
}

function mostrarLS(search){
    const botonesLS = document.getElementById('botonesLS');
    const btns = document.createElement('li');
    btns.innerHTML = '<button class="btnsLS">' + '#' + search + '</button>';
    botonesLS.insertBefore(btns, btns.nextSibling);
}

let dataBusqueda = getLS();
dataBusqueda.forEach((search)=>{
    mostrarLS(search)
})

botonesLS.addEventListener('click', (event) => {
    if(event.target.classList.contains('btnsLS')) {
        let string = event.target.textContent;
        search.value = string.slice(1);;
        search.focus();
        obtenerResultados();
        barraTendencias.scrollIntoView();
        barraTendencias.innerHTML = string + ':'
    }
})
// Busquedas guardadas en el localStorage



// Menú de sugerencias desplegable
botonBuscar.setAttribute('disabled', 'disabled');
busquedaDesplegable.style.display = "none"

inputBusqueda.addEventListener('input', (event) => {
    if (inputBusqueda.value.length > 0){
        busquedaDesplegable.style.display = "block"
        botonBuscar.removeAttribute('disabled');
        botonBuscar.style.backgroundColor = "#F7C9F3";
        palabraBtn.style.color = 'ffffff'

       
} else {
        botonBuscar.setAttribute('disabled', 'disabled');
        botonBuscar.style.backgroundColor = "#E6E6E6";
        busquedaDesplegable.style.display = "none"
    }
})

function desplegableNone() {
    document.addEventListener('click', function (event) {
    let desplegable = document.getElementById("desplegable").contains(event.target);
    if (!desplegable) {
        busquedaDesplegable.style.display = "none";
        document.removeEventListener('click', function () { } )
        }
    })
}

inputBusqueda.addEventListener("focusout", function () {
    desplegableNone()
})
// Menú de sugerencias desplegable



// Modificaciones segun la hoja de estilo
document.addEventListener("DOMContentLoaded", async () => {
    let estiloSeleccionado = localStorage.getItem('themes');
    let seleccionarEstilo = (estilo) => {
        
        if (estilo == 'night') {
            body.classList.add("noche");
            body.classList.remove("dia");
            logo.src = "imgs/gifOF_logo_dark.png";
            lupa.src = "imgs/lupa_light.svg"; 
            dropdown.src = "imgs/dropdownwhite.svg";
            } 
            else if (estiloSeleccionado == 'day') {
                body.classList.add("dia");
                body.classList.remove("noche");
            } 
            else {
                body.classList.add('noche')
                }
    
        if (estiloSeleccionado === null){ 
            hojaDeEstilo.href = "css/gifOSDay.css";
        }
                    
        if(estiloSeleccionado === "day"){ 
            hojaDeEstilo.href = "css/gifOSDay.css";
            inputBusqueda.addEventListener('input', () => {
                if (inputBusqueda.value.length > 0){
                    lupa.src = "imgs/lupa.svg";           
                } 
                else {
                    lupa.src = "imgs/lupa_inactive.svg";
                }
            })
        }

        if(estiloSeleccionado === "night") { 
            hojaDeEstilo.href = "css/gifOSNight.css";
            inputBusqueda.addEventListener('input', () => {
                if (inputBusqueda.value.length > 0) {
                    botonBuscar.style.backgroundColor = "#EE3EFE";
                    lupa.src = "imgs/lupa_light.svg";
                    botonBuscar.style.color = "#ffffff";
                } 
                else {
                    botonBuscar.style.color = "#808080";
                    lupa.src = "imgs/CombinedShape.svg"; 
                }
            })   
        }
    }       
    let resultados = getLS();
    resultados.forEach((search) => {
        mostrarLS(search)
    })
    seleccionarEstilo(estiloSeleccionado)
})
// Modificaciones segun la hoja de estilo



//Funcion para cambiar la hoja de estilo
function cambiarHojaDeEstilo(sheet) {
    document.getElementById('hojaDeEstilo').setAttribute('href', sheet);
}
//Funcion para cambiar la hoja de estilo



//Modificaciones de estilos
function coloresDeDia() {
    localStorage.setItem('themes', 'day');
    botonBuscar.style.backgroundColor = "#E6E6E6";
    logo.src = "imgs/gifOF_logo.png";
    dropdown.src = "imgs/dropdown.svg";
 
    inputBusqueda.addEventListener('input', () => {
        if (inputBusqueda.value.length > 0){
            botonBuscar.style.backgroundColor = "#F7C9F3 ";
            lupa.src = "imgs/lupa.svg";
            botonBuscar.style.color = "#000000";        
        }
        else {
            botonBuscar.style.backgroundColor = "#E6E6E6";
            lupa.src = "imgs/lupa_inactive.svg";
            botonBuscar.style.color = "#808080";
        }
    })
}

function coloresDeNoche() {
    localStorage.setItem('themes', 'night')
    dropdown.src = "imgs/dropdownwhite.svg";
    logo.src = "imgs/gifOF_logo_dark.png";
    lupa.src = "imgs/CombinedShape.svg";

    inputBusqueda.addEventListener('input', () => {
        if (inputBusqueda.value.length > 0){
            botonBuscar.style.backgroundColor = "#EE3EFE";
            lupa.src = "imgs/lupa_light.svg";
            botonBuscar.style.color = "#ffffff";
            palabraBtn.style.color = 'ffffff'
        } 
        else {
            lupa.src = "imgs/CombinedShape.svg"; 
            botonBuscar.style.color = "#808080";
        }
    })
}
//Modificaciones de estilos