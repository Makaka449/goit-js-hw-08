const inputEl = document.querySelector("#name-input")
const nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", handelInput)

function handelInput(event) {
  const newName = event.target.value;
  nameOutputEl.textContent = newName.trim() ? newName : "Anonymous";
}