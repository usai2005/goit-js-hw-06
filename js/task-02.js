const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 

let arrayOfIngredients = [];

ingredients.forEach(ingredient => {

  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item');
  
  arrayOfIngredients.push(newEl);
});

arrayOfIngredients.map(item => document.querySelector('#ingredients').append(item));
