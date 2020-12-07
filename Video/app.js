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
           
            for(i=0;i<first_obj.length;i++){
                
              var center=first_obj[i].data[0].center;
              var description=first_obj[i].data[0].description;
              
              var date_created=first_obj[i].data[0].date_created;
              var title=first_obj[i].data[0].title;

                console.log("///////////////////////");
                console.log(center);
                console.log("///////////////////////");
                url1=first_obj[i].href;
               /* fetch(url1)
                .then(response => response.json() )
                .then(json2=>*/
                
                  fetc(url1,center,description,title,date_created);
              
            }
             
           
          

      
        })
        .catch(errorhandler)   
}
function errorhandler(error) {
    console.log(error);
    alert("error");
    
}

async function fetc(get_url,get_center,get_description,get_title,get_date_created) {
  

  try{
    var url1= get_url;
    var center=get_center;
    var description=get_description;
    var title=get_title;
    var date_created=get_date_created;
    const res=await fetch(url1);
    if(!res.ok){
      throw new Error(res.status);
    }
  
   var json2= await res.json();   


  
   console.log("2 ///////////////////////");
   console.log(center);
   console.log("2 ///////////////////////");
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
    "<video id='myVideo' controls preload='none'>"+

    "<source src='"+prev_link+"' type='video/mp4'>"+

    "</video>"+
    "<div class='desc'>"+title+"<br>"+"Location :"+center+"<br>"+
    "Date: "+date_created+"<br>"+"Description: "+description+"</div>"+
    "<div id='Link' ><a class='Link' href='"+mp4_link+"'>Link</a></div>"+"</div>"+"<div>";

  data.innerHTML=html;
    
  }
  catch(error){
  console.log(error);
  }
}