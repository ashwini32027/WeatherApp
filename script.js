
const apikey = "a8f01a3f571606b8a8d84a2a3f5417da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_1");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == 404 || searchBox.value.trim() === "")
    {
        alert("Please Enter valid City name")
    }
    else
    {
        var data = await response.json();

        console.log(data.weather[0].main == "");
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main =="Clouds")
        {
           weatherIcon.src="cloudd.png";
        }
        else if(data.weather[0].main =="Clear")
       {
        weatherIcon.src="2682848_day_forecast_sun_sunny_weather_icon.png"
       }
       else if(data.weather[0].main == "Rain")
       {
        weatherIcon.src="2730386_character_cloud_inkcontober_rain_icon.png"
       }
       else
       {
        weatherIcon.src="2682844_cloud_day_precipitation_rain_snow_icon.png"
       }
    }
}
searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

