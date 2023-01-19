"use strict";
/// <reference path="interface.ts"/>
class figura {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Circulo extends figura {
    constructor(nombre, radio) {
        super(nombre);
        this.radio = radio;
    }
    calcularArea() {
        console.log(Math.PI * (Math.pow(this.radio, 2)));
        return Math.PI * (Math.pow(this.radio, 2));
    }
    calcuarPerimetro() {
        console.log(2 * Math.PI * this.radio);
        return 2 * Math.PI * this.radio;
    }
}
class Cuadrado extends figura {
    constructor(nombre, lado) {
        super(nombre);
        this.lado = lado;
    }
    calcularArea() {
        console.log(this.lado * this.lado);
        return this.lado * this.lado;
    }
    calcuarPerimetro() {
        console.log(this.lado * 4);
        return this.lado * 4;
    }
}
class CrearFiguras {
    crear(nombre, tipo, valor) {
        if (tipo === "circulo") {
            return new Circulo(nombre, valor);
        }
        else if (tipo === "cuadrado") {
            return new Cuadrado(nombre, valor);
        }
        else {
            console.error("Tipo de figura invalido");
        }
    }
}
/// <reference path="clases.ts"/>
const crearFiguras = new CrearFiguras();
const circulo = crearFiguras.crear('Mi círculo', 'circulo', 10);
circulo === null || circulo === void 0 ? void 0 : circulo.calcuarPerimetro();
circulo === null || circulo === void 0 ? void 0 : circulo.calcularArea();
const cuadrado = crearFiguras.crear('Mi cuadrado', 'cuadrado', 10);
cuadrado === null || cuadrado === void 0 ? void 0 : cuadrado.calcuarPerimetro();
cuadrado === null || cuadrado === void 0 ? void 0 : cuadrado.calcularArea();
