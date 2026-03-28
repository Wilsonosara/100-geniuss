document.addEventListener("DOMContentLoaded", () => {

    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
    const navbarLinks = document.querySelectorAll(".navbar a");

    // MOBILE MENU
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");

        navbarLinks.forEach((link, index) => {
            if (navbar.classList.contains("active")) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                link.style.animation = "";
            }
        });
    });

    // REVEAL ANIMATION
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });
    revealElements.forEach(el => observer.observe(el));

    // FORM TOGGLE
    window.toggleForm = function () {
        const form = document.getElementById("enrollForm");
        form.style.display = form.style.display === "block" ? "none" : "block";
    };

    // FORM SUBMIT
    window.handleSubmit = function (e) {
        e.preventDefault();
        alert("Thank you for enrolling! We'll contact you shortly.");
        e.target.reset();
        document.getElementById("enrollForm").style.display = "none";
    };

    // PRELOADER
    window.addEventListener("load", () => {
        const preloader = document.getElementById("preloader");
        setTimeout(() => {
            preloader.classList.add("preloader-hide");
        }, 800);
    });

});


const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
    const panel = acc.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
  });
});