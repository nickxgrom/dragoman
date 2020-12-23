document.onmouseup = () => {
    chrome.runtime.sendMessage({txt: document.getSelection().toString()});
    window.localStorage.setItem('msgToTranslate', message.txt);
}