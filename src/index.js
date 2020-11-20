function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(showPosition);

function showTemperature(response) {
  let city = response.data.name;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = `${city}`;

  celsiusTemperature = Math.round(response.data.main.temp);

  let temperature = Math.round(celsiusTemperature);
  let temperatureElement = document.querySelector("#city-temp");
  temperatureElement.innerHTML = `${temperature}`;

  celsiusRealFeel = Math.round(response.data.main.feels_like);

  let realFeel = Math.round(celsiusRealFeel);
  let realFeelElement = document.querySelector("#real-feel");
  realFeelElement.innerHTML = `${realFeel}`;

  let cMetric = document.querySelector("#metric");
  cMetric.innerHTML = `°C`;

  let desc = response.data.weather[0].main;
  let descElement = document.querySelector("#temperature-description");
  descElement.innerHTML = `${desc}`;

  metricWindSpeed = response.data.wind.speed;
  console.log(metricWindSpeed);
  let wind = metricWindSpeed;
  let windElement = document.querySelector("#speed");
  windElement.innerHTML = `${wind}`;

  document.querySelector("#humidity").innerHTML =
    response.data.main.humidity + "%";

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let now = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let weekday = days[now.getDay()];

let weekday2 = days[now.getDay() + 1];
let weekday3 = days[now.getDay() + 2];
let weekday4 = days[now.getDay() + 3];
let weekday5 = days[now.getDay() + 4];
let weekday6 = days[now.getDay() + 5];

let weekdaytwo = document.querySelector("#weekday-two");
weekdaytwo.innerHTML = `${weekday2}`;

let weekdaythree = document.querySelector("#weekday-three");
weekdaythree.innerHTML = `${weekday3}`;

let weekdayfour = document.querySelector("#weekday-four");
weekdayfour.innerHTML = `${weekday4}`;

let weekdayfive = document.querySelector("#weekday-five");
weekdayfive.innerHTML = `${weekday5}`;

let weekdaysix = document.querySelector("#weekday-six");
weekdaysix.innerHTML = `${weekday6}`;

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];

let day = now.getDate();

let day2 = now.getDate() + 1;
let day3 = now.getDate() + 2;
let day4 = now.getDate() + 3;
let day5 = now.getDate() + 4;
let day6 = now.getDate() + 5;

let daytwo = document.querySelector("#day-two");
daytwo.innerHTML = `${month}/${day2}`;

let daythree = document.querySelector("#day-three");
daythree.innerHTML = `${month}/${day3}`;

let dayfour = document.querySelector("#day-four");
dayfour.innerHTML = `${month}/${day4}`;

let dayfive = document.querySelector("#day-five");
dayfive.innerHTML = `${month}/${day5}`;

let daysix = document.querySelector("#day-six");
daysix.innerHTML = `${month}/${day6}`;

let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let hour = `${currentHour}:${currentMinute}`;

let h3 = document.querySelector("h3");
h3.innerHTML = `${weekday}, ${month}/${day} | ${hour}`;

function searchCity(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-city").value;
  searchCity(cityInput);
}

function searchLocation(position) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToCelsius(event) {
  event.preventDefault();
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");

  console.log(celsiusTemperature);

  let temperatureElement = document.querySelector("#city-temp");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);

  let realFeelElement = document.querySelector("#real-feel");
  realFeelElement.innerHTML = Math.round(celsiusRealFeel);

  let windSpeedElement = document.querySelector("#speed");
  windSpeedElement.innerHTML = metricWindSpeed;

  let cMetric = document.querySelector("#metric");
  cMetric.innerHTML = `°C`;

  let windMetric = document.querySelector("#wind-unit");
  windMetric.innerHTML = ` km/h`;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

  let temperatureElement = document.querySelector("#city-temp");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);

  let realFeelElement = document.querySelector("#real-feel");
  let fRealFeel = (celsiusRealFeel * 9) / 5 + 32;
  fRealFeel = Number(fRealFeel);
  realFeelElement.innerHTML = Math.round(fRealFeel);

  let windSpeedElement = document.querySelector("#speed");
  let iWindSpeed = metricWindSpeed / 1.609344;
  windSpeedElement.innerHTML = Math.round(iWindSpeed);

  let fMetric = document.querySelector("#metric");
  fMetric.innerHTML = `°F`;

  let windMetric = document.querySelector("#wind-unit");
  windMetric.innerHTML = ` mph`;
}

let celsiusTemperature = null;
let celsiusRealFeel = null;
let metricWindSpeed = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity);
