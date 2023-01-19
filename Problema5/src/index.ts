/// <reference path="clases.ts"/>

const crearFiguras = new CrearFiguras();


const circulo = crearFiguras.crear('Mi círculo', 'circulo', 10);
circulo?.calcuarPerimetro()
circulo?.calcularArea()

const cuadrado = crearFiguras.crear('Mi cuadrado', 'cuadrado', 10);
cuadrado?.calcuarPerimetro()
cuadrado?.calcularArea()
