# NIVELACIÓN TYPESCRIPT

Ejercicios realizados para la semana 0 del training de Sofka U

## 1. Área de un círculo


Crear una función que calcule el área de un círculo dado su radio. Utiliza la fórmula: A = π* r^2

**Respuesta:**
```bash
const PI = 3.14159

function areaCirculo(radio: number):number{
    let area = PI * (radio**2);
    return area;
}

console.log(`Primer area ${areaCirculo(10)} \nSegunda area ${areaCirculo(15)} \nTercer area ${areaCirculo(2)} `)

```

**Respuesta en console.log:**
```bash
Primer area 314.159    
Segunda area 706.85775 
Tercer area 12.56636 
```
## 2. Potencia


Crear una función que calcule el resultado de elevar un número dado a una potencia dada.
Utiliza la fórmula: base^exponente

**Respuesta:**
```bash
function Potencia(base: number, exponente: number):number { 
   let  resultado = base ** exponente;
  return resultado;
   
    }
   

console.log(`Primer potencia ${Potencia(14, 5)} \nSegunda potencia ${Potencia(2, 2)} \nTercer potencia ${Potencia(10, 5)} `)


```

**Respuesta en console.log:**
```bash
Primer potencia 537824 
Segunda potencia 4
Tercer potencia 100000
```
## 3. Obtener el número mayor

1. Redacte una función llamada 'obtenerMayor' que acepte una cantidad variable de
argumentos y devuelva el valor máximo entre ellos. Utilice el operador spread (...) para
recibir los argumentos en un arreglo.
2. La función debe devolver el valor de la variable “mayor” al final del ciclo de iteración.
3. Invoque la función “obtenerMayor” pasando distintos conjuntos de números como
argumentos y verifique los resultados en la consola utilizando una sentencia
“console.log”

**Respuesta:**
```bash

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


```

**Respuesta en console.log:**
```bash
  Como recien arrancamos el numero mas grande es: 17
 
 Como 81 es mas grande que 17, ahora 81  es el mayor

 Como 8548 es mas grande que 81, ahora 8548  es el mayor

 Como 17 es mas pequeño que 8548, 8548 sigue siendo el mayor

 Como 312 es mas pequeño que 8548, 8548 sigue siendo el mayor

 Como 197 es mas pequeño que 8548, 8548 sigue siendo el mayor

 Como 43 es mas pequeño que 8548, 8548 sigue siendo el mayor

 Como 481 es mas pequeño que 8548, 8548 sigue siendo el mayor

 Como 32532 es mas grande que 8548, ahora 32532  es el mayor

 17,81,8548,17,312,197,43,481,32532 de todos estos numeros el mas grande es: 32532



Numero mas grande 32532
```

## 4. Cálculo de promedio y comparación


1. Codifique una función llamada “promedio” que calcule el promedio de una cantidad
variable de argumentos utilizando el operador de propagación (...). La función debe
devolver el resultado como un número.
2. Codifique una función llamada “compararPromedio” que reciba un número (el
promedio) y otro número a comparar. Utilice una estructura de control de flujo para
determinar si el promedio es mayor o menor al número dado y devuelva el resultado en
forma de cadena de texto (“mayor” o “menor”).
3. Codifique una función llamada “promedioMayorMenor” que combine las funciones
anteriores, reciba un número a comparar y una cantidad variable de argumentos. Utilice el
operador spread para pasar los argumentos a la función “promedio”. Luego, utilice el
resultado de la función “promedio” y el número a comparar como argumentos para la
función “compararPromedio” y devuelva el resultado en una cadena de texto.
4. Invoque la función “promedioMayorMenor” pasando distintos conjuntos de números y
un número a comparar como argumentos, y verifique los resultados en la consola utilizando
una sentencia “console.log”.


**Respuesta:**
```bash
function promedios (...notas:number[]) {
    
    let i:number = 0;
    let total:number = 0;

    for (let nota of  notas) {
        i++;
        total += nota       
        }
    
  let  promedio:number = total / i;
    return promedio;
}

function compararPromedio(nota:number, comparar:number){

    if (nota > comparar) {
        return  "Mayor"
    }
    else if (nota < comparar) {

        return "Menor"
    }
    else {

        return "Iguales"
    }

}

function promedioMayorMenor (nota:number, ...cantidadnotas:number[]){
    
   let  notaAComparar:number = nota;
   let notas:number [] = [];

   for (let argumento of cantidadnotas){    
        notas.push(argumento)
   }
   
   let promedioNuevo = promedios(...notas);
   let comparacion = compararPromedio(promedioNuevo, notaAComparar)

   return comparacion
   
}


console.log(`Primer promedio ${promedioMayorMenor(6, 14,7,7)} \nSegundo promedio : ${promedioMayorMenor(7, 12,7,7,5,2,12,4,9,7,1,2,3,4,7)} \nTercer promedio : ${promedioMayorMenor(5 ,12,7,7,5,2,12,4,9,7,11,2,3,4,7)}`)


```

