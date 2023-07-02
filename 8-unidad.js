// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"

function siempreTrue() {return true};

console.log( siempreTrue());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function miAsc(){
    const miPromesa = new Promise((resolve, reject)=>{
        if(true){
            resolve()
        } else {
            reject()
        }

    })

    miPromesa
        .then(()=> console.log("Hola soy una promesa"))
        .catch(()=> console.log("Hola soy una promesa"))
        

}
    
setTimeout (miAsc, 2000)


// - Una función generadora de índices pares automáticos

function* generador(){
    let id = 0;    
    while(true) {        
        id += 2
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen1 = generador();

console.log(gen1.next().value)

console.log(gen1.next().value)

console.log(gen1.next().value)

console.log(gen1.next().value)

