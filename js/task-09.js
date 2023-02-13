function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// console.log(getRandomHexColor());

const body = document.querySelector('body');

const button = document.querySelector('button.change-color');

const span = document.querySelector('span.color');

button.addEventListener('click', () => {
  const bgColor = getRandomHexColor()
  body.style.backgroundColor = bgColor;
  span.textContent = bgColor;
});
