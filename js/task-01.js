const categories = document.querySelector('#categories');

const listOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${listOfCategories.length}`);

for (let category of listOfCategories) {
    
    console.log(`Category: ${category.firstElementChild.textContent}`);

    console.log(`Elements: ${category.lastElementChild.children.length}`);
}