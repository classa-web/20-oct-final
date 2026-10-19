
const navegacion = document.getElementById("navegacion");
const contenido = document.getElementById("contenido");

let obras = [];

// CARGAR LOS DATOS DEL JSON

function cargarObras() {
    fetch("obras.json")
        .then(respuesta => respuesta.json())
        .then(datos => {
            obras = datos;
            crearBotones();
            mostrarObra(1);
        });
}

// CREAR LOS BOTONES DE NAVEGACION

function crearBotones() {
    obras.forEach(obra => {

        const boton = document.createElement("button");
        boton.textContent = obra.titulo;

        boton.addEventListener("click", function() {
            mostrarObra(obra.id);
        });

        navegacion.appendChild(boton);
    });
}

// MOSTRAR LA OBRA SELECCIONADA

function mostrarObra(id) {

    const obra = obras.find(libro => libro.id === id);

    contenido.innerHTML = `
        <div class="informacion">
            <p>${obra.anio} / ${obra.genero}</p>
            <h3>${obra.titulo}</h3>
            <p>${obra.descripcion}</p>
        </div>
    `;

    // CAMBIAR EL COLOR DEL BOTON SELECCIONADO

    const botones = navegacion.querySelectorAll("button");

    botones.forEach((boton, indice) => {
        if (obras[indice].id === id) {
            boton.classList.add("activo");
        } else {
            boton.classList.remove("activo");
        }
    });
}

// INICIAR LA PAGINA

cargarObras();
