let latitude, longitude, destination;

$(document).ready(function () {
    alert("Please allow the device to know your location!")
    initGeolocation();
})

$(function () {
    $("#weathernavigate-button").click(function () {
        window.location.href = `ar_weathernavigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    }
    else {
        alert("Sorry, your browser does not support geolocation services.");
    }
}

function success(position) {
    longitude = position.coords.longitude
    latitude = position.coords.latitude

    mapboxgl.accessToken = "pk.eyJ1IjoidXptYTF3aGpyYmZzIiwiYSI6ImNsaTk3aTV3NzF6cHgzcW1sNzA2Nmx4dDEifQ.K9ZqSktp1Lh7-m6ccrFu5g"

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [longitude, latitude],
    zoom: 4
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true},
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    "bottom-left"
);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }),
    "bottom-right"
);

var img1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
    element: img1,
    scale: 0.001
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var img2 = document.querySelector("#gateway")

var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([72.8346221082695, 18.922187063344996])
.addTo(map);

var img3 = document.querySelector("#gate")

var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([77.22951439639363, 28.613043318726206])
.addTo(map);

var img4 = document.querySelector("#lotus")

var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([77.25878345667965, 28.553670976014843])
.addTo(map);

var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([88.34257675122109, 22.544781016745933])
.addTo(map);

var img6 = document.querySelector("#jorasanko")

var marker6 = new mapboxgl.Marker({
    element: img6
})
.setLngLat([88.35924345441735, 22.58507376418773])
.addTo(map);

var img7 = document.querySelector("#belurmath")

var marker7 = new mapboxgl.Marker({
    element: img7
})
.setLngLat([88.35642441023687, 22.632795116058986])
.addTo(map);

map.on('click', function(e) {
    destination = e.lngLat;
})
}