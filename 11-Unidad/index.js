//- Crea un nuevo fichero JS que contenga las siguientes líneas

//- Una clase llamada "Estudiante" que tenga:

class Estudiante {
    constructor(nombre, asignaturas){
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    obtenerDatos(){
        let datos = [this.nombre, this.asignaturas]
        return datos
    }
}
//- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

//- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

//- Crea una nueva instancia de "Estudiante"

//- Haz la llamada al método obtenDatos

const estudante1 = new Estudiante("Lucas", ["java","sql", "htm"])
const datos = estudante1.obtenerDatos()
console.log('datos :>> ', datos);
