var basicAmount = 0;
var workPlace = 'none'

const containerDiv = document.querySelector('.container');
createBasicDiv()

document.getElementById('next').addEventListener('click',()=>{
    var currentDiv = containerDiv.firstElementChild.className
    switch (currentDiv) {
        case 'basic':
            containerDiv.removeChild(document.getElementById('basic'));
            createWorkDiv()
            break;
        default:
            break;
    }
    console.log(basicAmount)

})
document.getElementById('back').addEventListener('click',()=>{
    var currentDiv = containerDiv.firstElementChild.className
    switch (currentDiv) {
        case 'workPlace':
            containerDiv.removeChild(document.getElementById('workPlace'));
            createBasicDiv()
            break;
    
        default:
            break;
    }
    console.log(basicAmount)

})

function createBasicDiv() {

    // Create the basic div
    const basicDiv = document.createElement('div');
    basicDiv.className = 'basic';
    basicDiv.id = 'basic';

    // Create the label
    const label = document.createElement('label');
    label.setAttribute('for', 'amountBasic');
    label.textContent = 'BASIC SALARY';

    // Create the input
    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'amountBasic');
    input.className = 'amountBasic';

    // Append the label and input to the basic div
    basicDiv.appendChild(label);
    basicDiv.appendChild(input);
    containerDiv.appendChild(basicDiv)

    // Update basicAmount whenever the input value changes
    document.getElementById('amountBasic').addEventListener('input', (event) => {
        basicAmount = event.target.value;
        console.log(basicAmount)
    });

    if (document.getElementById('amountBasic').value != null) {
        document.getElementById('amountBasic').value = basicAmount;
    } else {
        document.getElementById('amountBasic').value = 0
    }
}

function createWorkDiv() {
    const workDiv = document.createElement('div')
    workDiv.className = 'workPlace'
    workDiv.id = 'workPlace'
    workDiv.textContent = 'select your work of place?'
    workDiv.style.width = '90%'

    // Create the first radio input for Government
    const optDiv = document.createElement('div')
    const governmentInput = document.createElement('input');
    governmentInput.setAttribute('type', 'radio');
    governmentInput.setAttribute('name', 'workplace');
    governmentInput.setAttribute('id', 'government');
    governmentInput.setAttribute('value', 'government');
    const governmentLabel = document.createElement('label');
    governmentLabel.setAttribute('for', 'government');
    governmentLabel.textContent = 'Government';
    optDiv.appendChild(governmentInput)
    optDiv.appendChild(governmentLabel)
    optDiv.style.padding = '10px'
    optDiv.style.marginTop = '10px'
    optDiv.style.backgroundColor ='white'
    optDiv.style.borderRadius = '10px'


    // Create the second radio input for Council
    const opt2 = document.createElement('div')
    const councilInput = document.createElement('input');
    councilInput.setAttribute('type', 'radio');
    councilInput.setAttribute('name', 'workplace');
    councilInput.setAttribute('id', 'council');
    councilInput.setAttribute('value', 'council');
    const councilLabel = document.createElement('label');
    councilLabel.setAttribute('for', 'council');
    councilLabel.textContent = 'Council/Landboard';
    opt2.appendChild(councilInput)
    opt2.appendChild(councilLabel)
    opt2.style.padding = '10px'
    opt2.style.backgroundColor ='white'
    opt2.style.borderRadius = '10px'


    // Append the radio inputs before the labels to the parent div
    workDiv.appendChild(optDiv);
    workDiv.appendChild(opt2);

    containerDiv.appendChild(workDiv)

    // Add change event listeners to the radio buttons
    governmentInput.addEventListener('change', (event)=>{
        workPlace = event.target.value;
    });
    councilInput.addEventListener('change', (event)=>{
        workPlace = event.target.value;
    });

    // Set initial value for checked
    if (workPlace === 'none' || workPlace === 'government') {
        governmentInput.setAttribute('checked', 'government');
    } else {
        councilInput.setAttribute('checked','council')
    }
    
}









// var botusafe = false; //if true process 26% otherwise 23% if clearing
// var netpay = 0; // clear all loans
// var basicTreshhold = 9100;//


