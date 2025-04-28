const container = document.querySelector('.container');
const themeSwitcher = document.getElementById('themeSwitcher');
const display = document.getElementById('display');

let currentInput = '';

themeSwitcher.addEventListener('click', () => {
  const newTheme = container.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  container.setAttribute('data-theme', newTheme);
});

function append(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput.replace(/mod/g, '%'));
    if (currentInput === '' && operator !== '.') return;
    currentInput = Number.isInteger(result) ? result.toString() : result.toFixed(2);
    display.textContent = currentInput;
  } catch {
    display.textContent = 'Erro';
    currentInput = '';
  }
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '';
}
