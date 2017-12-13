
     
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

function cel()
{
	
var geo={};
 
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(success,error);
}
else
alert("your browser does not support geolocation");
 
function error()
{
console.log("oops cant find you!");
}
function success(pos)
{
 
geo.lat=pos.coords.latitude;
geo.lon=pos.coords.longitude;
xhr = new XMLHttpRequest();
 
    $.ajax({
       type: "GET",
       url: "https://simple-weather.p.mashape.com/weatherdata?",
       dataType: "json",
       data:{"lat":geo.lat,"lng":geo.lon},
       success: function(response) {
                              document.getElementById('max').value=  (response.query.results.channel.item.forecast[0].high);
                                  document.getElementById('min').value=(response.query.results.channel.item.forecast[0].low);
                                  document.getElementById('pic').value=(response.query.results.channel.item.forecast[0].text);
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

function far()
{
	
var geo={};
 
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(success,error);
}
else
alert("your browser does not support geolocation");
 
function error()
{
console.log("oops cant find you!");
}
function success(pos)
{
 
geo.lat=pos.coords.latitude;
geo.lon=pos.coords.longitude;
xhr = new XMLHttpRequest();
 
    $.ajax({
       type: "GET",
       url: "https://simple-weather.p.mashape.com/weatherdata?",
       dataType: "json",
       data:{"lat":geo.lat,"lng":geo.lon},
       success: function(response) {
                              document.getElementById('max').value=  ((((response.query.results.channel.item.forecast[0].high)*9)/5)+32);
                                  document.getElementById('min').value=((((response.query.results.channel.item.forecast[0].low)*9)/5)+32);
                                  document.getElementById('pic').value=(response.query.results.channel.item.forecast[0].text);
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
