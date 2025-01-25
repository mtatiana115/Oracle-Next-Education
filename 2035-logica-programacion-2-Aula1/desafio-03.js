// 1. Función para calcular el índice de masa corporal (IMC).
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    console.log(`El índice de masa corporal (IMC) es: ${imc.toFixed(2)}`);
}
calcularIMC(94, 1.82); 

// 2. Función para calcular el factorial de un número.
function calcularFactorial(numero) {
    if (numero < 0) return console.log("El factorial no está definido para números negativos.");
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}
calcularFactorial(9);

// 3. Función para convertir dólares a reales.
function convertirDolaresAReales(dolares) {
    const cotizacion = 4.80; // Cotización del dólar a reales
    const reales = dolares * cotizacion;
    console.log(`${dolares} dólares equivalen a R$${reales.toFixed(2)}.`);
}
convertirDolaresAReales(50); 

// 4. Función para calcular el área y el perímetro de una sala rectangular.
function calcularSalaRectangular(altura, anchura) {
    const area = altura * anchura;
    const perimetro = 2 * (altura + anchura);
    console.log(`Área de la sala: ${area.toFixed(2)} m².`);
    console.log(`Perímetro de la sala: ${perimetro.toFixed(2)} m.`);
}
calcularSalaRectangular(2, 3); 

// 5. Función para calcular el área y el perímetro de una sala circular.
function calcularSalaCircular(radio) {
    const pi = 3.14;
    const area = pi * (radio ** 2);
    const perimetro = 2 * pi * radio;
    console.log(`Área de la sala circular: ${area.toFixed(2)} m².`);
    console.log(`Perímetro de la sala circular: ${perimetro.toFixed(2)} m.`);
}
calcularSalaCircular(2); 

// 6. Función para mostrar la tabla de multiplicar de un número.
function mostrarTablaDeMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
mostrarTablaDeMultiplicar(9); 
