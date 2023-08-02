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

// Arrow Functions syntax
// Normal function
function summ(a, b) {
    return a + b;
}
// arrow function
summ = (a, b) => {
    return a + b;
}

// SetTimeout and SetInterval
logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> setTimeout fired <b>";
    console.log("I am your log");
}
clr = setTimeout(logKaro, 2000);
// setTimeout returns the id and whenever you want to stop it just pass that id to clearTimeout()
clearTimeout(clr);

logKaro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b> setInterval fired <b>";
    console.log("I am your log");
}
clr = setInterval(logKaro, 2000);
// setInterval returns the id and whenever you want to stop it just pass that id to clearInterval()
// clearInterval(clr);