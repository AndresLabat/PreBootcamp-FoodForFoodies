
const articlePayPal = document.getElementById("PayPal");
const contenedorTextoPaypal = document.getElementById("contenedorTextoPaypal");

const articleTarjeta = document.getElementById("Tarjeta");
const contenedorTextoTarjeta = document.getElementById("contenedorTextoTarjeta");

const articleEfectivo = document.getElementById("Efectivo");
const contenedorTextoEfectivo = document.getElementById("contenedorTextoEfectivo");


// Función para mostrar el texto cuando el ratón entre en el artículo
function mostrarTextoPaypal() {
    const pCreado = document.createElement("p");
    pCreado.classList.add("noDisponible"); // Agrega class
    pCreado.textContent = "NO DISPONIBLE";
    contenedorTextoPaypal.appendChild(pCreado);
}

function mostrarTextoTarjeta() {
    const pCreado = document.createElement("p");
    pCreado.classList.add("noDisponible"); // Agrega class
    pCreado.textContent = "NO DISPONIBLE";
    contenedorTextoTarjeta.appendChild(pCreado);
}

function mostrarTextoEfectivo() {
    const pCreado = document.createElement("p");
    pCreado.classList.add("noDisponible"); // Agrega class
    pCreado.textContent = "ABONAR EFECTIVO AL REPARTIDOR";
    contenedorTextoEfectivo.appendChild(pCreado);
}

// Función para eliminar el texto cuando el ratón salga del artículo
function ocultarTextoPaypal() {
    contenedorTextoPaypal.innerHTML = "";
}

function ocultarTextoTarjeta() {
    contenedorTextoTarjeta.innerHTML = "";
}

function ocultarTextoEfectivo() {
    contenedorTextoEfectivo.innerHTML = "";
}


// Agregar el evento al entrar y salir del ratón
articlePayPal.addEventListener("mouseenter", mostrarTextoPaypal);
articlePayPal.addEventListener("mouseleave", ocultarTextoPaypal);

articleTarjeta.addEventListener("mouseenter", mostrarTextoTarjeta);
articleTarjeta.addEventListener("mouseleave", ocultarTextoTarjeta);

articleEfectivo.addEventListener("mouseenter", mostrarTextoEfectivo);
articleEfectivo.addEventListener("mouseleave", ocultarTextoEfectivo);
