// ===== SLIDER =====
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.querySelector(".next").addEventListener("click", () => changeSlide(1));
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");
  document.querySelector(".slider").style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide every 6s
setInterval(() => changeSlide(1), 6000);

// ===== MULTILINGUE =====
const langBtns = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-lang-sw]");

langBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    translatableElements.forEach(el => {
      el.textContent = el.getAttribute(`data-lang-${lang}`);
    });
  });
});