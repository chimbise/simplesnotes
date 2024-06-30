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
var term = 96; // Loan term for 96 months
var b8 = 1.15; // Insurance
var b9 = 0.025; // Collections fee
var c9 = 1 - b9; // Adjusted factor for collections fee
var b10 = 1500; // Take-home married
var b11 = 1300; // Take-home single
var b12 = 600; // A3 to B1 pay scale

//secondary variables
var d14 = 0; // d14 is ag14
var e14 = 0; // e14 is ah14
var f14 = 0; // Calculate f14
var g14 = 0; // Calculate g14
var h14 = 0; // Calculate h14
var j14 = 0; // Calculate j14
var i14 = 0; // Calculate i14

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
  document.getElementById('loanAmountMonthlySlider').value = totalMonthlyAmountDisplay(value);
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
    d14 = ag14; // d14 is ag14
    e14 = ah14; // e14 is ah14
    f14 = c14 + d14 + e14; // Calculate f14
    g14 = -PMT(b6, term, f14); // Calculate g14
    h14 = f14 / 1000 * b8; // Calculate h14
    j14 = g14 + h14; // Calculate j14
    i14 = j14 / c9 - j14; // Calculate i14

    // Calculate total monthly amount
    var totalMonthlyAmount = Number((j14 + i14).toFixed(2));

  return totalMonthlyAmount; // Output the total monthly amount
}

function viewLoanDetailsDiv(){
  var interest = rt*100//interest
  var loanTerm = term//months
  var loanAmount = document.getElementById('loanAmountSlider').value;
  var adminFee = Number(d14.toFixed(2))
  var processingFee = Number(e14.toFixed(2))
  var totalLoanAmount = Number(f14.toFixed(2));
  var monthlyLoanInstalment = Number(g14.toFixed(2));
  var monthlyInsurancePremiumm = Number(h14.toFixed(2))
  var monthlyEmployerCollection = Number(i14.toFixed(2))
  var totalMonthlyInstalment = totalMonthlyAmountDisplay(loanAmount)
  //var totalMonthlyInstalment = totalMonthlyAmounts
  var apr = calculateRate(loanTerm, -totalMonthlyInstalment, loanAmount,0,0,0.1)*1200;

  document.getElementById('InterestRate').textContent  = interest;
  document.getElementById('LoanAmountRequested').textContent  = loanAmount+ '.00';
  document.getElementById('AdminFee').textContent  = adminFee;
  document.getElementById('ProcessingFee').textContent  = processingFee;
  document.getElementById('TotalLoanAmount').textContent  = totalLoanAmount;
  document.getElementById('AnnualPercentageRate').textContent  = Number(apr.toFixed(2));
  document.getElementById('LoanTerm').textContent  = loanTerm;
  document.getElementById('MonthlyInstalments').textContent  = monthlyLoanInstalment;
  document.getElementById('MonthlyCreditLifePremium').textContent  = monthlyInsurancePremiumm;
  document.getElementById('MonthlyCollectionFee').textContent  = monthlyEmployerCollection;
  document.getElementById('TotalMonthlyInstalments').textContent  = totalMonthlyInstalment;
}
function calculateRate(nper, pmt, pv, fv, type, guess) {
  // Tolerance for convergence
  const tol = 1e-6;
  // Maximum number of iterations
  const maxIter = 100;
  
  let rate = guess;
  let iter = 0;
  
  while (iter < maxIter) {
    // Calculate the value of the function
    const f = pv * Math.pow(1 + rate, nper) + pmt * (1 + rate * type) * (Math.pow(1 + rate, nper) - 1) / rate + fv;
    
    // Calculate the value of the derivative of the function
    const df = pv * nper * Math.pow(1 + rate, nper - 1) + pmt * (1 + rate * type) * (nper * Math.pow(1 + rate, nper - 1) / rate - (Math.pow(1 + rate, nper) - 1) / Math.pow(rate, 2));
    
    // Update the estimate
    const newRate = rate - f / df;
    
    // Check for convergence
    if (Math.abs(newRate - rate) < tol) {
      return rate;
    }
    
    rate = newRate;
    iter++;
  }
  
  // Return the last estimate if no convergence
  return rate;
}


// document.addEventListener('DOMContentLoaded', (event) => {

//   const loanTermDropdown = document.getElementById('loanTermDropdown');
//   // Function to update the loan term
//   function updateLoanTerm() {
//     // You can add further logic here to handle the loan term change
//     term = loanTermDropdown.value;
//     updateMonthlyAmountDisplay(document.getElementById('loanAmountSlider').value);
//     //updateLoanAmountDisplay(document.getElementById('loanAmountSlider').value);
//   }
//   loanTermDropdown.addEventListener('change', updateLoanTerm);

//   const loanInterestDropdown = document.getElementById('loanInterestDropdown');
//   function updateLoanInterest(){
//     rt = loanInterestDropdown.value;
//     b6 = rt / 12;
//     updateMonthlyAmountDisplay(document.getElementById('loanAmountSlider').value);
//     //updateLoanAmountDisplay(document.getElementById('loanAmountSlider').value);
//   }
//   loanInterestDropdown.addEventListener('change', updateLoanInterest);


