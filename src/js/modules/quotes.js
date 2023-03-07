import getRandomNumber from "./getRundomNamber";
import changeLang from "./changeLang";

function quotes(){

  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
  const changeQuote = document.querySelector('.change-quote');
  const lang = changeLang().quotes;


  function getQuotes(link){
    const quotes = link;
    
    fetch(quotes)
      .then(res => res.json()) 
      .then( data => {
        const randomNum = getRandomNumber(data.quotes.length);
        quote.textContent = `${data.quotes[randomNum].quote}`;
        author.textContent = `${data.quotes[randomNum].author}`;
      })
      .catch(err => console.log(err));
  }
  getQuotes(lang);

  changeQuote.addEventListener('click', quotes);
}

export default quotes;