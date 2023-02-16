// ===CREATING A MAP ===
var map = L.map('map').fitWorld();

// ===ADD OPEN STREET MAP TILES ===
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

// ==Locating user==
map.locate({setView: true, maxZoom: 16})
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);
//Error if not found
function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError)
/* ************************************************************ */
//===== FOURSQUARE =====
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'fsq3MhGrK7xzUkpk7/oiXNnA7yHP36gCcVCiXANq/1dyFDU='
    }
  };
  
//   fetch('https://api.foursquare.com/v3/places/search?query=coffee&limit=5', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
function fn1() {
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    var rd3 = document.getElementById("rd3");
    var rd4 = document.getElementById("rd4");

    if(rd1.checked == true){
        let answer;
        fetch('https://api.foursquare.com/v3/places/search?query=coffee&limit=5', options)
            .then(response => response.json())
            .then(response => console.log(response))
            
            .catch(err => console.error(err));
        console.log(answer)    
            
    }
    else if(rd2.checked == true){
        fetch('https://api.foursquare.com/v3/places/search?query=restaurant&limit=5', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else if(rd3.checked == true){
        fetch('https://api.foursquare.com/v3/places/search?query=hotel&limit=5', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else if(rd4.checked == true){
        fetch('https://api.foursquare.com/v3/places/search?query=market&limit=5', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    else
        alert("Error no selection was made")
}

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

