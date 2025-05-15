// 1. Greeting based on time of day
function greetUser() {
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let greeting = 'Hello!';
  if (hour < 12) greeting = 'Good Morning! Welcome to CHAP CHAP Clothing.';
  else if (hour < 18) greeting = 'Good Afternoon! Welcome to CHAP CHAP Clothing.';
  else greeting = 'Good Evening! Welcome to CHAP CHAP Clothing.';

  greetingEl.textContent = greeting;
}

// 2. Toggle dark/light mode theme
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
  } else {
    body.classList.replace('light-mode', 'dark-mode');
  }
}

// 3. Contact form validation
function validateContactForm(event) {
  event.preventDefault();
  const form = event.target;

  const email = form.email.value.trim();
  const phone = form.phone.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{10,15}$/;

  let valid = true;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    valid = false;
  }
  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number (10-15 digits, optional +).');
    valid = false;
  }

  if (valid) {
    alert('Message submitted successfully!');
    form.reset();
  }
}

// 4. Show/hide project details dynamically
function toggleProjectDetails(event) {
  const target = event.target;
  if (target.classList.contains('toggle-details')) {
    const details = target.nextElementSibling;
    if (details.style.display === 'block') {
      details.style.display = 'none';
      target.textContent = 'Show Details';
    } else {
      details.style.display = 'block';
      target.textContent = 'Hide Details';
    }
  }
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', () => {
  greetUser();

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  const contactForm = document.getElementById('contactForm');  // Make sure this matches your form ID in contact.html
  if (contactForm) {
    contactForm.addEventListener('submit', validateContactForm);
  }

  document.body.addEventListener('click', toggleProjectDetails);
});

