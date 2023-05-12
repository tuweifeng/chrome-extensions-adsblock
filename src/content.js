
import $ from 'jquery'

let top_window = window.top || window;



function patch() {
    console.log("try patch");
    try {
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = chrome.extension.getURL('assets/css/styles.css');
        (document.head || document.documentElement).appendChild(style);
    }
    catch (err) {
        setTimeout(() => { patch() }, 1000)
    }

}


window.addEventListener("hashchange", function (e) {
    console.log("hashchange", window.location.href)
    setTimeout(() => { patch() }, 1000)
})

patch()