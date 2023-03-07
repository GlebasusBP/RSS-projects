import changeLang from "./changeLang";

function showGreeting() {
  const greetingContainer = document.querySelector('.greeting');
  const nameInput = document.querySelector('.name');
  const hours = new Date().getHours();
  const index = Math.floor(hours / 6);

  greetingContainer.textContent = `${changeLang().greeting[index]}`;
  nameInput.setAttribute('placeholder', changeLang().placeholder);
}

export default showGreeting;