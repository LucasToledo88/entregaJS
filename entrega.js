// Función que obtiene el precio y el porcentaje de descuento del usuario
function getPrecioDescuento() {
  const precio = parseFloat(prompt("Ingresa el precio original del producto:"));
  const descuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));

  // Validar que las entradas sean números y no sean NaN
  if (isNaN(precio) || isNaN(descuento)) {
    alert("Por favor, ingresa valores numéricos válidos.");
    return null;
  }

  return { precio, descuento };
}

// Función que calcula el precio con descuento
function calcularDescuentoPrecio(precio, porcentajeDescuento) {
  const descuento = (precio * porcentajeDescuento) / 100;
  const precioFinal = precio - descuento;

  return precioFinal;
}

// Función que muestra el precio final
function mostrarPrecioFinal(precioFinal) {
  alert("El precio final con descuento es: $" + precioFinal.toFixed(2));
}

// Ejecución del código
const datos = getPrecioDescuento();
if (datos) {
  const precioFinal = calcularDescuentoPrecio(datos.precio, datos.descuento);
  mostrarPrecioFinal(precioFinal);
}
