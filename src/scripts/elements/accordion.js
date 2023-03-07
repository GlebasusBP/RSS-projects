function accordion(){
  const accordionBtn = document.querySelectorAll('.prices-accordion__header-icon');
  const accordionBody = document.querySelectorAll('.prices-accordion__body');
  const accordionItem = document.querySelectorAll('.prices-accordion__item');
  const accordionArrow = document.querySelectorAll('.prices-accordion__header-arrow');

  const closeAccordion = (elem, item) => {
    accordionBody[item].classList.remove('open-body');
    elem.classList.remove('open-btn');
    accordionItem[item].classList.remove('open-item');
    accordionArrow[item].classList.remove('open-arrow');
  };

  const openAccordion = (elem, item) => {
    accordionBody[item].classList.add('open-body');
    elem.classList.add('open-btn');
    accordionItem[item].classList.add('open-item');
    accordionArrow[item].classList.add('open-arrow');
  };

  const togleAccordion = (elem, item) => {
    if(elem.classList.contains('open-btn')){
      closeAccordion(elem, item);
    } else {
      accordionBtn.forEach((elem, item) =>{
        closeAccordion(elem, item);
      })
      openAccordion(elem, item);
    }
  };

  accordionBtn.forEach((e, i) => {
    e.addEventListener('click', () => {
      togleAccordion(e, i);
    });
  })
};

export default accordion;