var basicAmount = 0;
var workPlace = 'none'
var department = 'none'
var govDepartment = department;
var councilDepartment = department;
const selectedAllowances = [];
var direction = true;

const containerDiv = document.querySelector('.container');
createBasicDiv()
var current = document.getElementById(containerDiv.firstElementChild.className)

document.getElementById('next').addEventListener('click',()=>{
    direction = true;
    var currentDiv = containerDiv.firstElementChild.className.split(' ')[0]
    var current = document.getElementById(currentDiv)
    switch (currentDiv) {
        case 'basic':
            containerDiv.removeChild(current);
            createWorkDiv()
            break;
        case 'workPlace':
            containerDiv.removeChild(current);
            if (workPlace === 'government') {
                createGovDepartmentDiv()
            } else {
                createCouncilDepartmentDiv()
            }
            break;
        case 'department':
            containerDiv.removeChild(document.getElementById('department'));
            switch (department) {
                case 'bdf':
                    bdfAllowanceSelection()
                    break;
                case 'police':
                
                    break;
                case 'education':
                
                    break;
                default:
                    break;
            }
            break;
        case '':

            break;
        default:
            break;
    }
})
document.getElementById('back').addEventListener('click',()=>{
    direction = false;
    var currentDiv = containerDiv.firstElementChild.className.split(' ')[0]
    switch (currentDiv) {
        case 'workPlace':
            containerDiv.removeChild(document.getElementById('workPlace'));
            createBasicDiv()
            break;
        case 'department':
            containerDiv.removeChild(document.getElementById('department'));
            createWorkDiv()
            break;
        case 'allowance':
            containerDiv.removeChild(document.getElementById('allowance'));
            if (workPlace === 'government') {
                createGovDepartmentDiv()
            } else {
                createCouncilDepartmentDiv()
            }
            break;
        default:
            break;
    }
})

