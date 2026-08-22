//1
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3));
console.log(sumar(-2, 7));

//2
function multiplicar(a, b) {
    return a * b;
}

console.log(multiplicar(4, 6));
console.log(multiplicar(-3, 5));

//3
function saludar(nombre = "Invitado") { 
    return `¡Hola, ${nombre}!`;
}

console.log(saludar("Ana"));    // Imprime: ¡Hola, Ana!
console.log(saludar("Carlos")); // Imprime: ¡Hola, Carlos!
console.log(saludar());         // Imprime: ¡Hola, Invitado!

//4
function crearPersona (nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

console.log(crearPersona("Laura", 25));
console.log(crearPersona("Carlos", 30));

//5
function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
    return persona;
}

console.log(actualizarEdad({ nombre: "Laura", edad: 25 }, 26));
console.log(actualizarEdad({ nombre: "Carlos", edad: 30 }, 31));

//6
function factorial(a) {
    if (a < 0) {
        return "Error: El factorial no está definido para números negativos.";
    }
    if (a === 0 || a === 1) {
        return 1;
    }
    return a * factorial(a - 1);
}

console.log(factorial(5));
console.log(factorial(0)); 

//7
function despedir() {
    function adios() {
        return "¡Adiós!";
    }
    return adios();
}
console.log(despedir());

//8
function multiplicador(a) {
    return a * 2;
}
function procesarArray (array, multiplicador) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(multiplicador(array[i]));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4, 5];
const numerosMultiplicados = procesarArray(numeros, multiplicador);
console.log(numerosMultiplicados);

//9
function crearMultiplicador(x) {
    return function(a) {
        return a * x;
    }
}

const multiplicarPor3 = crearMultiplicador(3);
console.log(multiplicarPor3(5));

//10
const sumarAnonima = function(a, b) {
    return a + b;
}

const resultadoSuma = sumarAnonima(10, 15);
console.log(resultadoSuma);