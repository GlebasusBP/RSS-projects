import changeLang from "./changeLang";

function setAndGetLocalStorage(key, selector){

  const input = document.querySelector(selector);

  function setLocalStorage(){
      localStorage.setItem(key, input.value); 
  }

  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem(key)) {
      input.value = localStorage.getItem(key);
    }
  }
  window.addEventListener('load', getLocalStorage)
}

export default setAndGetLocalStorage;