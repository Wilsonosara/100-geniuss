document.addEventListener('DOMContentLoaded', function () {
  const aboutLink = document.getElementById('about-link'); // Link/button in navbar
  const aboutSection = document.getElementById('about-us');

  if (aboutLink && aboutSection) {
    aboutLink.addEventListener('click', function (e) {
      e.preventDefault();
      aboutSection.classList.add('visible');
      // Optional: Scroll to About Section
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
});