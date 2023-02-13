const categories = document.querySelector('#categories');

const listOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfCategories.length}`);

for (let category of listOfCategories) {

    console.log(`Category: ${category.querySelector('h2').textContent}`);

    console.log(`Elements:  ${category.querySelectorAll('li').length}`);
}