/// <reference path="interface.ts"/>

abstract class figura implements FiguraGeometrica {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract calcuarPerimetro(): number;
    abstract calcularArea(): number;
    
}

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