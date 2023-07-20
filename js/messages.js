'use strict';
const $messageText = document.querySelector('.messagesText');
let errorTextMessage;
let messagesSource;
let intervalText;
let permissFailButton = true;

messagesFetch();

async function messagesFetch() {
    messagesSource = await fetch("./appeal/messages.txt")
    .then(res => res.json())
    .catch(err => console.error(err))

    intervalText = setInterval(textComponent, 10000, messagesSource);
}

function textComponent(messages) {
    
    let textDisplay = errorTextMessage || messages[0][Math.floor(Math.random()*messages[0].length)]
    
    $messageText.classList.remove("hidden");
    $messageText.textContent = textDisplay;
    errorTextMessage = undefined;
    
    setTimeout(() => {
        $messageText.classList.add("messagesTextActive")
    },10)
    
    setTimeout(() => {
        $messageText.classList.remove("messagesTextActive")
    },2000)
    
    setTimeout(() => {
        $messageText.classList.add("hidden")
        permissFailButton = true;
    },2300)
}

export function failTextButton() {
    if(permissFailButton) {
        errorTextMessage = messagesSource[1][Math.floor(Math.random()*messagesSource[1].length)];

        $messageText.classList.add("hidden");
        $messageText.classList.remove("messagesTextActive");
        permissFailButton = false;
        setTimeout(()=> {
            clearInterval(intervalText)
            textComponent()
            intervalText = setInterval(textComponent, 10000, messagesSource);
        },300)
    }
}