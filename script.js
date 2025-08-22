const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,       // default visible slides
    spaceBetween: 15,
    loop: true,
    loopAdditionalSlides: 3, // extra cloned slides to avoid blank
    centeredSlides: false,
    mousewheel: true,
    speed: 450,
    grabCursor: true,
    breakpoints: {
      1024: { slidesPerView: 3, spaceBetween: 15 },
      768: { slidesPerView: 2, spaceBetween: 10 },
      480: { slidesPerView: 1, spaceBetween: 5 },
    }
  });

  document.querySelectorAll('.project-card a').forEach(link => {
    link.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
});




