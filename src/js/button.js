'use strict';
import {$theButton, $theButtonBody, $showPercentaje, $maxValueFail} from "./main.js"

let valueButton = 0;
let safePercentage = 100;

$theButton.addEventListener("mousedown", () => moveDown())
$theButton.addEventListener("mouseup", () => moveUp())

$theButton.addEventListener("touchstart", () => moveDown())
$theButton.addEventListener("touchend", () => moveUp())

window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        moveDown()
    }
})
window.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        moveUp()
    }
})


function moveDown() {
    $theButtonBody.classList.add("top-0");
    $theButtonBody.classList.remove("-top-5");
}

function moveUp() {
    $theButtonBody.classList.remove("top-0");
    $theButtonBody.classList.add("-top-5");

    valueButton = calculateError(valueButton)
    $theButtonBody.textContent = valueButton;
    $showPercentaje.textContent = safePercentage + '%'
}

function calculateError(val) {
    let errorValue = Math.floor(Math.random() * 100);

    if (errorValue > safePercentage) {
        safePercentage = 100;
        $maxValueFail.innerHTML = /*Html*/ `
            El valor después del increíble fallo fue de

            <span class= "text-red-700 font-bold">${val}</span>
        `;
        return (0)
    };

    safePercentage-= 1;
    return(val+= 1)
}