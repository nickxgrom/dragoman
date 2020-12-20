import translate from 'translate';
import { token }  from "../config.json"
import generateOptions from "./scripts/selectOptionGenerator"
translate.key = token;

generateOptions();

const sourceInput = document.getElementById("source-input"),
    targetInput = document.getElementById("target-input"),
    translateBtn = document.querySelector(".translate-btn"),
    targetLanguage = document.getElementById("target-language");

translateBtn.addEventListener("click", () => {
    translate(sourceInput.value, targetLanguage.value)
        .then( text => {
            targetInput.value = text;
        } )
        .catch( err => {
            console.log(err)
        } )
})
