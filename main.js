
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
revealElements.forEach(el => observer.observe(el));

/* the form when u click enrol*/


function toggleForm() {
    const form = document.getElementById('enrollForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for enrolling! We will contact you soon.');
    event.target.reset();
    document.getElementById('enrollForm').style.display = 'none';
  }
 






