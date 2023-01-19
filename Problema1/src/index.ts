const PI = 3.14159

function areaCirculo(radio: number):number{
    let area = PI * (radio**2);
    return area;
}

console.log(`Primer area ${areaCirculo(10)} \nSegunda area ${areaCirculo(15)} \nTercer area ${areaCirculo(2)} `)