// // JavaScript code to handle list item clicks
// document.querySelectorAll('.clickable').forEach(item => {
//     item.addEventListener('click', function(event) {
//         event.stopPropagation();
//         // Toggle visibility of the sub-list
//         const subList = this.querySelector('.sub-list');
//         if (subList.style.display === 'none' || subList.style.display === '') {
//             subList.style.display = 'block';
//         } else {
//             subList.style.display = 'none';
//         }
//     });
// });
// // JavaScript code to handle sub-list item clicks
// document.querySelectorAll('.clickable-sub').forEach(subItem => {
//     subItem.addEventListener('click', function(event) {
//         // Prevent the event from bubbling up to parent elements
//         event.stopPropagation();
//          // Toggle visibility of the sub-list
//          const subList2 = this.querySelector('.sub-list2');
//          if(subList2==null){
//             return
//          }
//          if (subList2.style.display === 'none' || subList2.style.display === '') {
//              subList2.style.display = 'block';
//          } else {
//              subList2.style.display = 'none';
//          }
//     });
// });

// const items = ['Housing & Upkeep', 'Scarce Skill','Housing Allowance','Technical Allowance',
//     'BDF Special Harzard','X-Factor','Professional Allowance','BDF Speacial Duty','Band Allowance',
// 'Fire Fighters Overtime 30pcnt','Horse Allowance'];
// createCheckboxList(items);

//     // Function to create and insert the checkbox list
//     function createCheckboxList(items) {
//         const list = document.getElementById('bdfChecklist');

//         items.forEach((item, index) => {
//             const div = document.createElement('div')
//             div.style.margin = '5px'
//             // Create the checkbox
//             const checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkbox.id = item;
//             checkbox.className = 'checkbox-item';

//             // Create the label
//             const label = document.createElement('label');
//             label.htmlFor = item;
//             label.textContent = item;

//             // Append the checkbox and label to the list item
//             div.appendChild(checkbox);
//             div.appendChild(label);
//             list.appendChild(div)
//         });
//         const spanButton = document.createElement('span');
//         spanButton.id = 'buildBdf';
//         spanButton.className = 'span-button';
//         spanButton.textContent = 'Next';
//         spanButton.addEventListener('click', function() {
//             chosenAllowances()
//         });
//         list.appendChild(spanButton);
//     }
//         // JavaScript code to handle checkbox clicks
//         var checkedArr = [];
//         document.querySelectorAll('.checkbox-item').forEach(checkbox => {
//             checkbox.addEventListener('change', function() {
//                 if (this.checked) {
//                     checkedArr.push(this.id)
//                 } else {
//                     checkedArr = checkedArr.filter(item => item !== this.id);
//                 }
//             });
//         });
//         function chosenAllowances(){

//         }
        // <li class="clickable-sub">
        // <label for="housing">Housing & Upkeep</label>
        // <input type="number" name="housing" id="housing">
        // <label for="scarceSkill">scarce skill</label>
        // <input type="number" name="scarceSkill" id="scarceSkill">
        // <label for="scarceSkill">Commuted Allowance</label>
        // <input type="number" name="commutedAllowance" id="commutedAllowance">
        // <label for="housingAllowance">Housing Allowance</label>
        // <input type="number" name="housingAllowance" id="housingAllowance">
        // <label for="technicalAllowance">Technical Allowance</label>
        // <input type="number" name="technicalAllowance" id="technicalAllowance">
        // <label for="BDFSpecialHarzard">BDF Special Harzard</label>
        // <input type="number" name="BDFSpecialHarzard" id="BDFSpecialHarzard">
        // <label for="X-Factor">X-Factor</label>
        // <input type="number" name="X-Factor" id="X-Factor">
        // <label for="professionalAllowance">Professional Allowance</label>
        // <input type="number" name="professionalAllowance" id="professionalAllowance">
        // <label for="BDFSpeacialDuty">BDF Speacial Duty</label>
        // <input type="number" name="BDFSpeacialDuty" id="BDFSpeacialDuty">
        // <label for="bandAllowance">Band Allowance</label>
        // <input type="number" name="bandAllowance" id="bandAllowance">
        // <label for="fireFightersOvertime30pcnt">fire Fighters Overtime 30pcnt</label>
        // <input type="number" name="fireFightersOvertime30pcnt" id="fireFightersOvertime30pcnt">
        // <label for="horseAllowance">Horse Allowance</label>
        // <input type="number" name="horseAllowance" id="horseAllowance">
        // </li>