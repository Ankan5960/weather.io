const apikey="a6b79f3e370431dd7ca9370737c9aacd";
const urlapi="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchbox=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");
const weatherImg=document.querySelector(".weather-icon");

async function getweather(city){
    const response=await fetch(urlapi+city+`&appid=${apikey}`);
    var data= await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherImg.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherImg.src="images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherImg.src="images/snow.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherImg.src="images/mist.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherImg.src="images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImg.src="images/drizzle.png";
    }
    
}

searchbutton.addEventListener("click",()=>{
    getweather(searchbox.value);
}
)
