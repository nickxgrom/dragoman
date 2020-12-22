import translate from 'translate';
import { token }  from "../config.json"
import generateOptions from "./scripts/selectOptionGenerator"
translate.key = token;

generateOptions();

const sourceInput = document.getElementById("source-input"),
    targetInput = document.getElementById("target-input"),
    translateBtn = document.querySelector(".translate-btn"),
    sourceLanguage = document.getElementById("source-language"),
    targetLanguage = document.getElementById("target-language");

translateBtn.addEventListener("click", () => { translationEvent() });
sourceInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        translationEvent();
        translateBtn.focus();
    }
})

function translationEvent() {
    translate( sourceInput.value, { from: sourceLanguage.value, to: targetLanguage.value, } )
        .then( text => {
            targetInput.value = text;
        } )
        .catch( err => {
            targetInput.value = err;
        } )
}
