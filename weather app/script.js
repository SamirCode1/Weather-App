const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather_img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const images = ["/assets/"]

async function checkWeather(city) {
  const api_key = "b2d7674a66ddc76b86eb0ec13b4903b5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_Data = await fetch(url).then((response) => response.json());

  temperature.innerHTML = `${Math.round(weather_Data.main.temp - 273.15)}°C`;
  console.log(weather_Data);
  description.innerHTML = `${weather_Data.weather[0].description}`;
  humidity.innerHTML = `${weather_Data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_Data.wind.speed} Km/H`;
  console.log(weather_Data);
  if (weather_Data.weather[0].main === "Clouds") {
    weather_img.src = "./assets/cloud.png";
  } else if (weather_Data.weather[0].main === "Clear") {
    weather_img.src = "./assets/clear.png";
  } else if (weather_Data.weather[0].main === "Rain") {
    weather_img.src = "./assets/rain.png";
  } else if (weather_Data.weather[0].main === "Mist") {
    weather_img.src = "./assets/mist.png";
  } else if (weather_Data.weather[0].main === "Snow") {
    weather_img.src = "./assets/snow.png";
   } else if (weather_Data.weather[0].main === "Haze"){
     weather_img.src = "./assets/haze.webp";
  }else {
     weather_img.src = "./assets/else.webp"
  }
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
