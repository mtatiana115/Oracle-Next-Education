// 1: Pregunta al usuario qué día de la semana es
let diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// 2: Verifica si un número es positivo o negativo
let numero = prompt("Ingresa un número:");
numero = parseInt(numero); 
if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

// 3: Sistema de puntuación del juego
let puntuacion = prompt("Ingresa tu puntuación:");
puntuacion = parseInt(puntuacion);
if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intentalo nuevamente para ganar.");
}

// 4: Mensaje con saldo de cuenta usando template strings
let saldo = prompt("¿Cuál es el saldo de tu cuenta?");
saldo = parseFloat(saldo); 
alert(`El saldo de tu cuenta es $${saldo}.`);

// 5: Pedir el nombre del usuario y mostrar un mensaje de bienvenida
let nombre = prompt("¿Cuál es tu nombre?");
alert(`¡Bienvenido, ${nombre}!`);