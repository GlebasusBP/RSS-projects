function burger(){
  const burgerMenu = document.querySelector('.burger');
  const burgerMenuLine = document.querySelectorAll('.burger-line');
  const navList = document.querySelector('.header-nav');

  burgerMenu.addEventListener('click', () => {
    burgerMenuLine.forEach( e => {
      if(e.classList.contains('burger-close')){
        e.classList.remove('burger-close');
        burgerMenu.classList.remove('burger-btn');
        navList.classList.remove('nav-watch');
      } else {
        e.classList.add('burger-close');
        burgerMenu.classList.add('burger-btn');
        navList.classList.add('nav-watch');
      }
    })
  })

  navList.addEventListener('click', ()=>{
    burgerMenu.classList.remove('burger-btn');
    navList.classList.remove('nav-watch');
    burgerMenuLine.forEach( e => {
      e.classList.remove('burger-close');
    })
  })

  navList.addEventListener('click', (event) => {
    if(event.target.classList.contains('header-nav-list-link')){
      burgerMenu.classList.remove('burger-btn');
      navList.classList.remove('nav-watch');
      burgerMenuLine.forEach( e => {
        e.classList.remove('burger-close');
      })
    }
  })
};

export default burger;