var box = document.querySelector("#box");
var search=document.querySelector("#button");
var planet_name=document.querySelector("#textarea");

search.addEventListener("click", exoplanet);

function exoplanet() {
    var planet=planet_name.value;
    var planet=planet.toString();
   /* var planet=planet.toLowerCase();
    planet= planet.charAt(0).toUpperCase() + planet.slice(1);*/
    console.log(planet);
    
    var exo_url = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=distinct%20pl_name,pl_hostname,pl_discmethod,pl_pnum,st_dist,st_logg,st_disterr1,st_disterr2,st_teff,st_tefferr1,st_tefferr2,pl_orbper,pl_orbpererr1,pl_orbpererr2,pl_orbincl,pl_radj,pl_radjerr1,pl_radjerr2,pl_rade,pl_radeerr1,pl_radeerr2,pl_dens,st_mass,st_rad,st_raderr1,st_raderr2,pl_eqt,pl_rvamp,pl_telescope,pl_instrument,pl_pelink,rowupdate&where=pl_name like '"+planet+"'&format=json";

    fetch(exo_url)
        .then(response => response.json())
        .then(json => {
            console.log(json[0].pl_hostname);

            
            var div = "<div><div class='block'>";
            var length=json.length;
            for (var i = 0; i < length; i++) {

                console.log(json[i].pl_hostname);

                div += json[i].pl_name +
                 "</div>" +

                   
                "<div class='search-flex-bind'>"+
                 
                 "<div class='float-left'>"+
                   "<p>Star Name: "+json[i].pl_hostname +"</p>"+
                   "<p>Radius: " + json[i].pl_rade +"( <sub>"+json[i].pl_radeerr1+"</sub> <sup>"+json[i].pl_radeerr2+"</sup> ) R<sub>J</sub>(Earth Reference)</p>"+
                   "<p>Radius: " + json[i].pl_radj +"( <sub>"+json[i].pl_radjerr1+"</sub> <sup>"+json[i].pl_radjerr2+"</sup> ) R<sub>J</sub>(Jupiter Reference)</p>"+
                   "<p>Orbital Time: " + json[i].pl_orbper +"( <sub>"+json[i].pl_orbpererr1+"</sub> <sup>"+json[i].pl_orbpererr2+"</sup> ) <sub></sub>(Day)</p>"+
                    "<p>Star Distance: " + json[i].st_dist +"( <sub>"+json[i].st_disterr1+"</sub> <sup>"+json[i].st_disterr2+"</sup> ) <sub></sub>(pc)</p>"+
                    "<p>Star Temperature: " + json[i].st_teff +"( <sub>"+json[i].st_tefferr1+"</sub> <sup>"+json[i].st_tefferr2+"</sup> ) <sub></sub>(K)</p>"+
                    "<p>Star Radius: " + json[i].st_rad +"( <sub>"+json[i].st_raderr1+"</sub> <sup>"+json[i].st_raderr2+"</sup> ) <sub></sub>(solar radii)</p>"+
                 "</div>"+

                 "<div class=float-right>"+
                 "<p>No. of Planet in System: "+json[i].pl_pnum+"</p>"+
                 "<p>Star Surface Gravity: " + json[i].st_logg +"( <sub>"+json[i].st_loggerr1+"</sub> <sup>"+json[i].st_loggerr2+"</sup> ) <sub></sub></p>"+
                 "<p>Discovery Method: "+json[i].pl_discmethod+"</p>"+
                 "<p>Telescope Name: "+json[i].pl_telescope+"</p>"+
                 "<p>Instrument Used: "+json[i].pl_instrument+"</p>"+
                 "<p>More Information: <a href= '"+json[i].pl_pelink+"'target='_blank'>Click here</a></p>"+
                 "</div>"+
               
                "</div>"+
                "</div>" + "<div>" + "<div class='block'>";
            }
            box.innerHTML = div + "</div>" + "</div>";


        })
        .catch(errorhandler)


}

function errorhandler(error) {
    console.log(error);
    alert("error\n Make sure you are writing in correct order and formation\n Keep in mind it is case sensitive ");

}