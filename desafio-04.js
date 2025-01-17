// Ejercicio 1: Mensaje de bienvenida
let usuario = prompt("¿Cuál es tu nombre?");
console.log(`¡Bienvenido/a ${usuario} al programa!`);

// Ejercicio 2: Variable "nombre" y saludo con console.log
let nombre = prompt("¿Cuál es tu nombre?");
console.log(`¡Hola, ${nombre}!`);

// Ejercicio 3: Variable "nombre" y saludo con alert
alert("¡Hola, " + nombre + "!");
alert(`¡Hola, ${nombre}!`);

// Ejercicio 4: Pregunta con prompt y respuesta en consola
let respuesta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Tu respuesta fue: " + respuesta);
console.log(`Tu respuesta fue: ${respuesta}`);

// Ejercicio 5: Suma de dos valores
let valor1 = prompt("Ingresa un número:");
let valor2 = prompt("Ingresa otro número:");
let resultado = Number(valor1) + Number(valor2);
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultado + ".");

// Ejercicio 6: Resta de dos valores
valor1 = prompt("Ingresa un número:");
valor2 = prompt("Ingresa otro número:");
resultado = valor1 - valor2;
console.log("La diferencia entre " + valor1 + " y " + valor2 + " es igual a " + resultado + ".");
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);

// Ejercicio 7: Verificar mayoría de edad
let edad = prompt("¿Cuántos años tienes?");
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// Ejercicio 8: Verificar si un número es positivo, negativo o cero
let numero = prompt("Ingresa un número:");
numero = Number(numero);
if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}

// Ejercicio 9: Números del 1 al 10 con while
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// Ejercicio 10: Determinar si una nota es aprobatoria
let nota = prompt("Ingresa una nota:");
nota = Number(nota);
if (nota >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}

// Ejercicio 11: Número aleatorio con Math.random
let numeroAleatorio = Math.random();
console.log("Número aleatorio: " + numeroAleatorio);
console.log(`Número aleatorio: ${numeroAleatorio}`);

// Ejercicio 12: Número entero aleatorio entre 1 y 10
let numeroEntre1y10 = Math.floor(Math.random() * 10) + 1;
console.log("Número entero entre 1 y 10: " + numeroEntre1y10);
console.log(`Número entero entre 1 y 10: ${numeroEntre1y10}`);

// Ejercicio 13: Número entero aleatorio entre 1 y 1000
let numeroEntre1y1000 = Math.floor(Math.random() * 1000) + 1;
console.log("Número entero entre 1 y 1000: " + numeroEntre1y1000);
console.log(`Número entero entre 1 y 1000: ${numeroEntre1y1000}`);
