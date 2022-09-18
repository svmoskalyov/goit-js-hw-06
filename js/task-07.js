const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onTextSize);

function onTextSize() {
  refs.text.style.fontSize = `${+refs.input.value}px`;
}