//   const loanAmountSlider = document.getElementById('loanAmountSlider');
//   const decrementButton = document.getElementById('decrement');
//   const incrementButton = document.getElementById('increment');

//   // Function to update the displayed loan amount
//   function updateLoanAmountDisplay(value) {
//     loanAmountSlider.value = value;
//     //document.getElementById('loanAmountDisplay').innerText = value;
//     updateMonthlyAmountDisplay(value);
//   }

//   function increment() {
//       let value = Math.round(parseInt(loanAmountSlider.value, 10) / 500) * 500;
//       if (value < 700000) { // Adjust the max value as needed
//           value += 500;
//           updateLoanAmountDisplay(value);
//           //updateMonthlyAmountDisplay(value);
//       }
//       //updateLoanAmountDisplay(document.getElementById('loanAmountSlider').value);
//     }

//   function decrement() {
//       let value = Math.round(parseInt(loanAmountSlider.value, 10) / 500) * 500;
//       if (value > 5000) { // Adjust the min value as needed
//           value -= 500;
//           updateLoanAmountDisplay(value);
//           //updateMonthlyAmountDisplay(value);
//         }
//       //updateLoanAmountDisplay(document.getElementById('loanAmountSlider').value);
//     }

//   incrementButton.addEventListener('click', increment);
//   decrementButton.addEventListener('click', decrement);
//   // incrementButton.addEventListener('mousedown', () => handleMouseDown(increment));
//   // decrementButton.addEventListener('mousedown', () => handleMouseDown(decrement));
 
//   let intervalId;
//   incrementButton.addEventListener('mousedown', () => {
//     intervalId = setInterval(increment, 100); // Run every second
//   });
  
//   incrementButton.addEventListener('mouseup', () => {
//     clearInterval(intervalId);
//   });
  
//   incrementButton.addEventListener('mouseleave', () => {
//     clearInterval(intervalId);
//   });

//   decrementButton.addEventListener('mousedown', () => {
//     intervalId = setInterval(decrement, 1000); // Run every second
//   });
  
//   decrementButton.addEventListener('mouseup', () => {
//     clearInterval(intervalId);
//   });
  
//   decrementButton.addEventListener('mouseleave', () => {
//     clearInterval(intervalId);
//   });
// }) 
// document.addEventListener('DOMContentLoaded', (event) => {
//   const loanTermDropdown = document.getElementById('loanTermDropdown');

//   // Function to update the loan term
//   function updateLoanTerm() {
//     term = loanTermDropdown.value;
//     updateMonthlyAmountDisplay(document.getElementById('loanAmountSlider').value);
//   }
//   loanTermDropdown.addEventListener('change', updateLoanTerm);

//   const loanInterestDropdown = document.getElementById('loanInterestDropdown');
//   function updateLoanInterest() {
//     rt = loanInterestDropdown.value;
//     b6 = rt / 12;
//     updateMonthlyAmountDisplay(document.getElementById('loanAmountSlider').value);
//   }
//   loanInterestDropdown.addEventListener('change', updateLoanInterest);

//   const loanAmountSlider = document.getElementById('loanAmountSlider');
//   const decrementButton = document.getElementById('decrement');
//   const incrementButton = document.getElementById('increment');

//   // Function to update the displayed loan amount
//   function updateLoanAmountDisplay(value) {
//     loanAmountSlider.value = value;
//     updateMonthlyAmountDisplay(value);
//   }

//   function increment() {
//     let value = Math.round(parseInt(loanAmountSlider.value, 10) / 500) * 500;
//     if (value < 700000) { // Adjust the max value as needed
//       value += 500;
//       updateLoanAmountDisplay(value);
//     }
//   }

//   function decrement() {
//     let value = Math.round(parseInt(loanAmountSlider.value, 10) / 500) * 500;
//     if (value > 5000) { // Adjust the min value as needed
//       value -= 500;
//       updateLoanAmountDisplay(value);
//     }
//   }

//   let intervalId;
//   let timeoutId;
//   let isTouchEvent = false;

//   function handleMouseDown(action) {
//     timeoutId = setTimeout(() => {
//       intervalId = setInterval(action, 10); // Run every 500 ms
//     }, 500); // 500 ms delay to detect long press
//   }

//   function handleMouseUp(action) {
//     clearTimeout(timeoutId);
//     if (intervalId) {
//       clearInterval(intervalId);
//       intervalId = null;
//     } else {
//       if (!isTouchEvent) {
//         action(); // Run the action if it was a click and not a touch event
//       }
//     }
//     isTouchEvent = false;
//   }

//   function handleTouchStart(action) {
//     isTouchEvent = true;
//     handleMouseDown(action);
//   }

//   function handleTouchEnd(action) {
//     handleMouseUp(action);
//   }

