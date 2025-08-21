// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Initialize Swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 5,     // shows 2 full slides + half of next
    spaceBetween: 5,        // space between slides
    loop: true,              // infinite loop
    centeredSlides: false,   // keep slides left-aligned
    mousewheel: true,        // scroll with wheel
    speed: 450               // transition speed in ms
  });
}); // <-- closing DOMContentLoaded listener

document.querySelectorAll('.project-card a').forEach(link => {
  link.addEventListener('click', e => {
    e.stopPropagation(); // stops Swiper swipe from interfering
  });
});
