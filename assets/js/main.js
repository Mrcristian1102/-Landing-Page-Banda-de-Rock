// Update year in footer
const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Hamburger menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav__list");

if (menuToggle) {
    menuToggle.addEventListener("click", function() {
        navList.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav__list a");
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navList.classList.remove("active");
        menuToggle.classList.remove("active");
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Buy button functionality
const buyButtons = document.querySelectorAll(".events-table button");
buyButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        const row = this.closest("tr");
        const city = row.cells[1].innerText;
        alert(`Thank you! You selected tickets for ${city}. Redirecting to payment...`);
    });
});