//   function addEventListeners(button, action) {
//     button.addEventListener('mousedown', () => handleMouseDown(action));
//     button.addEventListener('mouseup', () => handleMouseUp(action));
//     button.addEventListener('mouseleave', () => handleMouseUp(action));
//     button.addEventListener('mouseout', () => handleMouseUp(action));

//     button.addEventListener('touchstart', (event) => {
//       event.preventDefault();
//       handleTouchStart(action);
//     });
//     button.addEventListener('touchend', (event) => {
//       event.preventDefault();
//       handleTouchEnd(action);
//     });
//     button.addEventListener('touchcancel', (event) => {
//       event.preventDefault();
//       handleTouchEnd(action);
//     });
//   }

//   addEventListeners(incrementButton, increment);
//   addEventListeners(decrementButton, decrement);
// });
document.addEventListener('DOMContentLoaded', (event) => {
  const loanTermDropdown = document.getElementById('loanTermDropdown');

  // Function to update the loan term
  function updateLoanTerm() {
    term = loanTermDropdown.value;
    updateMonthlyAmountDisplay(document.getElementById('loanAmountSlider').value);
  }
  loanTermDropdown.addEventListener('change', updateLoanTerm);

  const loanInterestDropdown = document.getElementById('loanInterestDropdown');
  function updateLoanInterest() {
    rt = loanInterestDropdown.value;
    b6 = rt / 12;
    updateMonthlyAmountDisplay(document.getElementById('loanAmountSlider').value);
  }
  loanInterestDropdown.addEventListener('change', updateLoanInterest);

  const loanAmountSlider = document.getElementById('loanAmountSlider');
  const decrementButton = document.getElementById('decrement');
  const incrementButton = document.getElementById('increment');

  // Function to update the displayed loan amount
  function updateLoanAmountDisplay(value) {
    loanAmountSlider.value = value;
    updateMonthlyAmountDisplay(value);
  }

  function increment() {
    let value = Math.round(parseInt(loanAmountSlider.value, 10) / 500) * 500;
    if (value < 700000) { // Adjust the max value as needed
      value += 500;
      updateLoanAmountDisplay(value);
    }
  }

  function decrement() {
    let value = Math.round(parseInt(loanAmountSlider.value, 10) / 500) * 500;
    if (value > 5000) { // Adjust the min value as needed
      value -= 500;
      updateLoanAmountDisplay(value);
    }
  }

  let intervalId;
  let timeoutId;
  let touchStartTime;
  const longPressThreshold = 500; // Threshold in milliseconds to detect a long press

  function handleMouseDown(action) {
    timeoutId = setTimeout(() => {
      intervalId = setInterval(action, 10); // Run every 500 ms
    }, longPressThreshold); // Delay to detect long press
  }

  function handleMouseUp(action) {
    clearTimeout(timeoutId);
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    } else {
      action(); // Run the action if it was a click or short touch
    }
  }

  function handleTouchStart(action) {
    touchStartTime = new Date().getTime();
    handleMouseDown(action);
  }

  function handleTouchEnd(action) {
    const touchEndTime = new Date().getTime();
    const touchDuration = touchEndTime - touchStartTime;
    
    if (touchDuration < longPressThreshold) {
      clearTimeout(timeoutId); // Clear the long press timeout
      action(); // Run the action for a short touch
    } else {
      handleMouseUp(action); // Handle as a long press
    }
  }

  function addEventListeners(button, action) {
    button.addEventListener('mousedown', () => handleMouseDown(action));
    button.addEventListener('mouseup', () => handleMouseUp(action));
    button.addEventListener('mouseleave', () => handleMouseUp(action));
    button.addEventListener('mouseout', () => handleMouseUp(action));

    button.addEventListener('touchstart', (event) => {
      event.preventDefault(); // Prevent default to ensure consistent behavior
      handleTouchStart(action);
    });
    button.addEventListener('touchend', (event) => {
      event.preventDefault(); // Prevent default to ensure consistent behavior
      handleTouchEnd(action);
    });
    button.addEventListener('touchcancel', (event) => {
      event.preventDefault(); // Prevent default to ensure consistent behavior
      handleMouseUp(action);
    });
    // Disable hover effect
    button.addEventListener('mouseout', (event) => {
      event.stopPropagation();
      event.preventDefault();
    });
  }

  addEventListeners(incrementButton, increment);
  addEventListeners(decrementButton, decrement);
});





var viewLoanDetailsButton = document.getElementById("viewLoanDetails")

viewLoanDetailsButton.addEventListener("click",(e)=>{

  document.getElementById('loanDetailsDiv').style.display = 'flex';
  viewLoanDetailsDiv()
})

// Hide the loanDetailsDiv if clicking outside of it
document.addEventListener('click', function(event) {
  var loanDetailsDiv = document.getElementById('loanDetailsDiv');
  var innerDiv = document.querySelector('.loanDetails');
  if (!innerDiv.contains(event.target) && event.target.id !== 'viewLoanDetails') {
    loanDetailsDiv.style.display = 'none';
  }
});
