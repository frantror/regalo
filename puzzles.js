/*
==========================================================
DIARIO DE BOTÁNICA
----------------------------------------------
Aquí se define TODA la aventura.

Cada objeto del array representa un capítulo.

No hace falta modificar script.js para añadir
más capítulos.
==========================================================
*/

const puzzles = [
{
    id: 0.5,

    tipo: "indice",

    titulo: "Índice"
},
    //--------------------------------------------------
    // PRÓLOGO
    //--------------------------------------------------

    {
        id: 0,

        tipo: "intro",

        titulo: "Prólogo",

        historia: `
            Bienvenida.

            Lo que tienes delante parece un sencillo
            diario de botánica.

            Sin embargo, algunas páginas permanecen
            ocultas.

            Solo quien consiga resolver cada pequeño
            misterio podrá descubrir el verdadero motivo
            por el que este diario existe.
        `
    },

    //--------------------------------------------------
    // PUZZLE 1
    //--------------------------------------------------

    {
        id: 1,

        tipo: "codigo",

        titulo: "Capítulo I",

        subtitulo: "Las flores",

        historia: `
            Cada flor guarda un pequeño fragmento.

            Individualmente parecen simples notas,
            pero juntas esconden un camino.

            Observa con atención.
        `,

        placeholder: "Código",

        respuestas: [
            "4821"
        ],

        mensajeError:
            "Quizá las flores todavía no han revelado su secreto."
    },

    //--------------------------------------------------
    // PUZZLE 2
    //--------------------------------------------------

    {
        id: 2,

        tipo: "texto",

        titulo: "Capítulo II",

        subtitulo: "Los palos",

        historia: `
            Algunas palabras necesitan orden para
            cobrar sentido.

            Tal vez ocurra lo mismo aquí.
        `,

        placeholder: "Palabra",

        respuestas: [
            "JARDIN",
            "JARDÍN"
        ],

        mensajeError:
            "Las letras aún no parecen estar en el orden correcto."
    },

    //--------------------------------------------------
    // PUZZLE 3
    //--------------------------------------------------

    {
        id: 3,

        tipo: "codigo",

        titulo: "Capítulo III",

        subtitulo: "Las fichas",

        historia: `
            Las flores cuentan muchas cosas.

            Quizá alguno de esos datos sea más
            importante de lo que parece.
        `,

        placeholder: "Código",

        respuestas: [
            "9352"
        ],

        mensajeError:
            "Todavía falta alguna pista."
    },

    //--------------------------------------------------
    // PUZZLE 4
    //--------------------------------------------------

    {
        id: 4,

        tipo: "texto",

        titulo: "Capítulo IV",

        subtitulo: "???",

        historia: `
            Aquí añadiremos el siguiente acertijo.
        `,

        placeholder: "Respuesta",

        respuestas: [
            "PENDIENTE"
        ],

        mensajeError:
            "No parece ser la respuesta correcta."
    },

    //--------------------------------------------------
    // FINAL
    //--------------------------------------------------

    {
        id: 999,

        tipo: "final",

        titulo: "Epílogo",

        historia: `
            Has llegado hasta el final.

            Gracias por recorrer este pequeño camino.

            Todo lo que has descubierto te ha traído
            hasta aquí.

            Ahora solo queda abrir la última página.
        `,

        boton: "Abrir carta",

        archivo: "carta.pdf"
    }

];
