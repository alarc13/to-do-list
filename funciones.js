const formulario = document.querySelector("form");
const inputText = document.querySelector("form input:first-child");
const contenedorTareas = document.querySelector(".tareas");

datos = JSON.parse(datos); //datosde mentirillas para probar
//carga inicial de los datos

let tareasEnFront = [];

datos.forEach(tarea => {
    tareasEnFront.push(new Tarea(tarea.tarea, tarea.terminada, contenedorTareas)); //cada tarea guardada en un array - generar una instancia de mi clase
});

//crear tareas

formulario.addEventListener("submit", evento => {
    evento.preventDefault();

    if(inputText.value.trim() != ""){// si no he escrito nada y presioni el boton de submit va a ifnorar
        tareasEnFront.push(new Tarea(inputText.value.trim(), false, contenedorTareas));
        inputText.value = ""; //si no esta vacio el input - quiero crearle una nueva tarea
    }
});
