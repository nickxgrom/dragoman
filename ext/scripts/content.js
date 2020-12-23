document.onmouseup = () => {
    chrome.runtime.sendMessage({txt: document.getSelection().toString()});
}