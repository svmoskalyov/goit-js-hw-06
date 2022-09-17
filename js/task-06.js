const input = document.querySelector('#validation-input');
const inputDataLength = +document.querySelector('[data-length]').dataset.length;

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  inputDataLength === input.value.length
    ? input.classList.add('valid')
    : input.classList.add('invalid');
}
