function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');

const handleCreateButtonClick = document.querySelector('button[data-create]');

const handleDestroyButtonClick = document.querySelector('button[data-destroy]');

const boxes = document.querySelector('div#boxes');




handleCreateButtonClick.addEventListener('click', () => {

  const amount = input.value;
  createBoxes(amount);
  
  input.value = '';
});

function createBoxes(amount) {

  const divElArray = [];
  let boxSize = 30;

  for (let i = 1; i <= amount; i += 1) {

    const divEl = document.createElement('div');
    divEl.style.width = `${boxSize}px`;
    divEl.style.height = `${boxSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    
    divElArray.push(divEl);
    
    boxSize += 10;
}

  boxes.append(...divElArray);
};

handleDestroyButtonClick.addEventListener('click', () => {

  destroyBoxes();
});

function destroyBoxes() {
  
  boxes.innerHTML = '';
};





// let boxSize = 0;

// handleCreateButtonClick.addEventListener('click', () => {
//   boxSize = 20;
//   boxes.innerHTML = '';

//   const amount = input.value;
//   createBoxes(amount);
// });

//   function createBoxes(amount) {
//   for (let i = 1; i <= amount; i += 1) {
      
//     boxSize += 10;

//     const newBoxTag = `<div style = "width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;

//     boxes.insertAdjacentHTML('beforeend', newBoxTag);
//   }
    
//   input.value = '';
// };

// handleDestroyButtonClick.addEventListener('click', () => {

//   destroyBoxes();
// });

// function destroyBoxes() {
  
//   boxes.innerHTML = '';
// };
