const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    overlay.style.display = 'flex';
    document.body.classList.add('no-scroll');
});

  overlay.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target)) {
      overlay.style.display = 'none';
      document.body.classList.remove('no-scroll');
    }
});