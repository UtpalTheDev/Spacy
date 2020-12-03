var pin = document.querySelector("#pincode");
var go = document.querySelector("#button");
api_key="pk.dc0a935caf7d659d2578a47fca3222b5";


go.addEventListener("click", sat_position);

function getlocation()
{   var lon;
    var lat;
    var pin_url = "https://us1.locationiq.com/v1/search.php?key="+api_key+"&q="+pin.value+"&format=json";

        fetch(pin_url)
        .then(response => response.json())
        .then(json => {
             lat = json[0].lat;
             lon= json[0].lon;

            console.log("lat"+lat);
            console.log("lon"+lon);
            

        })
        .catch(errorhandler)
    
            
}
 function sat_position(){
    var lon=-15.25663;
    var lat=-48.00141;
    sat_url="http://api.open-notify.org/iss-pass.json?lat=-15.881320&lon=-48.064899";
    
    fetch(sat_url)
    .then(response => response.json())
    .then(json => {
        var predict_lat = json.response.latitude;
        var predict_lon= json.response.longitude;
        var no_passes=json.response.passes;
        

        console.log("pred_lat"+predict_lat);
        console.log("pred_lon"+predict_lon);

    })
    .catch(errorhandler)


}
function errorhandler(error) {
    console.log(error);
    alert("error");
    
}