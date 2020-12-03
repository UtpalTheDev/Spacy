var Tab_data=document.querySelector("#table1");

var url="http://api.open-notify.org/astros.json";



window.addEventListener("load",tablefunc);
function tablefunc() {
    
    var html="<tr>";
    fetch(url)
    .then(response => response.json() )
    .then(json=>
        {   var obj=json.people;
            console.log(JSON.stringify(obj[0].name));
        
          for(var i=0;i<(obj).length;i++){
              console.log(json.people[0].name);
             html+="<td>"+"<div>"+obj[i].name+"</div>"+"</td>"+"<td>"+"<div>"+obj[i].craft+"</div>"+"</td>"+"</tr>"+"<tr>";

            }
           html=  "<th>Name</th>"+
           "<th>Craft</th>"+html;
          Tab_data.innerHTML=html;
          
        })
        .catch(errorhandler)   
}

function errorhandler(error) {
    console.log(error);
    alert("error");
    
}