**Respuesta en console.log:**
```bash
Primer promedio Mayor    
Segundo promedio : Menor 
Tercer promedio : Mayor  
```

## 5. Ejercicio de POO


1. Crear una interfaz llamada “FiguraGeometrica” que contenga dos métodos sin valor
de retorno llamados “calcularArea” y “calcularPerimetro”.

```bash
interface FiguraGeometrica {
    calcularArea(): number
    calcuarPerimetro(): number
}

```

2. Codifique una clase abstracta denominada “Figura” que implemente la interfaz
“FiguraGeometrica”; lo anterior debe contener dos métodos abstractos "calcularArea" y
"calcularPerimetro", los cuales, no tienen valor de retorno. Además, incluya una
propiedad protegida "nombre" y un constructor que reciba un parámetro y lo asigne a dicha
propiedad.

```bash
abstract class figura implements FiguraGeometrica {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract calcuarPerimetro(): number;
    abstract calcularArea(): number;
    
}

```

3. Crear una clase llamada "Circulo" que extienda de la clase "Figura", esta debe tener
una propiedad "radio" y un constructor que reciba dos parámetros "nombre" y "radio".
Los debe asignar a las propiedades correspondientes de la clase. Implementa los métodos
"calcularArea" y "calcularPerimetro" de la interfaz "FiguraGeometrica"
utilizando las fórmulas para calcular el área y perímetro de un círculo.


```bash
class Circulo extends figura {
    radio: number

    constructor(nombre: string, radio:number){
        super(nombre);
        this.radio = radio;
    }

calcularArea(): number {
    console.log(Math.PI * (this.radio**2))
    return Math.PI * (this.radio**2)    
}
calcuarPerimetro(): number {
    console.log(2 * Math.PI * this.radio)
    return 2 * Math.PI * this.radio;
}
}

```

4. Codificar una clase llamada "Cuadrado" que extienda de la clase "Figura", con una
propiedad "lado" y un constructor que reciba dos parámetros "nombre" y "lado". Estos
deben ser asignados a las propiedades correspondientes de la clase. Implementa los
métodos "calcularArea" y "calcularPerimetro" de la interfaz
"FiguraGeometrica" utilizando las fórmulas para calcular el área y perímetro de un
cuadrado.

```bash
class Cuadrado extends figura {
    lado: number

    constructor(nombre: string, lado:number){
        super(nombre);
        this.lado = lado;
    }

calcularArea(): number {
    console.log(this.lado *this.lado )
    return this.lado *this.lado   
}
calcuarPerimetro(): number {
    console.log(this.lado *4 )
    return this.lado * 4
}
}


```

5. Crear una clase "CrearFiguras" que tenga un método "crear", este debe recibir tres
parámetros "nombre", "tipo" y "valor". Devolver un objeto de la clase "Circulo" o
"Cuadrado" según el valor del parámetro "tipo".

```bash
 class CrearFiguras {

    crear(nombre:string, tipo:string, valor:number){
        if(tipo === "circulo"){
            return new Circulo(nombre, valor)
        }
        else if (tipo === "cuadrado"){
            return new Cuadrado(nombre, valor)
        }
        else{
            console.error("Tipo de figura invalido");            
        }
        
    }
}
```


6. En un archivo principal, crea un objeto de la clase "CrearFiguras" y utilizarlo para
crear dos objetos, uno de tipo "Circulo" y otro de tipo "Cuadrado". Utiliza los objetos para
imprimir el área y perímetro de cada figura utilizando los métodos de la interfaz
"FiguraGeometrica".

```bash
 const crearFiguras = new CrearFiguras();


const circulo = crearFiguras.crear('Mi círculo', 'circulo', 10);
circulo?.calcuarPerimetro()
circulo?.calcularArea()

const cuadrado = crearFiguras.crear('Mi cuadrado', 'cuadrado', 10);
cuadrado?.calcuarPerimetro()
cuadrado?.calcularArea()

```


