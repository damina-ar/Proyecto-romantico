document.addEventListener("DOMContentLoaded", function(){

/* MATRIX */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01{}[]<>/=$#*";
const fontSize = 14;
const columns = canvas.width/fontSize;

const drops = [];
for(let x=0; x<columns; x++) drops[x]=1;

function draw(){
ctx.fillStyle="rgba(0,0,0,0.15)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="rgba(0,255,140,0.35)";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){
const text=letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;
}
}
setInterval(draw,33);


/* TERMINAL TEXTO */
const text = "Inicializando celebración... cargando recuerdos... compilando amor... listo 💙";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typed").innerHTML += text.charAt(i);
i++;
setTimeout(typing,50);
}
}
typing();


/* CONTADOR */
const birthday = new Date("2026-03-30T00:00:00");

function updateCountdown(){

const now = new Date();
const diff = birthday - now;

if(diff <= 0){
document.getElementById("countdown").innerHTML = "Hoy es tu cumpleaños 🎉";
confetti();
return;
}

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor((diff/(1000*60*60)) % 24);
const minutes = Math.floor((diff/(1000*60)) % 60);

document.getElementById("countdown").innerHTML =
days+" días "+hours+"h "+minutes+"m";
}

setInterval(updateCountdown,1000);
updateCountdown();


/* CONFETTI */
function confetti(){
for(let i=0;i<120;i++){
const conf = document.createElement("div");

conf.style.position="fixed";
conf.style.width="8px";
conf.style.height="8px";
conf.style.background="hsl("+Math.random()*360+"deg,100%,50%)";
conf.style.left=Math.random()*100+"%";
conf.style.top="-10px";
conf.style.zIndex=9999;

document.body.appendChild(conf);

let fall = Math.random()*3+2;

setInterval(()=>{
conf.style.top = parseFloat(conf.style.top)+fall+"px";
},20);
}
}


/******************** SECRETOS */

let typedKeys = "";

document.addEventListener("keydown", e => {
typedKeys += e.key.toLowerCase();

if(typedKeys.includes("teamo")){
alert("💙 Has desbloqueado mi corazón");
mostrarJuego();
typedKeys="";
}
});


/******** MINIJUEGO SECRETO */

let score = 0;

function mostrarJuego(){
const game = document.getElementById("game");
if(game){
game.style.display="block";
game.scrollIntoView({behavior:"smooth"});
iniciarJuego();
}
}

function iniciarJuego(){
const btn = document.getElementById("heartBtn");

if(!btn) return;

btn.addEventListener("click",()=>{
score++;
document.getElementById("score").innerText="Puntos: "+score;

btn.style.position="absolute";
btn.style.left=Math.random()*80+"%";
btn.style.top=Math.random()*80+"%";
});
}

/* OTROS SECRETOS */
document.addEventListener("keydown",function(e){
if(e.key === "h"){
alert("Te amo ingeniero 💻💙");
}
});

document.addEventListener("dblclick",function(){
alert("Modo romántico activado 💙");
});

});


/****** BOTON MUSICA */
function toggleMusic(){
const music = document.getElementById("music");

if(music.paused){
music.play();
}else{
music.pause();
}
}

/***** FLECHAS */
function scrollGallery(direction){
const gallery = document.getElementById("gallery");
gallery.scrollLeft += direction * 300;
}



/******** DIA 1 */
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