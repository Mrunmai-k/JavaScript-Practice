// Events in JavaScript

function clicked() {
    console.log("The button was clicked");
}

window.onload = function () {
    console.log("The document was loaded");
}

firstContainer.addEventListener('click', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked <b>";
    console.log("Clicked on container");
})

firstContainer.addEventListener('mouseover', function () {
    console.log("Mouse on container");
})

firstContainer.addEventListener('mouseout', function () {
    console.log("Mouse out of container");
})

let prevHTML = document.querySelectorAll('.container')[1].innerHTML
firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("mouse up when clicked on container");
})

firstContainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked <b>";
    console.log("mouse down when clicked on container");
})