//1
const frutas = ["manzana", "banana", "pera"];
frutas.push("mango");
frutas.pop();

//2
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const numeroCinco = matriz[1][1];

console.log("El elemento extraído es:", numeroCinco);

//3
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//4

function elevarAlCuadrado(array) {
    return array.map(num => num * num);
}

const misNumeros = [1, 2, 3, 4, 5];
const numerosAlCuadrado = elevarAlCuadrado(misNumeros);
console.log("Números al cuadrado:", numerosAlCuadrado);

//5

function filtrarMayoresDe(array, x) {
    return array.filter(num => num > x);
}

const numerosMayoresDeTres = filtrarMayoresDe(misNumeros, 3);
console.log("Números mayores de 3:", numerosMayoresDeTres);

//6

function sumarElementos(array) {
    return array.reduce((acumulador, num) => acumulador + num, 0);
}

const sumaTotal = sumarElementos(misNumeros);
console.log("Suma de todos los elementos:", sumaTotal);

//7

const numeros = [1, 2, 3, 4, 5];
numeros.some(num => num > 10); //devuelve false

//8 

numeros.every(num => num >= 0); //devuelve true

//9
const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 31 },
    { nombre: "Carlos", edad: 20 }
];

personas.find(persona => persona.edad > 30); //devuelve { nombre: "Luis", edad: 31 }

//10
const palabras = ["manzana", "banana", "kiwi", "fresa"];
palabras.sort();