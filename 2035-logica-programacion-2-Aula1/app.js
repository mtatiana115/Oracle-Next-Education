// DOM - Document Object Model
// DOM es un modelo de objetos que representa la estructura de un documento HTML

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

// Interactuar con botones
function intentoDeUsuario() {
    alert('Click desde el botón');
}