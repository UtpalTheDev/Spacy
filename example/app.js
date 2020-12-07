window.addEventListener("load",blockfunc);
var url="https://images-api.nasa.gov/search?q=curiosity&media_type=video"
var data=document.querySelector("#container");

function blockfunc() {
    
  
    fetch(url)
    .then(response => response.json() )
    .then(json1=>
        {   
            var url1=json1.collection.items[0].href;
            first_obj=json1.collection.items
            console.log(url1);
            html="<div>";
           
            for(i=0;i<3;i++){
               
                url1=first_obj[i].href;
                fetch(url1)
                .then(response => response.json() )
                .then(json2=>
                {   
                  
                  for(var j=0;j<json2.length;j++){
                    var mp4=json2[j].includes("~medium.mp4");
                    var prev=json2[j].includes("~mobile.mp4");

                  
                 
                   if(mp4==true){
                      console.log("--------------------------");
                      console.log("1");
                      console.log(url1);
                      console.log(json2[j]);
                      console.log("match");
                      var mp4_link=json2[j];

                    }
                   if(prev==true){
                    var prev_link=json2[j];
                    console.log(prev_link);
                    console.log("2");
                    } 
                  
                  
                  }
                  html+=
                  "<video id='myVideo' controls>"+

                  "<source src='"+prev_link+"' type='video/mp4'>"+

                  "</video>"+
                  "<div id='Link' class='Link'><a href='"+mp4_link+"'>Link</a></div>"+"</div>"+"<div>";

                 data.innerHTML=html;
                  
                })
               .catch(errorhandler)
              
            }
             
           
          

      
        })
        .catch(errorhandler)   
}
function errorhandler(error) {
    console.log(error);
    alert("error");
    
}

