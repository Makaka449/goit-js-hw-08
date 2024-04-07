const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    const input = document.querySelector('input[type="number"]');
    const count = parseInt(input.value);

    if (count < 1 || count > 100) {
        alert("Кількість елементів повинна бути від 1 до 100 включно!");
        return;
    }

    boxesContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
    }

    input.value = '';
}
function destroyBoxes() {
    boxesContainer.innerHTML = '';
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
}
