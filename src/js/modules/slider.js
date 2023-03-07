import getTimeOfDay from "./getTimeOfDay";
import getRandomNumber from "./getRundomNamber";

function slider(){

  const  settingImages = document.querySelector('.settings-images');
  const nextSlide = document.querySelector('.slide-next');
  const prevSlide = document.querySelector('.slide-prev');
  const body = document.querySelector('body');
  const timeOfDay = getTimeOfDay();
  const inputTags = document.querySelector('.tag-img-api');
  let isAPI = 'rss';
  let tags = getTimeOfDay();

  if(localStorage.getItem('isAPI')){
    isAPI = localStorage.getItem('isAPI');
  }

  document.querySelectorAll('.api').forEach(btn => {
    if(btn.getAttribute('id') === isAPI){
      btn.classList.add('active-api');
    }
  })

  inputTags.addEventListener('change', () => {
    if(inputTags.value !== ''){
      tags = inputTags.value;
    }else{
      tags = getTimeOfDay();
    }
    if(isAPI === 'unsplash'){
      getPhotoFromUnsplashAPI();
    }else if(isAPI === 'flickr'){
      getPhotoFromFlickrAPI();
    }
  })
  

  let rundomNum = getRandomNumber(20);

  function getPhotoFromUnsplashAPI(){
    isAPI = 'unsplash';
    localStorage.setItem('isAPI', isAPI);
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tags}&client_id=DQ2dbKPFM0Z06fd7ZUhO-SNeF2i36l0UEEm9aswMmbE`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const img = new Image();
        img.src = data.urls.regular;
        img.onload = () => {
        body.style.backgroundImage = `url(${data.urls.regular})`;
        }     
      })
  }

  function getPhotoFromFlickrAPI(){
    isAPI = 'flickr';
    localStorage.setItem('isAPI', isAPI);
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=54f3bc345f95e26611b0a5ba3a08e328&tags=${tags}&extras=url_l&format=json&nojsoncallback=1`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.photos.photo[getRandomNumber(data.photos.photo.length - 1)].url_l);
        const img = new Image();
        img.src = data.photos.photo[getRandomNumber(data.photos.photo.length - 1)].url_l;
        img.onload = () => {
        body.style.backgroundImage = `url(${data.photos.photo[getRandomNumber(data.photos.photo.length - 1)].url_l})`;
        }      
      })
  }

  function setBg(){
    let bgNum = rundomNum;
    isAPI = 'rss';
    if(bgNum < 10){
      bgNum = rundomNum.toString().padStart(2, "0");
    }

    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    }
  }
  setBg();

  function showNextSlide(){
    if(isAPI ==='rss'){
      if(rundomNum < 20){
        rundomNum++;
      } else {
        rundomNum = 1;
      }
      setBg();
    }else if(isAPI === 'unsplash'){
      getPhotoFromUnsplashAPI();
    }else if(isAPI === 'flickr'){
      getPhotoFromFlickrAPI();
    } 
  }

  function showPrevSlide(){
    if(isAPI === 'rss'){
      if(rundomNum > 1){
        rundomNum--;
      } else {
        rundomNum = 20;
      }
      setBg();
    }else if(isAPI === 'unsplash'){
      getPhotoFromUnsplashAPI();
    }else if(isAPI === 'flickr'){
      getPhotoFromFlickrAPI();
    } 
  }

  nextSlide.addEventListener('click', showNextSlide);
  prevSlide.addEventListener('click', showPrevSlide);

  settingImages.addEventListener('click', (event) => {
    if(event.target.classList.contains('settings-btn')){
      if(!event.target.classList.contains('active-api')){
        document.querySelectorAll('.api').forEach(e => e.classList.remove('active-api'));
        event.target.classList.add('active-api');
        if(event.target.textContent === 'RSS'){
          setBg();
          localStorage.setItem('isAPI', isAPI);
          document.querySelector('.tag-img-api').classList.remove('show-input-tag');
          document.querySelector('.tag-img-api').classList.add('hide-input-tag');
        }else if(event.target.textContent === 'Unsplash'){
          getPhotoFromUnsplashAPI();
          document.querySelector('.tag-img-api').classList.remove('hide-input-tag');
          document.querySelector('.tag-img-api').classList.add('show-input-tag');

        }else if(event.target.textContent === 'Flickr'){
          getPhotoFromFlickrAPI();
          document.querySelector('.tag-img-api').classList.remove('hide-input-tag');
          document.querySelector('.tag-img-api').classList.add('show-input-tag');
        }
      }
    }  
  })  
}

export default slider;

