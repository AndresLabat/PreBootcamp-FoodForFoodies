
// asignamos una variable al elemento del HTML para poder trabajar con el
const contenedor = document.getElementById("cestaAside");
const contenedorTexto = document.getElementById("textoDrop");
const precioTotal = document.getElementById("precioTotal");


// creamos variables que se usaran en las function
let precio = 0;
let cantidadArticulos = [];


// Durante el evento de arrastre de un artículo, necesario para obtener correctamente su ID
    document.querySelectorAll("article[draggable=true]").forEach(article => {
    article.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", article.id); // Establece el ID del artículo
    });
});


// Necesario para que el evento "drop" funcione correctamente
contenedor.addEventListener("dragover", e => {
    e.preventDefault();
});


// Aqui lo que queremos que ocurra cuando hacemos drop dependiendo del elemento arrastrado
contenedor.addEventListener("drop", e => {
    e.preventDefault();
 
    const platoId = e.dataTransfer.getData("text/plain"); // esto almacena el id del articulo
    let platoNombre = "";
    let platoPrecio = 0;

    switch (platoId) {
        case "hamburguesaId":
            platoNombre = "Hamburguesa triple F";
            platoPrecio = parseFloat(document.getElementById("hamburguesaPrecio").textContent);
            break;
        case "pizzaId":
            platoNombre = "Pizza triple F";
            platoPrecio = parseFloat(document.getElementById("pizzaPrecio").textContent);
            break;
        case "pescadoId":
            platoNombre = "Pescado fresco";
            platoPrecio = parseFloat(document.getElementById("pescadoPrecio").textContent);
            break;
        case "salteadoId":
            platoNombre = "Salteado de verduras";
            platoPrecio = parseFloat(document.getElementById("salteadoPrecio").textContent);
            break;
        case "sushiId":
            platoNombre = "Sushi";
            platoPrecio = parseFloat(document.getElementById("sushiPrecio").textContent);
            break;
        case "tacosId":
            platoNombre = "Tacos";
            platoPrecio = parseFloat(document.getElementById("tacosPrecio").textContent);
            break;
        case "donutsId":
            platoNombre = "Donuts";
            platoPrecio = parseFloat(document.getElementById("donutsPrecio").textContent);
            break;
        case "cheesecakeId":
            platoNombre = "Cheesecake";
            platoPrecio = parseFloat(document.getElementById("cheesecakePrecio").textContent);
            break;
        case "muffinsId":
            platoNombre = "Muffins";
            platoPrecio = parseFloat(document.getElementById("muffinsPrecio").textContent);
            break;
        case "pancakesId":
            platoNombre = "Pancakes";
            platoPrecio = parseFloat(document.getElementById("pancakesPrecio").textContent);
            break;
        case "tartaId":
            platoNombre = "Tarta banofee";
            platoPrecio = parseFloat(document.getElementById("tartaPrecio").textContent);
            break;
        case "heladoId":
            platoNombre = "Helado";
            platoPrecio = parseFloat(document.getElementById("heladoPrecio").textContent);
            break;
    }

    precio += platoPrecio;

    // Crea un nuevo "span" en el contenedorTexto que contenga lo siguiente:
    const spanCreado = document.createElement("span");
    spanCreado.classList.add("spanCreadoConJS"); // Agrega class a span
    contenedorTexto.appendChild(spanCreado)
    
    const nuevoButtonDelete = document.createElement("button");
    nuevoButtonDelete.textContent = "Eliminar";
    nuevoButtonDelete.addEventListener("click", function() {
        borrarPlato(); // Llama a la función borrarPlato pasando el id y el precio
    });
    spanCreado.appendChild(nuevoButtonDelete);
    
    const nuevoParrafo = document.createElement("label");
    nuevoParrafo.textContent = platoNombre + ", precio: " + platoPrecio.toFixed(2) + "€";
    spanCreado.appendChild(nuevoParrafo);

    const saltoLinea = document.createElement("br");
    spanCreado.appendChild(saltoLinea);

    // Actualiza el precio total en el elemento precioTotal
    precioTotal.textContent = precio.toFixed(2);

    // Agrega 1 al array cantidadArticulos
    cantidadArticulos.push(1);

    // Actualiza la cantidad de elementos en el contenedorCantidadArticulos
    const contenedorCantidadArticulos = document.getElementById("contenedorCantidadArticulos");
    contenedorCantidadArticulos.textContent = cantidadArticulos.length; 
});


//  le da funcionalidad al boton de "Borrar Pedido"
function borrarPedido(){
    // Borra los parrafos creados
    while(contenedorTexto.firstChild){
        contenedorTexto.removeChild(contenedorTexto.firstChild);
    }
    // les da a las variables su estado inicial
    precio = 0;
    cantidadArticulos = [];
    precioTotal.textContent = precio.toFixed(2);
    const contenedorCantidadArticulos = document.getElementById("contenedorCantidadArticulos");
    contenedorCantidadArticulos.textContent = cantidadArticulos.length;
}


//  le da funcionalidad al boton de "Eliminar"
function borrarPlato() {
    // le asigna una variable al "span" creado anteriormente
    const spans = document.getElementsByClassName("spanCreadoConJS");
    //  recorre el array de "spans" y le dice que los elimine
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].querySelector("button").parentNode === spans[i]) { // con esto se asegura que el button de un span elimina ese span y no otro
            const platoPrecio = parseFloat(spans[i].querySelector("label").textContent.split(":")[1].trim());
            precio -= platoPrecio;
            contenedorTexto.removeChild(spans[i]);
            break;
        }
    }

    // Restablece el precio total y la cantidad de artículos
    precioTotal.textContent = precio.toFixed(2);
    cantidadArticulos.pop();    //  elimina el ultimo elemento del array, reduciendo su longitud en 1
    const contenedorCantidadArticulos = document.getElementById("contenedorCantidadArticulos");
    contenedorCantidadArticulos.textContent = cantidadArticulos.length;
}
