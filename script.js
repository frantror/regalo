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

        case "codigo":
        case "texto":
            mostrarPuzzle(puzzle);
            break;

        case "crucigrama":
            mostrarCrucigrama(puzzle);
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

    document.getElementById("chapter").textContent =
        puzzle.titulo;

}


/*==============================
    INTRO
==============================*/

function mostrarIntro(puzzle) {

    const content = document.getElementById("content");
    const button = document.getElementById("mainButton");

    content.innerHTML = `
        <h2>${puzzle.subtitulo}</h2>

        <p>${puzzle.historia}</p>
    `;

    button.textContent = "Pasar página";

    button.onclick = () => {

        progreso = 1;

        guardarProgreso();

        mostrarCapitulo(progreso);

    };

}


/*==============================
    PUZZLES NORMALES
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


/*==================================================
    CRUCIGRAMA
==================================================*/

/*
    Distribución:

    BELLEZA
        SINCERIDAD
          DAWNIA
       CIERVO
        ALEGRIA
     SUPERACION

    La columna 6 forma:

        A
        N
        D
        R
        E
        A

    = ANDREA
*/


const crucigramaPalabras = [

    {
        numero: 1,
        palabra: "BELLEZA",
        fila: 0,
        columna: 0
    },

    {
        numero: 2,
        palabra: "SINCERIDAD",
        fila: 1,
        columna: 4
    },

    {
        numero: 3,
        palabra: "DAWNIA",
        fila: 2,
        columna: 6
    },

    {
        numero: 4,
        palabra: "CIERVO",
        fila: 3,
        columna: 3
    },

    {
        numero: 5,
        palabra: "ALEGRIA",
        fila: 4,
        columna: 4
    },

    {
        numero: 6,
        palabra: "SUPERACION",
        fila: 5,
        columna: 1
    }

];


const filasCrucigrama = 6;
const columnasCrucigrama = 14;


/*==============================
    CREAR CRUCIGRAMA
==============================*/

function crearCrucigrama() {

    const grid =
        document.getElementById("grid-crucigrama");

    if (!grid) return;

    grid.innerHTML = "";


    // Crear matriz vacía

    const matriz = [];

    for (let fila = 0; fila < filasCrucigrama; fila++) {

        matriz[fila] = [];

        for (let columna = 0; columna < columnasCrucigrama; columna++) {

            matriz[fila][columna] = null;

        }

    }


    // Colocar palabras

    crucigramaPalabras.forEach(palabra => {

        for (let i = 0; i < palabra.palabra.length; i++) {

            const fila = palabra.fila;

            const columna =
                palabra.columna + i;

            matriz[fila][columna] =
                palabra.palabra[i];

        }

    });


    // Crear casillas

    for (let fila = 0; fila < filasCrucigrama; fila++) {

        for (
            let columna = 0;
            columna < columnasCrucigrama;
            columna++
        ) {

            const casilla =
                document.createElement("div");

            casilla.classList.add(
                "casilla-crucigrama"
            );


            const letra =
                matriz[fila][columna];


            // Casilla vacía

            if (!letra) {

                casilla.classList.add(
                    "casilla-vacia"
                );

            }


            // Casilla con letra

            else {

                casilla.classList.add(
                    "casilla-activa"
                );


                // Columna que forma ANDREA

                if (columna === 6) {

                    casilla.classList.add(
                        "casilla-oculta"
                    );

                }


                const input =
                    document.createElement("input");

                input.type = "text";

                input.maxLength = 1;

                input.autocomplete = "off";

                input.spellcheck = false;

                input.dataset.respuesta =
                    letra;


                /*
                    Al escribir una letra:

                    - La convierte a mayúscula.
                    - Permite letras con tilde.
                    - Pasa automáticamente
                      a la siguiente casilla.
                */

                input.addEventListener(
                    "input",
                    function () {

                        this.value =
                            this.value
                                .toUpperCase()
                                .replace(
                                    /[^A-ZÁÉÍÓÚÜÑ]/g,
                                    ""
                                );


                        if (this.value.length === 1) {

                            const inputs =
                                document.querySelectorAll(
                                    "#grid-crucigrama input"
                                );

                            const posicion =
                                Array.from(inputs)
                                    .indexOf(this);


                            if (
                                posicion <
                                inputs.length - 1
                            ) {

                                inputs[
                                    posicion + 1
                                ].focus();

                            }

                        }

                    }
                );


                casilla.appendChild(input);

            }


            grid.appendChild(casilla);

        }

    }

}


