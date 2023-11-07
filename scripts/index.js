
let zoomLevel = 1.0;

function themeSwitcher() {
    document.body.classList.toggle('darkTheme');
    document.body.classList.toggle('lightTheme');

    const className = document.body.className;
    if(className == "lightTheme") {
        this.textContent = "Dark Theme";
    } else {
        this.textContent = "Light Theme";
    }

    console.log('current theme class: ' + className);
}

// function graphicalZoom(key) {
//     if (key.code == '=') {
//         zoomLevel += 0.1;

//     }
// }

// function graphicalZoomEnabler() {
//     document.addEventListener('keydown', graphicalZoom)
// }

/*
Upon loading the page, will set the click event listener for the theme button.
*/
$(document).ready(function() {
    console.log(navigator.userAgent);
    document.querySelector('#themeButton').addEventListener('click', themeSwitcher);
    // document.querySelector('#zoomButton').addEventListener('click', graphicalZoomEnabler);
});