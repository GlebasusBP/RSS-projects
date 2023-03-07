'use strict'

import burger from './elements/burger';
import services from './elements/services'
import accordion from './elements/accordion';
import contacts from './elements/contacts';


window.addEventListener('DOMContentLoaded', ()=>{
  burger();
  services();
  accordion();
  contacts();
})