/*==============================
    NORMALIZAR TEXTO
==============================*/

/*
    Esto permite que:

    SUPERACION = SUPERACIÓN
    ALEGRIA    = ALEGRÍA

    sean consideradas iguales.
*/

function normalizarTexto(texto) {

    return texto
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


/*==============================
    MOSTRAR CRUCIGRAMA
==============================*/

function mostrarCrucigrama(puzzle) {

    const content =
        document.getElementById("content");

    const button =
        document.getElementById("mainButton");


    content.innerHTML = `

        <h2>${puzzle.subtitulo}</h2>

        <p>
            ${puzzle.historia}
        </p>


        <div id="crucigrama">

            <div id="grid-crucigrama"></div>


            <div id="pistas-crucigrama">

                <div class="pista">
                    <span>1.</span>
                    Cualidad de aquello que destaca
                    por su armonía y atractivo.
                </div>

                <div class="pista">
                    <span>2.</span>
                    Forma de expresarse sin ocultar
                    ni falsear lo que se piensa o siente.
                </div>

                <div class="pista">
                    <span>3.</span>
                    Nombre provisional dado a la
                    nueva especie descubierta.
                </div>

                <div class="pista">
                    <span>4.</span>
                    Animal cuyo rastro condujo al
                    descubrimiento de la nueva especie.
                </div>

                <div class="pista">
                    <span>5.</span>
                    Aquello que dejan los buenos
                    momentos compartidos.
                </div>

                <div class="pista">
                    <span>6.</span>
                    Capacidad de seguir adelante
                    y vencer las dificultades.
                </div>

            </div>


            <p id="resultadoCrucigrama"></p>

        </div>

    `;


    crearCrucigrama();


    /*
        El botón principal que ya existe
        en tu página será el botón
        "Comprobar".
    */

    button.textContent = "Comprobar";

    button.onclick = () =>
        comprobarCrucigrama(puzzle);

}


/*==============================
    COMPROBAR CRUCIGRAMA
==============================*/

function comprobarCrucigrama(puzzle) {

    const inputs =
        document.querySelectorAll(
            "#grid-crucigrama input"
        );


    let correcto = true;


    inputs.forEach(input => {

        const respuesta =
            normalizarTexto(input.value);

        const solucion =
            normalizarTexto(
                input.dataset.respuesta
            );


        if (respuesta !== solucion) {

            correcto = false;

            input.classList.add("error");

        }

        else {

            input.classList.remove("error");

        }

    });


    const resultado =
        document.getElementById(
            "resultadoCrucigrama"
        );


    /*==============================
        CORRECTO
    ==============================*/

    if (correcto) {

        resultado.innerHTML = `
            <span>
                Todas las anotaciones coinciden.
            </span>

            <br><br>

            <strong>
                A N D R E A
            </strong>
        `;

        resultado.className =
            "resultado-correcto";


        /*
            Guardamos que el puzzle
            ha sido completado.
        */

        localStorage.setItem(
            "crucigramaCompletado",
            "true"
        );


        /*
            Después de mostrar el resultado,
            avanzamos al siguiente capítulo.
        */

        setTimeout(() => {

            siguienteCapitulo(puzzle.id);

        }, 2500);

    }


    /*==============================
        INCORRECTO
    ==============================*/

    else {

        resultado.textContent =
            "Hay algo que no coincide con mis anotaciones.";

        resultado.className =
            "resultado-error";

    }

}


/*==============================
    SIGUIENTE CAPÍTULO
==============================*/

function siguienteCapitulo(idActual) {

    const indice =
        puzzles.findIndex(
            p => p.id === idActual
        );


    if (indice === -1)
        return;


    const siguiente =
        puzzles[indice + 1];


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

    const content =
        document.getElementById("content");

    const button =
        document.getElementById("mainButton");


    content.innerHTML = `
        <p>${puzzle.historia}</p>
    `;


    button.textContent =
        puzzle.boton;


    button.onclick = () => {

        window.location.href =
            puzzle.archivo;

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

    const dato =
        localStorage.getItem(
            STORAGE_KEY
        );


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

    localStorage.removeItem(
        STORAGE_KEY
    );

    location.reload();

}
