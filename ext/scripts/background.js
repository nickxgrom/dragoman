chrome.runtime.onMessage.addListener(
    function(message) {
        window.localStorage.setItem('msgToTranslate', message.txt);
    }
);

