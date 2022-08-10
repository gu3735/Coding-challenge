// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeInput = document.querySelector(".jsRange");
const h2Span = document.querySelector("h2 span");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const winOrLose = document.querySelector(".winOrLose");


function hadnleChange(event) {
    let maxValue = event.srcElement.value;
    rangeInput.value = maxValue;
    h2Span.innerText = maxValue;
}

function handleSubmit(event) {
    const comValue = Math.floor(Math.random() * (rangeInput.value-1) +1);
    const userValue = guessField.value;
    result.innerText = comValue;
    
    if (String(comValue) === userValue){
        winOrLose.innerText = "ㅊㅋㅊㅋ";
        guessSubmit.disabled='disabled';
    } else {
        winOrLose.innerText = "ㄲㅂㄲㅂ";
    };


}

function init() {
}

init();

rangeInput.addEventListener("input", hadnleChange);
guessSubmit.addEventListener("click", handleSubmit);