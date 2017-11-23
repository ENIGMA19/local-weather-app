function displaydate()
	{
var d = new Date();
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.getElementById('daydisp').innerHTML=days[d.getDay()]+"|"+d.getDate()+"/"+[d.getMonth()+1]+"/"+[d.getFullYear()];

	}


function displaytime()
{
var today = new Date();
var m=today.getMinutes();
m=checkTime(m);
var s=today.getSeconds();
s=checkTime(s);

document.getElementById('timedisp').innerHTML=today.getHours()+":"+m+":"+s;
var t = setTimeout(function(){displaytime()},1000);

function checkTime(i)
 	{
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
	}
	
}

function weather()
{
var Geo={};
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation is not supported');
}

function error() {
alert("That's weird! We couldn't find you!");
}
function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
    			
    			xhr = new XMLHttpRequest();

	$.ajax({
       type: "GET",
       url: "https://simple-weather.p.mashape.com/weather?lat=Geo.lat&lng=Geo.lng",
       dataType: "json",
       success: function(response) {
           						console.log(response);

      						},
	   error:function()
    						{
								alert("failed ");
							},
       beforeSend: setHeader
  		 });
    
    function setHeader(xhr) 
    {
       xhr.setRequestHeader("X-Mashape-Key", "xG8gyPQ0OGmshzx9lVG4LbDefiH1p1Zme1yjsnuUmz41FcenjH");
	}


	}
}