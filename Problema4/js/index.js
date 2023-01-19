"use strict";
function promedios(...notas) {
    let i = 0;
    let total = 0;
    for (let nota of notas) {
        i++;
        total += nota;
    }
    let promedio = total / i;
    console.log(promedio);
    return promedio;
}
function compararPromedio(nota, comparar) {
    if (nota > comparar) {
        return "Mayor";
    }
    else if (nota < comparar) {
        return "Menor";
    }
    else {
        return "Iguales";
    }
}
function promedioMayorMenor(nota, ...cantidadnotas) {
    let notaAComparar = nota;
    let notas = [];
    for (let argumento of cantidadnotas) {
        notas.push(argumento);
    }
    let promedioNuevo = promedios(...notas);
    let comparacion = compararPromedio(promedioNuevo, notaAComparar);
    return comparacion;
}
console.log();
console.log(`Primer promedio ${promedioMayorMenor(6, 14, 7, 7)} \nSegundo promedio : ${promedioMayorMenor(7, 12, 7, 7, 5, 2, 12, 4, 9, 7, 1, 2, 3, 4, 7)} \nTercer promedio : ${promedioMayorMenor(5, 12, 7, 7, 5, 2, 12, 4, 9, 7, 11, 2, 3, 4, 7)}`);
