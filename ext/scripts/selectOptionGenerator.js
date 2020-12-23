import languages from "./languages";

function generateOptions() {
    const sourceSelect = document.getElementById("source-language"),
        targetSelect = document.getElementById("target-language");

    languages.forEach( language => {
        let sourceSelectOption = document.createElement("option");

        sourceSelectOption.value = language.code;
        sourceSelectOption.innerText = language.name;
        if (language.code === "en") {
            sourceSelectOption.selected = true;
        }

        let targetSelectOption = sourceSelectOption.cloneNode(true);
        if (language.code === "ru") {
            targetSelectOption.selected = true
        }

        sourceSelect.appendChild(sourceSelectOption)
        targetSelect.appendChild(targetSelectOption);
    })
}

export default generateOptions;