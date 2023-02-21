// Metodos y propiedades para fechas

// Date

// Obtener fecha actual

let fechaActual = new Date();
console.log(fechaActual);

// Establecer fechas
//1 ano, mes (indexado a cero), dia, hora, minutos, segundos, milisegundos

let fechaNacimiento = new Date(1990,1,11); //11 de febrero de 1990
console.log(fechaNacimiento);

//2 pasando como argumento una fecha-string 'yyyy-mm-dd'

let fecha2 = new Date('2021-03-15'); //15 de marzo de 2021
console.log(fecha2);

//3 pasando argunmento en milisegundos desde la era Epoch (1 de enero de 1970)

let fecha3 = new Date(1214325534322);
console.log(fecha3);


// Metodos de instancias de Date

console.log(fechaActual.getFullYear()); //Devolver el ano en formato number
console.log(fechaActual.getMonth()); //Devolver el mes en tipo number indexado a cero

let meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses[fechaActual.getMonth()]);

console.log(fechaActual.getDate()); //Devuelve el dia del mes
console.log(fechaActual.getDay()); //Devuelve el dia de la semana
console.log(fechaActual.getHours()); //Devuelve la hora
console.log(fechaActual.getMinutes()); //Devuelve los minutos
console.log(fechaActual.getSeconds()); //Devuelve los segundos
console.log(fechaActual.getMilliseconds()); //Devuelve los milisegundos

// Para el calculo de fechas utilizamos los milisegundos

console.log(fechaActual.getTime()); //Milisegundos desde Epoch

let fechaSalida = new Date(fechaActual.getTime() + 3 * 24 * 60 * 60 * 1000); // fecha de salida dentro de tres dias
console.log(fechaSalida);