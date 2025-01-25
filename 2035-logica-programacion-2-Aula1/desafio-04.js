// 1. Crear una lista vacía llamada "listaGenerica".
const listaGenerica = [];

// 2. Crear una lista de lenguajes de programación.
const lenguagesDeProgramacion = ['JavaScript','Python'];

// 3. Agregar más elementos a la lista "lenguagesDeProgramacion".
lenguagesDeProgramacion.push('Java', 'Ruby');

// 4. Función para mostrar todos los elementos de la lista "lenguagesDeProgramacion".
function mostrarLenguajes(lista) {
    console.log(lista.join('\n'));
}
mostrarLenguajes(lenguagesDeProgramacion);

// 5. Función para mostrar los elementos de la lista en orden inverso.
function mostrarLenguajesInvertidos(lista) {
    console.log(lista.slice().reverse().join('\n'));
}
mostrarLenguajesInvertidos(lenguagesDeProgramacion);

// 6. Función para calcular el promedio de una lista de números.
function calcularPromedio(listaNumeros) {
    return listaNumeros.reduce((suma, num) => suma + num, 0) / listaNumeros.length;
}
console.log("Promedio:", calcularPromedio([10, 20, 30, 40]));

// 7. Función para mostrar el mayor y menor número de una lista.
function mostrarMayorYMenor(listaNumeros) {
    console.log(`Mayor: ${Math.max(...listaNumeros)}, Menor: ${Math.min(...listaNumeros)}`);
}
mostrarMayorYMenor([5, 10, 2, 8]);

// 8. Función para devolver la suma de todos los elementos en una lista.
function sumarElementos(listaNumeros) {
    return listaNumeros.reduce((suma, num) => suma + num, 0);
}
console.log("Suma:", sumarElementos([5, 10, 15]));

// 9. Función para devolver la posición de un elemento en una lista.
function buscarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}
console.log("Posición de 'Python':", buscarElemento(lenguagesDeProgramacion, 'Python'));
console.log("Posición de 'Swift':", buscarElemento(lenguagesDeProgramacion, 'Swift'));

// 10. Función que suma dos listas elemento por elemento.
function sumarListas(lista1, lista2) {
    return lista1.map((num, i) => num + lista2[i]);
}
console.log("Suma de listas:", sumarListas([1, 2, 3], [4, 5, 6]));

// 11. Función que devuelve una nueva lista con el cuadrado de cada número.
function calcularCuadrados(listaNumeros) {
    return listaNumeros.map(num => num ** 2);
}
