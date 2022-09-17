const counter = {
  counterValue: 0,

  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

incrementEl.addEventListener('click', () => {
  counter.increment();
  counterValue.textContent = counter.counterValue;
});

decrementEl.addEventListener('click', () => {
  counter.decrement();
  counterValue.textContent = counter.counterValue;
});
