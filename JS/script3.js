document.addEventListener("DOMContentLoaded", function(){

function crearEstrellas(){

const contenedor = document.querySelector(".shooting-stars")

for(let i=0;i<5;i++){

let estrella = document.createElement("span")

estrella.style.top = Math.random()*window.innerHeight + "px"
estrella.style.left = Math.random()*window.innerWidth + "px"
estrella.style.animationDelay = Math.random()*5+"s"

contenedor.appendChild(estrella)

}

}

crearEstrellas()

// mostrar pregunta
setTimeout(()=>{
document.getElementById("pregunta").classList.remove("hidden")
},4000)

// botón no huye
const noBtn = document.getElementById("no")

if(noBtn){
["mouseover","touchstart"].forEach(event=>{
noBtn.addEventListener(event,()=>{
noBtn.style.position="absolute"
noBtn.style.top = Math.random()*window.innerHeight + "px"
noBtn.style.left = Math.random()*window.innerWidth + "px"
})
})
}

// botón sí
const btnSi = document.getElementById("si")

if(btnSi){
btnSi.addEventListener("click",()=>{

alert("Así me gusta, que me ames ❤️")

document.getElementById("intro").classList.add("hidden")
document.getElementById("fotos").classList.remove("hidden")

mostrarFotos()
})
}

// fotos ráfaga
// fotos ráfaga
function mostrarFotos(){

const contenedor = document.getElementById("contenedorFotos")
contenedor.innerHTML=""

let fotos = [
"img/corazon/1.jpg",
"img/corazon/2.jpg",
"img/corazon/3.jpeg",
"img/corazon/4.jpg",
"img/corazon/5.jpg",
"img/corazon/6.jpg",
"img/corazon/7.jpg",
"img/corazon/8.jpeg",
"img/corazon/9.jpeg",
"img/corazon/10.jpeg",
"img/corazon/11.jpeg",
"img/corazon/12.jpeg",
"img/corazon/13.jpeg"
]

fotos.forEach((src,i)=>{

let img = document.createElement("img")
img.src = src
img.classList.add("foto")

// posiciones aleatorias iniciales
img.style.top = Math.random()*window.innerHeight+"px"
img.style.left = Math.random()*window.innerWidth+"px"

contenedor.appendChild(img)

})

setTimeout(formarCorazon,1500)
}


function formarCorazon(){

const imgs = document.querySelectorAll("#contenedorFotos img")

const centerX = window.innerWidth/2
const centerY = window.innerHeight/2 + 80

const scale = 18

imgs.forEach((img,i)=>{

let t = (i / imgs.length) * Math.PI * 2

let x = 16*Math.pow(Math.sin(t),3)
let y = -(13*Math.cos(t) - 5*Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t))

setTimeout(()=>{

img.style.left = (centerX + x*scale - 60)+"px"
img.style.top = (centerY + y*scale - 60)+"px"

}, i*120)

})

// latido
setTimeout(()=>{
document.getElementById("contenedorFotos").classList.add("latir")
},2000)

}
// libro
// LIBRO VIRTUAL
const pages = [
"img/libro-virtual/1.jpeg",
"img/libro-virtual/2.jpg",
"img/libro-virtual/3.jpg",
"img/libro-virtual/4.jpg",
"img/libro-virtual/5.jpg",
"img/libro-virtual/6.jpg",
"img/libro-virtual/7.jpg",
"img/libro-virtual/8.jpg",
"img/libro-virtual/9.jpg",
"img/libro-virtual/10.jpg",
"img/libro-virtual/11.jpg",
"img/libro-virtual/12.jpg",
"img/libro-virtual/13.jpg",
"img/libro-virtual/14.jpg",
"img/libro-virtual/15.jpg","img/libro-virtual/16.jpg","img/libro-virtual/17.jpg","img/libro-virtual/18.jpg",
"img/libro-virtual/19.jpg","img/libro-virtual/20.jpg","img/libro-virtual/21.jpg","img/libro-virtual/22.jpg",
"img/libro-virtual/23.jpg","img/libro-virtual/24.jpg","img/libro-virtual/25.jpg","img/libro-virtual/26.jpg",
"img/libro-virtual/27.jpg","img/libro-virtual/28.jpg","img/libro-virtual/29.jpg","img/libro-virtual/30.jpg",
"img/libro-virtual/31.jpg","img/libro-virtual/32.jpg","img/libro-virtual/33.jpg","img/libro-virtual/34.jpg",
"img/libro-virtual/35.jpg","img/libro-virtual/36.jpg","img/libro-virtual/37.jpg","img/libro-virtual/38.jpg",
]

let currentIndex = 0
let imgEl, pageNumEl, prevBtn, nextBtn

function initLibro(){

imgEl = document.getElementById('book-image')
pageNumEl = document.getElementById('page-number')
prevBtn = document.getElementById('prev-btn')
nextBtn = document.getElementById('next-btn')

if(!imgEl) return

prevBtn.onclick = ()=>{
if(currentIndex > 0){
currentIndex--
updateBook()
}
}

nextBtn.onclick = ()=>{
if(currentIndex < pages.length-1){
currentIndex++
updateBook()
}
}

updateBook()
}

function updateBook(){

imgEl.classList.remove("page-in")
imgEl.classList.add("page-out")

setTimeout(()=>{

imgEl.src = pages[currentIndex]
pageNumEl.textContent = "Página " + (currentIndex+1) + " de " + pages.length

imgEl.classList.remove("page-out")
imgEl.classList.add("page-in")

},200)

}


// ABRIR LIBRO
document.getElementById("abrirLibro").addEventListener("click",()=>{

document.getElementById("libro").classList.remove("hidden")
document.getElementById("carta").classList.add("hidden")

initLibro()

window.scrollTo({
top:document.getElementById("libro").offsetTop-100,
behavior:"smooth"
})

})
   

// carta
document.getElementById("abrirCarta").addEventListener("click",()=>{
document.getElementById("carta").classList.remove("hidden")
document.getElementById("libro").classList.add("hidden")
window.scrollTo({
top:document.getElementById("carta").offsetTop-100,
behavior:"smooth"
})
})



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

})