**Respuesta en console.log:**
```bash
62.83185307179586
314.1592653589793
40
100
```
## 6. Saber sí es un palíndromo.


1. Crear una función llamada "esPalindromo" que reciba una cadena como argumento.
2. Sí las cadenas son iguales, la función debe devolver "true" indicando que la cadena es
un palíndromo. Sí las cadenas son diferentes, la función debe devolver "false" indicando
que la cadena no es un palíndromo.
3. Llamar a la función "esPalindromo" pasando diferentes palabras y frases como
argumentos y comprueba los resultados.


**Respuesta:**
```bash
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



```

**Respuesta en console.log:**
```bash
Primer intento: true   
Segundo intento: true  
Tercer intento: false  
Cuarto intento: true  
```
## 7. Crear un palíndromo usando los métodos de los strings


1. Crear una función llamada "crearPalindromo" que reciba una cadena de texto como
argumento.
2. La función debe devolver la cadena resultante, que es un palíndromo.
3. Llamar la función "crearPalindromo" pasando diferentes palabras como argumentos y
comprueba los resultados.

**Respuesta:**
```bash
//Creamos la funcion
function crearPalindromo(palabra: string) {

 // usamos .substring para eliminar el ultimo caracter de la   palabra 
 // .split para pasar cada caracter a un array, con .reverse lo invertimos 
 // y con .join lo volvemos a hacer una cadena
let palabraInvertida:string = palabra.substring(0, palabra.length -1).split('').reverse().join(' ')
let palabraSinEspacios:string = palabraInvertida.replace(/ /g,'') 
let palindromo =  palabra+palabraSinEspacios;
  return palindromo;

  }
  
  console.log(
    `Primer intento: ${crearPalindromo("americando")} \nSegundo intento: ${  crearPalindromo("hola")}\nTercer intento: ${crearPalindromo("papas fritas")}  \nCuarto intento: ${ crearPalindromo("tupper")}`
  );


```

**Respuesta en console.log:**
```bash
Primer intento: americandodnacirema     
Segundo intento: holaloh
Tercer intento: papas fritasatirfsapap  
Cuarto intento: tupperepput
```
## 8. Crear un Palíndromo sin usar los métodos de los strings

1. Crear una función llamada "crearPalindromo" que reciba una cadena como
argumento.
2. La función debe devolver un arreglo con el resultado, ejemplo, sí se pasa la palabra
“HOLA” el resultado deberá ser: [H,O,L,A,L,O,H].
3. Llamar a la función "crearPalindromo" pasando diferentes palabras como argumentos
y comprueba los resultados.

**Respuesta:**
```bash
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

```

**Respuesta en console.log:**
```bash
Primer intento: a,m,e,r,i,c,a,n,d,o,d,n,a,c,i,r,e,m,a
Segundo intento: h,o,l,a,l,o,h
Tercer intento: p,a,p,a,s, ,f,r,i,t,a,s,a,t,i,r,f, ,s,a,p,a,p  
Cuarto intento: t,u,p,p,e,r,e,p,p,u,t
```
## 9. Imprimir un árbol de navidad con asteriscos ( * )


1. Crear una función llamada "imprimirArbol" que reciba un número entero "n" como
argumento, representando la altura del árbol.
2. Utilizar un ciclo “for” para generar cada línea del árbol.
3. En cada iteración del ciclo “for”, debe crear dos variables: "espacios" y "estrellas".
4. Utilizar un ciclo “for” dentro de la iteración del ciclo principal para generar una cadena
con "n - i - 1" espacios en blanco para la variable "espacios".
5. Utilizar otro ciclo “for” dentro de la iteración del ciclo principal para generar una cadena
con "i * 2 + 1" estrellas para la variable "estrellas".
6. Imprimir las variables "espacios" y "estrellas" juntas y suma espacios para formar
un árbol.
7. Al final del ciclo principal, crea una variable "base" vacía y utiliza otro ciclo “for” para
generar "n - 2" espacios en blanco.
8. Agrega "***" a la variable "base" e imprime la variable "base" como la base del árbol.

**Respuesta:**
```bash
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
 let base:string =" " ;

 for (let i = 0; i < n - 2 ; i++) {
   base += " ";
 }
 base += "***"
 console.log(base)
}

imprimirArbol(10)


```

**Respuesta en console.log:**
```bash
           *
          ***        
         *****       
        *******      
       *********     
      ***********    
     *************   
    ***************  
   ***************** 
  *******************
         ***
```

## Final

.Y eso es todo


