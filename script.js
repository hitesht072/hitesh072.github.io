const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', (e) => {
    const hash = link.getAttribute('href');
    if (hash && hash.startsWith('#') && hash.length > 1) {
      e.preventDefault();
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
        }
      }
    }
  });
}

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks for reaching out! This demo page does not send messages right now.');
    form.reset();
  });
}
