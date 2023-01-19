//Creamos la funcion
function crearPalindromo(palabra: string) {

//Cramos 2 arrays uno para cada palabra 
let palabraNueva:string [] = []
let palabraOriginal: string[] = []

// En este for ponemos cada caracter de la palabra en un lugar de ambos arrays
for (let caracter of palabra) {
  palabraOriginal.push(caracter)
  palabraNueva.push(caracter)

}

// Quitamos el ultimo  caracter agregado a el array palabraNueva y le invertimos el orden
palabraNueva.pop()
palabraNueva.reverse()
 
// Cocatenamos  los arrays en un nuevo array 
let palindromo:string[] = palabraOriginal.concat(palabraNueva)

return palindromo
}

console.log(
  `Primer intento: ${crearPalindromo("americando")} \nSegundo intento: ${  crearPalindromo("hola")}\nTercer intento: ${crearPalindromo("papas fritas")}  \nCuarto intento: ${ crearPalindromo("tupper")}`
);






