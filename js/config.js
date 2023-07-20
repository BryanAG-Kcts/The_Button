import {$, $body, $mainDisplayGame, $showPercentaje, $maxValueButton, $maxValueFail, $theButton, $theButtonBody} from "./main.js"

const $userConfig = $('.userConfig');
const $modalContainer = $('.modalContainer');
const $modalConfig = $('.modalConfig');
const $modalConfigSubGrid = $('.modalConfigSubGrid');
const $modalConfigSubFlex = $('.modalConfigSubFlex');

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

    //Colores del botón
    $$modalOptionsContainer[0].addEventListener("click", () => buttonColorOptions(infoModal[1]))
    //Modo oscuro
    $$modalOptionsContainer[1].addEventListener("click", () => $body.classList.toggle("bodyDarkMode"))
    //Ocultar - Mostrar Porcentaje
    $$modalOptionsContainer[2].addEventListener("click", () => toggleVisibleElement($showPercentaje))

    //Ocultar - Mostrar Máximo
    $$modalOptionsContainer[3].addEventListener("click", () => toggleVisibleElement($maxValueButton))

    //Ocultar - Mostrar fallo actual
    $$modalOptionsContainer[4].addEventListener("click", () => toggleVisibleElement($maxValueFail))

    //Créditos
    $$modalOptionsContainer[5].addEventListener("click", () => showCredits(infoModal[2]))

    //atrás
    $$modalOptionsContainer[6].addEventListener("click", () => toggleVisibleConfig())
}

$userConfig.addEventListener("click", () => toggleVisibleConfig())

function buttonColorOptions(colorObject) {
    let template = "";
    for (let i = 0; i < colorObject.length; i++) {
        template += /*html*/ `
        
            <span class="colorButtonOptions h-10 w-10 border-4 z-10 rounded-full" 
            style="background: var(${colorObject[i].lightColor}); border-color : var(${colorObject[i].darkColor})"></span>
        `
    }

    smoothGrid(template, true);
    
    setTimeout(() => {
        const $$colorButtonOptions = document.querySelectorAll('.colorButtonOptions');
        for (let i = 0; i < $$colorButtonOptions.length; i++) {
            $$colorButtonOptions[i].addEventListener("click", () => buttonChangeColor(colorObject[i]))
        }
    }, 310);
    
}

function buttonChangeColor(colorButton) {
    const buttonSelectColor = new Audio("./media/selection.mp3")
    buttonSelectColor.play();

    $theButton.style.setProperty("--base-Color", `var(${colorButton.darkColor})`);
    $theButton.style.setProperty("--body-Color", `var(${colorButton.lightColor})`);
}

function toggleVisibleElement($element) {
    $element.classList.toggle("invisible");
}

function showCredits(credits) {
    let template = "";

    for (let i = 0; i < credits.length; i++) {
        template += /*html*/ `
        
            <a class="sm:flex justify-between" href="${credits[i].link}" rel="noopenner noreferrer" target="_blank">
                ${credits[i].name} :
                <p class="text-blue-700">${credits[i].desc}</p>
            </a>
        `
    }

    smoothGrid(template, false);
}

function smoothGrid(template, boolean) {
    $modalConfigSubGrid.style.removeProperty("--grid-Row");

    setTimeout(()=> {
        
        if(boolean) {
            $modalConfigSubFlex.classList.remove("flex-col");
            $modalConfigSubFlex.classList.add("flex-wrap");

        }else {
            $modalConfigSubFlex.classList.add("flex-col");
            $modalConfigSubFlex.classList.remove("flex-wrap");

        }

        $modalConfigSubFlex.innerHTML = template;
        $modalConfigSubGrid.style.setProperty("--grid-Row", "1fr");
    }, 310)
}

function toggleVisibleConfig() {
    const clickAudio = new Audio("./media/pop.mp3");
    clickAudio.play();

    $modalContainer.classList.toggle("hidden");
    $modalContainer.classList.toggle("flex");
    $mainDisplayGame.classList.toggle("invisible");

    setTimeout(() => {
        $modalConfig.classList.toggle("scale-0");
        $modalConfig.classList.toggle("scale-100"); 
    },10)
}

infoConfig()