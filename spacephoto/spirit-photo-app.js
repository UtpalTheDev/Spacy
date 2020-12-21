var cont_data=document.querySelector("#container");
var search=document.querySelector("#search");
var input_sol=document.querySelector("#textarea");
var api_key="gbdWMPYueZpfzSlsDGzIx39RfYKnDUQ48AZiRj5l"


var url="https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&page=1&api_key="+api_key;

window.addEventListener("load",blockfunc);
search.addEventListener("click",clickfunc);

function blockfunc() {
    
    var html="<div>";
    fetch(url)
    .then(response => response.json() )
    .then(json1=>
        {   
            console.log(json1.photos[0].img_src);
            var photo=json1.photos;
            
        
          for(var i=0;i<photo.length;i++){
             
             html+="<img class='short-img' src='"+photo[i].img_src+"'>"+"<div class='desc'> Earth Date: "+photo[i].earth_date+"<br>"+photo[i].camera.full_name+"</div>"+"<div class='link'>"+"<a href='"+photo[i].img_src+"' target='iframe_a'>Go</a>"+"</div>"+"</div>"+"<div>";

            }
           html= html+"</div>";
          cont_data.innerHTML=html;
        
        })
        .catch(errorhandler)   
}


function clickfunc() {

    var sol=input_sol.value;
    url="https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol="+sol+"&api_key="+api_key;
    var html="<div>";
    fetch(url)
    .then(response => response.json() )
    .then(json=>
        {   
            console.log(url);
            var photo=json.photos;
        
          for(var i=0;i<photo.length;i++){
             
             html+="<img class='short-img' src='"+photo[i].img_src+"'>"+"<div class='desc'> Earth Date: "+photo[i].earth_date+"<br>"+photo[i].camera.full_name+"</div>"+"<div class='link'>"+"<a href='"+photo[i].img_src+"' target='iframe_a'>Go</a>"+"</div>"+"</div>"+"<div>";

            }
           html1= html+"<div>"+"no data"+"</div>"+"</div>";
          cont_data.innerHTML=html1;
        
        })
        .catch(errorhandler)   
}


function errorhandler(error) {
    console.log(error);
    alert("error");
    
}