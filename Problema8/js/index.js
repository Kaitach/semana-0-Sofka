"use strict";
//Creamos la funcion
function crearPalindromo(palabra) {
    let palabraNueva = [];
    let palabraOriginal = [];
    for (let caracter of palabra) {
        palabraOriginal.push(caracter);
        palabraNueva.push(caracter);
    }
    palabraNueva.pop();
    palabraNueva.reverse();
    let palindromo = palabraOriginal.concat(palabraNueva);
    return palindromo;
}
console.log(crearPalindromo("americando"));
console.log(crearPalindromo("hola"));
crearPalindromo("papas fritas");
crearPalindromo("tupper");
