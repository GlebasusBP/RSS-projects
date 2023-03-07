import playList from "./playListAudio";

function audioPlayer(){

  const playBtn = document.querySelector('.play'),
        prevBtn = document.querySelector('.play-prev'),
        nextBtn = document.querySelector('.play-next'),
        audioList = document.querySelector('.play-list'),
        playerTitle = document.querySelector('.active-sound-title'),
        activeDuration = document.querySelector('.duration'),
        playCurrent = document.querySelector('.play-current'),
        rangeProgress = document.querySelector('.progress'),
        timeline = document.querySelector('.timeline'),
        leavelline = document.querySelector('.leavelline'),
        rangeVolume = document.querySelector('.volume-leavel'),
        volumeBtn = document.querySelector('.volume-btn'),
        audio = new Audio();

  let isPLay = false;
  let numPlay = 0;
  let currentTimeOfPause = 0;

  function renderFirstTrack(){
    playerTitle.textContent = `${playList[numPlay].title}`;
    rangeVolume.style.width = `${audio.volume * leavelline.clientWidth}px`;
  }

  function renderAudioList(i){
    const audioItem = document.createElement('li');
    audioItem.classList.add('play-item');
    // audioItem. = `${playList[i].title}`;
    // audioItem.setAttribute('data-item', i);
    audioList.append(audioItem);
    audioItem.innerHTML = `<h3>${playList[i].title}</h3><button class="play player-icon btn-item" data-item="${i}"></button>`;
  }

  function getDuration(elem){
    const {duration} = elem.srcElement,
          durationMinutes = parseInt(duration / 60).toString().padStart(2, "0"),
          durationSeconds = parseInt(duration % 60).toString().padStart(2, "0");

    activeDuration.textContent = `${durationMinutes}:${durationSeconds}`;
  }

  function changeRangeProgress(elem){
    const {duration, currentTime} = elem.srcElement,
          progreeProcent = (currentTime / duration) * 100,
          currentTimeMinutes = parseInt(currentTime / 60).toString().padStart(2, "0"),
          currentTimeSeconds = parseInt(currentTime % 60).toString().padStart(2, "0");

    rangeProgress.style.width = `${+progreeProcent}%`;
    playCurrent.textContent = `${currentTimeMinutes}:${currentTimeSeconds}`;
    renderFirstTrack();
  }

  function setProgress(event){
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }

  function setVolume(event){
    const width = this.clientWidth;
    const clickX = event.offsetX;
    audio.volume = clickX / width;
    rangeVolume.style.width = `${audio.volume * width}px`;
  }

  function playAudio(){
    if(isPLay){
      audio.src=playList[numPlay].src;
      audio.play();
      document.querySelectorAll('.btn-item').forEach(btn => btn.classList.remove('pause'));
      playBtn.classList.add('pause');
      document.querySelectorAll('.play-item').forEach( e => {
        e.classList.remove('item-active');
      });
      document.querySelectorAll('.btn-item')[numPlay].classList.add('pause');
      document.querySelectorAll('.play-item')[numPlay].classList.add('item-active');
      audio.addEventListener('timeupdate', changeRangeProgress);
    }else {
      audio.pause();
      playBtn.classList.remove('pause');
      document.querySelectorAll('.play-item').forEach( e => {
        e.classList.remove('item-active');
      });
      document.querySelectorAll('.btn-item').forEach(btn => btn.classList.remove('pause'));
    } 
  }

  for(let i = 0; i < playList.length; i++){
    renderAudioList(i);
  }

  audio.addEventListener('loadeddata', getDuration);
  timeline.addEventListener('click', setProgress);
  leavelline.addEventListener('click', setVolume);

  volumeBtn.addEventListener('click', () => {
    if(volumeBtn.classList.contains('volume-active')){
      volumeBtn.classList.remove('volume-active');
      rangeVolume.setAttribute('value', `${audio.volume}`);
      audio.volume = 0;
    } else {
      volumeBtn.classList.add('volume-active');
      audio.volume = rangeVolume.getAttribute('value');
    }
  });

  audio.addEventListener('ended', ()=>{
    numPlay++;
    playAudio();
  });

  playBtn.addEventListener('click', () => {
    if(isPLay === false){
      isPLay = true;
      playAudio();
    } else {
      isPLay = false;
      currentTimeOfPause = audio.currentTime;
      console.log(currentTimeOfPause);
      playAudio();
    }
  });

  prevBtn.addEventListener('click', ()=>{
    if(numPlay > 0){
      numPlay--;
      isPLay = true;
      playAudio();
    }else if(numPlay === 0){
      numPlay = playList.length - 1;
      isPLay = true;
      playAudio();
    }
  })

  nextBtn.addEventListener('click', ()=>{
    if(numPlay < playList.length - 1){
      numPlay++;
      isPLay = true;
      playAudio();
    }else if(numPlay === playList.length - 1){
      numPlay = 0;
      isPLay = true;
      playAudio();
    }
  })

 audioList.addEventListener('click', (event) => {
  if(isPLay === true){
    isPLay = false;
    playAudio();
  } else {
    isPLay = true;
    numPlay = +event.target.getAttribute('data-item');
    playAudio();
  }
  
 })

 renderFirstTrack();

}

export default audioPlayer;