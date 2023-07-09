
const logger = require('./logger')


function elDoble(valor) {
    if (!isNaN(valor)) {
        return valor * 2;
    }
    throw new Error("El parámetro tiene que ser numérico");
}

try {
    let variable = elDoble("S4")    
} catch (error) {
    logger.error(error);
}


