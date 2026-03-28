const form = document.getElementById('enrollForm');
const inputs = form.querySelectorAll('input, select, textarea');
const progressBar = document.getElementById('progressBar');
const submitBtn = document.getElementById('submitBtn');

/* Progress bar update */
function updateProgress() {
  let filled = 0;
  inputs.forEach(input => {
    if (input.value.trim() !== '') filled++;
  });
  const percent = (filled / inputs.length) * 100;
  progressBar.style.width = percent + '%';
}

inputs.forEach(input => {
  input.addEventListener('input', updateProgress);
});

/* Form submission */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Animation start
  submitBtn.innerText = 'Submitting...';
  submitBtn.style.opacity = '0.7';

  // Collect data from form
  const formData = new FormData(form);
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    program: formData.get("program"),
    goals: formData.get("goals"),
  };

  console.log("Form data being sent:", data); // Debug: check data in console

  try {
    // Send data to Google Sheets
    const response = await fetch("https://script.google.com/macros/s/AKfycbymS_hLBMRGTHW0jdY3up7fjusDTbUTz7UY53e6Td6fLEkfEhcLHOO7bNAUaVrae93r/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.status === "success") {
      // Success animation
      submitBtn.innerText = 'Application Submitted ✅';
      submitBtn.style.background = '#22c55e';
      form.reset();
      progressBar.style.width = '0%';
    } else {
      submitBtn.innerText = 'Error ❌';
      console.error("Submission failed:", result);
    }

  } catch (error) {
    console.error("Error sending data:", error);
    submitBtn.innerText = 'Error ❌';
  }
});

/* Menu toggle */
const menuIcon = document.getElementById("menu-icon");
const navbars = document.querySelectorAll(".navbar");

menuIcon.addEventListener("click", () => {
  navbars.forEach(nav => nav.classList.toggle("active"));
});

navbars.forEach(nav => {
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navbars.forEach(nav => nav.classList.remove("active"));
    });
  });
});