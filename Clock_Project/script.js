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

window.onload = function() {
    const clockContainer = document.getElementById("clock-container");
    const aboutSection = document.getElementById("about");

    aboutSection.style.display = "none"; // Hide the About section by default
    clockContainer.style.display = "block"; // Show the Clock container by default

    const aboutLink = document.getElementById("about-link");
    const clockLink = document.getElementById("clock-link");

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        aboutSection.style.display = "block";
        clockContainer.style.display = "none";
    });

    clockLink.addEventListener("click", function(event) {
        event.preventDefault();
        aboutSection.style.display = "none";
        clockContainer.style.display = "block";
    });
};

