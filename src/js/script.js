'use strict';

import timeAndDate from './modules/timeAndDate';
import setAndGetLocalStorage from './modules/setAndGetLocalStorage';
import slider from './modules/slider';
import widget from './modules/widget';
import quotes from './modules/quotes';
import audioPlayer from './modules/audioPlayer';
import changeLanguage from './modules/changeLanguage';
import settings from './modules/settings';

window.addEventListener('DOMContentLoaded', ()=> {
  setInterval(timeAndDate, 1000);
  setAndGetLocalStorage('name', '.name');
  slider();
  widget();
  quotes();
  audioPlayer();
  changeLanguage();
  settings();
})