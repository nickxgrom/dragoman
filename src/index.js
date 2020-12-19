import translate from 'translate';
import { token }  from "../config.json"
translate.key = token;

const sourceInput = document.getElementById("source-input"),
    targetInput = document.getElementById("target-input"),
    translateBtn = document.querySelector(".translate-btn");

translateBtn.addEventListener("click", () => {
    translate(sourceInput.value, 'ru')
        .then( text => {
            targetInput.value = text;
        } )
        .catch( err => {
            console.log(err)
        } )
})
