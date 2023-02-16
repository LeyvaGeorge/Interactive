//user's geolocation
let userLocation;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    userLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
    console.log('User location:', userLocation);
  });
} else {
  console.log('Geolocation is not supported by this browser.');
}

//Button Event Listener

document.getElementById("coffee").addEventListener("click", () =>{clicked("Coffee")});
document.getElementById("restaurant").addEventListener("click", () => {clicked("Restaurant")});
document.getElementById("hotel").addEventListener("click", () => {clicked("Hotel")});
document.getElementById("market").addEventListener("click", () => {clicked("Market")});

//pass name of search result to function
function clicked(name){
 //===FOURSQUARE===
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'fsq3MhGrK7xzUkpk7/oiXNnA7yHP36gCcVCiXANq/1dyFDU='
  }
};

fetch(`https://api.foursquare.com/v3/places/search?query=${name}&limit=5`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}


// ===CREATING A MAP ===
var map = L.map('map').fitWorld();

// ===ADD OPEN STREET MAP TILES ===
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

// ===Pop up===
{/*
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}
    
map.on('click', onMapClick);*/
}
      //Authorization: 'fsq3MhGrK7xzUkpk7/oiXNnA7yHP36gCcVCiXANq/1dyFDU='
