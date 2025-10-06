function toggleForm() {
  const form = document.getElementById('enrollForm');
  form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function handleSubmit(event) {
  event.preventDefault();
  alert("Enrollment submitted successfully!");
}