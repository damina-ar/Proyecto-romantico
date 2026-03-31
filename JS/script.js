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


