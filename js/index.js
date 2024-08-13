 // Toggle the navigation menu on small screens
 document.getElementById('hamburgerMenu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav ul');
    navLinks.classList.toggle('open');
});