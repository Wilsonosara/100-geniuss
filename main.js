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
  acc.addEventListener("click", function () {

    // Close other open FAQs (optional)
    accordions.forEach(item => {
      if (item !== this) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle current FAQ
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});


const words = ["Tech Professional", "Web Developer", "AI Engineer", "UI/UX Designer"];
let i = 0;

setInterval(() => {
  document.querySelector(".highlight").textContent = words[i];
  i = (i + 1) % words.length;
}, 2500);





