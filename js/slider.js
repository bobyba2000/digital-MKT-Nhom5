const sliderRoot = document.querySelector('[data-slider]');

if (sliderRoot) {
  const slides = Array.from(sliderRoot.querySelectorAll('.slide'));
  const prevButton = sliderRoot.querySelector('[data-prev]');
  const nextButton = sliderRoot.querySelector('[data-next]');
  let current = 0;
  let autoplayTimer;

  const setActiveSlide = (index) => {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('is-active', idx === index);
    });
  };

  const goTo = (index) => {
    current = (index + slides.length) % slides.length;
    setActiveSlide(current);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer = setInterval(next, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
    }
  };

  prevButton?.addEventListener('click', () => {
    prev();
    startAutoplay();
  });

  nextButton?.addEventListener('click', () => {
    next();
    startAutoplay();
  });

  sliderRoot.addEventListener('mouseenter', stopAutoplay);
  sliderRoot.addEventListener('mouseleave', startAutoplay);

  setActiveSlide(current);
  startAutoplay();
}
