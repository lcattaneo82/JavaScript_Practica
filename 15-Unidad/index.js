localStorage.setItem("nombre", "Lucas")
localStorage.setItem("apellido", "Catta")

const usuario = {"nombre": "Pepe", "apellido":"Lopez"}

localStorage.setItem("animalFav", JSON.stringify({"nombre": "Blanca", "raza":"perro"}))

localStorage.setItem("usuario", JSON.stringify(usuario))

const animal = localStorage.getItem(JSON.parse(localStorage.getItem("animalFav")))

console.log(animal);

///////

sessionStorage.setItem("nombreSS", "Lucas")
sessionStorage.setItem("apellidoSS", "Catta")

const usuarioSS = {"nombre": "Pepe", "apellido":"Lopez"}

sessionStorage.setItem("animalFavSS", JSON.stringify({"nombre": "Blanca", "raza":"perro"}))

sessionStorage.setItem("usuarioSS", JSON.stringify(usuarioSS))

const animalSS = sessionStorage.getItem(JSON.parse(sessionStorage.getItem("animalFavSS")))

console.log(animalSS);

///

document.cookie = "nombreCookie=Lucas; expires=" + new Date("2024/04/01").toUTCString()
