// Datos iniciales del equipo
let data = [
    {
        "Nombre": "Pablo Alejandro Ramos",
        "País de Residencia": "Argentina",
        "Usuario en Discord": "pabloaleram",
        "Teléfono": "+5493884085107",
        "Hobbie": "Videojuegos",
        "Disponibilidad horaria para hablar": "10:00 a 13:00 (UTC-3)",
        "Link de Calendly": "https://calendly.com/pabloalejuy"
    },
    {
        "Nombre": "Christopher Manzueta",
        "País de Residencia": "República Dominicana",
        "Usuario en Discord": "chris.4.0.2",
        "Teléfono": "+18494015923",
        "Hobbie": "Series, películas, animes",
        "Disponibilidad horaria para hablar": "9:00 a 14:00 (UTC-4)",
        "Link de Calendly": "https://calendly.com/christophermanzueta-4-0-2"
    },
    {
        "Nombre": "María Fernanda",
        "País de Residencia": "Perú",
        "Usuario en Discord": "nuweiweiwei",
        "Teléfono": "+51987258680",
        "Hobbie": "Leer",
        "Disponibilidad horaria para hablar": "Mañana/Noche (7am - 8pm)",
        "Link de Calendly": ""
    },
    {
        "Nombre": "Gabriela Coronel",
        "País de Residencia": "Argentina",
        "Usuario en Discord": "gabycdisc",
        "Teléfono": "+54 1157298278",
        "Hobbie": "Jugar videojuegos, música (canto y música)",
        "Disponibilidad horaria para hablar": "Martes a viernes (8:40 - 11:30)",
        "Link de Calendly": ""
    },
    {
        "Nombre": "Uriel Lopez Pacheco",
        "País de Residencia": "México",
        "Usuario en Discord": "",
        "Teléfono": "+5578095835",
        "Hobbie": "Escuchar música",
        "Disponibilidad horaria para hablar": "Lunes a viernes (8:40 - 11:30)",
        "Link de Calendly": ""
    },
    {
        "Nombre": "Simón",
        "País de Residencia": "Argentina",
        "Usuario en Discord": "No usa Discord",
        "Teléfono": "+54 9 2324 52-8690",
        "Hobbie": "Escuchar música, ver K-dramas, aprender idiomas",
        "Disponibilidad horaria para hablar": "8:30am a 12pm GMT -3",
        "Link de Calendly": "https://calendly.com/moreno-csimon/15-30-minutes-meeting"
    },
    {
        "Nombre": "Ulises Rodriguez",
        "País de Residencia": "Argentina",
        "Usuario en Discord": "",
        "Teléfono": "",
        "Hobbie": "Full-stack (MERN), aprendiendo C#",
        "Disponibilidad horaria para hablar": "",
        "Link de Calendly": ""
    },
    {
        "Nombre": "Mariano",
        "País de Residencia": "Argentina (vive en NY)",
        "Usuario en Discord": "marianobarrionuevo",
        "Teléfono": "+1 9293816584",
        "Hobbie": "Profesor de danza",
        "Disponibilidad horaria para hablar": "Flexible, preferentemente durante la mañana",
        "Link de Calendly": "https://calendly.com/marianobarrionuevom1/30min"
    }
];

// Función para agregar un integrante al equipo
function agregarIntegrante() {
    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let pais = document.getElementById("pais").value;
    let discord = document.getElementById("discord").value;
    let telefono = document.getElementById("telefono").value;
    let hobbie = document.getElementById("hobbie").value;
    let disponibilidad = document.getElementById("disponibilidad").value;
    let calendly = document.getElementById("calendly").value;

    // Crear el objeto del nuevo integrante
    let nuevoIntegrante = {
        "Nombre": nombre,
        "País de Residencia": pais,
        "Usuario en Discord": discord,
        "Teléfono": telefono,
        "Hobbie": hobbie,
        "Disponibilidad horaria para hablar": disponibilidad,
        "Link de Calendly": calendly
    };

    // Agregar el nuevo integrante al arreglo de datos
    data.push(nuevoIntegrante);

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("discord").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("hobbie").value = "";
    document.getElementById("disponibilidad").value = "";
    document.getElementById("calendly").value = "";

    // Actualizar la tabla
    actualizarTabla();
}

// Función para actualizar la tabla con los datos actuales del equipo
function actualizarTabla() {
    let tabla = document.getElementById("team-table").getElementsByTagName('tbody')[0];
    tabla.innerHTML = "";

    for (let integrante of data) {
        let fila = tabla.insertRow();

        for (let key in integrante) {
            if (integrante.hasOwnProperty(key)) {
                let celda = fila.insertCell();
                celda.innerText = integrante[key];
            }
        }
    }
}

// Llamar a actualizarTabla para mostrar los datos iniciales del equipo al cargar la página
actualizarTabla();