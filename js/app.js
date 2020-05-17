window.addEventListener('load', (event) => {
  console.log('app.js is fully loaded');
});

function changeValue(inputValue) {
  const color = inputValue;
  const colorRange = document.querySelector(`#${color}`).value;
  document.querySelector(`#${color}R`).value = colorRange;
}

function changeColor() {
  const red = document.querySelector('#red').value;
  const green = document.querySelector('#green').value;
  const blue = document.querySelector('#blue').value;
  const showColor = document.querySelector('#show-color');
  showColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
