// PRIMERA forma de declarar objetos mediante literal

/* let jugador1 = {
    nombre: 'Sergio', //todas las propiedades son publicas
    apellidos : 'Ramos',
    dorsal : '4',
    goles: 0,
    equipos : ['sevilla', 'real madrid'],

    marcarGol(){
        this.goles++;
    }
}

console.log(jugador1.goles);

jugador1.marcarGol();
console.log(jugador1.goles); */


// SEGUNDA forma de declarar objetos con object

/* let jugador2 = new Object();

jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi'
jugador2.dorsal = '10';
jugador2.goles = 0;
jugador2.marcarGol = function (){
    this.goles++;
}

jugador2.marcarGol();
console.log(jugador2.goles); */


// TERCERA forma de declarar objetos mediante funcion constructora

/* function Jugador (nombreIn, apellidosIn, dorsalIn, golesIn){
    this.nombre = nombreIn;
    this.apellidos = apellidosIn;
    this.dorsal = dorsalIn;
    this.goles = golesIn;

    this.marcarGol = function(){
        this.goles++;
    }
}

let jugador3 = new Jugador('Rafael', 'Falcao', '8', 0);
let jugador4 = new Jugador('Andres', 'Iniesta', '8', 0);

jugador3.marcarGol();
console.log(jugador3.nombre, jugador3.goles); */


// CUARTA forma de declarar objetos mediante Factory functions

function Empleado(nombre, apellidos){
    return{
        nombre,
        apellidos
    }
}

let empleado1 = new Empleado('Juan', 'Lopez Perez');