// Una función que admita un parámetro "num", 
//y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci 
//(Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])


const calcularfibonacci = (num) => {

    let cadenaFibo = new Array()
    let valor = 0

    for (let i = 0; i < num; i++) {
        if (i<2){
            valor = 1
        }
        else {
            valor = cadenaFibo[i-1]  + cadenaFibo[i-2]            
        }
        cadenaFibo.push(valor)
 }
    return cadenaFibo
}

const resultado = calcularfibonacci(6)

console.log('resultado :>> ', resultado);

// Ejecuta la depuración de VSCode para visualizar la ejecución de la función