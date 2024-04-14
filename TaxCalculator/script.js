// Getting references to DOM elements
const form = document.getElementById('tax-form');
const grossIncomeInput = document.getElementById('gross-income');
const extraIncomeInput = document.getElementById('extra-income');
const ageGroupSelect = document.getElementById('age-group');
const deductionsInput = document.getElementById('deductions');
const resultModal = document.getElementById('result-modal');
const resultText = document.getElementById('result-text');
const closeBtn = document.querySelector('.close-btn');
const errorIcons = document.querySelectorAll('.error-icon');

// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Preventing form submission
  calculateTax(); // Calling the calculateTax function
});

// Event listener for closing the result modal
closeBtn.addEventListener('click', () => {
  // Hiding the result modal and resetting input fields
  resultModal.style.display = 'none';
  grossIncomeInput.value = '';
  extraIncomeInput.value = '';
  ageGroupSelect.value = '';
  deductionsInput.value = '';
});

// Event listener to close the modal when clicked outside of it
window.addEventListener('click', (e) => {
  if (e.target === resultModal) {
    resultModal.style.display = 'none';
  }
});

// Function to validate input fields
function validateInput(input, errorIndex) {
  const value = input.value.trim();
  if (value === '' || isNaN(value)) {
    // Display error icon if input is empty or not a number
    errorIcons[errorIndex].style.display = 'inline-flex';
  } else {
    errorIcons[errorIndex].style.display = 'none'; // Hide error icon
  }
}

// Event listeners for input fields to validate input
grossIncomeInput.addEventListener("input", () => {
  validateInput(grossIncomeInput, 0);
});

extraIncomeInput.addEventListener("input", () => {
  validateInput(extraIncomeInput, 1);
});

deductionsInput.addEventListener("input", () => {
  validateInput(deductionsInput, 3);
});

// Function to calculate tax
function calculateTax() {
  const grossIncome = parseFloat(grossIncomeInput.value) || 0;
  const extraIncome = parseFloat(extraIncomeInput.value) || 0;
  const age = ageGroupSelect.value;
  const deductions = parseFloat(deductionsInput.value) || 0;  

  let taxRate;
  switch (age) {
    case '<40':
      taxRate = 30;
      errorIcons[2].style.display = 'none';
      break;
    case '≥40&<60':
      taxRate = 40;
      errorIcons[2].style.display = 'none';
      break;
    case '≥60':
      taxRate = 10;
      errorIcons[2].style.display = 'none';
      break;
    default:
      errorIcons[2].style.display = 'inline-flex';
      return;
  }

  const totalIncome = grossIncome + extraIncome - deductions;
  let taxAmount = 0;
  if (totalIncome > 800000) {
    taxAmount = ((totalIncome-800000)/100) * taxRate;
  }
  const overallIncome = totalIncome - taxAmount;
  displayResult(overallIncome.toFixed(2)); // Displaying the result
}

// Function to display result in modal
function displayResult(overallIncome) {
  resultText.textContent = overallIncome;
  resultModal.style.display = 'block';
}
