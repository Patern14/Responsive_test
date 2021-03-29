console.log("JS connected");

let screenWidth = document.getElementById('screenWidth');
    screenWidth.innerText = window.innerWidth;
let screenHeight = document.getElementById('screenHeight');
    screenHeight.innerText = window.innerHeight;

window.addEventListener("resize", function() {
    screenWidth.innerText = window.innerWidth;
    screenHeight.innerText = window.innerHeight;
})

