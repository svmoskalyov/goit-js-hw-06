const refs = {
  input: document.querySelector('#validation-input'),
  inputDataLength: document.querySelector('[data-length]').dataset.length,
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur() {
  +refs.inputDataLength === refs.input.value.length
    ? refs.input.classList.add('valid')
    : refs.input.classList.add('invalid');
}
