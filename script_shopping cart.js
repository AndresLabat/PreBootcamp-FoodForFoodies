
const articlePayPal = document.getElementById("PayPal");
const contenedorTextoPaypal = document.getElementById("contenedorTextoPaypal");

const articleTarjeta = document.getElementById("Tarjeta");
const contenedorTextoTarjeta = document.getElementById("contenedorTextoTarjeta");

const articleEfectivo = document.getElementById("Efectivo");

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

// Función para eliminar el texto cuando el ratón salga del artículo
function ocultarTextoPaypal() {
    contenedorTextoPaypal.innerHTML = "";
}

function ocultarTextoTarjeta() {
    contenedorTextoTarjeta.innerHTML = "";
}

function cambiarBackground(){
    if(articleEfectivo.style.backgroundColor === "rgb(245, 168, 160)"){
        articleEfectivo.style.backgroundColor = "#f8f8f8";
    }else{
        articleEfectivo.style.backgroundColor = "#f5a8a0";
    }
}


// Agregar el evento al entrar y salir del ratón
articlePayPal.addEventListener("mouseenter", mostrarTextoPaypal);
articlePayPal.addEventListener("mouseleave", ocultarTextoPaypal);

articleTarjeta.addEventListener("mouseenter", mostrarTextoTarjeta);
articleTarjeta.addEventListener("mouseleave", ocultarTextoTarjeta);

articleEfectivo.addEventListener("click", cambiarBackground);

