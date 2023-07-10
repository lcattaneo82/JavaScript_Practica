/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const person1 = {nombre: "Lucas", apellido: "Catta", edad: 40, altura: 175, eresDesarrollador: true
};

const person2 = {nombre: "Lau", apellido: "Staiger", edad: 41, altura: 160, eresDesarrollador: true
};

const person3 = {nombre: "Rome", apellido: "Catta", edad: 9, altura: 120, eresDesarrollador: false
};

let edad = person1.edad;

console.log('edad :>> ', edad);

let personas = [person1];

personas.forEach((element, index) => {
    console.log(element.nombre);
    console.log(element.apellido);
});


personas.splice(personas.length,0,person2);

personas.splice(personas.length,0,person3);

personas.forEach((element, index) => {
    console.log(element.nombre);
    console.log(element.apellido);
});

personas.sort((a, b) =>  a.edad - b.edad);

console.log('personas :>> ', personas);