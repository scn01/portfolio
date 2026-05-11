// SCROLL-TRIGGERED FADE-INS + SKILL BAR ANIMATION
const scrollObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.skill-bar-fill').forEach(function (bar) {
        bar.style.width = bar.dataset.w + '%';
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(function (el) {
  scrollObserver.observe(el);
});

// Trigger bars already in view on page load
document.querySelectorAll('.skill-bar-fill').forEach(function (bar) {
  const rect = bar.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    bar.style.width = bar.dataset.w + '%';
  }
});

// MOBILE NAV TOGGLE
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('open');
});

// TYPING EFFECT on hero prompt
(function () {
  const prompt = document.querySelector('.hero-prompt');
  const text = 'INITIALIZING PORTFOLIO...';
  prompt.textContent = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      prompt.textContent += text[i++];
      setTimeout(type, 55);
    }
  }

  setTimeout(type, 400);
})();
