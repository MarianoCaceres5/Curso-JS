// Metodos y propiedades para string

// let nombre = new String('Juan');
let nombre = 'Juan';

console.log(nombre.length); //devuelve el numero de caracteres

console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());

console.log(nombre.charAt(3)); //devuelve el caracter de la posicion que indique

console.log(nombre.indexOf('n')); //devuelve la posicion de la primera coincidencia
console.log(nombre.indexOf('x')); //devuelve -1 si no encuentra

//

nombre = 'Amanda';

console.log('//');
console.log(nombre.lastIndexOf('a')); //devuelve la ultima coincidencia
console.log(nombre.includes('nda')); //devuelve true o false dependiendo de si encuentra la cadena
console.log(nombre.startsWith('A')); //devuelve true o false dependiendo de si comienza con el caracter que pasamos
console.log(nombre.endsWith('A')); //devuelve true o false dependiendo de si finaliza con el caracter que pasamos

//

let apellidos = 'Perez Gomez';
let nombreCompleto = nombre.concat(' ' + apellidos);

//

let frase = '       En un lugar de la mancha    ';
console.log(frase.trim()); // Elimina al comienzo y al final los espacios en blanco

//

let password = '01234abcde';
console.log(password.slice(2,5)) //devuelve el fragmento desde la primera posicion incluida, hasta la segunda posicion excluida
console.log(password.slice(-2)) //Pasando argumento negativo devuelve los n ultimos caracteres