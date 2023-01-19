//Creamos la funcion
function esPalindromo(frase: string) {

// Creamos una cadena de la frase pero sin los espacios para poder compararlas bien
// utlizando .replace   donde si encuentra  un espacio vacio (/ /)  lo remplaza por "" es decir lo borra 
//  la G se usa para que no pare en la primer coincidencia 
// Luego en el if uso .toLowerCase para que no me molesten las mayusculas a la hora de hacer las pruebas

let fraseSinEspacios:string = frase.replace(/ /g,'') 
  for (let i = 0; i < fraseSinEspacios.length; i++) {
    if (fraseSinEspacios.toLowerCase()[i] !== fraseSinEspacios.toLowerCase()[fraseSinEspacios.length- i-1]) {
      return false;
    } 

    
  }
 return true;
}



  console.log(
    `Primer intento: ${esPalindromo(
      "Dabale arroz a la zorra el abad"
    )} \nSegundo intento: ${esPalindromo(
      "SOMOS o no somos"
    )}\nTercer intento: ${esPalindromo(
      "soluciones"
    )}  \nCuarto intento: ${esPalindromo("ana ana")}`
  );

