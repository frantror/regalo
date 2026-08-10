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

        subtitulo: "",

        historia: `
No tenía intención de empezar una nueva investigación.

Mi objetivo de hoy era simplemente aprovechar la mañana para fotografiar la fauna de la zona. Había leído que una pequeña familia de ciervos solía acercarse a un claro cercano al amanecer y pensé que quizá tendría suerte.

Todo transcurrió con normalidad, hasta que algo desvió por completo mi atención. A unos metros del sendero, entre la vegetación, encontré una planta que no fui capaz de identificar.

A primera vista no parecía especialmente llamativa. Cuanto más tiempo pasaba observándola, más curiosidad me producía. No recordaba haber visto antes una especie así.

Decidí registrarla y estudiar su evolución con el mayor detalle posible. Lo que comenzó como una simple observación terminó convirtiéndose en algo mucho más interesante de lo que esperaba.

Las páginas que siguen recogen todo lo que he podido averiguar desde aquel primer encuentro. Algunas anotaciones permanecen incompletas y otras se han separado del cuaderno con el paso del tiempo. Si has llegado hasta aquí y consigues reunirlas todas, quizá puedas comprender aquello que yo descubrí poco a poco.

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
Tras el descubrimiento del ejemplar, he considerado que las observaciones de campo no son suficientes para comprender su comportamiento. He decidido trasladar la especie a un entorno estable y preparar un pequeño herbolario donde poder estudiarla con mayor detenimiento.

El montaje ha resultado bastante más laborioso de lo que esperaba. Algunas piezas parecían no encajar y otras me obligaban a desmontar parte de lo ya construido. Sin embargo, una vez terminado, se que ha merecido la pena dedicar tiempo a que todo ocupara el lugar adecuado.

Fue entonces cuando ocurrió algo inesperado. A partir del mismo ejemplar han comenzado a aparecer flores muy diferentes entre sí. Compartían un mismo origen, pero cada una parece poseer características propias.

Para evitar confundir las muestras, he numerado cada flor en el momento de su aparición. Sospecho que conservar esa disposición original será importante para futuras observaciones.
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

Tras varios días de estudio, el ejemplar ha comenzado a desarrollar nuevos brotes con una rapidez difícil de explicar. Para comprender mejor las condiciones en las que se desarrollaba, he empezado a tomar pequeñas muestras del sustrato alrededor de cada flor y a registrar su nivel de pH.

Los resultados son extraños. Aunque las muestras proceden de la misma maceta, ninguna presenta exactamente el mismo valor. Al principio pensé que se trataba de una simple variación del terreno, pero al repetir las mediciones he descubierto que los valores parecían mantenerse asociados a cada ejemplar.

He preparado cuatro pequeñas muestras para poder comparar los resultados y las marqué discretamente. Por separado, las referencias no parecían tener ningún sentido. Sin embargo, al reconstruir la disposición original de las flores en el herbolario, las marcas han comenzado a encajar.

Hay algo peculiar en esta especie: sus características parecen estar relacionadas no solo con dónde crece, sino también con el momento en que se observa.
        `,

        placeholder: "Palabra",

        respuestas: [
            "Dawn",
            "dawn",
            "DAWN"
        ],

        mensajeError:
            "Parece que hay que ordenar bien las muestras."
    },

    //--------------------------------------------------
    // PUZZLE 3
    //--------------------------------------------------

   {
    id: 3,

    tipo: "crucigrama",

    titulo: "Capítulo III",

    subtitulo: "25/07/2026",

    historia: `
        
            He dejado  de centrarme únicamente en las condiciones que necesitaba la especie para crecer. Hay algo más que llamaba mi atención: cuanto más tiempo paso observándola, más diferencias encuentro entre un ejemplar y otro.

He comenzado a registrar estas características en pequeñas fichas de observación. Cada una recoge una cualidad diferente que he podido identificar durante distintos momentos del estudio.

Al compararlas entre sí he descubierto  algo que las conecta. Las cualidades no parecen aparecer al azar.

Quizá para comprender realmente qué hace especial a esta planta no sea suficiente con estudiar una sola de sus flores.

Hay descubrimientos que solo adquieren sentido cuando se observan en conjunto.
       
    `
},
//--------------------------------------------------
    // PUZZLE 4
    //--------------------------------------------------

    {
        id: 4,

        tipo: "texto",

        titulo: "Capítulo IV",

        subtitulo: "12/08/2026",

        historia: 
            `Han pasado algunos días desde mi última anotación.
            Durante este tiempo he seguido preparando el último momento de la investigación. He revisado las muestras, ordenado las observaciones y dejado preparado todo lo necesario para poder observar la especie cuando llegue el eclipse.

Después de todo lo que he aprendido sobre ella, hay algo que todavía no puedo predecir.

Hasta ahora, cada nueva observación parecía aportar una respuesta. Cada flor, cada cambio y cada pequeño detalle ayudaba a comprender un poco mejor aquello que había encontrado aquella primera mañana.

Pero esta vez no puedo hacer más que esperar.

Sea cual sea el resultado, mañana seguiré aquí para continuar con la investigación.
`
        

    
    },
    //--------------------------------------------------
    // FINAL
    //--------------------------------------------------

    {
        id: 999,

        tipo: "final",

        titulo: "Epílogo",

        historia: `
            ¡Feliz cumple!

            Espero que te haya gustado el regalo y que te haya sorprendido al menos un poco.

            Por último te he dejado una carta.
        `,

        boton: "Abrir carta",

        archivo: "carta.pdf"
    }

];
