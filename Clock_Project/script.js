const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString(undefined, options);
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const time = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('time').innerHTML = time + "<br>on " + date;
}

setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded",function() {
    const aboutLink = document.getElementById("about-link");
    const aboutSection = document.getElementById("about");

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        aboutSection.classList.toggle("show");
    });
});
