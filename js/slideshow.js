const slides = document.querySelectorAll(".slideshow__slide");
const previousButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");
let slideIndex = 0;
let lastSlide = slides.length - 1;

previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    previousSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  } else {
    return;
  }
});

// Initializing the first slide after DOM content is loaded
const initializeSlide = () => {
  if (slides.length > 0) {
    document.addEventListener("DOMContentLoaded", showSlide(slideIndex));
  }
};
initializeSlide();

// Showing curent slide
function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}
// Previous slide function
function previousSlide() {
  if (slideIndex <= 0) {
    slideIndex = lastSlide;
  } else {
    slideIndex--;
  }
  showSlide(slideIndex);
}
// Next slide function
function nextSlide() {
  if (slideIndex >= lastSlide) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide(slideIndex);
}
