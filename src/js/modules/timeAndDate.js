import showGreeting from './Greeting';
import changeLang from './changeLang';

function timeAndDate(){
  const DATE = new Date();
  const time = DATE.toLocaleTimeString();
  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const date = DATE.toLocaleDateString(changeLang().localDate, options);
  const timeBlock = document.querySelector('.time');
  const dateBlock = document.querySelector('.date');

  function showTime(value){
    timeBlock.textContent = `${value}`;
  }

  function showDate(value){
    dateBlock.textContent = `${value}`;
  }

  showTime(time);
  showDate(date);
  showGreeting();
}

export default timeAndDate;