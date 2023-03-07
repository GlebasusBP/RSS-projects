import changeLang from "./changeLang";
import showGreeting from "./Greeting";
import widget from "./widget";
import quotes from "./quotes";
import timeAndDate from "./timeAndDate";

function changeLanguage(){
  const langBtn = document.querySelectorAll('.lang');

  let activeLang = 'eng';

  if(localStorage.getItem('lang')){
    activeLang = localStorage.getItem('lang');
    langBtn.forEach(btn => {
      btn.classList.remove('lang-active');
      if(btn.getAttribute('lang') === activeLang){
        console.log(btn.getAttribute('lang'))
        btn.classList.add('lang-active');
      }
    })
    langSetting();
    quotes();
    widget();
    timeAndDate();
  }

  

  function langSetting(){
    langBtn.forEach(e => {
      if(e.getAttribute('lang') === 'eng'){
        e.textContent = `${changeLang().settings.lang[0]}`;
       }else if(e.getAttribute('lang') === 'rus'){
        e.textContent = `${changeLang().settings.lang[1]}`;
       }
      })
    }
  langSetting();
 
  langBtn.forEach( e => {
    e.addEventListener('click', ()=> {
      if(!e.classList.contains('lang-active')){
        langBtn.forEach(e => e.classList.remove('lang-active'));
        e.classList.add('lang-active');
        localStorage.setItem('lang', e.getAttribute('lang'));
        changeLang();
        showGreeting();
        widget();
        quotes();
        timeAndDate();
        langSetting();
        const conditionButtons = document.querySelectorAll('.condition');
        const settingsTitles = document.querySelectorAll('.settings-titles');
        conditionButtons.forEach((btn, i) => {
          btn.textContent = `${changeLang().settings.elements[i]}`;
        }); 
        settingsTitles.forEach((elem, i) => {
          elem.textContent = `${changeLang().settings.titles[i]}`;
         })
      }
    })
  })
}

export default changeLanguage;