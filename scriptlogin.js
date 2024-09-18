// script.js
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // You can add your authentication logic here
  // For example, you can check if the username and password match a hardcoded value
  if (username === 'admin' && password === 'password') {
    // Redirect to the Expense Tracker page
    window.location.href = 'expense-tracker.html';
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
});