// DOM manipulation methods
let ele = document.getElementById('btn');
console.log(ele);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

// elemClass[0].style.background = 'yellow';
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn = document.getElementsByTagName("div");
console.log(tn);

createdElement1 = document.createElement("p");
createdElement1.innerText = "This is a created paragraph";
tn[0].appendChild(createdElement1);

createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement1);
// removeChild(element); removes an element

document.location;
document.title;
document.url;
document.scripts;
document.links;
document.forms;
document.images;

// Selecting using Query
sel = document.querySelector('.container');
console.log(sel);

sel = document.querySelectorAll('.container');
console.log(sel);
