window.addEventListener('load', start);

const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

function start() {
  red.addEventListener('input', changeValue);
  red.addEventListener('input', changeColor);
  green.addEventListener('input', changeValue);
  green.addEventListener('input', changeColor);
  blue.addEventListener('input', changeValue);
  blue.addEventListener('input', changeColor);
}

function changeValue() {
  const redR = document.querySelector('#redR');
  const greenR = document.querySelector('#greenR');
  const blueR = document.querySelector('#blueR');
  redR.value = red.value;
  greenR.value = green.value;
  blueR.value = blue.value;
}

function changeColor() {
  const r = red.value;
  const g = green.value;
  const b = blue.value;
  const showColor = document.querySelector('#show-color');
  showColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
