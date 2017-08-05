

try {
	if("geolocation" in navigator){

let success = (position) => {
   let lat = position.coords.latitude;
   let lon = position.coords.longitude;
   
   document.getElementById('latSpan').innerHTML = lat;
   document.getElementById('lonSpan').innerHTML = lon;
  }
                                
let fail = (err) => {
   console.log("Error that occurred: "+err.code);
  }
  
  let d = new Date();
  let day = d.getDate();
  let m = new Date();
  let month = m.getMonth();
  let y = new Date();
  let year = y.getFullYear();
  
  document.getElementById('today').innerHTML = day+"-"+month+"-"+year;
  
  navigator.geolocation.getCurrentPosition(success,fail);
                                     }//end of IF
                                     
    }catch (err) { 
       document.getElementById("err").innerHTML = err.message;
          } 