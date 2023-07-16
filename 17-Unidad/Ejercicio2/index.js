let map;
let posicion;
let infoWindow;

const { Map } = await google.maps.importLibrary("maps");

async function initMap() {
    console.log('entra a la funcion');
  //@ts-ignore

  posicion = { lat: -15.527, lng: 28.22} 
  map = new Map(document.getElementById("map"), {
        center:posicion,
        zoom: 6,    
  });

  marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
  })
}
initMap();

//  Latitud: Paralelo 32º 52' 18" Sur y 33º 02' 22" Sur.


function mySudrafrica() {
  posicion = { lat: -34.397, lng: 150.644 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: posicion,
    zoom: 6,
  });

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "Posición Sudafrica"
})
}


function myLocation() {
//   posicion = { lat: -34.397, lng: 150.644 };
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: posicion,
//     zoom: 6,
//   });

//   marker = new google.maps.Marker({
//     position: posicion,
//     map,
//     title: "Posición Inicial"
// })

  infoWindow = new google.maps.InfoWindow();

 const locationButton = document.querySelector('#btn-myLocation') // document.createElement("button");


  //locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.myLocation = myLocation;

const btnSudafrica = document.querySelector('#btn-Sudafrica')

btnSudafrica.addEventListener("click",() => {
    console.log('entré a sudafrica'),
    mySudrafrica()

})


const btnmyLocation = document.querySelector('#btn-myLocation')

btnmyLocation.addEventListener("click",() => {
    console.log('entré a mi posición'),
    myLocation()

})




