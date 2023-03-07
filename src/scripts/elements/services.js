function services() {

  const BTN = document.querySelectorAll('.service-btn');
  const SERVICESITEMS = document.querySelectorAll('.service-item');

  let count = 0;

  BTN.forEach( e => {
    e.addEventListener('mouseover', () => {
      if(count < 2){
        e.classList.add('hover');
      }
      
      if(count > 1 && !e.classList.contains('btn-active')){
        e.style = 'background-color: red;';
      }
    });
    e.addEventListener('mouseout', () => {
      if(count < 2){
        e.classList.remove('hover');
      }
      if(count > 1 && !e.classList.contains('btn-active')){
        e.style = '';
      }
    });
    e.addEventListener('mousedown', () => {
      if(count < 2){
        e.classList.add('click');
      }
      
      if(count > 1 && !e.classList.contains('btn-active')){
        e.style = 'background-color: red;';
      }
    });
    e.addEventListener('mouseup', () => {
      if(count < 2){
        e.classList.remove('click');
      }
      
      if(count > 1 && !e.classList.contains('btn-active')){
        e.style = '';
      }
    });

    
    e.addEventListener('click', () => {
      if(e.classList.contains('btn-active')){
        e.classList.remove('btn-active');  
        count--;
      } else if(count < 2) {
        e.classList.add('btn-active');
        count++;
      }


      BTN.forEach(btn => {

        if(btn.classList.contains('btn-active')){
          SERVICESITEMS.forEach(item => {
            if(item.getAttribute('data') === btn.innerHTML){
              item.classList.remove('blure');
            }
          })
        } else if(!btn.classList.contains('btn-active')){
          SERVICESITEMS.forEach(item => {
            if(item.getAttribute('data') === btn.innerHTML){
              item.classList.add('blure');
            }
          })
        }
      });
      if(count == 0){
        SERVICESITEMS.forEach(item => {
          item.classList.remove('blure');
        })
      }
    });
  })
}

export default services