let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
let apiKey = "YOUR_API_KEY"

let temp = document.getElementById("temp")
let city = document.getElementById("city")
let humidity = document.getElementById("dh")
let windSpeed = document.getElementById("dw")
let search = document.querySelector(".search input")
let btn = document.getElementById("btn")
let image = document.querySelector(".weatherstatus img")
let weatherstatus = document.querySelector(".weatherstatus")
let card= document.querySelector(".card")
let invalid= document.getElementById("invalid")
async function checkWeather(cityy) {
    let reponse = await fetch(apiUrl + cityy + `&appid=${apiKey}`)
    let data = await reponse.json()
    if(data.cod=="404"){
        invalid.style= "display:block"
    }
    else{
         temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "Km/hr";
    invalid.style= "display:none"
    if (data.weather[0].main == "Clouds") {
        image.src = "animated/cloudy.svg"
    }
    else if (data.weather[0].main == "Rain") {
        image.src = "animated/rainy-1.svg"
    }
    else if (data.weather[0].main == "Clear") {
        image.src = "animated/day.svg"
    }
    else if (weatherType === "Drizzle") {
        image.src = "animated/rainy-1.svg";
    }
    else if (weatherType === "Snow") {
        image.src = "animated/snowy-1.svg";
    }
    else if (weatherType === "Thunderstorm") {
        image.src = "animated/thunder.svg";
    }
    else if (weatherType === "Mist" || weatherType === "Fog" || weatherType === "Haze") {
        image.src = "animated/cloudy.svg";
    }

    card.style="height:500px; transition:height 0.5s"
    weatherstatus.style.display="block"
    }

}
btn.addEventListener("click", () => {
    checkWeather(search.value)
});
search.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        checkWeather(search.value)
    }
});