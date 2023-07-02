// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let nFactorial = 10;

let nResulado = 1;

for (let i= nFactorial ;i>1; i--){

    nResulado *= i;
    
    console.log(nResulado, i);
};

nResulado = 1;

for (let i=2 ;i<=nFactorial; i++){

    nResulado *= i;
    
    console.log(nResulado, i, nFactorial);
};
