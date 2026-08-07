/*
==================================================
DIARIO DE BOTÁNICA
Motor principal
==================================================
*/

const STORAGE_KEY = "diario_botanica_progreso";

let progreso = cargarProgreso();

/*==============================
    INICIO
==============================*/

window.onload = () => {
    mostrarCapitulo(progreso);
};

/*==============================
    MOSTRAR CAPÍTULO
==============================*/

function mostrarCapitulo(id) {

    const puzzle = puzzles.find(p => p.id === id);

    if (!puzzle) {
        console.error("Capítulo no encontrado.");
        return;
    }

    actualizarCabecera(puzzle);

    switch (puzzle.tipo) {
            
        case "intro":
            mostrarIntro(puzzle);
            break;
        case "indice":
            mostrarIndice();
            break;

        case "codigo":
        case "texto":
            mostrarPuzzle(puzzle);
            break;

        case "final":
            mostrarFinal(puzzle);
            break;

        default:
            console.error("Tipo no soportado:", puzzle.tipo);
    }

}

/*==============================
    CABECERA
==============================*/

function actualizarCabecera(puzzle) {

    document.getElementById("chapter").textContent = puzzle.titulo;

}

/*==============================
    INTRO
==============================*/

function mostrarIntro(puzzle) {

    const content = document.getElementById("content");
    const button = document.getElementById("mainButton");

    content.innerHTML = `
        <p>${puzzle.historia}</p>
    `;

    button.textContent = "Comenzar";

    button.onclick = () => {

        progreso = 1;
        guardarProgreso();

        mostrarCapitulo(progreso);

    };

}

/*==============================
    PUZZLES
==============================*/

function mostrarPuzzle(puzzle) {

    const content = document.getElementById("content");
    const button = document.getElementById("mainButton");

    content.innerHTML = `
        <h2>${puzzle.subtitulo}</h2>

        <p>${puzzle.historia}</p>

        <input
            id="respuesta"
            type="text"
            placeholder="${puzzle.placeholder}"
            autocomplete="off"
        >

        <p id="mensaje"></p>
    `;

    button.textContent = "Continuar";

    button.onclick = () => comprobarRespuesta(puzzle);

}

/*==============================
    COMPROBAR RESPUESTA
==============================*/

function comprobarRespuesta(puzzle) {

    const input = document
        .getElementById("respuesta")
        .value
        .trim()
        .toUpperCase();

    const respuestas = puzzle.respuestas.map(r =>
        r.toUpperCase()
    );

    const mensaje = document.getElementById("mensaje");

    if (respuestas.includes(input)) {

        mensaje.textContent = "✓ Correcto";

        siguienteCapitulo(puzzle.id);

    } else {

        mensaje.textContent = puzzle.mensajeError;

    }

}

/*==============================
    SIGUIENTE CAPÍTULO
==============================*/

function siguienteCapitulo(idActual) {

    const indice = puzzles.findIndex(p => p.id === idActual);

    if (indice === -1)
        return;

    const siguiente = puzzles[indice + 1];

    if (!siguiente)
        return;

    setTimeout(() => {

        progreso = siguiente.id;

        guardarProgreso();

        mostrarCapitulo(progreso);

    }, 800);

}

/*==============================
    FINAL
==============================*/

function mostrarFinal(puzzle) {

    const content = document.getElementById("content");
    const button = document.getElementById("mainButton");

    content.innerHTML = `
        <p>${puzzle.historia}</p>
    `;

    button.textContent = puzzle.boton;

    button.onclick = () => {

        window.location.href = puzzle.archivo;

    };

}

/*==============================
    GUARDADO
==============================*/

function guardarProgreso() {

    localStorage.setItem(
        STORAGE_KEY,
        progreso
    );

}

function cargarProgreso() {

    const dato = localStorage.getItem(STORAGE_KEY);

    if (dato === null)
        return 0;

    return parseInt(dato);

}

/*==============================
    EXTRA
==============================*/

// Reinicia el progreso.
// Escribe reiniciarProgreso()
// desde la consola del navegador.

function reiniciarProgreso() {

    localStorage.removeItem(STORAGE_KEY);

    location.reload();

}
