let puntaje = 0;
let preguntaActual = 0;

const preguntas = [
    {
        pregunta: "¿Cuál es el lugar más emblemático de Yucatán?",
        opciones: ["Chichen Itzá", "Cenotes de Cuzamá", "Playa Progreso"],
        respuestaCorrecta: 1,
        imagen: "images/chichen-itza.jpg"
    },
    {
        pregunta: "¿Dónde están los famosos Cenotes de Cuzamá?",
        opciones: ["Cuzamá", "Mérida", "Chichen Itzá"],
        respuestaCorrecta: 1,
        imagen: "images/cenotes-cuzama.jpg"
    },
    {
        pregunta: "¿Qué playa es conocida por su cercanía a Mérida?",
        opciones: ["Playa Progreso", "Cenote Ik Kil", "Cenote Xlacah"],
        respuestaCorrecta: 1,
        imagen: "images/playa-progreso.jpg"
    },
    {
        pregunta: "¿Cuál es el nombre del parque ecológico con flamencos?",
        opciones: ["Celestún", "Uxmal", "Tulum"],
        respuestaCorrecta: 1,
        imagen: "images/celestun.jpg"
    },
    {
        pregunta: "¿Cuál es el principal sitio arqueológico en Yucatán después de Chichen Itzá?",
        opciones: ["Uxmal", "Tulum", "Ek Balam"],
        respuestaCorrecta: 1,
        imagen: "images/uxmal.jpg"
    },
    {
        pregunta: "¿Dónde se encuentran las ruinas de Tulum?",
        opciones: ["En la costa del Caribe", "En el interior de Yucatán", "En la costa pacífica"],
        respuestaCorrecta: 1,
        imagen: "images/tulum.jpg"
    }
];

function cargarPregunta() {
    // Mostrar la pregunta actual
    let pregunta = preguntas[preguntaActual];
    document.getElementById("pregunta").textContent = pregunta.pregunta;

    // Mostrar la imagen de la pregunta
    document.getElementById("imagen").src = pregunta.imagen;
    document.getElementById("imagen").alt = "Imagen de " + pregunta.pregunta;

    // Mostrar las opciones
    document.getElementById("button1").textContent = pregunta.opciones[0];
    document.getElementById("button2").textContent = pregunta.opciones[1];
    document.getElementById("button3").textContent = pregunta.opciones[2];
}

function responder(opcionSeleccionada) {
    let pregunta = preguntas[preguntaActual];
    let mensaje = "";

    // Verificar si la respuesta es correcta
    if (opcionSeleccionada === pregunta.respuestaCorrecta) {
        puntaje += 10;
        mensaje = "¡Correcto!";
    } else {
        mensaje = "Incorrecto. La respuesta correcta es: " + pregunta.opciones[pregunta.respuestaCorrecta - 1];
    }

    // Actualizar el puntaje
    document.getElementById("puntaje").textContent = "Puntaje: " + puntaje;
    document.getElementById("mensaje").textContent = mensaje;

    // Avanzar a la siguiente pregunta o finalizar
    preguntaActual++;

    // Si quedan preguntas, cargar la siguiente; si no, mostrar mensaje final
    if (preguntaActual < preguntas.length) {
        setTimeout(cargarPregunta, 2000);
    } else {
        setTimeout(finDelJuego, 2000);
    }
}

function finDelJuego() {
    document.getElementById("pregunta").textContent = "¡Juego Terminado!";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("mensaje").textContent = "Tu puntaje final es: " + puntaje;
}

cargarPregunta();
