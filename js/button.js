'use strict';
import {$, $theButton, $theButtonBody, $showPercentaje, $maxValueFail, $musicButton, $maxValueButton} from "./main.js"

let valueButton = 0;
let safePercentage = 100;
let maxValueButton = 0;

$theButton.addEventListener("mousedown", () => moveDown())
$theButton.addEventListener("mouseup", () => moveUp())
$theButton.addEventListener("touchstart", () => moveDown())

window.addEventListener("keydown", (e) => {
    if (e.key == "Enter" || e.key == " ") {
        moveDown()
    }
})
window.addEventListener("keyup", (e) => {
    if (e.key == "Enter" || e.key == " ") {
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

    const clickAudio = new Audio("./media/clickTheButton.mp3");
    clickAudio.play();
}

function calculateError(val) {
    let errorValue = Math.floor(Math.random() * 100);

    if (errorValue > safePercentage) {
        safePercentage = 100;
        $maxValueFail.innerHTML = /*Html*/ `
            El valor después del increíble fallo fue de
            <span class= "text-red-700 font-bold">${val}</span>
        `;

        if (val > maxValueButton) {
            maxValueButton = val;
            $maxValueButton.innerHTML =  /*Html*/ `
                Máximo alcanzado : 
                <span class= "text-green-700 font-bold">${maxValueButton}</span>
            `;
        };

        const errorButton = new Audio("./media/errorTheButton.mp3");
        errorButton.play();
        return (0)
    };

    safePercentage-= 1;
    return(val+= 1)
}

window.addEventListener("click", () => {
    $musicButton.volume = 0.2
    $musicButton.play()
});
