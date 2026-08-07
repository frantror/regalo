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

    //--------------------------------------------------
    // PRÓLOGO
    //--------------------------------------------------

    {
        id: 0,

        tipo: "intro",

        titulo: "Prólogo",

        subtitulo: "29/06/2026",

        historia: `
No tenía intención de empezar una nueva investigación.

Mi objetivo de hoy era aprovechar la mañana para fotografiar la fauna de la zona. Había leído que una pequeña familia de ciervos solía acercarse a un claro cercano al amanecer y pensé que quizá tendría suerte. Durante un buen rato todo iba con normalidad, hasta que algo desvió por completo mi atención.

A unos metros del sendero, entre la vegetación, encontré una planta que no fui capaz de identificar.

A primera vista no parecía especialmente llamativa. No destacaba por su tamaño ni por sus colores, y sin embargo tenía algo difícil de explicar. Cuanto más tiempo pasaba observándola, más curioso me resultaba no haber visto antes una especie con unas características tan particulares.

Desde aquel momento decidí registrar cada nueva observación con el mayor detalle posible.

Las páginas que siguen recogen todo lo que he podido averiguar hasta ahora. Algunas anotaciones permanecen incompletas y otras han quedado separadas del cuaderno. Si has llegado hasta aquí y consigues reunirlas todas, quizá logres comprender aquello que todavía no he sido capaz de explicar por completo.

— Fran
        `
    },

    //--------------------------------------------------
    // PUZZLE 1
    //--------------------------------------------------

    {
        id: 1,

        tipo: "codigo",

        titulo: "Capítulo I",

        subtitulo: "11/07/2026",

        historia: `
            Observación nº 1

Tras el descubrimiento del ejemplar, consideré que las observaciones de campo no serían suficientes para comprender su comportamiento. Decidí trasladar la especie a un entorno estable y preparar un pequeño herbolario donde pudiera estudiarla con mayor detenimiento.

El montaje resultó bastante más laborioso de lo que esperaba. Algunas piezas parecían no encajar, otras obligaban a desmontar parte de lo ya construido y, durante un momento, llegué a pensar que nunca conseguiría dejar el herbolario listo para comenzar las observaciones. Sin embargo, una vez terminado, comprendí que había merecido la pena dedicar tiempo a que todo ocupara el lugar adecuado.

Fue entonces cuando ocurrió algo inesperado. A partir del mismo ejemplar comenzaron a aparecer flores muy diferentes entre sí. Compartían un mismo origen, pero cada una parecía poseer características propias que las hacían únicas.

Para evitar confundir las muestras, numeré cada flor en el momento de su aparición y anoté cuidadosamente la posición que ocupaba dentro del herbolario. Sospecho que conservar esa disposición original será importante para futuras observaciones.
        `,

        placeholder: "Código",

        respuestas: [
            "4821"
        ],

        mensajeError:
            "Su posición inicial debe ser importante para la investigación."
    },

    //--------------------------------------------------
    // PUZZLE 2
    //--------------------------------------------------

    {
        id: 2,

        tipo: "texto",

        titulo: "Capítulo II",

        subtitulo: "18/07/2026",

        historia: `
            Observación nº 2

Tras varios días de estudio, el ejemplar comenzó a desarrollar nuevos brotes con una rapidez difícil de explicar. Para evitar que los tallos más jóvenes se deformaran durante el crecimiento, fabriqué varios tutores de madera y los distribuí cuidadosamente alrededor de cada flor.

Fue entonces cuando apareció un comportamiento completamente inesperado.

Durante el resto del día la especie apenas mostraba cambios apreciables. Sin embargo, en el instante en que la primera luz del amanecer atravesaba el herbolario, los ejemplares reaccionaban de forma distinta. Los tallos modificaban ligeramente su orientación y las flores parecían buscar siempre el mismo punto de luz, como si aquel momento marcara el inicio de un nuevo ciclo.

Para registrar correctamente este fenómeno, marqué cada tutor con una referencia discreta. De forma aislada no parecía tener ningún significado, pero al reconstruir la disposición original del herbolario las marcas recuperaban el sentido con el que fueron creadas.

Sospecho que la clave para comprender esta especie siempre aparece en ese momento.
        `,

        placeholder: "Palabra",

        respuestas: [
            "Dawn",
            "dawn",
            "DAWN"
        ],

        mensajeError:
            "Parece que debo ordenar bien los tutores."
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
