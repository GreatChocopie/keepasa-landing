var toggleSwitch = document.querySelector(".switch-input");
var body = document.querySelector("body");

function switchTheme(e) {
    if (e.target.checked) {
        body.classList.add("white");
    }
    else {
        body.classList.remove("white");
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);