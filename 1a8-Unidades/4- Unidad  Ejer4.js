// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre
// - Otra cadena de texto con tu Apellido


let sNombre = 'Lucas';
let sApellido = 'Cattaneo'; 

let sEstudiante = 'Estudiante';


// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

sEstudiante = sEstudiante  + ': ' + sNombre +  ' '+ sApellido;

console.log(sEstudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
console.log(sEstudiante.toLocaleUpperCase());

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

console.log(sEstudiante.toLocaleLowerCase());

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

sEstudiante = 'Estudiante';
 
console.log(sEstudiante.length);

// - Una variable que contenga la primera letra del Nombre

let sPrimeraLetraNombre = sNombre.charAt();

console.log(sPrimeraLetraNombre)

// - Otra variable que contenga la última letra del Apellido

let sUltimaLetraApellido = sApellido.charAt(sApellido.length -1);

console.log(sUltimaLetraApellido)

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

console.log(sEstudiante.trim());

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

sEstudiante = sEstudiante  + ': ' + sNombre +  ' '+ sApellido;

console.log(sEstudiante.includes(sNombre))