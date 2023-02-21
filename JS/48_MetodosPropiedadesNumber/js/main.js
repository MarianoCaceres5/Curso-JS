//Metodos y propiedades para number

// Class Math

//Redondeo

let puntuacion = 2.5;
let puntuacionRedondeada = Math.round(puntuacion);
console.log(puntuacionRedondeada);

puntuacion = -2.5;
puntuacionRedondeada = puntuacion < 0 ? Math.round(-puntuacion) * -1: Math.round(puntuacion);
console.log(puntuacionRedondeada);

//Redondeo a la baja

puntuacion = 9.7;
puntuacionRedondeada = Math.floor(puntuacion);
console.log(puntuacionRedondeada);

// Redondeo al alza

puntuacion = 9.3;
puntuacionRedondeada = Math.ceil(puntuacion);
console.log(puntuacionRedondeada);

// Random

let nombres = ['sarah', 'carlos', 'raquel'];
let nombreElegido = nombres[Math.floor(Math.random()*nombres.length)];
console.log(nombreElegido);

// Parseo de string a number

let resultado = '9.7';
let resultadoParseado = parseFloat(resultado); //Convierte a number y mantiene los decimales
console.log(resultadoParseado);

let resultadoEnteroParseado = parseInt(resultado); //Convierte a number y mantiene solo la parte entera
console.log(resultadoEnteroParseado);

// Parseo de number a string

let resultado2 = 56.7
let resultado2ParseadoString = resultado2.toString();
console.log(resultado2ParseadoString);