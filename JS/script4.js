/******* MUSICA */
const btnMusic = document.getElementById("playPause")
const audio = document.getElementById("musica")

if(btnMusic && audio){
btnMusic.addEventListener("click",()=>{

if(audio.paused){
audio.play()
btnMusic.textContent="⏸️"
}else{
audio.pause()
btnMusic.textContent="▶️"
}

})
}

/* corazones cayendo */
function crearCorazones(){

const contenedor = document.querySelector(".corazones")

setInterval(()=>{

let corazon = document.createElement("div")
corazon.classList.add("corazon")
corazon.innerHTML="❤"

corazon.style.left = Math.random()*100+"%"
corazon.style.fontSize = (15 + Math.random()*20)+"px"
corazon.style.animationDuration = (6 + Math.random()*6)+"s"

contenedor.appendChild(corazon)

setTimeout(()=>corazon.remove(),12000)

},400)

}

crearCorazones()

/* mensajes romanticos */

const mensajes = [
"Eres mi cuchurrumi 💕",
"Eres inteligente",
"Que hombre tan precioso",
"Me encantas",
"Eres mi lugar seguro",
"Mi persona favorita",
"Te amo muchísimo",
"Me haces feliz"
]

setInterval(()=>{

let msg = document.createElement("div")
msg.classList.add("mensaje")

msg.innerText = mensajes[Math.floor(Math.random()*mensajes.length)]

msg.style.left = Math.random()*80+"%"
msg.style.top = "100%"

document.body.appendChild(msg)

setTimeout(()=>msg.remove(),8000)

},2500)

/* VALIDAR FECHA CORREGIDO */
function validarFecha(){

const valor=document.getElementById("fechaImportante").value
if(!valor) return

const partes = valor.split("-")
const formateada = `${partes[2]}-${partes[1]}-${partes[0]}`

if(formateada==="16-07-2022" || formateada==="30-03-2000"){

document.getElementById("corazonLock").classList.add("abrir")

setTimeout(()=>{
document.getElementById("pantallaFecha").style.display="none"
document.getElementById("formulario").style.display="block"
document.getElementById("seleccionPuzzle").style.display="block"
document.getElementById("rompecabezas").style.display="block"
document.getElementById("final").style.display="block"


},900)

}else{
alert("Intenta con una fecha más especial 💕")
}

}


/* FORMULARIO */

function guardarRespuestas(){

const datos=[
document.getElementById("apodo").value,
document.getElementById("comida").value,
document.getElementById("pose").value,
document.getElementById("lugar").value,
document.getElementById("cumple").value
]

if(datos.includes("")){
alert("Completa todo")
return
}

const lista=document.getElementById("listaRespuestas")
lista.innerHTML=""

datos.forEach(d=>{
let li=document.createElement("li")
li.innerText=d
lista.appendChild(li)
})

document.getElementById("seleccionPuzzle").classList.remove("oculto")

}

/* SELECCION PUZZLE CORREGIDO */

function seleccionarPuzzle(img){

imagenSeleccionada = img.src

document.getElementById("imagenGuia").src = imagenSeleccionada

document.getElementById("seleccionPuzzle").classList.add("oculto")
document.getElementById("rompecabezas").classList.remove("oculto")

crearPuzzle()
}

/* --- CREAR PUZZLE (VERSIÓN INFALIBLE) --- */
function crearPuzzle(){
    const puzzle = document.getElementById("puzzle");
    puzzle.innerHTML = "";

    const filas = 4;
    const total = filas * filas;
    let piezas = [];
    let idPosiciones = []; // Aquí guardaremos los números del 0 al 15

    for(let i = 0; i < total; i++){
        let pieza = document.createElement("div");
        pieza.className = "pieza";
        pieza.style.backgroundImage = `url(${imagenSeleccionada})`;
        pieza.style.backgroundSize = "400px 400px";

        // Le asignamos su posición correcta "de nacimiento" (del 0 al 15)
        pieza.dataset.idCorrecto = i; 
        pieza.draggable = true;

        puzzle.appendChild(pieza);
        piezas.push(pieza);
        idPosiciones.push(i);
    }

    // En lugar de mover las cajas físicas, solo desordenamos los IDs
    idPosiciones.sort(() => Math.random() - 0.5);

    // Repartimos las imágenes desordenadas usando esos IDs aleatorios
    piezas.forEach((p, index) => {
        let idAleatorio = idPosiciones[index];
        const x = (idAleatorio % filas) * 100;
        const y = Math.floor(idAleatorio / filas) * 100;
        
        p.style.backgroundPosition = `-${x}px -${y}px`;
        p.dataset.idActual = idAleatorio; // Registramos qué pedacito de imagen tiene ahora mismo
    });

    let arrastrado = null;

    piezas.forEach(p => {
        p.addEventListener("dragstart", () => {
            arrastrado = p;
        });

        p.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        p.addEventListener("drop", () => {
            // 1. Intercambiamos visualmente las imágenes (los píxeles)
            let tempBg = arrastrado.style.backgroundPosition;
            arrastrado.style.backgroundPosition = p.style.backgroundPosition;
            p.style.backgroundPosition = tempBg;

            // 2. ¡SÚPER IMPORTANTE! Intercambiamos también las "etiquetas secretas"
            let tempId = arrastrado.dataset.idActual;
            arrastrado.dataset.idActual = p.dataset.idActual;
            p.dataset.idActual = tempId;
        });
    });
}

/* --- VERIFICAR CON EL BOTÓN --- */
function verificarPuzzleBoton(){
    const piezas = document.querySelectorAll(".pieza");
    let correcto = true;

    piezas.forEach((pieza) => {
        // Comparamos de forma exacta si la etiqueta actual coincide con la correcta
        if(pieza.dataset.idActual != pieza.dataset.idCorrecto){
            correcto = false;
        }
    });

    if(correcto){
        alert("¡Lo hiciste muy bien, bien hecho! 💕");
        
        let seccionFinal = document.getElementById("final");
        seccionFinal.style.display = "block";
        seccionFinal.classList.remove("oculto");
        
        // Hacemos que baje suavecito a la última parte
        setTimeout(() => {
            seccionFinal.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);

    } else {
        alert("Aún hay piecitas fuera de lugar, ¡tú puedes mi amor! 🧩");
    }
}
/* sueños */

function mostrarSuenos(){

const texto=document.getElementById("suenosTexto").value

if(texto===""){
alert("Escribe algo bonito")
return
}

document.getElementById("resultado").innerHTML=
`
<p>Te amo y juntos trabajaremos para que se haga realidad 💕</p>
<p>${texto}</p>
`

}

/* --- QR RASPABLE (COMPATIBLE CON PC Y CELULAR) --- */
const canvas = document.getElementById("scratch");

if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    ctx.fillStyle = "#fa4c9d"; // El color de la capa raspable
    ctx.fillRect(0, 0, 300, 300);

    // Eventos para Computadora (Mouse)
    canvas.addEventListener("mousemove", (e) => {
        // e.buttons === 1 verifica que tenga el clic presionado para raspar (opcional, pero se siente mejor)
        rasparArea(e.offsetX, e.offsetY);
    });

    // Eventos para Celular (Toque con el dedo)
    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault(); // ¡SÚPER IMPORTANTE! Evita que la pantalla haga scroll mientras raspa
        
        // Calculamos la posición exacta del dedo sobre la imagen
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        rasparArea(x, y);
    }, { passive: false });

    // Función unificada que borra el color donde pasa el mouse o el dedo
    function rasparArea(x, y) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2); // 25 es el grosor del "borrador"
        ctx.fill();
    }
}