// Operadores logicos

// Operador logico AND &&

let valor1 = 12;
let valor2 = 13;
let valor3 = 12;

let resultado = valor2 < valor1 && valor1 === valor3;

// Operador logico OR ||

resultado = valor2 < valor1 || valor1 === valor3;

// Operador logico NOT ! (negacion unaria)

let mayorEdad = false;
mayorEdad = !mayorEdad; //le damos true

// Operador condicional (ternario)
// expresion de condicion ? valor1 : valor2

let estado;
let edadParticipante = 14;

estado = edadParticipante >= 18 ? 'Adulto':'Menor de Edad'; //devuelve determinado resultado en funcion de si se cumple en o no la condicion