/*** DÍA 2 */
/************* DIA 2 *************/

/************* LÓGICA DE BURBUJAS (INICIO) *************/
function iniciarBurbujas() {
    const pantalla = document.getElementById("pantalla-burbujas");
    const contenido = document.getElementById("contenido-principal");
    const body = document.body;
    const textoMensaje = document.getElementById("texto-burbujas");
    
    // Generar más burbujas en PC y menos en celular para que no sea estresante
    let cantidadBurbujas = window.innerWidth < 768 ? 30 : 60; 
    let burbujasRestantes = cantidadBurbujas;

    for (let i = 0; i < cantidadBurbujas; i++) {
        let burbuja = document.createElement("div");
        burbuja.classList.add("burbuja");

        // Tamaño aleatorio entre 40px y 110px
        let size = Math.floor(Math.random() * 70) + 40;
        burbuja.style.width = size + "px";
        burbuja.style.height = size + "px";

        // Posición aleatoria por toda la pantalla
        burbuja.style.left = Math.random() * (window.innerWidth - size) + "px";
        burbuja.style.top = Math.random() * (window.innerHeight - size) + "px";

        pantalla.appendChild(burbuja);

        // Función que revienta la burbuja
        const reventar = (e) => {
            e.preventDefault(); // Evita comportamientos extraños en celular
            
            if(burbuja.classList.contains("reventada")) return; // Si ya se reventó, no hace nada

            burbuja.classList.add("reventada");
            burbujasRestantes--;

            // Animación de desaparición
            setTimeout(() => burbuja.remove(), 150);

            // Si ya reventó todas las burbujas
            if (burbujasRestantes === 0) {
                textoMensaje.innerText = "¡Día 2 desbloqueado! ❤️";
                
                // Hace desaparecer la pantalla azul suavemente
                setTimeout(() => {
                    pantalla.style.opacity = "0"; 
                    setTimeout(() => {
                        pantalla.style.display = "none";
                        body.classList.remove("bloqueado"); // Permite hacer scroll de nuevo
                        contenido.classList.add("visible"); // Muestra la página web real
                    }, 1000); // 1 segundo de transición visual
                }, 600);
            }
        };

        // Eventos que detectan pasar el ratón o tocar la pantalla
        burbuja.addEventListener("mouseover", reventar);
        burbuja.addEventListener("touchstart", reventar, {passive: false});
    }
}

// Inicializamos las burbujas en cuanto carga la página
window.addEventListener("DOMContentLoaded", iniciarBurbujas);
/************* DIA 2 *************/

/* MODAL IMAGEN */
document.querySelectorAll(".foto-click").forEach(img=>{
img.addEventListener("click",()=>{
document.getElementById("modalImg").style.display="flex";
document.getElementById("imgGrande").src=img.src;
});
});

document.querySelector(".cerrar").onclick=function(){
document.getElementById("modalImg").style.display="none";
};

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

/* CHISTES FLIP */
document.querySelectorAll(".card-chiste").forEach(card=>{
card.addEventListener("click",()=>{
card.classList.toggle("flip");
});
});

/* MINIJUEGO */
let clicks = 0;
const corazon = document.getElementById("corazonJuego");
const tickets = document.getElementById("ticketsContainer");

if(corazon){
corazon.addEventListener("click",()=>{
clicks++;

corazon.style.transform="scale(1.3)";
setTimeout(()=>{
corazon.style.transform="scale(1)";
},150);

if(clicks >= 5){
tickets.style.display="block";
corazon.style.display="none";
}
});
}

/* SLIDER TICKETS */
const contenedorTickets = document.getElementById("contenedorTickets");

document.getElementById("nextTicket").onclick = ()=>{
contenedorTickets.scrollBy({left:260,behavior:"smooth"});
};

document.getElementById("prevTicket").onclick = ()=>{
contenedorTickets.scrollBy({left:-260,behavior:"smooth"});
};


/* SLIDER GALERIA */

const galeria = document.querySelector(".contenedor-galeria");

document.getElementById("nextGaleria").addEventListener("click",()=>{
galeria.scrollBy({left:220,behavior:"smooth"});
});

document.getElementById("prevGaleria").addEventListener("click",()=>{
galeria.scrollBy({left:-220,behavior:"smooth"});
});

let contador = 0;
const juego = document.getElementById("juegoCorazon");
const ticketsBox = document.getElementById("ticketsOcultos");

if(juego){
juego.addEventListener("click",()=>{
contador++;

juego.style.transform="scale(1.3)";
setTimeout(()=>juego.style.transform="scale(1)",150);

if(contador>=5){
juego.style.display="none";
ticketsBox.style.display="block";
}
});
}