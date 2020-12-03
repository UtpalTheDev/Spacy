var container = document.querySelector("#container");

window.addEventListener("load", exoplanet);

function exoplanet() {
    var exo_url = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_name,pl_disc,pl_hostname,pl_rade,pl_orbper,rowupdate&orderby=pl_disc%20desc&format=json";

    fetch(exo_url)
        .then(response => response.json())
        .then(json => {
            var div = "<div><div class='header'>";
            var length=json.length;
            for (var i = 0; i < length; i++) {

                console.log(json[i].pl_hostname);
                div += json[i].pl_name +
                 "</div>" + 
                 "<div class='disc'>" + "Discovery: " + json[i].pl_disc +
                  "</div>" + 
                  "<div class='param space'>" + "Star: " + json[i].pl_hostname +
                   "</div>" +
                    "<div class='param'>" + "Orbital Period: " + json[i].pl_orbper+" Day" + "</div>" +
                     "<div class='param'>" + "Radius: " + json[i].pl_rade +
                      "</div>"



                    +
                    "</div>" + "<div>" + "<div class='header'>";
            }
            container.innerHTML = div + "</div>" + "</div>";


        })
        .catch(errorhandler)


}

function errorhandler(error) {
    console.log(error);
    alert("error");

}