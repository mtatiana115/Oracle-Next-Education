// 1. Contador que comienza en 1 y va hasta 10
let contador1 = 1;
while (contador1 <= 10) {
    console.log(contador1); 
    contador1++;  
}

// 2. Contador que comienza en 10 y va hasta 0
let contador2 = 10;
while (contador2 >= 0) {
    console.log(contador2);
    contador2--;
}

// 3. Programa de cuenta regresiva (cuenta desde 0 hasta un número dado)
let numeroUsuario = parseInt(prompt("Ingresa un número para la cuenta regresiva:")); 
let contadorRegresivo = 0; 
while (contadorRegresivo <= numeroUsuario) { 
    console.log(contadorRegresivo); 
    contadorRegresivo++; 
}

// 4. Programa de cuenta progresiva (cuenta hasta un número dado)
let numeroUsua = parseInt(prompt("Ingresa un número para la cuenta progresiva:")); 
let contadorProgresivo = 0;
while (contadorProgresivo <= numeroUsua) {
    console.log(contadorProgresivo);
    contadorProgresivo++;
}