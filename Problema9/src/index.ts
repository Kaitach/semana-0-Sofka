//Creamos la funcion
function imprimirArbol(n: number) {
  for (let i = 0; i < n; i++) {
  let espacio:string = " " ;
  let estrellas:string = " " ;
  for (let j = 0; j < n - i - 1; j++) {
    espacio += " ";
}
for (let j = 0; j < i * 2 + 1; j++) {
  estrellas += "*";
}
console.log(espacio + estrellas)

 }
 let base:string ="  " ;

 for (let i = 0; i < n - 2 ; i++) {
   base += " ";
 }
 base += "***"
 console.log(base)
}

imprimirArbol(10)


