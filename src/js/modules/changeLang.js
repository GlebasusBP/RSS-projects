function changeLang(){
  let activeLang = document.querySelector('.lang-active').getAttribute('lang');

  const langs = {
    eng: {
      greeting: ['Good night', 'Good morning', 'Good afternoon', 'Good evening'],
      placeholder: '[Enter name]',
      weather: {
        local: 'Minsk',
        lang: 'en',
        wind: ['Wind speed:', 'm/s'],
        humidity: 'Humidity:',
      },
      quotes: 'assets/json/quotesEng.json',
      localDate: 'en-US',
      settings: {
        lang: ['EN', 'RU'],
        titles: ['language:', 'Images:', 'Elements:'],
        elements: ['Time', 'Date', 'Quotes', 'Audio', 'Weather', 'Greeting', 'Game'],
      }
    },
    rus: {
      greeting: ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'],
      placeholder: '[Введите имя]',
      weather: {
        local: 'Минск',
        lang: 'ru',
        wind: ['Скорость ветра:', 'м/с'],
        humidity: 'Влажность:',
      },
      quotes: 'assets/json/quotesRus.json',
      localDate: 'ru-RU',
      settings: {
        lang: ['АНГ', 'РУС'],
        titles: ['Язык:', 'Изображение:', 'Элементы:'],
        elements: ['Время', 'Дата', 'Цитаты', 'Аудио', 'Погода', 'Приветствие', 'Игра'],
      },
    },
  }

  if(activeLang === 'eng'){
    return langs.eng;
  }else if(activeLang === 'rus'){
    return langs.rus;
  }
}

export default changeLang;