const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
setInterval(() => {
  slides[slideIndex].classList.remove('is-active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('is-active');
}, 5200);

const targetDate = new Date('2026-12-10T09:00:00+03:00').getTime();
const ids = ['days', 'hours', 'minutes', 'seconds'];
function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;
  if (diff <= 0) {
    ids.forEach(id => document.getElementById(id).textContent = '00');
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
