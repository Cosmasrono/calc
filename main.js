const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.btn-clear');
const equalBtn = document.querySelector('.btn-equal');

const buttons = document.querySelectorAll('.btn-grey, .btn-yellow');
let screenValue = '';

// Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.getAttribute('data-num');
    screenValue += buttonText;
    screen.value = screenValue;
  });
});

// Add click event listener to clear button
clearBtn.addEventListener('click', () => {
  screenValue = '';
  screen.value = screenValue;
});

// Add click event listener to equal button
equalBtn.addEventListener('click', () => {
  if (screenValue === '') {
    screen.value = '0';
  }    else {
    try {
      // Try to evaluate the expression
      let result = eval(screenValue);
      screen.value = result;
    } catch (e) {
      // If the expression is invalid, display an error message
      screen.value = 'Syntax Error';
    }
  }
});
