const pObjeto = document.getElementById("parrafo1")

pObjeto.addEventListener("cambioTexto",evento =>{
    console.log('esto es p :>> ', evento.detail)
    pObjeto.innerText = evento.detail.nuevoTexto
    pObjeto.style.color = evento.detail.color
})

function cambiarTexto (nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail : {
            nuevoTexto,
            color
        }
    })
    
    pObjeto.dispatchEvent(evento)
}

const a = cambiarTexto("este es el nuevo título", "blue")