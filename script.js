
 // =========================================================
 // ELEMENTS
 // =========================================================

 // Main calculator

 const widthInput = document.getElementById('width');
 const settInput = document.getElementById('sett');
 const warpLengthInput = document.getElementById('warp-length');

 const calculateButton = document.getElementById('calculate-button');
 const clearButton = document.getElementById('clear-button');

 const totalEnds = document.getElementById('total-ends');
 const totalYards = document.getElementById('total-yards');

 const endsMath = document.getElementById('ends-math');
 const yardsMath = document.getElementById('yards-math');
 const calculatorError = document.getElementById('calculator-error');


 // Reed compatibility calculator

 const desiredSettInput = document.getElementById('desired-sett');
 const reedSizeInput = document.getElementById('reed-size');

 const reedCalculateButton = document.getElementById('reed-calculate-button');
 const reedClearButton = document.getElementById('reed-clear-button');

 const reedResultText = document.getElementById('reed-result-text');
 const reedMath = document.getElementById('reed-math');
 const reedHelperError = document.getElementById('reed-helper-error');


 // =========================================================
 // SHARED SETTINGS
 // =========================================================

 const inputs = [widthInput, settInput, warpLengthInput];
 const reedInputs = [desiredSettInput, reedSizeInput];

 const formatNumber = new Intl.NumberFormat('en-US', {
   maximumFractionDigits: 2
 });


 // =========================================================
 // MAIN CALCULATOR
 // =========================================================

 function calculateWarp() {
   const width = Number(widthInput.value);
   const sett = Number(settInput.value);
   const warpLength = Number(warpLengthInput.value);

   // Validate inputs

   if (
     inputs.some((input) => input.value.trim() === '') ||
     !Number.isFinite(width) ||
     !Number.isFinite(sett) ||
     !Number.isFinite(warpLength) ||
     width <= 0 ||
     sett <= 0 ||
     warpLength <= 0
   ) {
     totalEnds.textContent = '---';
     totalYards.textContent = '---';

     endsMath.textContent = 'width × sett';
     yardsMath.textContent = 'total ends × warp length';

     calculatorError.textContent =
       'Enter a value greater than 0 in all three fields.';

     return;
   }

   // Calculate warp requirements

   const calculatedEnds = width * sett;
   const calculatedYards = calculatedEnds * warpLength;

   // Display results

   totalEnds.textContent = formatNumber.format(calculatedEnds);
   totalYards.textContent = formatNumber.format(calculatedYards);

   endsMath.textContent =
     `${formatNumber.format(width)} × ${formatNumber.format(sett)} = ` +
     `${formatNumber.format(calculatedEnds)} ends`;

   yardsMath.textContent =
     `${formatNumber.format(calculatedEnds)} × ${formatNumber.format(warpLength)} = ` +
     `${formatNumber.format(calculatedYards)} yards`;

   calculatorError.textContent = '';
 }


 // =========================================================
 // CLEAR MAIN CALCULATOR
 // =========================================================

 function clearCalculator() {
   inputs.forEach((input) => {
     input.value = '';
   });

   totalEnds.textContent = '---';
   totalYards.textContent = '---';

   endsMath.textContent = 'width × sett';
   yardsMath.textContent = 'total ends × warp length';

   calculatorError.textContent = '';
 }


 // =========================================================
 // REED COMPATIBILITY CALCULATOR
 // =========================================================

 function calculateReed() {
   const desiredSett = Number(desiredSettInput.value);
   const reedSize = Number(reedSizeInput.value);

   // Validate inputs

   if (
     reedInputs.some((input) => input.value.trim() === '') ||
     !Number.isFinite(desiredSett) ||
     !Number.isFinite(reedSize) ||
     desiredSett <= 0 ||
     reedSize <= 0
   ) {
     reedResultText.textContent = '---';
     reedMath.textContent = 'desired sett ÷ reed size';

     reedHelperError.textContent =
       'Enter a value greater than 0 in both fields.';

     return;
   }

   // Calculate average ends per dent

   const endsPerDent = desiredSett / reedSize;

   // Display results

   reedResultText.textContent =
     `${formatNumber.format(endsPerDent)} ends per dent`;

   reedMath.textContent =
     `${formatNumber.format(desiredSett)} EPI ÷ ` +
     `${formatNumber.format(reedSize)} DPI = ` +
     `${formatNumber.format(endsPerDent)}`;

   reedHelperError.textContent = '';
 }


 // =========================================================
 // CLEAR REED CALCULATOR
 // =========================================================

 function clearReed() {
   reedInputs.forEach((input) => {
     input.value = '';
   });

   reedResultText.textContent = '---';
   reedMath.textContent = 'desired sett ÷ reed size';

   reedHelperError.textContent = '';
 }


 // =========================================================
 // CALCULATOR EVENTS
 // =========================================================

 // Main calculator buttons

 calculateButton.addEventListener('click', calculateWarp);
 clearButton.addEventListener('click', clearCalculator);

 // Reed calculator buttons

 reedCalculateButton.addEventListener('click', calculateReed);
 reedClearButton.addEventListener('click', clearReed);

 // Press Enter to calculate

 inputs.forEach((input) => {
   input.addEventListener('keydown', (event) => {
     if (event.key === 'Enter') {
       calculateWarp();
     }
   });
 });

 reedInputs.forEach((input) => {
   input.addEventListener('keydown', (event) => {
     if (event.key === 'Enter') {
       calculateReed();
     }
   });
 });


 // =========================================================
 // SETT REFERENCE CARDS
 // =========================================================

 // Each card flips independently without moving the layout.

 document.querySelectorAll('.sett-card').forEach((card) => {
   card.addEventListener('click', () => {
     const isFlipped = card.getAttribute('aria-pressed') === 'true';

     card.setAttribute('aria-pressed', String(!isFlipped));

     card.querySelector('.card-toggle').textContent =
       isFlipped ? '+' : '×';
   });
 });
