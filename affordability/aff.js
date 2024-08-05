var basicAmount = 0;
var workPlace = 'none'
var department = 'none'
var govDepartment = department;
var councilDepartment = department;
var selectedAllowances = [];
var selectionGroup = 0; //for back button allowance
var selectionGroupNewloan = 0;
var direction = true;
//var selectedAllowancesAmounts =[];
var deductionAmount = 0;
var newloanPresent = 'no';
var settleloan = 'no';
var selectedNewLoanCode = []
var selectedsettleLoanCode = []
var taxCorrection = 'no'
var maritalStatusValue = 'single'


const containerDiv = document.querySelector('.container');
createBasicDiv()
var currentDiv = ''
var current = ''

document.getElementById('next').addEventListener('click',()=>{
    direction = true;
    currentDiv = containerDiv.firstElementChild.className.split(' ')[0]
    current = document.getElementById(currentDiv)
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
            containerDiv.removeChild(current);
            switch (department) {
                case 'bdf':
                    bdfAllowanceSelection()
                    selectionGroup = 1;
                    break;
                case 'police':
                
                    break;
                case 'education':
                
                    break;
                default:
                    break;
            }
            break;
        case 'allowance':
            containerDiv.removeChild(current);
            createNumberInputs(selectedAllowances)
            break;
        case 'selectedBox':
            containerDiv.removeChild(current);
            createDeductionDiv()
            break;
        case 'deduction':
            containerDiv.removeChild(current);
            createNewloanDiv()
            break;
        case 'newloanPresent':
            containerDiv.removeChild(current);
            if (newloanPresent === 'yes') {
                createLoanCodesOption()
            } else {
                createSettleLoanDiv()
            }
            break;
        case 'newloanPresentSelection':
            containerDiv.removeChild(current);
            createNumberInputsNewloan(selectedNewLoanCode)
            break;
        case 'selectedBoxNewloan':
            containerDiv.removeChild(current);
            createSettleLoanDiv()
            break;
        case 'oldloanSettle':
            containerDiv.removeChild(current);
            if (settleloan === 'yes') {
                createSettleLoanCodesOption()
            } else {
                createTaxOption()
            }
            break;
        case 'settleloanPresentSelection':
            containerDiv.removeChild(current);
            createNumberInputsSettleloan(selectedsettleLoanCode)
            break;
        case 'selectedBoxSettleloan':
            containerDiv.removeChild(current);
            createTaxOption()
            break;
        case 'taxDiv':
            containerDiv.removeChild(current);
            if (taxCorrection === 'yes') {
                createTaxCorrectionInputs()
            }else {
                maritalStatus()
            }
            break;
        case 'taxDivInput':
            containerDiv.removeChild(current);
            maritalStatus()
            break;
        default:
            break;
    }
})
document.getElementById('back').addEventListener('click',()=>{
    direction = false;
    currentDiv = containerDiv.firstElementChild.className.split(' ')[0]
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
        case 'selectedBox':
            containerDiv.removeChild(document.getElementById('selectedBox'));
            if (selectionGroup == 1) {
                bdfAllowanceSelection()
            } else {
                
            }
            break;
        case 'deduction':
            //var s = getSelectedAllowances()
            containerDiv.removeChild(document.getElementById('deduction'));
            createNumberInputs(selectedAllowances)
            break;
        case 'newloanPresent':
            containerDiv.removeChild(document.getElementById('newloanPresent'));
            createDeductionDiv()
            break;
        case 'newloanPresentSelection':
            containerDiv.removeChild(document.getElementById('newloanPresentSelection'));
            createNewloanDiv()
            break;
        case 'selectedBoxNewloan':
            containerDiv.removeChild(document.getElementById('selectedBoxNewloan'));
            createLoanCodesOption()            
            break;
        case 'oldloanSettle':
            containerDiv.removeChild(document.getElementById('oldloanSettle'));
            if (newloanPresent === 'yes') {
                createNumberInputsNewloan(selectedNewLoanCode)
            } else {
                createNewloanDiv()
            }
            break;
        case 'settleloanPresentSelection':
            containerDiv.removeChild(document.getElementById('settleloanPresentSelection'));
            createSettleLoanDiv()
            break;
        case 'selectedBoxSettleloan':
            containerDiv.removeChild(document.getElementById('selectedBoxSettleloan'));
            createSettleLoanCodesOption()
            break;
        case 'taxDiv':
            containerDiv.removeChild(document.getElementById('taxDiv'));
            if (settleloan === 'yes') {
                createNumberInputsSettleloan(selectedsettleLoanCode)
            } else {
                createSettleLoanDiv()
            }
            break;
        case 'taxDivInput':
            containerDiv.removeChild(document.getElementById('taxDivInput'));
            createTaxOption()
            break;
        case 'maritalDiv':
            containerDiv.removeChild(document.getElementById('maritalDiv'));
            if (taxCorrection === 'yes') {
                createTaxCorrectionInputs()
            } else {
                createTaxOption()
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
    label.textContent = 'Enter your BASIC SALARY (payslip)';

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
    workDiv.textContent = 'Select your place of WORK?'
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
    departmentDiv.textContent = 'Select your DEPARTMENT?'
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
    departmentDiv.textContent = 'Select your DEPARTMENT?'
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
    text.textContent = 'Select your PERMANENT ALLOWANCES(payslip)'
    text.id = 'textheader'
    bdfAllowanceDiv.appendChild(text)

    allowance.forEach((item, index) => {
        const checkboxDiv = document.createElement('div')
        checkboxDiv.className = 'checkboxDiv'
        checkboxDiv.id = `allowance${index}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `bdfAllowance${item}`;
        checkbox.name = 'allowance';
        checkbox.value = item;

        const label = document.createElement('label');
        label.htmlFor = `allowance${index}`;
        label.textContent = item;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(document.createElement('br'));

        bdfAllowanceDiv.appendChild(checkboxDiv)

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                selectedAllowances.push(checkbox.value)
            } else {
                selectedAllowances = selectedAllowances.filter(item => item !== checkbox.value);
            }
        });

    });

    containerDiv.appendChild(bdfAllowanceDiv)
    checkalreadySelected(selectedAllowances,'bdf')

    // if (direction) {
    //     bdfAllowanceDiv.classList.add('slide-in-right');
    // } else {
    //     bdfAllowanceDiv.classList.add('slide-in-left');
    // }
}
function checkalreadySelected(array,section) {
    array.forEach(name => {
        const checkbox = document.querySelector(`input[type="checkbox"][id="${section}Allowance${name}"]`);
        if (checkbox) {
            checkbox.checked = true; // Check the checkbox if it exists
        }
    })
}
function createNumberInputs(array) {
    const container = document.createElement('div');
    container.className = 'selectedBox'
    container.id = 'selectedBox'
    container.textContent = 'Enter ALLOWANCE AMOUNT as shown on your payslip'

    const lastIndex = array.length - 1;
    array.forEach((item, index) => {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'inputWrapper';
        wrapperDiv.id = `inputWrapper${index}`;
        if(index == 0&&index == lastIndex){
            wrapperDiv.style.borderRadius = '10px'
        }else if(index == lastIndex){
            wrapperDiv.style.borderRadius = '0 0 10px 10px'
        }

        const label = document.createElement('label');
        label.htmlFor = `numberInput${index}`;
        label.textContent = item;

        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.id = `numberInput${index}`;
        numberInput.name = item.replace(/\s+/g, '-').toLowerCase(); // create a name based on the item
        numberInput.min = 0;

        wrapperDiv.appendChild(label);
        wrapperDiv.appendChild(numberInput);

        console.log(container)

        container.appendChild(wrapperDiv);

    });

    // document.getElementById(`numberInput${index}`).addEventListener('input', (event) => {
    //     selectedAllowancesAmounts.push(event.target.value);
    // });

    // if (document.getElementById(`numberInput${index}`).value != null) {
    //     document.getElementById(`numberInput${index}`).value = basicAmount;
    // } else {
    //     document.getElementById(`numberInput${index}`).value = 0
    // }
    containerDiv.appendChild(container)
    if (direction) {
        container.classList.add('slide-in-right');
    } else {
        container.classList.add('slide-in-left');
    }
}
function createDeductionDiv() {

    // Create the basic div
    const deductionDiv = document.createElement('div');
    deductionDiv.className = 'deduction';
    deductionDiv.id = 'deduction';

    // Create the label
    const label = document.createElement('label');
    label.setAttribute('for', 'amountDeduction');
    label.textContent = 'Enter your DEDUCTION amount';

    // Create the input
    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'amountDeduction');
    input.className = 'amountDeduction';

    // Append the label and input to the basic div
    deductionDiv.appendChild(label);
    deductionDiv.appendChild(input);
    containerDiv.appendChild(deductionDiv)

    // Update basicAmount whenever the input value changes
    document.getElementById('amountDeduction').addEventListener('input', (event) => {
        deductionAmount = event.target.value;
        console.log(deductionAmount)
    });

    if (document.getElementById('amountDeduction').value != null) {
        document.getElementById('amountDeduction').value = deductionAmount;
    } else {
        document.getElementById('amountDeduction').value = 0
    }

    if (direction) {
        deductionDiv.classList.add('slide-in-right');
    } else {
        deductionDiv.classList.add('slide-in-left');
    }
}
function createNewloanDiv() {
    const newloanDiv = document.createElement('div')
    newloanDiv.className = 'newloanPresent'
    newloanDiv.id = 'newloanPresent'
    newloanDiv.textContent = 'Do you have a NEW LOAN(past 3 months) that has not deducted yet?'
    newloanDiv.style.width = '90%'

    // Create the first radio input for Government
    const optDiv = document.createElement('div')
    optDiv.className = 'yes'
    const yesInput = document.createElement('input');
    yesInput.setAttribute('type', 'radio');
    yesInput.setAttribute('name', 'newloan');
    yesInput.setAttribute('id', 'yes');
    yesInput.setAttribute('value', 'yes');
    const yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', 'yes');
    yesLabel.textContent = 'yes';
    optDiv.appendChild(yesInput)
    optDiv.appendChild(yesLabel)
    


    // Create the second radio input for Council
    const opt2 = document.createElement('div')
    opt2.className ='no'
    const noInput = document.createElement('input');
    noInput.setAttribute('type', 'radio');
    noInput.setAttribute('name', 'newloan');
    noInput.setAttribute('id', 'no');
    noInput.setAttribute('value', 'no');
    const noLabel = document.createElement('label');
    noLabel.setAttribute('for', 'no');
    noLabel.textContent = 'no';
    opt2.appendChild(noInput)
    opt2.appendChild(noLabel)


    // Append the radio inputs before the labels to the parent div
    newloanDiv.appendChild(optDiv);
    newloanDiv.appendChild(opt2);

    containerDiv.appendChild(newloanDiv)

    // Add change event listeners to the radio buttons
    yesInput.addEventListener('change', (event)=>{
        newloanPresent = event.target.value;
    });
    noInput.addEventListener('change', (event)=>{
        newloanPresent = event.target.value;
    });

    // Set initial value for checked
    if (newloanPresent === 'yes') {
        yesInput.setAttribute('checked', 'yes');
    } else {
        newloanPresent = 'no'
        noInput.setAttribute('checked','no')
    }
    if (direction) {
        newloanDiv.classList.add('slide-in-right');
    } else {
        newloanDiv.classList.add('slide-in-left');
    }

}
function createLoanCodesOption() {
    const allowance =  ['boprita','bogowu','botusafe(capital bank)','botusafe(other)','TAWU',
        'letshego','bayport','BDF advance','other']

    const newloanPresentDiv = document.createElement('div');
    newloanPresentDiv.className = 'newloanPresentSelection';
    newloanPresentDiv.id = 'newloanPresentSelection';

    const text = document.createElement('p');
    text.textContent = 'Select your NEW LOAN CODE'
    text.id = 'textheaderNewloan'
    newloanPresentDiv.appendChild(text)

    allowance.forEach((item, index) => {
        const checkboxDiv = document.createElement('div')
        checkboxDiv.className = 'checkboxDivNewloan'
        checkboxDiv.id = `newloan${index}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `newloanAllowance${item}`;
        checkbox.name = 'newloan';
        checkbox.value = item;

        const label = document.createElement('label');
        label.htmlFor = `newloan${index}`;
        label.textContent = item;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(document.createElement('br'));

        newloanPresentDiv.appendChild(checkboxDiv)
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                selectedNewLoanCode.push(checkbox.value)
            } else {
                selectedNewLoanCode = selectedNewLoanCode.filter(item => item !== checkbox.value);
            }
        });
    });

    containerDiv.appendChild(newloanPresentDiv)
    checkalreadySelected(selectedNewLoanCode,'newloan')
}
function getSelectedNewloans() {
    const checkboxes = document.querySelectorAll('input[name="newloan"]:checked');
    checkboxes.forEach(checkbox => {
        if(!selectedNewLoanCode.includes(checkbox.value)){
            selectedNewLoanCode.push(checkbox.value);
        }
    });
    return selectedNewLoanCode
}
function createNumberInputsNewloan(array) {
    const container = document.createElement('div');
    container.className = 'selectedBoxNewloan'
    container.id = 'selectedBoxNewloan'
    container.textContent = 'Enter NEW LOAN INSTALLMENT as shown in your payslip'

    const lastIndex = array.length - 1;
    array.forEach((item, index) => {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'inputWrapperNewloan';
        wrapperDiv.id = `inputWrapperNewloan${index}`;
        if(index == 0&&index == lastIndex){
            wrapperDiv.style.borderRadius = '10px'
        }else if(index == lastIndex){
            wrapperDiv.style.borderRadius = '0 0 10px 10px'
        }

        const label = document.createElement('label');
        label.htmlFor = `numberInputNewloan${index}`;
        label.textContent = item;

        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.id = `numberInputNewloan${index}`;
        numberInput.name = item.replace(/\s+/g, '-').toLowerCase(); // create a name based on the item
        numberInput.min = 0;

        wrapperDiv.appendChild(label);
        wrapperDiv.appendChild(numberInput);

        container.appendChild(wrapperDiv);

    });

    // document.getElementById(`numberInput${index}`).addEventListener('input', (event) => {
    //     selectedAllowancesAmounts.push(event.target.value);
    // });

    // if (document.getElementById(`numberInput${index}`).value != null) {
    //     document.getElementById(`numberInput${index}`).value = basicAmount;
    // } else {
    //     document.getElementById(`numberInput${index}`).value = 0
    // }
    containerDiv.appendChild(container)
    if (direction) {
        container.classList.add('slide-in-right');
    } else {
        container.classList.add('slide-in-left');
    }
}
function createSettleLoanDiv() {
    const settleloanDiv = document.createElement('div')
    settleloanDiv.className = 'oldloanSettle'
    settleloanDiv.id = 'oldloanSettle'
    settleloanDiv.textContent = 'Is there any loan(s) you want to settle?'
    settleloanDiv.style.width = '90%'

    // Create the first radio input for Government
    const optDiv = document.createElement('div')
    optDiv.className = 'yes'
    const yesInput = document.createElement('input');
    yesInput.setAttribute('type', 'radio');
    yesInput.setAttribute('name', 'settleloan');
    yesInput.setAttribute('id', 'settleloan');
    yesInput.setAttribute('value', 'yes');
    const yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', 'settleloan');
    yesLabel.textContent = 'yes';
    optDiv.appendChild(yesInput)
    optDiv.appendChild(yesLabel)
    


    // Create the second radio input for Council
    const opt2 = document.createElement('div')
    opt2.className ='no'
    const noInput = document.createElement('input');
    noInput.setAttribute('type', 'radio');
    noInput.setAttribute('name', 'settleloan');
    noInput.setAttribute('id', 'settleloan');
    noInput.setAttribute('value', 'no');
    const noLabel = document.createElement('label');
    noLabel.setAttribute('for', 'settleloan');
    noLabel.textContent = 'no';
    opt2.appendChild(noInput)
    opt2.appendChild(noLabel)


    // Append the radio inputs before the labels to the parent div
    settleloanDiv.appendChild(optDiv);
    settleloanDiv.appendChild(opt2);

    containerDiv.appendChild(settleloanDiv)

    // Add change event listeners to the radio buttons
    yesInput.addEventListener('change', (event)=>{
        settleloan = event.target.value;
    });
    noInput.addEventListener('change', (event)=>{
        settleloan = event.target.value;
    });

    // Set initial value for checked
    if (settleloan === 'yes') {
        yesInput.setAttribute('checked', 'yes');
    } else {
        settleloan = 'no'
        noInput.setAttribute('checked','no')
    }
    if (direction) {
        settleloanDiv.classList.add('slide-in-right');
    } else {
        settleloanDiv.classList.add('slide-in-left');
    }
}
function createSettleLoanCodesOption() {
    const allowance =  ['boprita','bogowu','botusafe(capital bank)','botusafe(other)','TAWU',
        'letshego','bayport','BDF advance','other']

    const newloanPresentDiv = document.createElement('div');
    newloanPresentDiv.className = 'settleloanPresentSelection';
    newloanPresentDiv.id = 'settleloanPresentSelection';

    const text = document.createElement('p');
    text.textContent = 'Select the LOAN CODE you want to SETTLE'
    text.id = 'textheadersettleloan'
    newloanPresentDiv.appendChild(text)

    allowance.forEach((item, index) => {
        const checkboxDiv = document.createElement('div')
        checkboxDiv.className = 'checkboxDivSettleloan'
        checkboxDiv.id = `settleloan${index}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `settleloanAllowance${item}`;
        checkbox.name = 'settleloan';
        checkbox.value = item;

        const label = document.createElement('label');
        label.htmlFor = `settleloan${index}`;
        label.textContent = item;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(document.createElement('br'));

        newloanPresentDiv.appendChild(checkboxDiv)
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                selectedsettleLoanCode.push(checkbox.value)
            } else {
                selectedsettleLoanCode = selectedsettleLoanCode.filter(item => item !== checkbox.value);
            }
        });
    });

    containerDiv.appendChild(newloanPresentDiv)
    checkalreadySelected(selectedsettleLoanCode,'settleloan')
}
function createNumberInputsSettleloan(array){
    const container = document.createElement('div');
    container.className = 'selectedBoxSettleloan'
    container.id = 'selectedBoxSettleloan'
    container.textContent = 'Enter INSTALLMENTS for the LOAN(s) TO BE SETTLED as shown in your payslip'

    const lastIndex = array.length - 1;
    array.forEach((item, index) => {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'inputWrapperSettleloan';
        wrapperDiv.id = `inputWrapperSettleloan${index}`;
        if(index == 0&&index == lastIndex){
            wrapperDiv.style.borderRadius = '10px'
        }else if(index == lastIndex){
            wrapperDiv.style.borderRadius = '0 0 10px 10px'
        }

        const label = document.createElement('label');
        label.htmlFor = `numberInputSettleloan${index}`;
        label.textContent = item;

        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.id = `numberInputSettleloan${index}`;
        numberInput.name = item.replace(/\s+/g, '-').toLowerCase(); // create a name based on the item
        numberInput.min = 0;

        wrapperDiv.appendChild(label);
        wrapperDiv.appendChild(numberInput);

        container.appendChild(wrapperDiv);

    });

    // document.getElementById(`numberInput${index}`).addEventListener('input', (event) => {
    //     selectedAllowancesAmounts.push(event.target.value);
    // });

    // if (document.getElementById(`numberInput${index}`).value != null) {
    //     document.getElementById(`numberInput${index}`).value = basicAmount;
    // } else {
    //     document.getElementById(`numberInput${index}`).value = 0
    // }
    containerDiv.appendChild(container)
    if (direction) {
        container.classList.add('slide-in-right');
    } else {
        container.classList.add('slide-in-left');
    }
}
function createTaxOption() {
    const taxDiv = document.createElement('div')
    taxDiv.className = 'taxDiv'
    taxDiv.id = 'taxDiv'
    taxDiv.textContent = 'do you have non-permanent overtime/allowance for TAX CORRECTION? '
    taxDiv.style.width = '90%'

    // Create the first radio input for Government
    const optDiv = document.createElement('div')
    optDiv.className = 'yes'
    const yesInput = document.createElement('input');
    yesInput.setAttribute('type', 'radio');
    yesInput.setAttribute('name', 'taxCorrection');
    yesInput.setAttribute('id', 'taxCorrection');
    yesInput.setAttribute('value', 'yes');
    const yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', 'taxCorrection');
    yesLabel.textContent = 'yes';
    optDiv.appendChild(yesInput)
    optDiv.appendChild(yesLabel)

    // Create the second radio input for Council
    const opt2 = document.createElement('div')
    opt2.className ='no'
    const noInput = document.createElement('input');
    noInput.setAttribute('type', 'radio');
    noInput.setAttribute('name', 'taxCorrection');
    noInput.setAttribute('id', 'taxCorrection');
    noInput.setAttribute('value', 'no');
    const noLabel = document.createElement('label');
    noLabel.setAttribute('for', 'taxCorrection');
    noLabel.textContent = 'no';
    opt2.appendChild(noInput)
    opt2.appendChild(noLabel)


    // Append the radio inputs before the labels to the parent div
    taxDiv.appendChild(optDiv);
    taxDiv.appendChild(opt2);

    containerDiv.appendChild(taxDiv)

    // Add change event listeners to the radio buttons
    yesInput.addEventListener('change', (event)=>{
        taxCorrection = event.target.value;
    });
    noInput.addEventListener('change', (event)=>{
        taxCorrection = event.target.value;
    });

    // Set initial value for checked
    if (taxCorrection === 'none' || taxCorrection === 'no') {
        noInput.setAttribute('checked', 'no');
        taxCorrection = 'no'
    } else {
        yesInput.setAttribute('checked','yes')
    }
    if (direction) {
        taxDiv.classList.add('slide-in-right');
    } else {
        taxDiv.classList.add('slide-in-left');
    }
}
function createTaxCorrectionInputs() {
    const container = document.createElement('div');
    container.className = 'taxDivInput'
    container.id = 'taxDivInput'
    container.textContent = 'Enter your INCOME TAX and PENSION deductions as reflected in your payslip'

    const lastIndex = 1;
    ['Income Tax','Pension deduction'].forEach((item, index) => {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'inputWrapperTax';
        wrapperDiv.id = `inputWrapperTax${index}`;
        if(index == 0&&index == lastIndex){
            wrapperDiv.style.borderRadius = '10px'
        }else if(index == lastIndex){
            wrapperDiv.style.borderRadius = '0 0 10px 10px'
        }

        const label = document.createElement('label');
        label.htmlFor = `numberInputTax${index}`;
        label.textContent = item;

        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.id = `numberInputTax${index}`;
        numberInput.name = item.replace(/\s+/g, '-').toLowerCase(); // create a name based on the item
        numberInput.min = 0;

        wrapperDiv.appendChild(label);
        wrapperDiv.appendChild(numberInput);

        container.appendChild(wrapperDiv);

    });

    containerDiv.appendChild(container)
    if (direction) {
        container.classList.add('slide-in-right');
    } else {
        container.classList.add('slide-in-left');
    }
}
function maritalStatus() {
    const maritalDiv = document.createElement('div')
    maritalDiv.className = 'maritalDiv'
    maritalDiv.id = 'maritalDiv'
    maritalDiv.textContent = 'Select YES if you are either MARRIED, DIRVOCED or WIDOWED'
    maritalDiv.style.width = '90%'

    // Create the first radio input for Government
    const optDiv = document.createElement('div')
    optDiv.className = 'yes'
    const yesInput = document.createElement('input');
    yesInput.setAttribute('type', 'radio');
    yesInput.setAttribute('name', 'maritalStatus');
    yesInput.setAttribute('id', 'maritalStatus');
    yesInput.setAttribute('value', 'yes');
    const yesLabel = document.createElement('label');
    yesLabel.setAttribute('for', 'maritalStatus');
    yesLabel.textContent = 'yes';
    optDiv.appendChild(yesInput)
    optDiv.appendChild(yesLabel)

    // Create the second radio input for Council
    const opt2 = document.createElement('div')
    opt2.className ='no'
    const noInput = document.createElement('input');
    noInput.setAttribute('type', 'radio');
    noInput.setAttribute('name', 'maritalStatus');
    noInput.setAttribute('id', 'maritalStatus');
    noInput.setAttribute('value', 'no');
    const noLabel = document.createElement('label');
    noLabel.setAttribute('for', 'maritalStatus');
    noLabel.textContent = 'no';
    opt2.appendChild(noInput)
    opt2.appendChild(noLabel)


    // Append the radio inputs before the labels to the parent div
    maritalDiv.appendChild(optDiv);
    maritalDiv.appendChild(opt2);

    containerDiv.appendChild(maritalDiv)

    // Add change event listeners to the radio buttons
    yesInput.addEventListener('change', (event)=>{
        maritalStatusValue = event.target.value;
    });
    noInput.addEventListener('change', (event)=>{
        maritalStatusValue = event.target.value;
    });

    // Set initial value for checked
    if (maritalStatusValue === 'no') {
        noInput.setAttribute('checked', 'no');
        maritalStatusValue = 'no'
    } else {
        yesInput.setAttribute('checked','yes')
    }
    if (direction) {
        maritalDiv.classList.add('slide-in-right');
    } else {
        maritalDiv.classList.add('slide-in-left');
    }
}