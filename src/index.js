function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);

  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;

  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function searchCity(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(apiUrl).then(showTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8ace475fd8f2a50f825109d1b6a3c226&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data.list[0]);

  //day2
  let dayTwoMin = Math.round(response.data.list[6].main.temp_min);
  let dayTwoMinElement = document.querySelector("#day-two-min");
  dayTwoMinElement.innerHTML = `${dayTwoMin}°C`;

  let dayTwoMax = Math.round(response.data.list[8].main.temp_max);
  let dayTwoMaxElement = document.querySelector("#day-two-max");
  dayTwoMaxElement.innerHTML = `${dayTwoMax}°C`;

  let dayTwoHumidity = response.data.list[7].main.humidity;
  console.log(dayTwoHumidity);
  Number(dayTwoHumidity);
  let dayTwoHumidityElement = document.querySelector("#day-two-humidity");
  dayTwoHumidityElement.innerHTML = `${dayTwoHumidity}%`;

  let iconElement = document.querySelector("#icon-day-two");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[7].weather[0].icon}@2x.png`
  );

  //day3
  let dayThreeMin = Math.round(response.data.list[14].main.temp_min);
  let dayThreeMinElement = document.querySelector("#day-three-min");
  dayThreeMinElement.innerHTML = `${dayThreeMin}°C`;

  let dayThreeMax = Math.round(response.data.list[16].main.temp_max);
  let dayThreeMaxElement = document.querySelector("#day-three-max");
  dayThreeMaxElement.innerHTML = `${dayThreeMax}°C`;

  let dayThreeHumidity = response.data.list[15].main.humidity;
  console.log(dayThreeHumidity);
  let dayThreeHumidityElement = document.querySelector("#day-three-humidity");
  dayThreeHumidityElement.innerHTML = `${dayThreeHumidity}%`;

  let iconElementThree = document.querySelector("#icon-day-three");
  iconElementThree.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[15].weather[0].icon}@2x.png`
  );

  //day4
  let dayFourMin = Math.round(response.data.list[23].main.temp_min);
  let dayFourMinElement = document.querySelector("#day-four-min");
  dayFourMinElement.innerHTML = `${dayFourMin}°C`;

  let dayFourMax = Math.round(response.data.list[25].main.temp_max);
  let dayFourMaxElement = document.querySelector("#day-four-max");
  dayFourMaxElement.innerHTML = `${dayFourMax}°C`;

  let dayFourHumidity = response.data.list[23].main.humidity;
  let dayFourHumidityElement = document.querySelector("#day-four-humidity");
  dayFourHumidityElement.innerHTML = `${dayFourHumidity}%`;

  let iconElementFour = document.querySelector("#icon-day-four");
  iconElementFour.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[23].weather[0].icon}@2x.png`
  );

  //day5
  let dayFiveMin = Math.round(response.data.list[30].main.temp_min);
  let dayFiveMinElement = document.querySelector("#day-five-min");
  dayFiveMinElement.innerHTML = `${dayFiveMin}°C`;

  let dayFiveMax = Math.round(response.data.list[32].main.temp_max);
  let dayFiveMaxElement = document.querySelector("#day-five-max");
  dayFiveMaxElement.innerHTML = `${dayFiveMax}°C`;

  let dayFiveHumidity = response.data.list[31].main.humidity;
  let dayFiveHumidityElement = document.querySelector("#day-five-humidity");
  dayFiveHumidityElement.innerHTML = `${dayFiveHumidity}%`;

  let iconElementFive = document.querySelector("#icon-day-five");
  iconElementFive.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[31].weather[0].icon}@2x.png`
  );

  //day6
  let daySixMin = Math.round(response.data.list[38].main.temp_min);
  let daySixMinElement = document.querySelector("#day-six-min");
  daySixMinElement.innerHTML = `${daySixMin}°C`;

  let daySixMax = Math.round(response.data.list[39].main.temp_max);
  let daySixMaxElement = document.querySelector("#day-six-max");
  daySixMaxElement.innerHTML = `${daySixMax}°C`;

  let daySixHumidity = response.data.list[39].main.humidity;
  let daySixHumidityElement = document.querySelector("#day-six-humidity");
  daySixHumidityElement.innerHTML = `${daySixHumidity}%`;

  let iconElementSix = document.querySelector("#icon-day-six");
  iconElementSix.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.list[39].weather[0].icon}@2x.png`
  );
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
