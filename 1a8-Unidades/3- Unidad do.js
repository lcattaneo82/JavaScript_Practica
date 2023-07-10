let nFactorial = 10;

let nResulado = 1;

let i = nFactorial; 

do {
	nResulado *= i;
    console.log (i, nResulado);
    i --;

} while (i>1);

console.log('El factorial de %s es: %d',nFactorial, nResulado);
