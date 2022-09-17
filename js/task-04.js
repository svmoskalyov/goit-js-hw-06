const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

const counter = {
  counterValue: 0,

  increment() {
    counterValue.textContent = this.counterValue += 1;
  },
  decrement() {
    counterValue.textContent = this.counterValue -= 1;
  },
};

incrementEl.addEventListener('click', () => counter.increment());
decrementEl.addEventListener('click', () => counter.decrement());