function createBasicDiv() {

    // Create the basic div
    const basicDiv = document.createElement('div');
    basicDiv.className = 'basic';
    basicDiv.id = 'basic';

    // Create the label
    const label = document.createElement('label');
    label.setAttribute('for', 'amountBasic');
    label.textContent = 'Enter your basic salary (payslip)';

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

    if (direction) {
        basicDiv.classList.add('slide-in-right');
    } else {
        basicDiv.classList.add('slide-in-left');
    }
}
function createWorkDiv() {
    const workDiv = document.createElement('div')
    workDiv.className = 'workPlace'
    workDiv.id = 'workPlace'
    workDiv.textContent = 'Select your work of place?'
    workDiv.style.width = '90%'

    // Create the first radio input for Government
    const optDiv = document.createElement('div')
    optDiv.className = 'govSub'
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
    


    // Create the second radio input for Council
    const opt2 = document.createElement('div')
    opt2.className ='councilSub'
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
        workPlace = 'government'
    } else {
        councilInput.setAttribute('checked','council')
    }
    if (direction) {
        workDiv.classList.add('slide-in-right');
    } else {
        workDiv.classList.add('slide-in-left');
    }

}
function createGovDepartmentDiv() {
    

    const departmentDiv = document.createElement('div')
    departmentDiv.className = 'department'
    departmentDiv.id = 'department'
    departmentDiv.textContent = 'Select your department?'
    departmentDiv.style.width = '90%'

    // Create the first radio input for Government
    const optDiv = document.createElement('div')
    optDiv.className = 'bdfSub'
    const bdfInput = document.createElement('input');
    bdfInput.setAttribute('type', 'radio');
    bdfInput.setAttribute('name', 'department');
    bdfInput.setAttribute('id', 'bdf');
    bdfInput.setAttribute('value', 'bdf');
    const bdfLabel = document.createElement('label');
    bdfLabel.setAttribute('for', 'bdf');
    bdfLabel.textContent = 'BDF';
    optDiv.appendChild(bdfInput)
    optDiv.appendChild(bdfLabel)
    


    // Create the second radio input for Council
    const opt2 = document.createElement('div')
    opt2.className ='policeSub'
    const policeInput = document.createElement('input');
    policeInput.setAttribute('type', 'radio');
    policeInput.setAttribute('name', 'department');
    policeInput.setAttribute('id', 'police');
    policeInput.setAttribute('value', 'police');
    const policeLabel = document.createElement('label');
    policeLabel.setAttribute('for', 'police');
    policeLabel.textContent = 'Police';
    opt2.appendChild(policeInput)
    opt2.appendChild(policeLabel)

    // Create the second radio input for Council
    const opt3 = document.createElement('div')
    opt3.className ='educationSub'
    const educationInput = document.createElement('input');
    educationInput.setAttribute('type', 'radio');
    educationInput.setAttribute('name', 'department');
    educationInput.setAttribute('id', 'education');
    educationInput.setAttribute('value', 'education');
    const educationLabel = document.createElement('label');
    educationLabel.setAttribute('for', 'education');
    educationLabel.textContent = 'Education';
    opt3.appendChild(educationInput)
    opt3.appendChild(educationLabel)


    // Append the radio inputs before the labels to the parent div
    departmentDiv.appendChild(optDiv);
    departmentDiv.appendChild(opt2);
    departmentDiv.appendChild(opt3);

    containerDiv.appendChild(departmentDiv)

    // Add change event listeners to the radio buttons
    bdfInput.addEventListener('change', (event)=>{
        department = event.target.value;
        govDepartment = department;
    });
    policeInput.addEventListener('change', (event)=>{
        department = event.target.value;
        govDepartment = department;

    });
    educationInput.addEventListener('change', (event)=>{
        department = event.target.value;
        govDepartment = department;
    });

    department = govDepartment;
    switch (department) {
        case 'none':
        case 'bdf':
            bdfInput.setAttribute('checked', 'bdf');
            department = 'bdf'
            break;
        case 'police':
            policeInput.setAttribute('checked', 'police');
            break;
        case 'education':
            educationInput.setAttribute('checked', 'education');
            break;
        default:
            break;
    }
    if (direction) {
        departmentDiv.classList.add('slide-in-right');
    } else {
        departmentDiv.classList.add('slide-in-left');
    }
    
}
function createCouncilDepartmentDiv() {
    const departmentDiv = document.createElement('div')
    departmentDiv.className = 'department'
    departmentDiv.id = 'department'
    departmentDiv.textContent = 'Select your department?'
    departmentDiv.style.width = '90%'

    // Create the first radio input for council
    const optDiv = document.createElement('div')
    optDiv.className = 'publicOfficersSub'
    const publicOfficersInput = document.createElement('input');
    publicOfficersInput.setAttribute('type', 'radio');
    publicOfficersInput.setAttribute('name', 'department');
    publicOfficersInput.setAttribute('id', 'publicOfficers');
    publicOfficersInput.setAttribute('value', 'publicOfficers');
    const publicOfficersLabel = document.createElement('label');
    publicOfficersLabel.setAttribute('for', 'publicOfficers');
    publicOfficersLabel.textContent = 'Public Officers';
    optDiv.appendChild(publicOfficersInput)
    optDiv.appendChild(publicOfficersLabel)
    


    // Create the second radio input for Council
    const opt2 = document.createElement('div')
    opt2.className ='councilDeptSub'
    const councilDeptSubInput = document.createElement('input');
    councilDeptSubInput.setAttribute('type', 'radio');
    councilDeptSubInput.setAttribute('name', 'department');
    councilDeptSubInput.setAttribute('id', 'council');
    councilDeptSubInput.setAttribute('value', 'council');
    const councilDeptSubLabel = document.createElement('label');
    councilDeptSubLabel.setAttribute('for', 'council');
    councilDeptSubLabel.textContent = 'council';
    opt2.appendChild(councilDeptSubInput)
    opt2.appendChild(councilDeptSubLabel)

    // Create the second radio input for Council
    const opt3 = document.createElement('div')
    opt3.className ='landboardSub'
    const landboardInput = document.createElement('input');
    landboardInput.setAttribute('type', 'radio');
    landboardInput.setAttribute('name', 'department');
    landboardInput.setAttribute('id', 'landboard');
    landboardInput.setAttribute('value', 'landboard');
    const landboardLabel = document.createElement('label');
    landboardLabel.setAttribute('for', 'landboard');
    landboardLabel.textContent = 'landboard';
    opt3.appendChild(landboardInput)
    opt3.appendChild(landboardLabel)


    // Append the radio inputs before the labels to the parent div
    departmentDiv.appendChild(optDiv);
    departmentDiv.appendChild(opt2);
    departmentDiv.appendChild(opt3);

    containerDiv.appendChild(departmentDiv)

    // Add change event listeners to the radio buttons
    publicOfficersInput.addEventListener('change', (event)=>{
        department = event.target.value;
        councilDepartment = department;
    });
    councilDeptSubInput.addEventListener('change', (event)=>{
        department = event.target.value;
    });
    landboardInput.addEventListener('change', (event)=>{
        department = event.target.value;
    });

    department = councilDepartment;
    switch (department) {
        case 'none':
        case 'publicOfficers':
            publicOfficersInput.setAttribute('checked', 'publicOfficers');
            department = 'publicOfficers'
            break;
        case 'council':
            councilDeptSubInput.setAttribute('checked', 'council');
            break;
        case 'landboard':
            landboardInput.setAttribute('checked', 'landboard');
            break;
        default:
            break;
    }

    if (direction) {
        departmentDiv.classList.add('slide-in-right');
    } else {
        departmentDiv.classList.add('slide-in-left');
    }
}
function bdfAllowanceSelection() {
  const allowance =  ['Commuted allowance','Technical allowance','BDF special Hazard',
        'Housing & Upkeep allowance','Housing allowance','Scarce skill',
        'X-Factor','Professional allowance','BDF special duty','Band Allowance',
        'Fire Fighters Overtime Allowance 30%','Horse Allowance']
    // Create the bdfAllowance div
    const bdfAllowanceDiv = document.createElement('div');
    bdfAllowanceDiv.className = 'allowance';
    bdfAllowanceDiv.id = 'allowance';

    const text = document.createElement('p');
    text.textContent = 'Select your allowances(payslip)'
    text.id = 'textheader'
    bdfAllowanceDiv.appendChild(text)

    allowance.forEach((item, index) => {
        const checkboxDiv = document.createElement('div')
        checkboxDiv.className = 'checkboxDiv'
        checkboxDiv.id = `allowance${index}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `allowance${index}`;
        checkbox.name = 'allowance';
        checkbox.value = item;

        const label = document.createElement('label');
        label.htmlFor = `allowance${index}`;
        label.textContent = item;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(document.createElement('br'));

        bdfAllowanceDiv.appendChild(checkboxDiv)
    });
    containerDiv.appendChild(bdfAllowanceDiv)

    if (direction) {
        bdfAllowanceDiv.classList.add('slide-in-right');
    } else {
        bdfAllowanceDiv.classList.add('slide-in-left');
    }
}

function getSelectedAllowances() {
    const checkboxes = document.querySelectorAll('input[name="allowance"]:checked');
    checkboxes.forEach(checkbox => {
        selected.push(checkbox.value);
    });
    console.log(selectedAllowances.join(', '));
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
//             subList.style.display =kj 'none';
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