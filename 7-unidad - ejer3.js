/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const fechahoy = new Date()
console.log('fechahoy :>> ', fechahoy);

let fechaNac = new Date("1982/06/23")

console.log('fechfechaNacahoy :>> ', fechaNac);


let mesNac = fechaNac.getMonth() + 1

console.log('mesNac :>> ', mesNac);


let anioNac = fechaNac.getFullYear()

console.log('anioNac :>> ', anioNac);




