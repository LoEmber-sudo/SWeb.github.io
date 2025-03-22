let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentIndex);
        dots[index].classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    resetInterval();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    resetInterval();
}

function setSlide(index) {
    currentIndex = index;
    updateSlider();
    resetInterval();
}
let interval = setInterval(nextSlide, 3000);
updateSlider();

function resetInterval() {
    clearInterval(interval); // Clear the current interval
    interval = setInterval(nextSlide, 3000); // Set the interval again
}


let inactiveTime = 0; // Track inactive time in seconds
const maxInactiveTime = 20 * 60; // 20 minutes in seconds

// Function to generate random positions
function getRandomPosition() {
    const x = Math.random() * window.innerWidth;  // Random X within viewport width
    const y = Math.random() * window.innerHeight; // Random Y within viewport height
    return { x, y };
}
function getRandomRotation() {
    return Math.floor(Math.random() * 360) + "deg";
}

// Function to add an image at a random position
function addRandomImage() {
    const img = document.createElement("img");
    img.src = "nyul_mutogat2.png"; // Replace with your image file
    img.style.position = "absolute";
    img.style.width = "277px"; // Adjust size as needed
    img.style.height = "182px";
    
    const position = getRandomPosition();
    img.style.left = `${position.x}px`;
    img.style.top = `${position.y}px`;
	const rotation = getRandomRotation();
    img.style.transform = `rotate(${rotation})`

    document.body.appendChild(img);
}

// Function to check inactivity every second
function checkInactivity() {
    inactiveTime++;

    if (inactiveTime >= maxInactiveTime) {
        // If 20 minutes pass, start adding images every 10 seconds
        setInterval(addRandomImage, 10000);
    }
}

// Reset inactivity timer when user interacts
function resetTimer() {
    inactiveTime = 0;
}

// Listen for user activity
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
document.addEventListener("click", resetTimer);

// Start checking inactivity every second
setInterval(checkInactivity, 1000);
