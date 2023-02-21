// Metodos y propiedades para arrays de objetos

let jugadores = [
    {nombre:'Maria', apellido:'Messi', puntuacion:9},
    {nombre:'Joaquin', apellido:'Lopez', puntuacion:5},
    {nombre:'Jimena', apellido:'Gomez', puntuacion:7.5}    
];

// Ciclo foreach

let jugadoresAptos= [];

jugadores.forEach((elem) => {
    if(elem.puntuacion >= 6){
        jugadoresAptos.push(elem);
    }
})

console.log(jugadoresAptos);

// Ciclo map, incorpora un return

let nombreJugadores = jugadores.map((elem, i) => {
    return `${i+1}- ${elem.nombre} ${elem.apellido}`;
})

console.log(nombreJugadores);

// Ciclo filter, parecido a map pero que incorpora una condicion en el return

let jugadoresNoAptos = jugadores.filter(elem => {
    return elem.puntuacion <= 5;
}) 

console.log(jugadoresNoAptos);