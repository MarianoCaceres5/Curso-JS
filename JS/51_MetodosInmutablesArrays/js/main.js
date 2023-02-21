// Metodos inmutables (no modifican al array)

let frutas = ['manzanas', 'naranjas', 'peras', 'manzanas', 'cerezas'];

let frutasSeleccionadas = frutas.slice(2, 4) //extrae elementos desde una posicion incuida hasta otra posicion excluida
console.log(frutasSeleccionadas);
console.log(frutas);

//

let hayPomelos = frutas.includes('Pomelos'); //chequea si existe el elemento dentro del array
console.log(hayPomelos);

//

let mensaje = frutas.join(' | '); // une los elementos separados por el argumento que mandemos
console.log(mensaje);

//

let vehiculos = ['Serat', 'Renault', 'Mercedes'];
let marcasVehiculos = vehiculos.concat('Subaru', 'Hyunday');
console.log(vehiculos); // no modifica el array original
console.log(marcasVehiculos);

let vehiculosAsiaticos = ['Toyota', 'Mazda'];
marcasVehiculos = vehiculos.concat(vehiculosAsiaticos);
console.log(vehiculos);
console.log(vehiculosAsiaticos);
console.log(marcasVehiculos);

//