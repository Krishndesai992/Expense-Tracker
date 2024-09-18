// script.js

const addExpenseForm = document.getElementById('add-expense-form');
const expensesListUl = document.getElementById('expenses-list-ul');

addExpenseForm.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent the form from submitting and reloading the page

  const descriptionInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');
  const dateInput = document.getElementById('date');

  const description = descriptionInput.value;
  const amount = amountInput.value;
  const date = dateInput.value;

  if (description && amount && date) {
    const expenseListItem = document.createElement('li');
    expenseListItem.textContent = `Description: ${description}, Amount: ${amount}, Date: ${date}`;
    expensesListUl.appendChild(expenseListItem);

    // clear the form inputs
    descriptionInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
  } else {
    alert('Please fill in all the fields!');
  }
});