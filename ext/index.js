import translate from 'translate';
import { token }  from "../config.json"
import generateOptions from "./scripts/selectOptionGenerator"
translate.key = token;

generateOptions();

const sourceInput = document.getElementById("source-input"),
    targetInput = document.getElementById("target-input"),
    translateBtn = document.querySelector(".translate-btn"),
    switchLangBtn = document.querySelector(".switch-languages"),
    sourceLanguage = document.getElementById("source-language"),
    targetLanguage = document.getElementById("target-language");

sourceInput.value = window.localStorage.getItem('msgToTranslate');
sourceInput.focus();

sourceLanguage.addEventListener('change', (event) => {
    window.localStorage.setItem('sourceLang', event.target.value) })
targetLanguage.addEventListener('change', (event) => {
    window.localStorage.setItem('targetLang', event.target.value) })

translateBtn.addEventListener("click", () => { translationEvent() });
sourceInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        translationEvent();
        translateBtn.focus();
    }
})

switchLangBtn.onclick = () => {
    let srcLangSelectedId = sourceLanguage.selectedIndex
    sourceLanguage.selectedIndex = targetLanguage.selectedIndex
    targetLanguage.selectedIndex = srcLangSelectedId

    let sourceLang = window.localStorage.getItem('sourceLang')
    window.localStorage.setItem('sourceLang', window.localStorage.getItem('targetLang'))
    window.localStorage.setItem('targetLang', sourceLang)

    if (!sourceInput.value) {
        sourceInput.value = targetInput.value;
        translationEvent();
    }
}

targetInput.addEventListener("click", () => {
    if (targetInput.value) {
        targetInput.select();
        document.execCommand("copy");
        sourceInput.focus();
        const copyMsg = document.querySelector(".copy-message-success")
        copyMsg.classList.add("copy-message-success-visible")
        setTimeout(() => {
            copyMsg.classList.remove("copy-message-success-visible")
        }, 600)
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
