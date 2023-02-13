const inputRange = document.querySelector('input[type="range"]');
const spanText = document.querySelector('span#text');

inputRange.addEventListener('input', event => spanText.style.fontSize = `${event.target.value}px`);
