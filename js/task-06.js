function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input`);
const createBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxesDiv = document.querySelector(`#boxes`)
let amount;

let box = ``;

createBtn.addEventListener(`click`, (event) => {
  if (1 <= input.value && input.value <= 100) {
    amount = input.value;
    createBoxes(amount);
    input.value = ``;
  } else {
    return alert (`the number is incorrect`);
  }
});

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i+=1) {
    box += `<div style= "background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
    size += 10;
  }  
  boxesDiv.innerHTML = box;
  box = ``;
}

destroyBtn.addEventListener(`click`, (event) => {
  destroyBoxes(event)
});

function destroyBoxes() {
boxesDiv.innerHTML = ``;
}

