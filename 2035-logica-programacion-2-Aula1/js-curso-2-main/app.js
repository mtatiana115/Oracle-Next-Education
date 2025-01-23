// Cambiar el contenido de la etiqueta h1
document.querySelector('h1').textContent = "Hora del Desafío";

// Función para mostrar mensaje en la consola
function showConsoleMessage() {
    console.log("El botón fue clicado");
}

// Función para mostrar alerta con el nombre de la ciudad
function askCity() {
    const city = prompt("¿Cuál es el nombre de una ciudad de Brasil?");
    alert(`Estuve en ${city} y me acordé de ti`);
}

// Función para mostrar alerta con el mensaje "Yo amo JS"
function showAlertMessage() {
    alert("Yo amo JS");
}

// Función para calcular la suma de dos números
function calculateSum() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const sum = num1 + num2;
    alert(`La suma es: ${sum}`);

}