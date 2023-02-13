let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');

const incrementBtn = document.querySelector('[data-action="increment"]');

const value = document.querySelector('#value');

const decrementBtnClick = () => {
    
    counterValue -= 1;
    value.textContent = counterValue;
}

const incrementBtnClick = () => {
    
    counterValue += 1;    
    value.textContent = counterValue;
}
    
decrementBtn.addEventListener('click', decrementBtnClick);
incrementBtn.addEventListener('click', incrementBtnClick);
