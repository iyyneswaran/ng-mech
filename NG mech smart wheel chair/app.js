let index = 0;
const slides = document.querySelectorAll('.carousel img');
const totalSlides = slides.length;

function moveSlide(step) {
    index += step;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    document.querySelector('.carousel-inner').style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => moveSlide(1), 3000);


document.addEventListener("DOMContentLoaded", function () {
    let batteryLevel = document.getElementById("batteryLevel");
    let batteryText = document.getElementById("batteryText");

    let batteryPercentage = 30; // Set dummy battery percentage

    // Update Battery Color Dynamically
    if (batteryPercentage >= 60) {
        batteryLevel.style.background = "#28a745"; // Green
    } else if (batteryPercentage >= 30) {
        batteryLevel.style.background = "#ffc107"; // Yellow
    } else {
        batteryLevel.style.background = "#dc3545"; // Red
    }

    // Apply width based on percentage
    batteryLevel.style.width = batteryPercentage + "%";
    batteryText.innerText = batteryPercentage + "%";
});


// const up = document.getElementById("up").addEventListener("click", function () {
//     console.log("Up button clicked");
// });

const upBtn = document.querySelector(".up");
upBtn.addEventListener("click", runUp);
function runUp(event){
    console.log(event);
};


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.bottom-navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                let targetId = this.getAttribute("href").substring(1);
                let targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
