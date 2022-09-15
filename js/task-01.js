const categoryEl = document.querySelector('#categories');

const itemCategoryEl = categoryEl.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategoryEl.length}`);

itemCategoryEl.forEach(element => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
