window.addEventListener('load', (event) => {
  console.log('app.js is fully loaded');
});

function changeValue(inputValue) {
  const color = inputValue;
  const colorRange = document.getElementById(`${color}`).value;
  document.getElementById(`${color}R`).value = colorRange;
}

function changeColor() {
  const red = document.getElementById('red').value;
  const green = document.getElementById('green').value;
  const blue = document.getElementById('blue').value;
  const showColor = document.getElementById('show-color');
  showColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
