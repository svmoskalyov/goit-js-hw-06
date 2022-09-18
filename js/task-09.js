const refs = {
  bodyEl: document.querySelector('body'),
  buttonEl: document.querySelector('.change-color'),
  textEl: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.textEl.textContent = `${getRandomHexColor()}`;
}
