// Paso por valor y por referencia

// los tipos primitivos tienen su paso por valor

let a = 'Juan';
let b = a;
b = 'Carlos';
console.log(b);
console.log(a); // a mantiene el valor Juan

// Los tipos compuestos (Arrays y objetos) tienen su paso por referencia

let c = [1,2,3];
let d = c;

d.push(4);
console.log(d);
console.log(c); // c tambien se modifica


// ROMPER el paso por referencia

//concat

let marcasEuropeas = ['VW', 'RENAULT', 'AUDI'];
let marcasSeleccionadas = marcasEuropeas.concat();

marcasSeleccionadas.push('TOYOTA', 'SUBARU');
console.log(marcasEuropeas);
console.log(marcasSeleccionadas); 

//spread

let marcasAsiaticas = [];
let marcasCoreanas = ['KIA', 'HYUNDAY'];
let marcasJaponesas = ['TOYOTA', 'NEXUS'];

marcasAsiaticas = [...marcasCoreanas, ...marcasJaponesas];
marcasAsiaticas.push('SUBARU');
console.log(marcasAsiaticas);
console.log(marcasCoreanas);
console.log(marcasJaponesas);
