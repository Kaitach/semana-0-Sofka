function Potencia(base: number, exponente: number): number {
  let resultado = base ** exponente;

  return resultado;
}

console.log(
  `Primer potencia ${Potencia(14, 5)} \nSegunda potencia ${Potencia(
    2,
    2
  )} \nTercer potencia ${Potencia(10, 5)} `
);
