const input = document.querySelector('#validation-input');

input.addEventListener('input', onInput);

function onInput(event) {
  const { value, dataset } = event.target;

  const requiredLength = +dataset.length;
  const inputLength = value.length === requiredLength;
  const add = inputLength ? 'valid' : 'invalid';
  const remove = !inputLength ? 'valid' : 'invalid';

  changeClass(add, remove, event.target);
}

function changeClass(add, remove, element) {
  element.classList.add(add);
  element.classList.remove(remove);
}
