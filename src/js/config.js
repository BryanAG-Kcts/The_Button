import {$, $body, $mainDisplayGame, $showPercentaje, $maxValueButton, $maxValueFail} from "./main.js"

const $userConfig = $('.userConfig');
const $modalContainer = $('.modalContainer');
const $modalConfig = $('.modalConfig');
const $modalConfigSub = $('.modalConfigSub');

async function infoConfig() {
    const infoModalConfig = await fetch("./appeal/config.txt")
    .then(res => res.json())
    .catch(() => ["Noitems:("])

    modalComponent(infoModalConfig);
    $userConfig.classList.remove("pointer-events-none")
}

function modalComponent(infoModal) {
    let template = "";

    for(let i = 0; i < infoModal[0].length; i++) {
        template += /*html*/ `
        
            <div class="modalOptionsContainer flex justify-between text-sm sm:text-base select-none">
                <span class="flex gap-4 items-center">
                    <span class="h-2 w-2 rounded-full bg-black opacity-0 duration-100"></span>
                    <p class="cursor-pointer">${infoModal[0][i]}</p>
                </span>
            </div>
        `
    }

    $modalConfig.insertAdjacentHTML("beforeend", template);
    const $$modalOptionsContainer = document.querySelectorAll(".modalOptionsContainer");

    //Modo oscuro
    $$modalOptionsContainer[1].addEventListener("click", () => $body.classList.toggle("bodyDarkMode"))
    //Ocultar - Mostrar Porcentaje
    $$modalOptionsContainer[2].addEventListener("click", () => toggleVisibleElement($showPercentaje))

    //Ocultar - Mostrar Máximo
    $$modalOptionsContainer[3].addEventListener("click", () => toggleVisibleElement($maxValueButton))

    //Ocultar - Mostrar fallo actual
    $$modalOptionsContainer[4].addEventListener("click", () => toggleVisibleElement($maxValueFail))

    //atrás
    $$modalOptionsContainer[7].addEventListener("click", () => toggleVisibleConfig())
}

$userConfig.addEventListener("click", () => toggleVisibleConfig())

function toggleVisibleElement($element) {
    $element.classList.toggle("invisible");
}

function toggleVisibleConfig() {
    const clickAudio = new Audio("./media/pop.mp3");
    clickAudio.play();

    $modalContainer.classList.toggle("hidden");
    $mainDisplayGame.classList.toggle("invisible")

    setTimeout(() => {
        $modalConfig.classList.toggle("scale-0")
        $modalConfig.classList.toggle("scale-100"); 
    },10)
}

infoConfig()