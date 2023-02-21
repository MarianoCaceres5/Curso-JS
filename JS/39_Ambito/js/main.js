// Ambito de las variables y constantes (dependiendo de su forma de declaracion)

// Variables declaradas con var
// el ambito sera el de la funcion mas proxima

var apellidos = 'Lopez Perez'; //ambito global
var apellidos = 'Fernandez'; //Podemos redeclarar aunque sea mala practica

function setMayorEdad(edad){
    if(edad >= 18){
        var adulto = true;
    }else{
        var adulto = false;
    }
    console.log(adulto);
}

setMayorEdad(33);
//console.log(adulto); //no funciona


// Variables declaradas con let o const
//el ambito es el bloque mas proximo de la variable

let ciudad = 'Barcelona'; //ambito global
// let ciudad = 'Bogota' / no se puede redeclarar

function setPuntuacion (puntuacion){
    if(puntuacion >= 5){
        let apto = true;
        console.log(apto);
    }else{
        let apto=false;
        console.log(apto);
    }
    console.log(apto); // devolvera error porque apto tiene el ambito de su bloque
}

setPuntuacion(7);


// Variables declaradas sin palabra reservado
// el ambito sera siempre global con independencia de donde se declare