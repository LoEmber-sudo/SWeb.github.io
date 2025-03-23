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
