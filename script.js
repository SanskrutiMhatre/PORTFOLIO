const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const typed = new Typed('.typed-text', {
    strings: ['Designer','Developer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });
  
