import changeLang from "./changeLang";
import setAndGetLocalStorage from "./setAndGetLocalStorage";

function widget(){

  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const weatherDescription = document.querySelector('.weather-description');
  const city = document.querySelector('.city');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const error = document.querySelector('.weather-error');

  if(!localStorage.getItem('city')) {
    city.setAttribute('value', changeLang().weather.local); 
  }else{
    city.setAttribute('value', localStorage.getItem('city'));
  }

  city.addEventListener('change', getWeather);

  function getWeather(){
    setAndGetLocalStorage('city', '.city');
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${changeLang().weather.lang}&appid=8c4c964ebe4513067fc46e6f50e27023&units=metric`;

    fetch(url)
      .then(data => data.json())
      .then(data => renderWeatherInfo(data))
      .catch(err => renderError(err))
    
    function renderWeatherInfo(data){
      error.textContent = '';
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.round(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `${changeLang().weather.wind[0]} ${Math.round(data.wind.speed)} ${changeLang().weather.wind[1]}`;
      humidity.textContent = `${changeLang().weather.humidity}  ${data.main.humidity}%`;
    }

    function renderError(){
      error.textContent = `Error! city not found for ${city.value}!`;
      weatherIcon.className = 'weather-icon owf';
      temperature.textContent = '';
      weatherDescription.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
    }
  }

  getWeather();

}

export default widget;
