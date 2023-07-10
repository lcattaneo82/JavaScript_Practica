import * as funciones from './modulo/funciones.js'
import logger from './logger/index.js';
import axios from 'axios';
import chalk from 'chalk';



console.log(chalk.bgRed(`Probamos la librería Winston + chalk`));

let nro = "4"


try {
    let resultado = funciones.duplicar(nro)

    console.log(chalk.green(`El resultado es: ${resultado}`));

} catch (error) {
    logger.error(`${error}`);
}


console.log(chalk.bgRed(`Ahora probamos un servicio con la librería AXIOS`));

// Make a request for a user with a given ID
axios.get('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    logger.error(`${error}`);
  })
  .finally(function () {
    // always executed
  });
