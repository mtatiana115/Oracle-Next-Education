// 1. Función que muestra "¡Hola, mundo!" en la consola.
function saludarMundo() {
    console.log("¡Hola, mundo!");
}
saludarMundo();

// 2. Función que recibe un nombre y muestra "¡Hola, [nombre]!".
function saludarNombre() {
    const nombre = prompt("Introduce tu nombre:");
    console.log(`¡Hola, ${nombre}!`);
}
saludarNombre();

// 3. Función que recibe un número y devuelve el doble.
function obtenerDoble() {
    const numero = parseFloat(prompt("Introduce un número:"));
    const doble = numero * 2;
    console.log(`El doble de ${numero} es ${doble}.`);
}
obtenerDoble();

// 4. Función que recibe tres números y devuelve su promedio.
function calcularPromedio() {
    const numero1 = parseFloat(prompt("Introduce el primer número:"));
    const numero2 = parseFloat(prompt("Introduce el segundo número:"));
    const numero3 = parseFloat(prompt("Introduce el tercer número:"));
    const promedio = (numero1 + numero2 + numero3) / 3;
    console.log(`El promedio de ${numero1}, ${numero2}, y ${numero3} es ${promedio}.`);
}
calcularPromedio();

// 5. Función que recibe dos números y devuelve el mayor.
function obtenerMayor() {
    const numero1 = parseFloat(prompt("Introduce el primer número:"));
    const numero2 = parseFloat(prompt("Introduce el segundo número:"));
    const mayor = numero1 > numero2 ? numero1 : numero2;
    console.log(`El mayor entre ${numero1} y ${numero2} es ${mayor}.`);
}
obtenerMayor();

// 6. Función que recibe un número y devuelve el resultado de multiplicarlo por sí mismo.
function calcularCuadrado() {
    const numero = parseFloat(prompt("Introduce un número:"));
    const cuadrado = numero * numero;
    console.log(`El cuadrado de ${numero} es ${cuadrado}.`);
}
calcularCuadrado();
