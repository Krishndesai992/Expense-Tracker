// scriptregister.js

// Get the form elements
const form = document.getElementById('register-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const registerButton = document.getElementById('register-btn');
const errorMessage = document.getElementById('error-message');

// Add event listener to the form
registerButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the input values
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Validate the input values
  if (username === '') {
    errorMessage.textContent = 'Username is required';
    return;
  }

  if (email === '') {
    errorMessage.textContent = 'Email is required';
    return;
  }

  if (password === '') {
    errorMessage.textContent = 'Password is required';
    return;
  }

  if (confirmPassword === '') {
    errorMessage.textContent = 'Confirm password is required';
    return;
  }

  if (password.length < 8) {
    errorMessage.textContent = 'Password must be at least 8 characters long';
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = 'Passwords do not match';
    return;
  }

  // Create a FormData object
  const formData = new FormData(form);

  // Send the data to the server (e.g., using fetch API)
  fetch('register.php', {
    method: 'POST',
    body: formData
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      // Registration successful, redirect to login page
      window.location.href = '/login';
    } else {
      errorMessage.textContent = data.message;
    }
  })
  .catch((error) => {
    console.error(error);
    errorMessage.textContent = 'An error occurred, please try again';
  });
});