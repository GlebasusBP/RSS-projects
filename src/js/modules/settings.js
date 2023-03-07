import changeLang from "./changeLang";

function settings(){
  const settingsPanel = document.querySelector('.settings-wrapper'),
        settingsBtn = document.querySelector('.settings-icon'),
        conditionButtons = document.querySelectorAll('.condition'),
        settingsTitles = document.querySelectorAll('.settings-titles');

  // объект, хронящий изменения в настрoйках
  let state = {
    blocks: ['time', 'date', 'weather-test', 'player', 'greeting-container', 'quotes-block'],
  }

  if(localStorage.getItem('state')){
    state = JSON.parse(localStorage.getItem('state'));
  }

  state.blocks.forEach( selector => {
    conditionButtons.forEach(btn => {
      if(btn.getAttribute('selector') === selector){
        btn.classList.add('active-api');
        openPanel(document.querySelector(`.${btn.getAttribute('selector')}`), 'show-block', 'hide-block');
      }
    })
  });
  

  function closePanel(block, addSelector, removeSelector){
    block.classList.remove(removeSelector);
    block.classList.add(addSelector);
    state.blocks.splice(state.blocks.indexOf(block.getAttribute('selector')), 1);
    localStorage.setItem('state', JSON.stringify(state));
  }

  function openPanel(block, addSelector, removeSelector){
    block.classList.remove(removeSelector);
    block.classList.add(addSelector);
  }

 settingsBtn.addEventListener('click', () => {
  if(settingsBtn.classList.contains('open')){
    settingsBtn.classList.remove('open');
    settingsBtn.classList.add('close');
    closePanel(settingsPanel, 'close-settings', 'open-settings');
  }else{
    settingsBtn.classList.remove('close');
    settingsBtn.classList.add('open');
    openPanel(settingsPanel, 'open-settings', 'close-settings');
  }
 })

 conditionButtons.forEach( (btn) => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('active-api')){
      btn.style.display = 'block';
      btn.classList.remove('active-api');
      closePanel(document.querySelector(`.${btn.getAttribute('selector')}`), 'hide-block', 'show-block');
    }else{
      btn.classList.add('active-api');
      state.blocks.push(btn.getAttribute('selector'));
      localStorage.setItem('state', JSON.stringify(state));
      openPanel(document.querySelector(`.${btn.getAttribute('selector')}`), 'show-block', 'hide-block');
    }
  });
  
 })

  conditionButtons.forEach((btn, i) => {
    btn.textContent = `${changeLang().settings.elements[i]}`;
  });

 settingsTitles.forEach((elem, i) => {
  elem.textContent = `${changeLang().settings.titles[i]}`;
 })
}

export default settings;