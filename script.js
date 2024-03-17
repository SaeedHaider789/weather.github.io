const apiKey = "5621175ffdcf47a3cdf467a862c69598  "
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');

let checkWeather = async(city) =>{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(`.city`).innerHTML = data.name;
    document.querySelector(`.temp`).innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(`.humidity`).innerHTML = data.main.humidity;
    document.querySelector(`.wind`).innerHTML = `${data.wind.speed} km/h`;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "images/mist.png";
    }
} 

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

let inp = document.getElementById("inp");
inp.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});


