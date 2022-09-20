const refs = {
  containerControls: document.querySelector('#controls'),
  input: document.querySelector('[type="number"]'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  containerBoxes: document.querySelector('#boxes'),
};

// console.log(refs.containerBoxes.children);
// console.log(refs.containerBoxes.lastElementChild);

refs.buttonCreate.addEventListener('click', onButtonCreateClick);
refs.buttonDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonCreateClick() {
  const elements = createBoxes(+refs.input.value);
  refs.containerBoxes.append(...elements);
}

function createBoxes(amount) {
  const arr = new Array(amount).fill(null);
  let a = 30;
  let b = 30;

  if (refs.containerBoxes.lastElementChild) {
    a = 10 + parseInt(refs.containerBoxes.lastElementChild.style.width);
    b = 10 + parseInt(refs.containerBoxes.lastElementChild.style.height);
  }

  return arr.map((e, i) => {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${a + i * 10}px`;
    boxEl.style.height = `${b + i * 10}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    return boxEl;
  });
}

function destroyBoxes() {
  refs.containerBoxes.innerHTML = '';
  refs.input.value = '';
}
