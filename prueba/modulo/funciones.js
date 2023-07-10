//import { error } from "console"

export const duplicar = valor => {
    if (!isNaN(valor)){
       return  valor *2
    }
    throw new Error("El valor tiene que ser numérico")
}

