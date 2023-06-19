var coordinates = {

};
$(document).ready(function (){
    getCoords();
    getWeather();
})

function getCoords() {
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has("source") && searchParams.has("destination")){
        let source = searchParams.get("source");
        let destination = searchParams.get("destination");

        coordinates.source_lat = source.split(";")[0];
        coordinates.source_lng = source.split(";")[1];
        coordinates.destination_lat = destination.split(";")[0];
        coordinates.destination_lng = destination.split(';')[1];
    } else{
        alert("Coordinates not selected");
        window.history.back();
    }
}

function getWeather() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lng}&appid={94212e971d0ca977303f8ae892224bbd}`,
        type: "get",
        success: function (response) {
            let steps = response.routes[0].legs[0].steps
            let name = response.name
            let weather = response.weather[0].main
            $("#scene_container").append(
                `
                <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]}; longitude: ${steps[i].maneuver.location[0]};">
                    <a-entity>
                        <a-text height="50" value="Weather Forecast is ${weather} at ${name}"></a-text>
                    </a-entity>
                </a-entity>
                
                `
            )
        }
    })
}
