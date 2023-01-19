"use strict";
//Creamos la funcion
function imprimirArbol(n) {
    for (let i = 1; i < n; i++) {
        let espacio = " ";
        let estrellas = " ";
        for (let j = 0; j < n - i - 1; j++) {
            espacio += " ";
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            estrellas += "*";
        }
        console.log(espacio + estrellas);
    }
    let base = " ";
    for (let i = 0; i < n - 2; i++) {
        base += " ";
    }
    base += "***";
    console.log(base);
}
imprimirArbol(10);
