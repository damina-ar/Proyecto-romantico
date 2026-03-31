/******** DIA 1 */

/***** FONDO ANIMADO */
/* --- ESTRELLAS CAYENDO --- */
function crearEstrellas() {
    const contenedor = document.querySelector(".estrellas-container");

    setInterval(() => {
        let estrella = document.createElement("div");
        estrella.classList.add("estrella");
        estrella.innerHTML = "⭐"; // Símbolo de estrella

        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.fontSize = (10 + Math.random() * 20) + "px";
        estrella.style.animationDuration = (5 + Math.random() * 7) + "s"; // Velocidades distintas

        contenedor.appendChild(estrella);

        setTimeout(() => estrella.remove(), 12000);
    }, 300); // Frecuencia con la que caen
}

crearEstrellas();


/* --- IMÁGENES FLOTANTES --- */
// Reemplaza esto con las rutas de las fotos reales que tengas guardadas en tu carpeta del proyecto
const imagenes = [
    "IMG/familia/foto1.jpeg",
    "IMG/familia/foto2.jpeg",
    "IMG/familia/foto3.jpeg",
    "IMG/familia/foto4.jpeg",
    "IMG/familia/foto5.jpeg",
    "IMG/familia/foto6.jpeg",
    "IMG/familia/foto7.jpeg",
];

setInterval(() => {
    let img = document.createElement("img");
    img.classList.add("imagen-flotante");
    
    img.src = imagenes[Math.floor(Math.random() * imagenes.length)];

    img.style.left = Math.random() * 75 + 10 + "%";
    img.style.top = "100%";
    
    // Hace que algunas fotos suban más lento o rápido que otras (entre 10 y 16 segundos)
    img.style.animationDuration = (8 + Math.random() * 6) + "s"; 

    document.body.appendChild(img);

    setTimeout(() => img.remove(), 16000);
}, 4000); // Aparece una foto cada 3.5 segundos



/**** CARTA */
function mostrarCarta(){
document.getElementById("carta").style.display="block";
corazones();
}

function corazones(){
for(let i=0;i<15;i++){
const heart=document.createElement("div");

heart.innerHTML="💗";
heart.style.position="fixed";
heart.style.left=Math.random()*100+"%";
heart.style.top="100%";
heart.style.fontSize="20px";
heart.style.opacity=0.8;
heart.style.pointerEvents="none";

document.body.appendChild(heart);

let speed=Math.random()*1+0.5;

const anim=setInterval(()=>{
heart.style.top=(parseFloat(heart.style.top)-speed)+"%";

if(parseFloat(heart.style.top)<-10){
clearInterval(anim);
heart.remove();
}
},30);
}
}

function crearScratch(id, callback){
const canvas = document.getElementById(id);
if(!canvas) return;

const ctx = canvas.getContext("2d");

ctx.fillStyle="#bfbfbf";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#888";
ctx.font="18px Arial";
ctx.fillText("Raspa aquí 💕",40,130);

let isDrawing=false;
let scratched=0;

canvas.addEventListener("mousedown",()=> isDrawing=true);
canvas.addEventListener("mouseup",()=> isDrawing=false);

canvas.addEventListener("mousemove",(e)=>{
if(!isDrawing) return;

const rect=canvas.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

ctx.globalCompositeOperation="destination-out";
ctx.beginPath();
ctx.arc(x,y,20,0,Math.PI*2);
ctx.fill();

scratched++;

if(scratched>80 && callback){
callback();
callback=null;
}
});
}
crearScratch("scratchQR");

crearScratch("scratchActividad",()=>{
const ruleta = document.getElementById("ruleta");

ruleta.style.display="block";

setTimeout(()=>{
ruleta.scrollIntoView({
behavior:"smooth",
block:"center"
});
},200);

corazones();
});

function girar(){

const peliculas=[
"Shrek",
"Toy Story",
"Enredados",
"Up",
"Coco",
"Intensamente",
"Mi vecino Totoro",
"Spider-Man",
"Harry Potter"
];

const resultado=document.getElementById("resultado");

resultado.innerText="Girando... 💕";

setTimeout(()=>{
const random=peliculas[Math.floor(Math.random()*peliculas.length)];
resultado.innerText="Hoy verán: "+random+" 🎬";
corazones();
},1200);

}

let girando=false;

function girar(){

if(girando) return;

girando=true;

const wheel = document.getElementById("wheel");
const resultado = document.getElementById("resultado");

const peliculas = [
"Shrek 💚",
"Toy Story 🤠",
"Como entrenar a mi dragón 🍌",
"Doraemon 🔵",
"La princesa y el sapo🌱",
"Dragon Ball ⚡"
];

const random = Math.floor(Math.random()*peliculas.length);

const grados = (360*6) + (random * 60);

wheel.style.transform = `rotate(${grados}deg)`;

setTimeout(()=>{
resultado.innerHTML = "Hoy verán: " + peliculas[random] + " 💕";
girando=false;
},4000);

}

/******* MUSICA */
const btnMusic = document.getElementById("playPause")
const audio = document.getElementById("musica")

if(btnMusic && audio){
btnMusic.addEventListener("click",()=>{

if(audio.paused){
audio.play()
btnMusic.textContent=" play ⏸️"
}else{
audio.pause()
btnMusic.textContent=" pause ▶️"
}

})
}


