const slides = document.querySelectorAll(".slideshow__slide");
const previousButton = document.querySelector(".left");
const nextButton = document.querySelector(".right");
let slideIndex = 0;
let lastSlide = slides.length - 1;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}
