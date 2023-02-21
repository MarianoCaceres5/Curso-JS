// Sintaxis de declaracion de funciones

// function suma(a, b){
//     console.log(a+b);
// }

// function division(a,b){
//     return a/b;
// }

// // Sintaxis de invocacion

// suma(1,3);

// let resultado = division(10,5);


//
// FUNCIONES DE EXPRESION

let cuadrado = function(a){
    return a * a;
}

console.log(cuadrado(5));

// FUNCIONES FLECHA, permiten simplificacion

// let cubo = (a) => {
//     return a*a*a;
// }

let cubo = a => a*a*a;

console.log(cubo(2));

let mensaje = () => console.log('Hola');

mensaje();