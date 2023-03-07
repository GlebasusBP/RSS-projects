function contacts(){

  const contactsHeader = document.querySelector('.contacts-cities__header');
  const contactsBtn = document.querySelector('.contacts-cities__header-icon');
  const contactsBody = document.querySelector('.contacts-cities__body');
  const citiesList = document.querySelector('.contacts-cities__body-list');
  const infoBlock = document.querySelector('.contacts-cities__info');

  const cities = [
    {
      city: 'Yonkers, NY',
      phone: '+1	914	678 0003',
      officeAdress: '511 Warburton Ave'
    },
    {
      city: 'Canandaigua, NY',
      phone: '+1	585	393 0001',
      officeAdress: '151 Charlotte Street'
    },
    {
      city: 'Sherrill, NY',
      phone: '+1	315	908 0004',
      officeAdress: '14 WEST Noyes BLVD'
    },
    {
      city: 'New York City',
      phone: '+1	212	456 0002',
      officeAdress: '9 East 91st Street'
    }
  ];



  const selectCity = (cityName) => {

    contactsHeader.style.cssText = `background: #C1E698;
                                    border: 1px solid #D6E7D2;
                                    box-shadow: none;`;

    document.querySelector('.contacts-cities__header-title').innerHTML = `${cityName}`;
    closeContacts();
  }

  const renderInfo = (obj) => {
    const infoRender = document.createElement('div');
    infoRender.classList.add('contacts-cities__info-render');
    infoBlock.innerHTML = '';
    infoRender.innerHTML = `
      <div class="contacts-cities__info-list">
        <div class="selected">
            <span>City:</span>
            <span>Phone:</span>
            <span>Office adress:</span>
        </div>
        <div class="selected selected-definition">
            <span>${obj.city}</span>
            <span class="selected-phone">${obj.phone}</span>
            <span>${obj.officeAdress}</span>
            <button onclick="window.open('tel:${obj.phone}', '_self');" class="btn selected-btn">Call us</button>
        </div>
      </div>   
    `;
    infoBlock.append(infoRender);
    infoBlock.classList.add('open-info');  
  }

  const creatItem = () => {
    cities.forEach( obj => {
      const item = document.createElement('li');
      item.classList.add('contacts-cities__body-item');
      item.setAttribute('city-name', obj.city);
      item.innerHTML = `
        <p class="contacts-cities__body-item-city">${obj.city}</p>
      `;
      citiesList.append(item);

      item.addEventListener('click', ()=> {
        selectCity(item.getAttribute('city-name'));
        cities.forEach( obj => {
          if(obj.city === item.getAttribute('city-name')){
            renderInfo(obj);
          }
        })
      });
    })
  }

  creatItem();


  

  const openContacts = () => {
    contactsBtn.classList.add('contacts-open-btn');
    contactsBody.classList.add('contacts-open-body');
    contactsHeader.style = 'box-shadow: none';
    infoBlock.classList.remove('open-info');
    if(window.screen.width < 621 ){
      document.querySelector('.contacts-wrapper').style.cssText = `
      gap: 80px;
      background-image: url('../assets/images/contact.png');
      `;
    }

  };

  const closeContacts = () => {
    contactsBtn.classList.remove('contacts-open-btn');
    contactsBody.classList.remove('contacts-open-body');
    if(window.screen.width < 621 ){
      document.querySelector('.contacts-wrapper').style.cssText = `
      gap: 46px;
      background-image: none;
      `;
    }
  };

  contactsBtn.addEventListener('click', () => {
    if(contactsBtn.classList.contains('contacts-open-btn')){
      closeContacts();
      if(window.screen.width < 621 ){
        document.querySelector('.contacts-wrapper').style.cssText = `
        gap: 80px;
        background-image: url('../assets/images/contact.png');
        `;
      }
    } else {
      openContacts();
    }
  })

}

export default contacts;