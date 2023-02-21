//Metodos y propiedades para arrays

let frutas = ['manzana', 'naranja', 'kiwi'];

//Propiedades

console.log(frutas.length); //numero de elementos del array

//Metodos mutables (modificar los valores de la variable)

let frutaExtraida = frutas.pop(); //extrae el ultimo elemento del array
console.log(frutaExtraida);
console.log(frutas);

frutas.push('pera', 'cereza'); //anade elementos al final del array
console.log(frutas);

frutas.shift(); //extraer el primer elemento del array y desplazar a la izquierda el resto
console.log(frutas);

frutas.unshift('banana', 'frutilla') //anade elementos al inicio del array
console.log(frutas);

// Metodo splice para eliminar o sustituir elementos
// splice(indiceInicial, cantidadAEliminar, elementos a sustituir)

frutas.splice(1,2);
console.log(frutas);

frutas.splice(1,2,'banana','frutilla');
console.log(frutas);

frutas.splice(1,1,'manzana');
console.log(frutas);

frutas.splice(1,0,'kiwi','durazno'); //no eliminamos y solo anadimos
console.log(frutas);


//sort

frutas.sort(); // en orden alfabetico
console.log(frutas);

frutas.reverse();
console.log(frutas); //revierte el array


// Los metodos en JS se pueden encadenar

let marcasAutos = ['VW', 'Audi', 'Renault'];
marcasAutos.sort().reverse();
console.log(marcasAutos);