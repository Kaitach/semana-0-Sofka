"use strict";
//Creamos la funcion
function crearPalindromo(frase) {
    let fraseInvertida = frase.substring(0, frase.length - 1).split('').reverse().join(' ');
    let fraseSinEspacios = fraseInvertida.replace(/ /g, '');
    let palindromo = frase + fraseSinEspacios;
    console.log(palindromo);
}
crearPalindromo("Somos");
crearPalindromo("adios");
crearPalindromo("salchica");
crearPalindromo("tupper");
