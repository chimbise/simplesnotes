  // // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDTLc3laktKxsV7vQWpzKt56K_g5UinCQA",
  //   authDomain: "simple-notes-58c6a.firebaseapp.com",
  //   projectId: "simple-notes-58c6a",
  //   storageBucket: "simple-notes-58c6a.appspot.com",
  //   messagingSenderId: "565407370315",
  //   appId: "1:565407370315:web:33f94fd05ca08cfbced1ce",
  //   measurementId: "G-5NJXESFQNE"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

 // Primary variables
var rt = 0.23; // Annual interest rate for 23%
//var c5 = rt / 12; // Monthly interest rate for 23%
var b6 = rt / 12;// Monthly interest for 23%
var term = 6; // Loan term for 6 months
var b8 = 1.15; // Insurance
var b9 = 0.025; // Collections fee
var c9 = 1 - b9; // Adjusted factor for collections fee
var b10 = 1500; // Take-home married
var b11 = 1300; // Take-home single
var b12 = 600; // A3 to B1 pay scale

// Create loan amount column
var startLoanAmount = 5000;
var increment = 500;
var maxLoanAmount = 700000;
var loanAmountColumn = {}; // Loan amount column
var keyIndex = 14;

// Loop to populate the loan amount column
for (var loanAmount = startLoanAmount; loanAmount <= maxLoanAmount; loanAmount += increment) {
    var ckey = loanAmount.toString();
    loanAmountColumn[ckey] = loanAmount;
    keyIndex++;
}

function updateMonthlyAmountDisplay(value) {
  document.getElementById('monthlyAmountDisplay').innerText = totalMonthlyAmountDisplay(value);
}


// Function to calculate PMT
function PMT(rate, nper, pv) {
    if (rate === 0) {
        return -(pv / nper); // If rate is 0, just return the principal divided by the number of periods
    } else {
        var pvif = Math.pow(1 + rate, nper);
        var pmt = pv * rate * pvif / (pvif - 1);
        return -pmt; // Negate the result to match the Excel PMT function behavior
    }
}

// Function to check value for AG14
function checkValueAg(AE14) {
    if (AE14 < 1140) {
        return 1140;
    } else {
        return AE14;
    }
}
function checkValueAg2(AE14) {
  if (AE14 > 2929.8) {
      return 2929.8;
  } else {
      return AE14;
  }
}

// Function to check value for AH14
function checkValueAh(AF14) {
    if (AF14 < 280) {
        return 280;
    } else {
        return AF14;
    }
}
// Function to check value for AH14
function checkValueAh2(AF14) {
  if (AF14 > 2929.8) {
      return 2929.8;
  } else {
      return AF14;
  }
}


function totalMonthlyAmountDisplay(selectedLoanAmount){
    // Initialize variables for calculations
    var c14 = loanAmountColumn[selectedLoanAmount.toString()]; // Example value for c14
    var ae14 = c14 * 0.0114; // Calculate ae14
      if (selectedLoanAmount >= 257500){
        var ag14 = checkValueAg2(ae14);
      }else{
        var ag14 = checkValueAg(ae14); // Calculate ag14
      }
    var af14 = c14 * 0.0114; // Calculate af14
      if (selectedLoanAmount >= 257500){
        var ah14 = checkValueAh2(af14)
      }else{
        var ah14 = checkValueAh(af14); // Calculate ah14
      }
    var d14 = ag14; // d14 is ag14
    var e14 = ah14; // e14 is ah14
    var f14 = c14 + d14 + e14; // Calculate f14
    var g14 = -PMT(b6, term, f14); // Calculate g14
    var h14 = f14 / 1000 * b8; // Calculate h14
    var j14 = g14 + h14; // Calculate j14
    var i14 = j14 / c9 - j14; // Calculate i14


    // Calculate total monthly amount
    var totalMonthlyAmount = Number((j14 + i14).toFixed(2));

  return totalMonthlyAmount; // Output the total monthly amount
}


// let value = 5000;
// const valueSpan = document.getElementById('value');

// var increment = document.getElementById("increment");
// var decrement = document.getElementById("decrement");

// increment.addEventListener('mouse',() =>{
//   if (value < 700000) {
//       value+=500;
//       valueSpan.textContent = value;
//   }
//   console.log(value)

// })

// decrement.addEventListener('click',() => {
//   if (value > 5000) {
//       value-=500;
//       valueSpan.textContent = value;
//   }
//   console.log(value)

document.addEventListener('DOMContentLoaded', (event) => {

  const loanTermDropdown = document.getElementById('loanTermDropdown');
  // Function to update the loan term
  function updateLoanTerm() {
    // You can add further logic here to handle the loan term change
    term = loanTermDropdown.value;
  
    updateLoanAmountDisplay(document.getElementById('loanAmountSlider').value);
  }
  loanTermDropdown.addEventListener('change', updateLoanTerm);

  const loanInterestDropdown = document.getElementById('loanInterestDropdown');
  function updateLoanInterest(){
    b6 = (loanInterestDropdown.value) / 12;
    updateLoanAmountDisplay(document.getElementById('loanAmountSlider').value);
  }
  loanInterestDropdown.addEventListener('change', updateLoanInterest);


  const loanAmountSlider = document.getElementById('loanAmountSlider');
  const decrementButton = document.getElementById('decrement');
  const incrementButton = document.getElementById('increment');

  // Function to update the displayed loan amount
  function updateLoanAmountDisplay(value) {
    loanAmountSlider.value = value;
    document.getElementById('loanAmountDisplay').innerText = value;
    updateMonthlyAmountDisplay(value);
  }

  function increment() {
      let value = Math.round(parseInt(loanAmountSlider.value, 10) / 500) * 500;
      if (value < 700000) { // Adjust the max value as needed
          value += 500;
          updateLoanAmountDisplay(value);
      }
      updateLoanAmountDisplay(document.getElementById('loanAmountSlider').value);

  }

  function decrement() {
      let value = Math.round(parseInt(loanAmountSlider.value, 10) / 500) * 500;
      if (value > 5000) { // Adjust the min value as needed
          value -= 500;
          updateLoanAmountDisplay(value);
      }
      updateLoanAmountDisplay(document.getElementById('loanAmountSlider').value);

  }

  incrementButton.addEventListener('click', increment);
  decrementButton.addEventListener('click', decrement);
  // incrementButton.addEventListener('mousedown', () => handleMouseDown(increment));
  // decrementButton.addEventListener('mousedown', () => handleMouseDown(decrement));
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('mouseleave', handleMouseUp);


  function handleMouseDown(callback) {
    callback();
    //interval = setInterval(callback, 100); // Adjust the interval speed as needed
  }
  function handleMouseUp() {
    //clearInterval(interval);
  }
  let interval;
})        