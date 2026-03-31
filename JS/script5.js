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

// Fondo de estrellas
function crearEstrellas() {
    const contenedor = document.querySelector(".estrellas-container");
    setInterval(() => {
        let estrella = document.createElement("div");
        estrella.classList.add("estrella");
        let size = Math.random() * 3;
        estrella.style.width = size + "px";
        estrella.style.height = size + "px";
        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.animationDuration = (2 + Math.random() * 3) + "s";
        contenedor.appendChild(estrella);
        setTimeout(() => estrella.remove(), 5000);
    }, 50);
}
crearEstrellas();

/* --- SECCIÓN 1: CUENTA REGRESIVA CON CONFETI --- */
function iniciarSorpresa() {
    let num = 3;
    let texto = document.getElementById("numero");
    let btn = document.querySelector("#cuenta-regresiva button");
    btn.style.display = "none";

    let intervalo = setInterval(() => {
        num--;
        if (num > 0) {
            texto.innerText = num;
        } else {
            clearInterval(intervalo);
            document.getElementById("cuenta-regresiva").style.display = "none";
            document.getElementById("mensaje-principal").classList.remove("oculto");
            
            // Animación de confeti usando la librería
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#ff4d88', '#ffb3c6', '#ffffff']
            });
        }
    }, 1000);
}
/* --- REVELAR VIAJE Y DESLIZAR --- */
function irAlViaje() {
    let seccionViaje = document.getElementById("seccion-viaje");
    
    // 1. Le quitamos la clase "oculto" para que aparezca en la página
    seccionViaje.classList.remove("oculto");

    // 2. Le damos al navegador una fracción de segundo (150ms) para que 
    // termine de dibujar la sección antes de intentar deslizar hacia ella.
    setTimeout(() => {
        seccionViaje.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
}

/* --- SECCIÓN 2: VIAJE DINÁMICO (ESTILO TIKTOK) --- */
function iniciarViajeDinamico() {
    document.getElementById("btn-viaje").style.display = "none";
    document.getElementById("texto-viaje").style.display = "none";
    const contenedor = document.getElementById("contenedor-viaje-dinamico");
    contenedor.classList.remove("oculto");

    // Array con las rutas de las fotos de Erick y ustedes
    const imagenesViaje = [
        "img/familia/foto1.jpeg", "img/familia/foto2.jpeg", "img/familia/foto3.jpeg", "img/familia/foto4.jpeg","img/familia/foto5.jpeg",
        "img/familia/foto6.jpeg", "img/familia/foto7.jpeg", "img/familia/foto8.jpeg", "img/familia/foto9.jpeg", "img/familia/foto10.jpeg",
        "img/familia/foto11.jpeg", "img/familia/foto12.jpeg", "img/familia/foto13.jpeg", "img/familia/foto14.jpeg", "img/familia/foto15.jpeg",
        "img/familia/foto16.jpeg", "img/familia/foto17.jpeg", "img/familia/foto18.jpeg", "img/familia/foto19.jpeg", "img/familia/foto20.jpeg",
        "img/familia/foto21.jpeg", "img/familia/foto22.jpeg", "img/familia/foto23.jpeg", "img/familia/foto24.jpeg", "img/familia/foto25.jpeg",
        "img/familia/foto26.jpeg", "img/familia/foto27.jpeg", "img/familia/foto28.jpeg", "img/familia/foto29.jpeg", "img/familia/foto30.jpeg",
        "img/familia/foto31.jpeg", "img/familia/foto32.jpeg", "img/familia/foto33.jpeg", "img/familia/foto34.jpeg", "img/familia/foto35.jpeg",
        "img/familia/foto36.jpeg","img/familia/foto37.jpeg","img/familia/foto38.jpeg"
    ];
    
    // Array con palabras y emojis que saltarán en pantalla
    const palabrasViaje = ["Vaca lola", "❤️", "Familia", "❤️", "Negrito bello", "✨", "Esa carita preciosa", "Hijito lindo", "Tu familia te ama", "Pocoyo", "Pacomayo"];

    let tiempoTranscurrido = 0;
    const duracionTotal = 30000; // 50 segundos en milisegundos
    
    // ¡NUEVO!: Variable para llevar el orden exacto de las fotos
    let indiceImagen = 0;

    let intervaloViaje = setInterval(() => {
        tiempoTranscurrido += 600; // Se crea un elemento cada 600ms

        if (tiempoTranscurrido >= duracionTotal) {
            clearInterval(intervaloViaje);
            contenedor.style.display = "none";
            document.getElementById("mensaje-final-viaje").classList.remove("oculto");
            document.getElementById("seccion-pastel").classList.remove("oculto");
            document.getElementById("seccion-regalo").classList.remove("oculto");

            return;
        }

        // Crear el elemento flotante
        let el = document.createElement("div");
        el.classList.add("elemento-flotante");

        // Decidir aleatoriamente si es foto o texto (70% foto, 30% texto)
        if (Math.random() > 0.3) {
            let img = document.createElement("img");
            
            // Elegimos la foto siguiendo el orden, no al azar
            img.src = imagenesViaje[indiceImagen];
            el.appendChild(img);
            
            // Avanzamos a la siguiente foto para la próxima vez
            indiceImagen++;
            
            // Si ya mostramos todas las fotos, volvemos a empezar desde la foto 1
            if (indiceImagen >= imagenesViaje.length) {
                indiceImagen = 0;
            }
            
        } else {
            // Las palabras sí pueden seguir apareciendo al azar
            el.classList.add("texto");
            el.innerText = palabrasViaje[Math.floor(Math.random() * palabrasViaje.length)];
        }

        // Posición y rotación aleatoria
        el.style.left = (Math.random() * 60 + 5) + "%"; 
        el.style.top = (Math.random() * 50 + 5) + "%";  
        el.style.transform = `rotate(${Math.random() * 40 - 20}deg)`; 

        contenedor.appendChild(el);

        // Eliminar el elemento después de que termine su animación (1.5s)
        setTimeout(() => el.remove(), 1500);

    }, 600); 
}

/* --- SECCIÓN 3: APAGAR VELA --- */
function apagarVela() {
    document.getElementById("flama").style.display = "none"; 
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

/* --- SECCIÓN 4: MOSTRAR SORPRESAS (BOTONES) --- */
function mostrarSorpresa(id) {
    // Ocultar todas las secciones primero
    let contenidos = document.querySelectorAll(".sorpresa-contenido");
    contenidos.forEach(c => c.classList.add("oculto"));

    // Mostrar solo la que se hizo clic
    document.getElementById("sorpresa-" + id).classList.remove("oculto");
// Hacer pequeño scroll para centrar el contenido
    setTimeout(() => {
        document.getElementById("sorpresa-" + id).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

}
/* --- MODAL DEL REGALO --- */
function abrirModalRegalo(rutaImagen) {
    let modal = document.getElementById("modal-regalo");
    let imgAmpliada = document.getElementById("img-regalo-ampliada");
    
    // Le pasamos la ruta de la foto a la imagen gigante
    imgAmpliada.src = rutaImagen;
    
    // Mostramos la ventana
    modal.classList.remove("oculto");
    modal.style.display = "flex"; // Nos aseguramos de que use flexbox para centrar
}

function cerrarModalRegalo() {
    let modal = document.getElementById("modal-regalo");
    modal.classList.add("oculto");
    modal.style.display = "none";
}




