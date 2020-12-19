window.addEventListener("load",blockfunc);
var url="https://images-api.nasa.gov/search?q=curiosity&media_type=video"
var data=document.querySelector("#container");
var button=document.querySelector("#search");
var input=document.querySelector("#textarea");
button.addEventListener("click",searching);

function searching(){
if((input.value)!=null){  
url="https://images-api.nasa.gov/search?q="+input.value+"&media_type=video"
blockfunc();
}
}

//loading function
function blockfunc() {
    
  
    fetch(url)
    .then(response => response.json() )
    .then(json1=>
        {   
            var url1=json1.collection.items[0].href;
            first_obj=json1.collection.items
            console.log(url1);
            html="<div>";
           
            for(i=0;i<15;i++){
                
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


//error handle
function errorhandler(error) {
    console.log(error);
    alert("error");
    
}


//nested fetch call
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
      var jpg=json2[j].includes("~medium.jpg");

    
  
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
    if(jpg==true){
      var prev_img=json2[j];
      
    }
    
    }
    html+=
    "<video id='myVideo' controls preload='none' alt='loading' poster='"+prev_img+"'>"+

    "<source src='"+prev_link+"' type='video/mp4'>"+

    "</video>"+
    "<div class='desc'><span class='title'>"+title+"</span><br>"+"Location: <span class='info'>"+center+"</span><br>"+
    "Date: <span class='info'>"+date_created+"</span><br>"+"Description: <span class='info'>"+description+"</span></div>"+
    "<div id='Link' ><a class='Link' href='"+mp4_link+"' target='_blank' >HD</a></div>"+"</div>"+"<div>";

  data.innerHTML=html;
    
  }
  catch(error){
  console.log(error);
  }
}