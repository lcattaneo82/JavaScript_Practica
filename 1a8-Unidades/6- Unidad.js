const pelis = [
{titulo: "peliA", director: "directorA", fecha: "01/01/1990"},
{titulo: "peliB", director: "directorB", fecha: "01/01/2000"},
{titulo: "peliC", director: "directorC", fecha: "01/01/2020"}
];

const pelisMayores2010 =  pelis.filter(o => o.fecha>"01/01/2010");

console.log(pelisMayores2010);

//const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
const directores = pelis.map ((v)=>v.director);

console.log('object :>> ', directores);

const titulos = pelis.map ((v)=>v.titulo);

console.log('object :>> ', titulos);

const newArray = directores.concat(titulos);

console.log('object :>> ', newArray);

