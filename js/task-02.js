const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientListEl = document.querySelector('#ingredients');

const createIngredientListEl = options => {
  return options.map(item => {
    const itemIngredientListEl = document.createElement('li');
    itemIngredientListEl.classList.add('item');
    itemIngredientListEl.textContent = item;
    return itemIngredientListEl;
  });
};

const elemetns = createIngredientListEl(ingredients);
ingredientListEl.append(...elemetns);
