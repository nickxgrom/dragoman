import languages from "./languages";

function generateOptions() {
    const targetSelect = document.getElementById("target-language");

    languages.forEach( language => {
        let option = document.createElement("option");
        option.value = language.code;
        option.innerText = language.name;
        targetSelect.appendChild(option);
    })

}

export default generateOptions;