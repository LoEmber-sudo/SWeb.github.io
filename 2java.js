
let currentIndex2 = 0;
const slides2 = document.querySelectorAll(".slide2");
const dots2 = document.querySelectorAll(".dot2");

function updateSlider2() {
    slides2.forEach((slide2, index) => {
        slide2.classList.toggle("active", index === currentIndex2);
        dots2[index].classList.toggle("active", index === currentIndex2);
    });
}

function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % slides2.length;
    updateSlider2();
    resetInterval2();
}

function prevSlide2() {
    currentIndex2 = (currentIndex2 - 1 + slides2.length) % slides2.length;
    updateSlider2();
    resetInterval2();
}

function setSlide2(index) {
    currentIndex2 = index;
    updateSlider2();
    resetInterval2();
}

let interval2 = setInterval(nextSlide2, 3000);
updateSlider2();

function resetInterval2() {
    clearInterval(interval2);
    interval2 = setInterval(nextSlide2, 3000);
}
