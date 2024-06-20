const slides = document.querySelectorAll(".slideshow__slide");
const previousButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");
let slideIndex = 0;
let lastSlide = slides.length - 1;

previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

console.log(slides);

const initializeSlide = () => {
  if (slides.length > 0) {
    document.addEventListener("DOMContentLoaded", showSlide(slideIndex));
  }
};
initializeSlide();

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

function previousSlide() {
  if (slideIndex <= 0) {
    slideIndex = lastSlide;
  } else {
    slideIndex--;
  }
  showSlide(slideIndex);
  console.log(slideIndex);
}

function nextSlide() {
  if (slideIndex >= lastSlide) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide(slideIndex);
  console.log(slideIndex);
}
