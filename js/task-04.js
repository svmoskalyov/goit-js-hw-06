const incrementButtonEl = document.querySelector('button[data-action="increment"]');
const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
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

incrementButtonEl.addEventListener('click', () => counter.increment());
decrementButtonEl.addEventListener('click', () => counter.decrement());
