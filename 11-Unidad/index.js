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
const estudante1 = new Estudiante("Lucas", ["java","sql", "htm"])
const datos = estudante1.obtenerDatos()
console.log('datos :>> ', datos);
