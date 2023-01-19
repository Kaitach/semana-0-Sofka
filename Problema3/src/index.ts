
function obtenerMayor(...total: number[]){

    let numeros: number [] = [];
    let numeroGrande: number = 0;

    for (let numero of total)    {
        if (numeroGrande === 0 ) {
            numeroGrande = numero;
            console.log(`\n Como recien arrancamos el numero mas grande es: ${numeroGrande}`);
        }
        else if (numeroGrande <= numero)
        {
            console.log(` \n Como ${numero} es mas grande que ${numeroGrande}, ahora ${numero}  es el mayor`)
            numeroGrande = numero;            
        }
        else {
            console.log(`\n Como ${numero} es mas pequeño que ${numeroGrande}, ${numeroGrande} sigue siendo el mayor`)
        }

        numeros.push(numero)

    }
    console.log(` \n ${numeros} de todos estos numeros el mas grande es: ${numeroGrande} \n\n\n `)    

    return numeroGrande;
}
console.log(`Numero mas grande ${obtenerMayor(17,81,8548,17,312,197,43,481,32532)}`)
