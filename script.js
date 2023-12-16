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
  

  
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Push data to Firebase database
    database.ref("contacts").push().set({
      name: name,
      email: email,
      message: message
    }).then(() => {
      // Data has been sent to Firebase
      console.log("Data sent to Firebase!");
      // Optional: Show success message or redirect
    }).catch(error => {
      // Handle errors
      console.error("Error sending data:", error);
      // Optional: Show error message
    });
  });
