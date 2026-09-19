const widthInput = document.getElementById('width');
const settInput = document.getElementById('sett');
const warpLengthInput = document.getElementById('warp-length');

const calculateButton = document.getElementById('calculate-button');
const clearButton = document.getElementById('clear-button');

const totalEnds = document.getElementById('total-ends');
const totalYards = document.getElementById('total-yards');
const calculatorError = document.getElementById('calculator-error');

const themeToggle = document.getElementById('theme-toggle');

const inputs = [
  widthInput,
  settInput,
  warpLengthInput
];

const formatNumber = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2
});


/* =========================================================
   CALCULATOR
   ========================================================= */

function calculateWarp() {
  const values = inputs.map((input) => Number(input.value));

  if (
    values.some(
      (value) =>
        !Number.isFinite(value) ||
        value <= 0
    )
  ) {
    totalEnds.textContent = '---';
    totalYards.textContent = '---';

    calculatorError.textContent =
      'Enter a value greater than 0 in all three fields.';

    return;
  }

  const [width, sett, warpLength] = values;

  const calculatedEnds = width * sett;
  const calculatedYards = calculatedEnds * warpLength;

  totalEnds.textContent =
    formatNumber.format(calculatedEnds);

  totalYards.textContent =
    formatNumber.format(calculatedYards);

  calculatorError.textContent = '';
}


/* =========================================================
   CLEAR
   ========================================================= */

function clearCalculator() {
  inputs.forEach((input) => {
    input.value = '';
  });

  totalEnds.textContent = '---';
  totalYards.textContent = '---';
  calculatorError.textContent = '';

  widthInput.focus();
}


/* =========================================================
   DARK MODE
   ========================================================= */

function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);

  themeToggle.setAttribute(
    'aria-pressed',
    String(isDark)
  );

  localStorage.setItem(
    'warp-calculator-theme',
    isDark ? 'dark' : 'light'
  );
}


function toggleTheme() {
  const isDark =
    document.body.classList.contains('dark-mode');

  setTheme(!isDark);
}


/* Restore saved setting */

const savedTheme =
  localStorage.getItem('warp-calculator-theme');

if (savedTheme === 'dark') {
  setTheme(true);
} else {
  setTheme(false);
}


/* =========================================================
   EVENTS
   ========================================================= */

calculateButton.addEventListener(
  'click',
  calculateWarp
);

clearButton.addEventListener(
  'click',
  clearCalculator
);

themeToggle.addEventListener(
  'click',
  toggleTheme
);

inputs.forEach((input) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      calculateWarp();
    }
  });
});