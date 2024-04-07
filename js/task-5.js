const btn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color"); 

btn.addEventListener("click", handleButtonClick);

function handleButtonClick() {
    const colorRgb = getRandomHexColor();
    document.body.style.backgroundColor = colorRgb; 
    document.body.style.color = "white"; 
    colorSpan.textContent = colorRgb; 
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}
