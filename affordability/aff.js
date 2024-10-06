async function fillPdf() {
    // Fetch the PDF file from the img folder
    const overview = await fetch('../img/overview.pdf');
    const affordability = await fetch('../img/affordability.pdf');
    const blil = await fetch('../img/blil.pdf');
    const tawuOdc = await fetch('../img/tawuOdc.pdf');
    const govOdc = await fetch('../img/govOdc.pdf');
    const bpopf = await fetch('../img/bpopfOdc.pdf');
    const botsLife = await fetch('../img/botsLifeOdc.pdf');
    const declaration = await fetch('../img/declaration.pdf');
    const fcbApp1 = await fetch('../img/fcbApp1.pdf');
    const fcbApp2 = await fetch('../img/fcbApp2.pdf');
    const fcbApp3 = await fetch('../img/fcbApp3.pdf');


    const pdfBytesoverview = await overview.arrayBuffer();
    const pdfBytesaffordability = await affordability.arrayBuffer();
    const pdfBytesblil = await blil.arrayBuffer();
    const pdfBytestawuOdc = await tawuOdc.arrayBuffer();
    const pdfBytesgovOdc = await govOdc.arrayBuffer();
    const pdfBytesbpopf = await bpopf.arrayBuffer();
    const pdfBytesbotsLife = await botsLife.arrayBuffer();
    const pdfBytesdeclaration = await declaration.arrayBuffer();
    const pdfBytesfcbApp1 = await fcbApp1.arrayBuffer();
    const pdfBytesfcbApp2 = await fcbApp2.arrayBuffer();
    const pdfBytesfcbApp3 = await fcbApp3.arrayBuffer();


    // Load the PDFDocument
    const pdfDocoverview = await PDFLib.PDFDocument.load(pdfBytesoverview);
    const pdfDocaffordability = await PDFLib.PDFDocument.load(pdfBytesaffordability);
    const pdfDocblil = await PDFLib.PDFDocument.load(pdfBytesblil);
    const pdfDoctawuOdc = await PDFLib.PDFDocument.load(pdfBytestawuOdc);
    const pdfDocgovOdc = await PDFLib.PDFDocument.load(pdfBytesgovOdc);
    const pdfDocbpopf = await PDFLib.PDFDocument.load(pdfBytesbpopf);
    const pdfDocbotsLife = await PDFLib.PDFDocument.load(pdfBytesbotsLife);
    const pdfDocdeclaration = await PDFLib.PDFDocument.load(pdfBytesdeclaration);
    const pdfDocfcbApp1 = await PDFLib.PDFDocument.load(pdfBytesfcbApp1);
    const pdfDocfcbApp2 = await PDFLib.PDFDocument.load(pdfBytesfcbApp2);
    const pdfDocfcbApp3 = await PDFLib.PDFDocument.load(pdfBytesfcbApp3);


    // Get the form containing all fields
    const formoverview = pdfDocoverview.getForm();
    const formaffordability = pdfDocaffordability.getForm();
    const formblil = pdfDocblil.getForm();
    const formtawu = pdfDoctawuOdc.getForm();
    const formgov = pdfDocgovOdc.getForm();
    const formbpopf = pdfDocbpopf.getForm();
    const formbotsLife = pdfDocbotsLife.getForm();
    const formdeclaration = pdfDocdeclaration.getForm();
    const formfcbApp1 = pdfDocfcbApp1.getForm();
    const formfcbApp2 = pdfDocfcbApp2.getForm();
    const formfcbApp3 = pdfDocfcbApp3.getForm();

    const fields = formgov.getFields();
    fields.forEach((field) => {
        console.log(`Field name: ${field.getName()}`);
    });

    // real data for affordability
    
    //var MaxLoan = findClosestKey(calMax[10])
    //console.log("maxloan: " + MaxLoan)

    


    
    fillOverview(formoverview)
    fillaffordability(formaffordability,calMax)
    fillblil(formblil)
    pg1(formfcbApp1)
    var c = ''
    switch (inputid) {
        case 'tawu26':
        case 'tawu23':
            filltawuOdc()
            c = 't'
            break;
        case 'botusafe26':
        case 'botusafe23':
        case 'botusafe20':
            fillgovOdc()
            c = 'g'
            break;
        default:
            break;
    }

    
    const date = formgov.getTextField('date');
    date.setText('100000');
    const capitalBank = formtawu.getTextField('capitalBank');
    capitalBank.setText('Capital Bank');
    const installment = formbpopf.getTextField('installment');
    installment.setText('100000');
    const loanTerm = formbotsLife.getTextField('loanTerm');
    loanTerm.setText('96');
    const agentName = formdeclaration.getTextField('agentName');
    agentName.setText('Thapelo Holonga');
    const Signature_4 = formfcbApp2.getTextField('Signature_4');
    Signature_4.setText('t.h.');
    const beneficiaryCellNumber = formfcbApp3.getTextField('beneficiaryCellNumber');
    beneficiaryCellNumber.setText('74650235');

    // 
    formblil.flatten();
    formoverview.flatten();
    formaffordability.flatten();
    formgov.flatten();
    formtawu.flatten();
    formbpopf.flatten();
    formbotsLife.flatten();
    formdeclaration.flatten();
    formfcbApp1.flatten();
    formfcbApp2.flatten();
    formfcbApp3.flatten();

    const filledPdfBytes = await pdfDocoverview.save();
    const filledPdfBytes1 = await pdfDocaffordability.save();
    const filledPdfBytes2 = await pdfDocblil.save();
    const filledPdfBytes3 = await pdfDocgovOdc.save();
    const filledPdfBytes4 = await pdfDoctawuOdc.save();
    const filledPdfBytes5 = await pdfDocbpopf.save();
    const filledPdfBytes6 = await pdfDocbotsLife.save();
    const filledPdfBytes7 = await pdfDocdeclaration.save();
    const filledPdfBytes8 = await pdfDocfcbApp1.save();
    const filledPdfBytes9 = await pdfDocfcbApp2.save();
    const filledPdfBytes10 = await pdfDocfcbApp3.save();

    // Trigger the download of the filled PDF
    const blob = new Blob([filledPdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    const blob2 = new Blob([filledPdfBytes1], { type: 'application/pdf' });
    const url2 = URL.createObjectURL(blob2);

    const blob3 = new Blob([filledPdfBytes2], { type: 'application/pdf' });
    const url3 = URL.createObjectURL(blob3);

    const blob4 = new Blob([filledPdfBytes3], { type: 'application/pdf' });
    const url4 = URL.createObjectURL(blob4);

    const blob5 = new Blob([filledPdfBytes4], { type: 'application/pdf' });
    const url5 = URL.createObjectURL(blob5);

    const blob6 = new Blob([filledPdfBytes5], { type: 'application/pdf' });
    const url6 = URL.createObjectURL(blob6);

    const blob7 = new Blob([filledPdfBytes6], { type: 'application/pdf' });
    const url7 = URL.createObjectURL(blob7);

    const blob8 = new Blob([filledPdfBytes7], { type: 'application/pdf' });
    const url8 = URL.createObjectURL(blob8);

    const blob9 = new Blob([filledPdfBytes8], { type: 'application/pdf' });
    const url9 = URL.createObjectURL(blob9);

    const blob10 = new Blob([filledPdfBytes9], { type: 'application/pdf' });
    const url10 = URL.createObjectURL(blob10);

    const blob11 = new Blob([filledPdfBytes10], { type: 'application/pdf' });
    const url11 = URL.createObjectURL(blob11);


    const optionsDiv = document.createElement('div')
    optionsDiv.className = 'optionsDiv'
    optionsDiv.id = 'optionsDiv'
    optionsDiv.style.width = '90%'
    optionsDiv.style.height = '90%'

//     // Display the PDF in an iframe
//     const iframe = document.createElement('iframe');
//     iframe.style.width = '100%'
//     iframe.style.height = '100%'
//     iframe.style.backgroundColor = 'white'
//     iframe.src = url;
// // iframe.hidden = false;
// // Display the PDF in an iframe
// const iframe2 = document.createElement('iframe');
// iframe2.style.width = '100%'
// iframe2.style.height = '100%'
// iframe2.style.backgroundColor = 'white'
// iframe2.src = url2;
// Create a container div for the checkboxes
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column'; // Align checkboxes vertically

// Array of labels for the checkboxes
const labels = ['overview', 'affordability', 'credit life', 'odc', 'fcbApp1'];

// Loop through the labels to create checkboxes and their labels
labels.forEach(labelText => {
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.alignItems = 'center'; // Align label and checkbox

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = labelText;
    if (labelText === 'odc') {
        checkbox.disabled = true; // Disable the checkbox
    }
    
    // Add the checkbox and the label text to the label element
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(labelText));
    
    // Append the label to the container
    container.appendChild(label);
});


// Show the download button
const downloadButton = document.createElement('button');
downloadButton.textContent = 'download'
// downloadButton.hidden = false;

// optionsDiv.appendChild(iframe)
// optionsDiv.appendChild(iframe2)

optionsDiv.appendChild(container)


optionsDiv.appendChild(downloadButton)
// // Handle download on button click
downloadButton.onclick = function() {
    // const checkedLabels = [];
    
    // Select all checkboxes
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');

        const a = document.createElement('a');
        const b = document.createElement('a');
        const c = document.createElement('a')
        const d = document.createElement('a')


        a.href = url;
        b.href = url2;
        c.href = url3;
        e.href = url4;
        f.href = url5;
        d.href = url9;//pg1

        a.download = 'overview.pdf';
        b.download = 'affordability.pdf';
        c.download = 'insurance.pdf';
        d.download = 'page1.pdf';
        d.download = 'odc.pdf';
        d.download = 'odc.pdf';


        document.body.appendChild(a);
        document.body.appendChild(b);
        document.body.appendChild(c);
        document.body.appendChild(d);
        document.body.appendChild(e);
        document.body.appendChild(f);



        checkboxes.forEach(checkbox => {
            // Check if the checkbox is checked
            console.log(checkbox)
            if (checkbox.checked) {
                // Get the label text associated with the checkbox
                const label = checkbox.id;
                console.log(label)
                switch (label) {
                    case 'overview':
                        a.click();
                        break;
                    case 'affordability':
                        b.click();
                        break;
                    case 'credit life':
                        c.click()
                        break;
                    case 'odc':
                        if (c === 'g') {
                            e.click()
                            document.body.removeChild(e);

                        } else {
                            f.click()
                            document.body.removeChild(f);

                        }
                        break;
                    case 'fcbApp1':
                        d.click()
                        break;
                    default:
                        break;
                }
            }
        });

        document.body.removeChild(a);
        document.body.removeChild(b);
        document.body.removeChild(c);
        document.body.removeChild(d);


    };
    containerDiv.appendChild(optionsDiv)
    // const c = document.createElement('a');
    // c.href = url3;
    // c.download = 'blil.pdf';
    // document.body.appendChild(c);

    // const d = document.createElement('a');
    // d.href = url4;
    // d.download = 'govOdc.pdf';
    // document.body.appendChild(d);

    // const e = document.createElement('a');
    // e.href = url5;
    // e.download = 'tawuOdc.pdf';
    // document.body.appendChild(e);

    // const f = document.createElement('a');
    // f.href = url6;
    // f.download = 'bpopfOdc.pdf';
    // document.body.appendChild(f);

    // const g = document.createElement('a');
    // g.href = url7;
    // g.download = 'botsLifeOdc.pdf';
    // document.body.appendChild(g);

    // const h = document.createElement('a');
    // h.href = url8;
    // h.download = 'declaration.pdf';
    // document.body.appendChild(h);

    // const k = document.createElement('a');
    // k.href = url11;
    // k.download = 'fcbpg3.pdf';
    // document.body.appendChild(k);

    // const j = document.createElement('a');
    // j.href = url10;
    // j.download = 'fcbpg2.pdf';
    // document.body.appendChild(j);

    // const i = document.createElement('a');
    // i.href = url9;
    // i.download = 'fcbpg1.pdf';
    // document.body.appendChild(i);

    // c.click();
    // d.click();
    // e.click();
    // f.click();
    // g.click();
    // h.click();
    // i.click()
    // j.click()
    // k.click()

    // document.body.removeChild(c);
    // document.body.removeChild(d);
    // document.body.removeChild(e);
    // document.body.removeChild(f);
    // document.body.removeChild(g);
    // document.body.removeChild(h);
    // document.body.removeChild(i);
    // document.body.removeChild(j);
    // document.body.removeChild(k);
    if (direction) {
        optionsDiv.classList.add('slide-in-right');
    } else {
        optionsDiv.classList.add('slide-in-left');
    }

}
function fillOverview(form){
    const loanAmount = form.getTextField('loanAmount');
    loanAmount.setText(loan.toString());
    loanAmount.setFontSize(16);

    const installmentz = form.getTextField('installment');
    installmentz.setText(installment.toString());
    installmentz.setFontSize(16);

    const termr = form.getTextField('term');
    termr.setText(term.toString());
    termr.setFontSize(16);

    const netSalary = form.getTextField('netSalary');
        ///var net = aff[8]-over[0]
        //console.log(aff[8] + '  ' +over[0]+'   '+net)
    netSalary.setText(Number(net).toFixed(2).toString());
    netSalary.setFontSize(16);

    const b2cz = form.getTextField('b2c');
        //var settle = addPairs(settleLoanBalances)
    b2cz.setText(Number(b2c).toFixed(2).toString());
    b2cz.setFontSize(16);

    const date = form.getTextField('date');
    var s = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    date.setText(s.toString());
    date.setFontSize(16);

    const name = form.getTextField('customerName')
    name.setFontSize(16)
    name.setText('')

    const customerSignature = form.getTextField('customerSignature');
    customerSignature.setFontSize(16)
    //customerSignature.setText('100000');

    const managerSignature = form.getTextField('managerSignature');
    managerSignature.setFontSize(16)
    //managerSignature.setText('100000');
}
function fillaffordability(form,aff){

    // return [Number(basicAmount),permanentAllowance,adjBasicSalary,Number(deductionAmount),
    //     otherLoans,adjNettIncome,
    //     taxx,settleloans,Number(n11.toFixed(2)),rule,n13]



    const customerName = form.getTextField('customerName');
    customerName.setText('');
    const brokerName = form.getTextField('brokerName');
    brokerName.setText('')
    const basicSalary = form.getTextField('basicSalary')
    basicSalary.setText(aff[0].toString())

    
    var index = 0;
    for (let allowance in allowanceInputs) {
        
        if (allowanceInputs.hasOwnProperty(allowance)) {
            const allField = form.getTextField(`all${parseInt(index) + 1}`);  // Dynamic field 'allX'
            allField.setText(allowance);  // Set the current index as the text for 'allX'
            
            const allowanceField = form.getTextField(`allowance${parseInt(index) + 1}`);  // Dynamic field 'allowanceX'
            allowanceField.setText(allowanceInputs[allowance]);  // Set the value from allowanceInputs for 'allowanceX'
        }
        index +=1;
    }

    const adjBasicSalary = form.getTextField('adjBasicSalary');
    adjBasicSalary.setText(aff[2].toString());


    const deductions = form.getTextField('deductions');
    deductions.setText(aff[3].toString());

    const otherLoans = form.getTextField('otherLoans');
    otherLoans.setText(aff[4].toString());

    const adjNetIncome = form.getTextField('adjNetIncome');
    adjNetIncome.setText(Number(aff[5]).toFixed(2));

    const taxCorrection = form.getTextField('taxCorrection');
    taxCorrection.setText(aff[6].toString());

    const settleLoans = form.getTextField('settleLoans');
    settleLoans.setText(aff[7].toString());
    
    const adjNetIncome2 = form.getTextField('adjNetIncome2');
    adjNetIncome2.setText(aff[8].toString());

    const rule = form.getTextField('rule');
    rule.setText(aff[9].toString());

    const maxQualify = form.getTextField('maxQualify');
    maxQualify.setText(Number(aff[10]).toFixed(2).toString());



    const loanAmountz = form.getTextField('loanAmount');
    loanAmountz.setText(loan.toString());
    loanAmountz.setFontSize(12);

    const installmentz = form.getTextField('installment');
    installmentz.setText(installment.toString());
    installmentz.setFontSize(12);

    const termr = form.getTextField('term');
    termr.setText(term.toString());
    termr.setFontSize(12);

    const netSalary = form.getTextField('netSalary');
        //var net = aff[8]-over[0]
        //console.log(aff[8] + '  ' +over[0]+'   '+net)
    netSalary.setText(Number(net).toFixed(2).toString());
    netSalary.setFontSize(12);

    const b2cz = form.getTextField('b2c');
        //var settle = addPairs(settleLoanBalances)
        b2cz.setText(Number(b2c).toFixed(2).toString());
        b2cz.setFontSize(12);


    const blilpremium = form.getTextField('blilpremium');
    var se = 2*(h14.toFixed(2))
    blilpremium.setText(se.toString());

    var index2 = 0;
    for (let settle in settleLoanBalances) {
        index2 +=1;
        if (settleLoanBalances.hasOwnProperty(settle)) {
            // const allField = form.getTextField(`set${parseInt(index2)}`);  // Dynamic field 'allX'
            // allField.setText(settle);  // Set the current index as the text for 'allX'
            
            const allowanceField = form.getTextField(`settle${parseInt(index2)}`);  // Dynamic field 'allowanceX'
            allowanceField.setText(settleLoanBalances[settle].toString());  // Set the value from allowanceInputs for 'allowanceX'
        }
    }

    const customerSignature = form.getTextField('customerSignature');
    //customerSignature.setText('customerSignature');
}


function fillblil(form){
    const bankName = form.getTextField('bankName');
    bankName.setText('First Capital Bank');

    const firstName = form.getTextField('firstName');
    //firstName.setText('100000');

    const surname = form.getTextField('surname');
    //surname.setText('100000');

    const nationality = form.getTextField('nationality');
    nationality.setText('Motswana');

    const addressLine1 = form.getTextField('addressLine1');
    //addressLine1.setText('100000');

    const addressLine2 = form.getTextField('addressLine2');
    //addressLine2.setText('100000');

    const occupation = form.getTextField('occupation');
    //occupation.setText('100000');

    const accType = form.getCheckBox('accType');
    accType.check();

    //const cellNo = form.getTextField('cellNo');
    //cellNo.setText('100000');
    //const workNo = form.getTextField('workNo');
    //workNo.setText('100000');

    const male = form.getCheckBox('male');
    const female = form.getCheckBox('female');
    if (gender==='male') {
        male.check();
    } else {
        female.check();
    }

    const repaymentFrequency = form.getCheckBox('repaymentFrequency');
    repaymentFrequency.check();

    const termr = form.getTextField('loanTerm');
    termr.setText(term.toString());

    const totalLoanAmount = form.getTextField('totalLoanAmount');
    totalLoanAmount.setText(Number(f14.toFixed(2)).toString());

    const singlePremium = form.getTextField('singlePremium');
    singlePremium.setText(h14.toFixed(2).toString());

    //const customerSignature = form.getTextField('customerSignature');
    //customerSignature.setText('100000');

    //const bankSignature = form.getTextField('bankSignature');
    //bankSignature.setText('100000');

    // const date1 = form.getTextField('date1');
    // date1.setText(s.toString());

    const date = form.getTextField('date');
    var s = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    date.setText(s.toString());

    //const omang = form.getTextField('omang');
    //omang.setText('100000');

    const birthdate = form.getTextField('birthdate');
    birthdate.setText(dayValue+'/'+monthValue+'/'+yearValue);
}
function fillgovOdc(form){
    const date = form.getTextField('date');
    var s = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    date.setText(s.toString());    // const omangNumber = form.getTextField('omangNumber');
    // omangNumber.setText('100000');
    // const customerName = form.getTextField('customerName');
    // customerName.setText('100000');
    // const omangNumber2 = form.getTextField('omangNumber2');
    // omangNumber2.setText('100000');
    // const ministry = form.getTextField('ministry');
    // ministry.setText('100000');
    // const postOf = form.getTextField('postOf');
    // postOf.setText('100000');
    // const situated = form.getTextField('situated');
    // situated.setText('100000');
    // const residingAt = form.getTextField('residingAt');
    // residingAt.setText('100000');
    const loanAmount = form.getTextField('loanAmount');
    loanAmount.setText(loan.toString());
    const loanTerm = form.getTextField('loanTerm');
    loanTerm.setText(term.toString());
    const installmentf = form.getTextField('installment');
    installmentf.setText(installment.toString());
    const loanTerm1 = form.getTextField('loanTerm1');
    loanTerm1.setText(term.toString());
    const loanTerm2 = form.getTextField('loanTerm2');
    loanTerm2.setText(term.toString());

    const loaner = form.getTextField('botlhaleInvestments');
    gaborone.setText('BOTLHALE INVESTENTS (PTY)LTD');

    const gaborone = form.getTextField('gaborone');
    gaborone.setText('Gaborone');
    // const customerName1 = form.getTextField('customerName1');
    // customerName1.setText('100000');
    const date2 = form.getTextField('date2');
    date2.setText('100000');
    // const customerSignature = form.getTextField('customerSignature');
    // customerSignature.setText('100000');
}
function filltawuOdc(form){
    const date = form.getTextField('date');
    var s = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    date.setText(s.toString());
    // const omangNumber = form.getTextField('omangNumber');
    //     omangNumber.setText('100000');
    // const customerName = form.getTextField('customerName');
    //     customerName.setText('100000');
    // const place = form.getTextField('place');
    //     place.setText('100000');
    // const institution = form.getTextField('institution');
    //     institution.setText('100000');
    // const position = form.getTextField('position');
    //     position.setText('100000');
    // const omangNumber1 = form.getTextField('omangNumber1');
    //     omangNumber1.setText('100000');

   
    const capitalBank = form.getTextField('capitalBank');
        capitalBank.setText('First Capital Bank');
    const loanTerm = form.getTextField('loanTerm');
        loanTerm.setText(term.toString());
    const installmenta = form.getTextField('installment');
        installmenta.setText(installment.toString());
    const loanTerm1 = form.getTextField('loanTerm1');
        loanTerm1.setText(term.toString());
    const date1 = form.getTextField('date1');
        date1.setText(s.toString());
    // const customerSignature = form.getTextField('customerSignature');
    //     customerSignature.setText('100000');

}
function fillBotsLife(form){
    const date = form.getTextField('date');
    var s = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    date.setText(s.toString());
    date.setFontSize(16);

    const omangNumber = form.getTextField('omang');
    //omangNumber.setText('100000');
    const customerName = form.getTextField('customerName');
    //customerName.setText('100000');
    const residingAt = form.getTextField('addressLine1');
    //residingAt.setText('100000');
    const residingAt2 = form.getTextField('addressLine2');
    //residingAt2.setText('100000');
    const loanAmount = form.getTextField('totalLoanAmount');
    loanAmount.setText();
    const loanTerm = form.getTextField('loanTerm');
    loanTerm.setText('100000');
    const installment = form.getTextField('installment');
    installment.setText('100000');
    const loanTerm1 = form.getTextField('loanTerm1');
    loanTerm1.setText('100000');
    const loanTerm2 = form.getTextField('loanTerm2');
    loanTerm2.setText('100000');
    const installment1 = form.getTextField('installment1');
    installment1.setText('100000');
    const place = form.getTextField('place');
    place.setText('100000');
    const customerName1 = form.getTextField('customerName1');
    customerName1.setText('100000');
    const date1 = form.getTextField('date1');
    date1.setText('100000');
    const customerSignature = form.getTextField('customerSignature');
    customerSignature.setText('100000');


}
function fillBpopf(form){
    const date = form.getTextField('date');
    date.setText('100000');
    const omangNumber = form.getTextField('omangNumber');
    omangNumber.setText('100000');
    const customerName = form.getTextField('customerName');
    customerName.setText('100000');
    const residingAt = form.getTextField('residingAt');
    residingAt.setText('100000');
    const loanAmount = form.getTextField('loanAmount');
    loanAmount.setText('100000');
    const loanTerm = form.getTextField('loanTerm');
    loanTerm.setText('100000');
    const installment = form.getTextField('installment');
    installment.setText('100000');
    const loanTerm1 = form.getTextField('loanTerm1');
    loanTerm1.setText('100000');
    const loanTerm2 = form.getTextField('loanTerm2');
    loanTerm2.setText('100000');
    const installment1 = form.getTextField('installment1');
    installment1.setText('100000');
    const place = form.getTextField('place');
    place.setText('100000');
    const customerName1 = form.getTextField('customerName1');
    customerName1.setText('100000');
    const date1 = form.getTextField('date1');
    date1.setText('100000');
    const customerSignature = form.getTextField('customerSignature');
    customerSignature.setText('100000');

}
function fillDeclaration(form) {
    const date = form.getTextField('date');
        date.setText('100000');
    const omangNumber = form.getTextField('omangNumber');
        omangNumber.setText('100000');
    const customerName = form.getTextField('customerName');
        customerName.setText('100000');
    const agentName = form.getTextField('agentName');
        agentName.setText('100000');
    const agentSignature = form.getTextField('agentSignature');
    agentSignature.setText('100000');
}
var gender = 'male';
function pg1(form) {
    // streetName
    // boxNumber
    // cellNumber
    // plotNumber
    // city1
    // ward
    // officeNumber
    // city
    // email   
    // occupation  
    // omangNumber1
    // employerAddress
    // employmentDate
    // basicSalary 
    // deduction 
    // payslipNetPay 
    // accHolder   
    // branchName 
    // accNumber 
    // branchCode 
    // bankName
    // accType
    // refName 
    // refName1 
    // Street Name_2
    // Plot Number
    // refWard
    // ref2Ward
    // refCity
    // refCity2
    // refCellNumber
    // refCellNumber2
    // employerName
    // department



    const interestRate = form.getTextField('interestRate');
    var i = rt*100;
    interestRate.setText(i.toString());
    const loanAmount = form.getTextField('loanAmount');
    loanAmount.setText(loan.toString());
    const adminFee = form.getTextField('adminFee');
    adminFee.setText(Number(d14.toFixed(2)).toString());
    const loanTerm = form.getTextField('loanTerm');
    loanTerm.setText(term.toString());
    const installmentOne = form.getTextField('installmentOne');
    var c = g14 + h14
    installmentOne.setText(c.toFixed(2).toString());
    const insurancePremium = form.getTextField('insurancePremium');
    insurancePremium.setText(h14.toFixed(2).toString());
    const processingFee = form.getTextField('processingFee');
    processingFee.setText(Number(e14.toFixed(2)).toString());
    const totalLoanAmount = form.getTextField('totalLoanAmount');
    totalLoanAmount.setText(Number(f14.toFixed(2)).toString());
    const apr = form.getTextField('apr');
    var j = calculateRate(term, -installment, loan,0,0,0.1)*1200;
    apr.setText(j.toFixed(2).toString());
    const collectionFee = form.getTextField('collectionFee');
    collectionFee.setText(Number(i14.toFixed(2)).toString());
    const installmentz = form.getTextField('installment');
    installmentz.setText(installment.toString()); 
        
    // surname 
    // firstName 
    // title 
    // omangNumber 
    // birthdate 
    // gender 
    // Check Box3 -
    // notMarried 
    // marriedCOP
    // marriedOCOP
    // widowed 
    // dirvoced -
    // marriageDate
    // othername
}
function pg2(form) {
    // customerSignature
    // agentSignature
    // date1
    // witness1
    // Signature_3
    const Signature_4 = form.getTextField('Signature_4');
    Signature_4.setText('100000');
    // date2
    // date3
    // date4
    // agentName
    // witness2
    // customerName
}
function pg3(form) {
    // beneficiaryName
    // beneficiaryID
    // beneficiaryBirthdate
    // beneficiaryGender
    // beneficiaryAddress
    const beneficiaryCellNumber = form.getTextField('beneficiaryCellNumber');
    beneficiaryCellNumber.setText('100000');
    // title
    // customerName1
    // customerID 
    // customerGender
    // customerBirthdate
    // customerAddress
    // customerCellNumber
    // workNumber
    // customerSignature1
    // bankSignature
}
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
var taxPensionDeductions = [0,0];
var maritalStatusValue = 'no'
var birthdate = 0;

const containerDiv = document.querySelector('.container');
createBasicDiv()
var currentDiv = ''
var current = ''

document.getElementById('next').addEventListener('click',()=>{
    // fillPdf().then(() => {
    //     console.log('PDF filled successfully!');
    //   }).catch(err => {
    //     console.error('Error filling PDF:', err);
    //   });
    direction = true;
    currentDiv = containerDiv.firstElementChild.className.split(' ')[0]
    current = document.getElementById(currentDiv)
    if(basicAmount <= 0 ){
        showNotification('basic amount cannot be 0 or less')
        triggerShakeEffect()
        return;
    }else if (selectedNewLoanCode.length == 0 && currentDiv === 'newloanPresentSelection') {
        showNotification('please SELECT a new loan')
        triggerShakeEffect()
        return;
    }else if(hasZeroValue(NewLoanInputs) && currentDiv === 'selectedBoxNewloan'){
        showNotification('please enter New loan installent')
        triggerShakeEffect()
        return;
    }else if (selectedsettleLoanCode.length == 0 && currentDiv === 'settleloanPresentSelection') {
        showNotification('please SELECT a loan you want to SETTLE')
        triggerShakeEffect()
      return;
    }else if (dayValue === '' || monthValue === '' || yearValue === '') {
        showNotification('please SELECT a valid birthdate')
        triggerShakeEffect()
      return;
    }
    current.classList.add('shrink');
    setTimeout(() => {
        switch (currentDiv) {
            case 'basic':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('basic'));
                //chooseLoan()
                createWorkDiv()
                break;
            case 'workPlace':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                if (workPlace === 'government') {
                    createGovDepartmentDiv()
                } else {
                    createCouncilDepartmentDiv()
                }
                break;
            case 'department':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                switch (department) {
                    case 'bdf':
                        bdfAllowanceSelection()
                        selectionGroup = 1;
                        break;
                    case 'police':
                        policeAllowanceSelection()
                        selectionGroup = 2;
                        break;
                    case 'education':
                        educationAllowanceSelection()
                        selectionGroup = 3;
                        break;
                    default:
                        break;
                }
                break;
            case 'allowance':
                if (!containerDiv.contains(current)) {
                    break;             
                 }else if(selectedAllowances.length == 0 ) {
                    showNotification('No permanent Alowances selected')
                    containerDiv.removeChild(current);
                    createDeductionDiv()
                    break;
                 }
                containerDiv.removeChild(current);
                createNumberInputs(selectedAllowances)
                break;
            case 'selectedBox':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                createDeductionDiv()
                break;
            case 'deduction':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                createNewloanDiv()
                break;
            case 'newloanPresent':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                if (newloanPresent === 'yes') {
                    createLoanCodesOption()
                } else {
                    createSettleLoanDiv()
                }
                break;
            case 'newloanPresentSelection':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                createNumberInputsNewloan(selectedNewLoanCode)
                break;
            case 'selectedBoxNewloan':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                createSettleLoanDiv()
                break;
            case 'oldloanSettle':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                if (settleloan === 'yes') {
                    createSettleLoanCodesOption()
                } else {
                    createTaxOption()
                }
                break;
            case 'settleloanPresentSelection':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                 
                containerDiv.removeChild(current);
                createNumberInputsSettleloan(selectedsettleLoanCode)
                break;
            case 'selectedBoxSettleloan':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                createNumberInputsSettleloanBalances(selectedsettleLoanCode)
                break;
            case 'selectedBoxSettleloanBalance':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                createTaxOption()
                break;
            case 'taxDiv':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                if (taxCorrection === 'yes') {
                    createTaxCorrectionInputs()
                }else {
                    maritalStatus()
                }
                break;
            case 'taxDivInput':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(current);
                maritalStatus()
                break;
            case 'maritalDiv':
                if (!containerDiv.contains(current)) {
                    break;             
                    }
                containerDiv.removeChild(current);
                getAge()
                break;
            case 'birthdateDiv':
                if(!containerDiv.contains(current)){
                    break;             
                    }
                containerDiv.removeChild(current);
                selectQualifyingProduct();
                break;
            case 'productDiv':
                if(!containerDiv.contains(current)){
                    break;
                    }
                containerDiv.removeChild(current);
                chooseLoan()
                //fillPdf()
                break;
            case 'chooseLoanDiv':
                if(!containerDiv.contains(current)){
                    break;
                    }
                containerDiv.removeChild(current);
                fillPdf()
                break;
            default:
                break;
        }
    }, 500);

})
function updateTerm(x,value) {
    value.textContent = x;
}
function updateInstallment(value){
    value.textContent = installment;
}
function updateLoanAmount(value) {
    value.textContent = loan;
}

function updateNetPay(value) {
    value.textContent = net;
}

function updateB2c(value) {
    value.textContent = b2c
}
var installment = 0;
var net = 0;
var b2c = 0;
var loan = 0;
var totalLoanAmount = 0;

var MaxLoan = 0;
var calMax = 0;

function chooseLoan() {
    calMax = calculateMaxInstallment()

    MaxLoan = findClosestKey(calMax[10])
    installment = MaxLoan[0];
    loan = MaxLoan[1];

    net = Number(calMax[8]-MaxLoan[0]).toFixed(2)
    
    var settle3 = addPairs(settleLoanBalances)  ///make global
    b2c = Number(MaxLoan[1]-2*MaxLoan[2]-settle3).toFixed(2);

    // Create the basic div
    const chooseLoanDiv = document.createElement('div');
    chooseLoanDiv.className = 'chooseLoanDiv'
    chooseLoanDiv.id = 'chooseLoanDiv'
    chooseLoanDiv.textContent = 'Maximum loan selected, adjust as required'
    chooseLoanDiv.style.display = 'flex';  // This makes the spans align horizontally
    chooseLoanDiv.style.flexDirection = 'vertical';  // Adds space between the two spans 

    // const contain1 = document.createElement('div');
    // contain1.className = 'l6xers'
    //     const Actual1 = document.createElement('div')
    //     Actual1.textContent = 'Actual'
    //     const Actual11 = document.createElement('div')
    //     Actual11.textContent = 'Parameter'
    //     const Actual111 = document.createElement('div')
    //     Actual111.textContent = 'Edit'
    // contain1.appendChild(Actual1)
    // contain1.appendChild(Actual11)
    // contain1.appendChild(Actual111)

    const contain2 = document.createElement('div');
    contain2.className = 'l6xers'
        const Actual2 = document.createElement('div')
        Actual2.textContent = term.toString()
        const Actual22 = document.createElement('div')
        Actual22.style.display = 'flex'
        Actual22.style.flexDirection = 'column'
        //Actual22.textContent = 'term'
            // Create the first span with text 'min 6'
            const minSpan = document.createElement('span');
            minSpan.textContent = 'term'; 
            // Create the second span with text 'mx 96'
            const maxSpan = document.createElement('span');
            maxSpan.textContent = 'max '+term.toString();
            // Append the spans to the div
        Actual22.appendChild(minSpan);
        Actual22.appendChild(maxSpan);
        const Actual222 = document.createElement('div')
            const selectElement = document.createElement('select');
            // Create options (6, 12, 18, 24)
            const options = [96,84,72,60,48,36,30,24,18,12,6];
            options.forEach(optionValue => {
                const option = document.createElement('option');
                option.value = optionValue;
                option.textContent = optionValue;
                selectElement.appendChild(option);
            });

            //term
            selectElement.addEventListener('change', (e)=>{
                var change = e.target.value;
                term = change;
                calMax = calculateMaxInstallment()
                MaxLoan = findClosestKey(calMax[10])
                installment = MaxLoan[0];
                loan = MaxLoan[1];


                net = Number(calMax[8]-MaxLoan[0]).toFixed(2)
                
                var settle = addPairs(settleLoanBalances)  ///make global
                b2c = Number(MaxLoan[1]-2*MaxLoan[2]-settle).toFixed(2);

                updateTerm(change,Actual2)
                updateInstallment(Actual4)
                updateLoanAmount(Actual3)
                updateNetPay(Actual5)
                updateB2c(Actual6)
            });

            // Apply some styling to the select element (optional)
            selectElement.style.padding = '5px';
            selectElement.style.margin = '5px';
            selectElement.style.fontSize = '16px';            
        Actual222.appendChild(selectElement);
    contain2.appendChild(Actual22) 
    contain2.appendChild(Actual2) 
    contain2.appendChild(Actual222) 

    const contain3 = document.createElement('div');
    contain3.className = 'l6xers'
        const Actual3 = document.createElement('div')
        Actual3.textContent = loan.toString();
        const Actual33 = document.createElement('div')
        Actual33.style.display = 'flex'
        Actual33.style.flexDirection = 'column'
            const amountSpan = document.createElement('span');
            amountSpan.textContent = 'loan Amount';
            const maxloan = document.createElement('span');
            maxloan.textContent = 'max '+ loan.toString();
            Actual33.appendChild(amountSpan);
            Actual33.appendChild(maxloan);

        const Actual333 = document.createElement('div')
            // Create an editable span for numeric input
            const editableSpan = document.createElement('span');
            editableSpan.textContent = '0';  // Default value
            editableSpan.setAttribute('contenteditable', 'true');  // Make it editable

            // Apply styles to make it look more like an input
            editableSpan.style.border = '1px solid #ccc';
            editableSpan.style.padding = '5px';
            editableSpan.style.width = '50px';
            editableSpan.style.display = 'inline-block';
            editableSpan.style.textAlign = 'center';

            // loan amount
            editableSpan.addEventListener('input', function (e) {
                var number = e.target.textContent;
                if (isNaN(number)) {
                    number = number.slice(0, -1);  // Remove non-numeric character
                }

                if (isMultipleOf500AndInRange(number)) {
                var t = totalMonthlyAmountDisplay(number);
                installment = t[0];
                loan = number;

                calMax = calculateMaxInstallment()

                net = Number(calMax[8] - installment).toFixed(2);

                var settle = addPairs(settleLoanBalances)  ///make global
                b2c = Number(loan - 2*t[1]-settle).toFixed(2);

                updateTerm(term,Actual2)
                updateInstallment(Actual4)
                updateLoanAmount(Actual3)
                updateNetPay(Actual5)
                updateB2c(Actual6)

                } 
                
            });

            // Append the editable span to the container div
        Actual333.appendChild(editableSpan);
    contain3.appendChild(Actual33) 
    contain3.appendChild(Actual3) 
    contain3.appendChild(Actual333) 

    const contain4 = document.createElement('div');
    contain4.className = 'l6xers'
    const Actual4 = document.createElement('div')
        Actual4.textContent = installment.toString()
        const Actual44 = document.createElement('div')
        Actual44.style.display = 'flex'
        Actual44.style.flexDirection = 'column'
            const installentSpan = document.createElement('span');
            installentSpan.textContent = 'Installment'
            const maxInstallent = document.createElement('span');
            maxInstallent.textContent = 'max '+installment.toString();
            Actual44.appendChild(installentSpan);
            Actual44.appendChild(maxInstallent);

        const Actual444 = document.createElement('div')
            // Create an editable span for numeric input
            const editableSpanInstallment = document.createElement('span');
            editableSpanInstallment.textContent = '0';  // Default value
            editableSpanInstallment.setAttribute('contenteditable', 'true');  // Make it editable

            // Apply styles to make it look more like an input
            editableSpanInstallment.style.border = '1px solid #ccc';
            editableSpanInstallment.style.padding = '5px';
            editableSpanInstallment.style.width = '50px';
            editableSpanInstallment.style.display = 'inline-block';
            editableSpanInstallment.style.textAlign = 'center';

            // installment
            editableSpanInstallment.addEventListener('input', function (e) {
                var number = e.target.textContent;
                if (isNaN(number)) {
                    number = number.slice(0, -1);  // Remove non-numeric character
                }
                var result = findClosestKey(number);  //intalment, loanAmount, insurance
                installment = result[0];
                loan = result[1];

                calMax = calculateMaxInstallment()

                net = Number(calMax[8] - installment).toFixed(2);

                var settle = addPairs(settleLoanBalances)  ///make global
                b2c = Number(loan-2*result[2]-settle).toFixed(2);

                updateTerm(term,Actual2)
                updateInstallment(Actual4)
                updateLoanAmount(Actual3)
                updateNetPay(Actual5)
                updateB2c(Actual6)
            });

            // Append the editable span to the container div
            Actual444.appendChild(editableSpanInstallment);
    contain4.appendChild(Actual44) 
    contain4.appendChild(Actual4) 
    contain4.appendChild(Actual444)

    const contain5 = document.createElement('div');
    contain5.className = 'l6xers'
    const Actual5 = document.createElement('div')
        Actual5.textContent = net.toString();
        const Actual55 = document.createElement('div')
        Actual55.style.display = 'flex'
        Actual55.style.flexDirection = 'column'
            const netSalarySpan = document.createElement('span');
            netSalarySpan.textContent = 'Net Salary';
            const minNetsalary = document.createElement('span');
            minNetsalary.textContent = 'min '+net.toString();
            Actual55.appendChild(netSalarySpan);
            Actual55.appendChild(minNetsalary);

        const Actual555 = document.createElement('div')
            // Create an editable span for numeric input
            const editableSpanNetSalary = document.createElement('span');
            editableSpanNetSalary.textContent = '0';  // Default value
            editableSpanNetSalary.setAttribute('contenteditable', 'true');  // Make it editable

            // Apply styles to make it look more like an input
            editableSpanNetSalary.style.border = '1px solid #ccc';
            editableSpanNetSalary.style.padding = '5px';
            editableSpanNetSalary.style.width = '50px';
            editableSpanNetSalary.style.display = 'inline-block';
            editableSpanNetSalary.style.textAlign = 'center';

            // Netsalary
            editableSpanNetSalary.addEventListener('input', function (e) {
                var number = e.target.textContent;
                if (isNaN(number)) {
                    number = number.slice(0, -1);  // Remove non-numeric character
                }
                calMax = calculateMaxInstallment()
                    var t = calMax[8] - number
                if(t >= rule && t <= calMax[8]){
                    var result = findClosestKey(t);  //intalment, loanAmount, insurance
                    installment = result[0];
                    loan = result[1];

                    net = Number(calMax[8] - installment).toFixed(2);

                    var settle = addPairs(settleLoanBalances)  ///make global
                    b2c = Number(loan-2*result[2]-settle).toFixed(2);
                }

                updateTerm(term,Actual2)
                updateInstallment(Actual4)
                updateLoanAmount(Actual3)
                updateNetPay(Actual5)
                updateB2c(Actual6)
                
            });

            // Append the editable span to the container div
        Actual555.appendChild(editableSpanNetSalary);
    contain5.appendChild(Actual55) 
    contain5.appendChild(Actual5) 
    contain5.appendChild(Actual555)


    const contain6 = document.createElement('div');
    contain6.className = 'l6xers'
    const Actual6 = document.createElement('div')
    Actual6.textContent = b2c.toString();
    const Actual66 = document.createElement('div')
    Actual66.style.display = 'flex'
    Actual66.style.flexDirection = 'column'
        const b2cSpan = document.createElement('span');
        b2cSpan.textContent = 'net Loan';
        const maxb2cSpan = document.createElement('span');
        maxb2cSpan.textContent = 'max '+ b2c.toString();
        Actual66.appendChild(b2cSpan);
        Actual66.appendChild(maxb2cSpan);

    const Actual666 = document.createElement('div')
        // Create an editable span for numeric input
        const editableSpanB2C = document.createElement('span');
        editableSpanB2C.textContent = '0';  // Default value
        editableSpanB2C.setAttribute('contenteditable', 'true');  // Make it editable

        // Apply styles to make it look more like an input
        editableSpanB2C.style.border = '1px solid #ccc';
        editableSpanB2C.style.padding = '5px';
        editableSpanB2C.style.width = '50px';
        editableSpanB2C.style.display = 'inline-block';
        editableSpanB2C.style.textAlign = 'center';

        // B2c
        editableSpanB2C.addEventListener('input', function (e) {
                var number = e.target.textContent;
                if (isNaN(number)) {
                    number = number.slice(0, -1);  // Remove non-numeric character
                }
                number = Number(number)
                calMax = calculateMaxInstallment()
                var result = findClosestKey(calMax[8]); 
                //findClosestKey = intallment, loanAmount, insurance
                var settle = addPairs(settleLoanBalances)  ///make global

                var t = number + settle;
                console.log(t)

                t = Math.ceil(t / 500) * 500;
                
                var f = totalMonthlyAmountDisplay(t)
                console.log(f)

                var t2 = t + 2*f[1]

                if((t-number+settle)<2*f[1]){
                    t2 = Math.ceil(t2 / 500) * 500;
                }else{
                    t2 = t
                }

                if(number >= 1000 && t2 <= result[1]){
                    console.log('here')
                    f = totalMonthlyAmountDisplay(t2)
                    installment = f[0];
                    loan = t2;

                    net = Number(calMax[8] - installment).toFixed(2);
                    b2c = Number(loan-2*f[1]-settle).toFixed(2);
                    
                    updateTerm(term,Actual2)
                    updateInstallment(Actual4)
                    updateLoanAmount(Actual3)
                    updateNetPay(Actual5)
                    updateB2c(Actual6)
                }

                
        });

        // Append the editable span to the container div
        Actual666.appendChild(editableSpanB2C);
        contain6.appendChild(Actual66) 
        contain6.appendChild(Actual6) 
        contain6.appendChild(Actual666)


    //chooseLoanDiv.appendChild(contain1)
    chooseLoanDiv.appendChild(contain2)
    chooseLoanDiv.appendChild(contain3)
    chooseLoanDiv.appendChild(contain4)
    chooseLoanDiv.appendChild(contain5)
    chooseLoanDiv.appendChild(contain6)

    containerDiv.appendChild(chooseLoanDiv)
    if (direction) {
        chooseLoanDiv.classList.add('slide-in-right');
    } else {
        chooseLoanDiv.classList.add('slide-in-left');
}
 
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function viewLoanDetailsDiv(){
    var interest = rt*100//interest
    var loanTerm = term//months
    var loanAmount = loan;
    var totalMonthlyInstalment = installment
    var adminFee = Number(d14.toFixed(2))
    var processingFee = Number(e14.toFixed(2))
    var totalLoanAmount = Number(f14.toFixed(2));
    var monthlyInsurancePremiumm = Number(h14.toFixed(2))
    var monthlyLoanInstalment = Number(g14.toFixed(2))+monthlyInsurancePremiumm;
    var monthlyEmployerCollection = Number(i14.toFixed(2))
    var apr = 0;
    apr = calculateRate(loanTerm, -totalMonthlyInstalment, loanAmount,0,0,0.1)*1200;
}
  function isMultipleOf500AndInRange(number) {
    const isMultipleOf500 = number % 500 === 0;
    const isInRange = number >= 5000 && number <= 700000;
    return isMultipleOf500 && isInRange;
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

document.getElementById('back').addEventListener('click',()=>{
    direction = false;
    currentDiv = containerDiv.firstElementChild.className.split(' ')[0]
    current = document.getElementById(currentDiv)
    if (current.classList[0] === 'basic') {
        return;
    }
    current.classList.add('shrink');
    setTimeout(() => {
        switch (currentDiv) {
            case 'workPlace':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('workPlace'));
                createBasicDiv()
                break;
            case 'department':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('department'));
                createWorkDiv()
                break;
            case 'allowance':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('allowance'));
                if (workPlace === 'government') {
                    createGovDepartmentDiv()
                } else {
                    createCouncilDepartmentDiv()
                }
                break;
            case 'selectedBox':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('selectedBox'));
                if (selectionGroup == 1) {
                    bdfAllowanceSelection()
                } else if(selectionGroup == 2) {
                    policeAllowanceSelection()
                } else if(selectionGroup == 3) {
                    educationAllowanceSelection()
                } else {

                }
                break;
            case 'deduction':
                if (!containerDiv.contains(current)) {
                    break;             
                 }                
                 containerDiv.removeChild(document.getElementById('deduction'));
                if (selectedAllowances.length == 0 && workPlace === 'government') {
                    createGovDepartmentDiv()
                }else if(selectedAllowances.length == 0 && workPlace === 'council'){
                    createCouncilDepartmentDiv()
                }else{
                    createNumberInputs(selectedAllowances)
                }
                break;
            case 'newloanPresent':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('newloanPresent'));
                createDeductionDiv()
                break;
            case 'newloanPresentSelection':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('newloanPresentSelection'));
                createNewloanDiv()
                break;
            case 'selectedBoxNewloan':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('selectedBoxNewloan'));
                createLoanCodesOption()            
                break;
            case 'oldloanSettle':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('oldloanSettle'));
                if (newloanPresent === 'yes') {
                    createNumberInputsNewloan(selectedNewLoanCode)
                } else {
                    createNewloanDiv()
                }
                break;
            case 'settleloanPresentSelection':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('settleloanPresentSelection'));
                createSettleLoanDiv()
                break;
            case 'selectedBoxSettleloan':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('selectedBoxSettleloan'));
                createSettleLoanCodesOption()
                break;
            case 'selectedBoxSettleloanBalance':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('selectedBoxSettleloanBalance'));
                createNumberInputsSettleloan(selectedsettleLoanCode)
                break;
            case 'taxDiv':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('taxDiv'));
                if (settleloan === 'yes') {
                    createNumberInputsSettleloanBalances(selectedsettleLoanCode)
                } else {
                    createSettleLoanDiv()
                }
                break;
            case 'taxDivInput':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('taxDivInput'));
                createTaxOption()
                break;
            case 'maritalDiv':
                if (!containerDiv.contains(current)) {
                    break;             
                 }
                containerDiv.removeChild(document.getElementById('maritalDiv'));
                if (taxCorrection === 'yes') {
                    createTaxCorrectionInputs()
                } else {
                    createTaxOption()
                }
                break;
            case 'birthdateDiv':
                if (!containerDiv.contains(current)) {
                    break;             
                }
                containerDiv.removeChild(document.getElementById('birthdateDiv'));
                if (dayValue === '' || dayValue === 'Day') {
                    dayValue = 'Day';
                }
                if(monthValue === '' || monthValue === 'Month'){
                    monthValue = 'Month';
                }
                if(yearValue === '' || yearValue === 'Year'){
                    yearValue = 'Year';
                }
                maritalStatus()
                break;
            case 'productDiv':
                if (!containerDiv.contains(current)) {
                    break;             
                }
                containerDiv.removeChild(document.getElementById('productDiv'));
                getAge();
                break;
            case 'chooseLoanDiv':
                if (!containerDiv.contains(current)) {
                    break;             
                }
                containerDiv.removeChild(document.getElementById('chooseLoanDiv'));
                selectQualifyingProduct();
                break;
            case 'optionsDiv':
                if (!containerDiv.contains(current)) {
                    break;             
                }
                containerDiv.removeChild(document.getElementById('optionsDiv'));
                chooseLoan();
                break;
            // case 'optionsDiv':
            //     if (!containerDiv.contains(current)) {
            //         break;             
            //     }
            //     containerDiv.removeChild(document.getElementById('optionsDiv'));
            //     selectQualifyingProduct();
            //     break;
            default:
                break;
        }
    }, 500);
})
function hasZeroValue(obj) {
    // Iterate over the values of the object
    for (let key in obj) {
        if (obj[key] === 0 || obj[key] === '0' ||obj[key] === '') {
            return true; // Return true if a value is 0
        }
    }
    return false; // Return false if no value is 0
}
function showNotification(text) {
    const notification = document.getElementById('notification');
    notification.textContent = text;
        notification.classList.add('show');
    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}
function triggerShakeEffect() {
    const div = document.getElementById('container');
    div.classList.add('shake');

    // Remove the shake class after the animation completes
    div.addEventListener('animationend', () => {
        div.classList.remove('shake');
    }, { once: true });
}
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

    councilInput.disabled = true;

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

    // Create the second radio input for other
    const opt4 = document.createElement('div')
    opt4.className ='otherSub'
    const otherInput = document.createElement('input');
    otherInput.setAttribute('type', 'radio');
    otherInput.setAttribute('name', 'department');
    otherInput.setAttribute('id', 'other');

    otherInput.disabled = true;

    otherInput.setAttribute('value', 'other');
    const otherLabel = document.createElement('label');
    otherLabel.setAttribute('for', 'other');
    otherLabel.textContent = 'other';
    opt4.appendChild(otherInput)
    opt4.appendChild(otherLabel)

    // Append the radio inputs before the labels to the parent div
    departmentDiv.appendChild(optDiv);
    departmentDiv.appendChild(opt2);
    departmentDiv.appendChild(opt3);
    departmentDiv.appendChild(opt4);

    containerDiv.appendChild(departmentDiv)

    // Add change event listeners to the radio buttons
    bdfInput.addEventListener('change', (event)=>{
        department = event.target.value;
        govDepartment = department;

        resetSelectedArrays()
    });
    policeInput.addEventListener('change', (event)=>{
        department = event.target.value;
        govDepartment = department;

        resetSelectedArrays()
    });
    educationInput.addEventListener('change', (event)=>{
        department = event.target.value;
        govDepartment = department;

        resetSelectedArrays()
    });
    otherInput.addEventListener('change', (event)=>{
        department = event.target.value;
        govDepartment = department;

        resetSelectedArrays()
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
        case 'other':
            otherInput.setAttribute('checked', 'other');
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
function resetSelectedArrays() {
    selectedAllowances = [];
    allowanceInputs = []
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
    bdfAllowanceDiv.textContent = 'Select your PERMANENT ALLOWANCES(payslip)'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
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

        newDiv.appendChild(checkboxDiv)

        checkbox.addEventListener('change', () => {
            var f = item.replace(/\s+/g, '-').toLowerCase()
            if (checkbox.checked) {
                selectedAllowances.push(checkbox.value)
                allowanceInputs[f] = 0
            } else {
                selectedAllowances = selectedAllowances.filter(item => item !== checkbox.value);
                delete allowanceInputs[f]
            }
        });
    });
    bdfAllowanceDiv.appendChild(newDiv)
    containerDiv.appendChild(bdfAllowanceDiv)
    checkalreadySelected(selectedAllowances,'bdf')

    if (direction) {
        bdfAllowanceDiv.classList.add('slide-in-right');
    } else {
        bdfAllowanceDiv.classList.add('slide-in-left');
    }
}
function policeAllowanceSelection(){
    const allowance =  ['Housing and upkeep allowance','Professional allowance','Overtime allowance 20%',
        'Scarce skill allowance','Housing allowance','Commuted allowance',
        'Technical Skills allowance','Band allowance','Police special Hazard allowance',
        'Police Plain Clothes Allowance']
    // Create the bdfAllowance div
    const policeAllowanceDiv = document.createElement('div');
    policeAllowanceDiv.className = 'allowance';
    policeAllowanceDiv.id = 'allowance';
    policeAllowanceDiv.textContent = 'Select your PERMANENT ALLOWANCES(payslip)'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
    allowance.forEach((item, index) => {
        const checkboxDiv = document.createElement('div')
        checkboxDiv.className = 'checkboxDiv'
        checkboxDiv.id = `allowance${index}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `policeAllowance${item}`;
        checkbox.name = 'allowance';
        checkbox.value = item;

        const label = document.createElement('label');
        label.htmlFor = `allowance${index}`;
        label.textContent = item;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(document.createElement('br'));

        newDiv.appendChild(checkboxDiv)

        checkbox.addEventListener('change', () => {
            var f = item.replace(/\s+/g, '-').toLowerCase()
            if (checkbox.checked) {
                selectedAllowances.push(checkbox.value)
                allowanceInputs[f] = 0
            } else {
                selectedAllowances = selectedAllowances.filter(item => item !== checkbox.value);
                delete allowanceInputs[f]
            }
        });

    });
    policeAllowanceDiv.appendChild(newDiv)
    containerDiv.appendChild(policeAllowanceDiv)
    checkalreadySelected(selectedAllowances,'police')

    if (direction) {
        policeAllowanceDiv.classList.add('slide-in-right');
    } else {
        policeAllowanceDiv.classList.add('slide-in-left');
    }
}
function educationAllowanceSelection() {
    const allowance =  ['Housing and upkeep allowance','Professional allowance',
        'Scarce skill allowance','Housing allowance','Commuted allowance',
        'Technical Skills allowance']
    // Create the bdfAllowance div
    const educationAllowanceDiv = document.createElement('div');
    educationAllowanceDiv.className = 'allowance';
    educationAllowanceDiv.id = 'allowance';
    educationAllowanceDiv.textContent = 'Select your PERMANENT ALLOWANCES(payslip)'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
    allowance.forEach((item, index) => {
        const checkboxDiv = document.createElement('div')
        checkboxDiv.className = 'checkboxDiv'
        checkboxDiv.id = `allowance${index}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `educationAllowance${item}`;
        checkbox.name = 'allowance';
        checkbox.value = item;

        const label = document.createElement('label');
        label.htmlFor = `allowance${index}`;
        label.textContent = item;

        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        checkboxDiv.appendChild(document.createElement('br'));

        newDiv.appendChild(checkboxDiv)

        checkbox.addEventListener('change', () => {
            var f = item.replace(/\s+/g, '-').toLowerCase()
            if (checkbox.checked) {
                selectedAllowances.push(checkbox.value)
                allowanceInputs[f] = 0
            } else {
                selectedAllowances = selectedAllowances.filter(item => item !== checkbox.value);
                delete allowanceInputs[f]
            }
        });
    });
    educationAllowanceDiv.appendChild(newDiv)
    containerDiv.appendChild(educationAllowanceDiv)
    checkalreadySelected(selectedAllowances,'education')

    if (direction) {
        educationAllowanceDiv.classList.add('slide-in-right');
    } else {
        educationAllowanceDiv.classList.add('slide-in-left');
    }
}
function checkalreadySelected(array,section) {
    array.forEach(name => {
        const checkbox = document.querySelector(`input[type="checkbox"][id="${section}Allowance${name}"]`);
        if (checkbox) {
            checkbox.checked = true; // Check the checkbox if it exists
        }
    })
}
var allowanceInputs = {}
function createNumberInputs(array) {
    const container = document.createElement('div');
    container.className = 'selectedBox'
    container.id = 'selectedBox'
    container.textContent = 'Enter ALLOWANCE AMOUNT as shown on your payslip'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
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
        numberInput.max = 900000;

        wrapperDiv.appendChild(label);
        wrapperDiv.appendChild(numberInput);

        newDiv.appendChild(wrapperDiv);

        numberInput.addEventListener('input', (event) => {
            allowanceInputs[numberInput.name] =  event.target.value;
        });
        
        if (numberInput.value != null) {
            numberInput.value = allowanceInputs[numberInput.name];
        } else {
            numberInput.value = 0
        }
    });

    container.appendChild(newDiv)
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
    newloanDiv.textContent = 'Do you have a NEW LOAN that has not deducted yet?(not for loans you want to settle)'
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
    newloanPresentDiv.textContent = 'Select your NEW LOAN CODE'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
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

        newDiv.appendChild(checkboxDiv)
        checkbox.addEventListener('change', () => {
            var f = item.replace(/\s+/g, '-').toLowerCase()
            if (checkbox.checked) {
                selectedNewLoanCode.push(checkbox.value)
                NewLoanInputs[f] = 0
            } else {
                selectedNewLoanCode = selectedNewLoanCode.filter(item => item !== checkbox.value);
                delete NewLoanInputs[f]
            }
        })
    })
    
    newloanPresentDiv.appendChild(newDiv)
    containerDiv.appendChild(newloanPresentDiv)
    checkalreadySelected(selectedNewLoanCode,'newloan')
    if (direction) {
        newloanPresentDiv.classList.add('slide-in-right');
    } else {
        newloanPresentDiv.classList.add('slide-in-left');
    }
}
var NewLoanInputs = {}
function createNumberInputsNewloan(array) {
    const container = document.createElement('div');
    container.className = 'selectedBoxNewloan'
    container.id = 'selectedBoxNewloan'
    container.textContent = 'Enter NEW LOAN INSTALLMENT as shown in your loan contract'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
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

        newDiv.appendChild(wrapperDiv);

        numberInput.addEventListener('input', (event) => {
            NewLoanInputs[numberInput.name] =  event.target.value;
            console.log(NewLoanInputs)
        });
        
        if (numberInput.value != null) {
            numberInput.value = NewLoanInputs[numberInput.name];
        } else {
            numberInput.value = 0
        }
    });
    container.appendChild(newDiv)
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
    settleloanDiv.textContent = 'Is there any loan(s) you want to SETTLE?'
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
    newloanPresentDiv.textContent = 'Select the LOAN CODE you want to SETTLE'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
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

        newDiv.appendChild(checkboxDiv)
        checkbox.addEventListener('change', () => {
            var f = item.replace(/\s+/g, '-').toLowerCase()
            if (checkbox.checked) {
                selectedsettleLoanCode.push(checkbox.value)
                settleLoanInputs[f] = 0
                settleLoanBalances[f] = 0
            } else {
                selectedsettleLoanCode = selectedsettleLoanCode.filter(item => item !== checkbox.value);
                delete settleLoanInputs[f]
            }
        });
    });

    newloanPresentDiv.appendChild(newDiv)
    containerDiv.appendChild(newloanPresentDiv)
    checkalreadySelected(selectedsettleLoanCode,'settleloan')
    if (direction) {
        newloanPresentDiv.classList.add('slide-in-right');
    } else {
        newloanPresentDiv.classList.add('slide-in-left');
    }
}
var settleLoanInputs = {}
function createNumberInputsSettleloan(array){
    const container = document.createElement('div');
    container.className = 'selectedBoxSettleloan'
    container.id = 'selectedBoxSettleloan'
    container.textContent = 'Enter INSTALLMENTS for the LOAN(s) TO BE SETTLED'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
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

        newDiv.appendChild(wrapperDiv);
        numberInput.addEventListener('input', (event) => {
            settleLoanInputs[numberInput.name] =  event.target.value;
        });
        
        if (numberInput.value != null) {
            numberInput.value = settleLoanInputs[numberInput.name];
        } else {
            numberInput.value = 0
        }

    });

    container.appendChild(newDiv)
    containerDiv.appendChild(container)
    if (direction) {
        container.classList.add('slide-in-right');
    } else {
        container.classList.add('slide-in-left');
    }
}
var settleLoanBalances = {}
function createNumberInputsSettleloanBalances(array){
    const container = document.createElement('div');
    container.className = 'selectedBoxSettleloanBalance'
    container.id = 'selectedBoxSettleloanBalance'
    container.textContent = 'Enter your loan(s) SETTLEMENT BALANCE'

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
    const lastIndex = array.length - 1;
    array.forEach((item, index) => {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'inputWrapperSettleloanBalance';
        wrapperDiv.id = `inputWrapperSettleloanBalance${index}`;
        if(index == 0&&index == lastIndex){
            wrapperDiv.style.borderRadius = '10px'
        }else if(index == lastIndex){
            wrapperDiv.style.borderRadius = '0 0 10px 10px'
        }

        const label = document.createElement('label');
        label.htmlFor = `inputWrapperSettleloanBalance${index}`;
        label.textContent = item;

        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.id = `inputWrapperSettleloanBalance${index}`;
        numberInput.name = item.replace(/\s+/g, '-').toLowerCase(); // create a name based on the item
        numberInput.min = 0;

        wrapperDiv.appendChild(label);
        wrapperDiv.appendChild(numberInput);

        newDiv.appendChild(wrapperDiv);
        numberInput.addEventListener('input', (event) => {
            settleLoanBalances[numberInput.name] =  event.target.value;
        });
        
        if (numberInput.value != null) {
            numberInput.value = settleLoanBalances[numberInput.name];
        } else {
            numberInput.value = 0
        }

    });

    
    container.appendChild(newDiv)
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

    const newDiv = document.createElement('div');
    newDiv.className = 'newDiv';
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

        newDiv.appendChild(wrapperDiv);
        numberInput.addEventListener('input', (event) => {
            taxPensionDeductions[index] =  event.target.value;
        });
        
        if (numberInput.value != null) {
            numberInput.value = taxPensionDeductions[index];
        }

    });

    container.appendChild(newDiv)
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
var productValue = 0.20;
var inputid = 'botusafe20'
var productMaxYear = 'all'
const today = new Date();
function selectQualifyingProduct() {

        // Create a Date object for your birthday
        const birthday = new Date(`${yearValue}-${monthValue}-${dayValue}`);
        const sixtiethBirthday = new Date(birthday);
        if(productMaxYear === 'botsLife'||productMaxYear === 'bpopf'||productMaxYear === 'dikgosana') {
            sixtiethBirthday.setFullYear(sixtiethBirthday.getFullYear() + 75);
        } else{
            sixtiethBirthday.setFullYear(sixtiethBirthday.getFullYear() + 60);
        }
    
        const monthsUntilSixty = monthsDifference(today, sixtiethBirthday);
        if (monthsUntilSixty>=96) {
            term = 96;
        } else if(monthsUntilSixty>=84) {
            term = 84;
        } else if(monthsUntilSixty>=72) {
            term = 72;
        } else if(monthsUntilSixty>=60) {
            term = 60;
        } else if(monthsUntilSixty>=54) {
            term = 54;
        } else if(monthsUntilSixty>=48) {
            term = 48;
        } else if(monthsUntilSixty>=36){
            term =36;
        } else if(monthsUntilSixty>=30) {
            term = 30;
        } else if(monthsUntilSixty>=24) {
            term = 24;
        } else if(monthsUntilSixty>=18) {
            term = 18;
        } else if(monthsUntilSixty>=12) {
            term = 12;
        } else if(monthsUntilSixty>=6) {
            term = 6;
        } else {
            showNotification("client does not qualify due to Age")
            return;
        }
    
    const productDiv = document.createElement('div')
    productDiv.className = 'productDiv'
    productDiv.id = 'productDiv'
    productDiv.textContent = 'Select qualifying product'
    productDiv.style.width = '90%'

    const optDiv = document.createElement('div')
    optDiv.className = 'botusafe20'
    const bot20Input = document.createElement('input');
    bot20Input.setAttribute('type', 'radio');
    bot20Input.setAttribute('name', 'product');
    bot20Input.setAttribute('id', 'botusafe20');
    bot20Input.setAttribute('value', '0.20');
    const bot20Label = document.createElement('label');
    bot20Label.setAttribute('for', 'product');
    bot20Label.textContent = 'botusafe 20%';
    optDiv.appendChild(bot20Input)
    optDiv.appendChild(bot20Label)

    
    const opt4 = document.createElement('div')
    opt4.className = 'tawu23'
    const tawu23Input = document.createElement('input');
    tawu23Input.setAttribute('type', 'radio');
    tawu23Input.setAttribute('name', 'product');
    tawu23Input.setAttribute('id', 'tawu23');
    tawu23Input.setAttribute('value', '0.23');
    const tawu23Label = document.createElement('label');
    tawu23Label.setAttribute('for', 'product');
    tawu23Label.textContent = 'tawu 23%';
    opt4.appendChild(tawu23Input)
    opt4.appendChild(tawu23Label)

    const opt2 = document.createElement('div')
    opt2.className = 'botusafe23'
    const bot23Input = document.createElement('input');
    bot23Input.setAttribute('type', 'radio');
    bot23Input.setAttribute('name', 'product');
    bot23Input.setAttribute('id', 'botusafe23');
    bot23Input.setAttribute('value', '0.23');
    const bot23Label = document.createElement('label');
    bot23Label.setAttribute('for', 'product');
    bot23Label.textContent = 'botusafe 23%';
    opt2.appendChild(bot23Input)
    opt2.appendChild(bot23Label)

    const opt5 = document.createElement('div')
    opt5.className = 'tawu26'
    const tawu26Input = document.createElement('input');
    tawu26Input.setAttribute('type', 'radio');
    tawu26Input.setAttribute('name', 'product');
    tawu26Input.setAttribute('id', 'tawu26');
    tawu26Input.setAttribute('value', '0.26');
    const tawu26Label = document.createElement('label');
    tawu26Label.setAttribute('for', 'product');
    tawu26Label.textContent = 'tawu 26%';
    opt5.appendChild(tawu26Input)
    opt5.appendChild(tawu26Label)

    const opt3 = document.createElement('div')
    opt3.className = 'botusafe26'
    const bot26Input = document.createElement('input');
    bot26Input.setAttribute('type', 'radio');
    bot26Input.setAttribute('name', 'product');
    bot26Input.setAttribute('id', 'botusafe26');
    bot26Input.setAttribute('value', '0.26');
    const bot26Label = document.createElement('label');
    bot26Label.setAttribute('for', 'product');
    bot26Label.textContent = 'botusafe 26%';
    opt3.appendChild(bot26Input)
    opt3.appendChild(bot26Label)


    // Append the radio inputs before the labels to the parent div
    productDiv.appendChild(optDiv);
    productDiv.appendChild(opt4);
    productDiv.appendChild(opt2);
    productDiv.appendChild(opt5);
    productDiv.appendChild(opt3);


    containerDiv.appendChild(productDiv)
    // Add change event listeners to the radio buttons
    bot20Input.addEventListener('change', (event)=>{
        productValue = Number(event.target.value);
        rt = productValue;
        b6 = productValue/12;
        c9 = 1 - 0.0271;
        inputid = 'botusafe20'

    });
    bot23Input.addEventListener('change', (event)=>{
        productValue = Number(event.target.value);
        rt = productValue;
        b6 = productValue/12;
        c9 = 1 - 0.0271;
        inputid = 'botusafe23'

    });
    bot26Input.addEventListener('change', (event)=>{
        productValue = Number(event.target.value);
        rt = productValue;
        b6 = productValue/12;
        c9 = 1 - 0.0271;
        inputid = 'botusafe26'

    });
    tawu23Input.addEventListener('change', (event)=>{
        productValue = Number(event.target.value);
        rt = productValue;
        b6 = productValue/12;
        c9 = 1 - 0.025;
        inputid = 'tawu23'

    });
    tawu26Input.addEventListener('change', (event)=>{
        productValue = Number(event.target.value);
        rt = productValue;
        b6 = productValue/12;
        c9 = 1 - 0.025;
        inputid = 'tawu26'

    });

    // Set initial value for checked
    switch (inputid) {
        case 'tawu26':
            tawu26Input.checked = true;
            break;
        case 'tawu23':
            tawu23Input.checked = true;
            break;
        case 'botusafe26':
            bot26Input.checked = true;
            break;
        case 'botusafe23':
            bot23Input.checked = true;
            break;
        case 'botusafe20':
            bot20Input.checked = true;
            break;
    
        default:
            break;
    }


    if (direction) {
        productDiv.classList.add('slide-in-right');
    } else {
        productDiv.classList.add('slide-in-left');
    }

}
var dayValue = 'Day';
var monthValue = 'Month';
let yearValue = 'Year';

function getAge() {
    // Create the basic div
    const birthdateDiv = document.createElement('div');
    birthdateDiv.className = 'birthdateDiv'
    birthdateDiv.id = 'birthdateDiv'
    birthdateDiv.textContent = 'Enter your birthday'
    // Create the form element
    const form = document.createElement('form');
    form.className = 'birthdateForm'
    
    // Create the day select element
    const daySelect = document.createElement('select');
    daySelect.setAttribute('id', 'day');
    daySelect.setAttribute('name', 'day');
    daySelect.required = true;
    
    let dayOption = document.createElement('option');
    dayOption.textContent = 'Day';
    //dayOption.value = '';
    daySelect.appendChild(dayOption);

    for (let i = 1; i <= 31; i++) {
        dayOption = document.createElement('option');
        dayOption.value = i;
        dayOption.textContent = i;
        daySelect.appendChild(dayOption);
    }
    if(dayValue === 'Day' || dayValue === ''){
        dayValue = '';
    } else{
        daySelect.value = dayValue; // Preselect the option that matches dayValue
    }
    form.appendChild(daySelect);

    // Create the month select element
    const monthSelect = document.createElement('select');
    monthSelect.setAttribute('id', 'month');
    monthSelect.setAttribute('name', 'month');
    monthSelect.required = true;

    let monthOption = document.createElement('option');
    monthOption.value = '';
    monthOption.textContent = 'Month';
    monthSelect.appendChild(monthOption);

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    months.forEach((month, index) => {
        monthOption = document.createElement('option');
        monthOption.value = index + 1;
        monthOption.textContent = month;
        monthSelect.appendChild(monthOption);
    });
    if(monthValue === 'Month' || monthValue === ''){
        monthValue = '';
    } else{
        monthSelect.value = monthValue; // Preselect the option that matches dayValue
    }
    form.appendChild(monthSelect);

    // Create the year select element
    const yearSelect = document.createElement('select');
    yearSelect.setAttribute('id', 'year');
    yearSelect.setAttribute('name', 'year');
    yearSelect.required = true;

    let yearOption = document.createElement('option');
    yearOption.value = '';
    yearOption.textContent = 'Year';
    yearSelect.appendChild(yearOption);

    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 16; i >= currentYear-75; i--) {
        yearOption = document.createElement('option');
        yearOption.value = i;
        yearOption.textContent = i;
        yearSelect.appendChild(yearOption);
    }
    if(yearValue === 'Year' || yearValue === ''){
        yearValue = '';
    } else{
        yearSelect.value = yearValue; // Preselect the option that matches dayValue
    }
    form.appendChild(yearSelect);

    // Line break
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    birthdateDiv.appendChild(form)   
    containerDiv.appendChild(birthdateDiv)

    document.getElementById('day').addEventListener('change',(event)=>{
        dayValue = event.target.value;
        if(dayValue === 'Day' || dayValue === ''){
            dayValue = '';
        }
        console.log(dayValue)
    });
    document.getElementById('month').addEventListener('change', (event)=>{
        monthValue = event.target.value;
        if(monthValue === 'Month' || monthValue === ''){
            monthValue = '';
        }
        console.log(monthValue)
    });
    document.getElementById('year').addEventListener('change', (event)=>{
        yearValue = event.target.value;
        if(yearValue === 'Year' || yearValue === ''){
            yearValue = '';
        }
        console.log(yearValue)
    });

    if (direction) {
        birthdateDiv.classList.add('slide-in-right');
    } else {
        birthdateDiv.classList.add('slide-in-left');
    }
}

function calculateTaxNonIndustrial() {
    var tax = 0;
    var permanentAllowance = Number(addPairs(allowanceInputs))
    var one = Math.floor(Number(basicAmount) + permanentAllowance);
    if (one > 0 && one < 7000) {
        tax = 0.05 * one
    } else if(one >=7000 && one < 10000) {
        tax = 350 + 0.125*(one - 7000)
    } else if(one >=10000 && one < 13000){
        tax = 725 + 0.1875*(one - 10000)
    } else{
        tax = 1087.50 + 0.25*(Number(basicAmount) + permanentAllowance - 13000 - Number(taxPensionDeductions[1]))
    }

    return Number(taxPensionDeductions[0]) - Math.floor(tax * 100) / 100
}

function addPairs(obj) {
    var sum = 0;
    for (let key in obj) {
        sum += Number(obj[key])
    }
    return sum
}

function monthsDifference(startDate, endDate) {
    // Calculate the difference in years and months
    let yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    let monthsDifference = endDate.getMonth() - startDate.getMonth();

    // Calculate total months difference
    let totalMonths = (yearsDifference * 12) + monthsDifference;

    // Adjust if endDate is before startDate in the current month
    if (endDate.getDate() < startDate.getDate()) {
        totalMonths--;
    }

    return totalMonths - 3;
}
var rule = 1300;
function calculateMaxInstallment() {
    var permanentAllowance = Number(addPairs(allowanceInputs));
    console.log(allowanceInputs)
    var otherLoans = addPairs(NewLoanInputs);
    var adjBasicSalary = Number(basicAmount) + permanentAllowance;
    var adjNettIncome = adjBasicSalary - otherLoans - Number(deductionAmount);
    var taxx = 0;
    if(taxCorrection === 'yes'){
        taxx = calculateTaxNonIndustrial();
    }
    var settleloans = addPairs(settleLoanInputs);
    var n11 = adjNettIncome + taxx + settleloans;
    if (basicAmount <= 9019) {
        rule = 600;
    } else if(maritalStatusValue === 'yes') {
        rule = 1500
    }
    var n13 = n11 - rule;
   return [Number(basicAmount),permanentAllowance,Number(adjBasicSalary.toFixed(2)),Number(deductionAmount),
            otherLoans,adjNettIncome,
            Math.floor(taxx * 100) / 100,settleloans,Number(n11.toFixed(2)),rule,n13]
}
function findClosestKey(target) {
    var arr = loans; 
    for (let i = 0; i < arr.length; i++) {
        var realMonthly = totalMonthlyAmountDisplay(arr[i]);
        var difference = realMonthly[0] - target;
        if(difference == 0 || arr[i] == 700000){
            return [realMonthly[0],arr[i],realMonthly[1]]
        }else if (difference > 0) {

            var t = totalMonthlyAmountDisplay(arr[i-1])
            return [t[0],arr[i-1],t[1]]//intalment, loanAmount, insurance
        }
    }
}
var startLoanAmount = 5000;
var maxLoanAmount = 700000;
var loans = [];
var loanAmountColumn = {}; // Loan amount column
// Loop to populate the loan amount column
for (var loanAmount = startLoanAmount; loanAmount <= maxLoanAmount; loanAmount += 500) {
    loans.push(loanAmount)
    var ckey = loanAmount.toString();
    loanAmountColumn[ckey] = loanAmount;
}
var rt = 0.20; // Annual interest rate for 20%
var b6 = rt / 12;// Monthly interest for 23%
var b9 = 0.0271; // Collections fee
var c9 = 1 - b9; // Adjusted factor for collections fee
var term = 96; // Loan term for 96 months

var d14 = 0; // d14 is ag14
var e14 = 0; // e14 is ah14
var f14 = 0; // Calculate f14
var g14 = 0; // Calculate g14
var h14 = 0; // Calculate h14
var j14 = 0; // Calculate j14
var b8 = 1.15; // Insurance
var i14 = 0; // Calculate i14
var l14 = 0; // calculate l14

function totalMonthlyAmountDisplay(selectedLoanAmount){
    // Initialize variables for calculations
    if(selectedLoanAmount.toString()==="undefined"||selectedLoanAmount.toString()==="NaN"){
    return null;
    }
    var c14 = loanAmountColumn[selectedLoanAmount.toString()]; // Example value for c14
    var ae14 = c14 * 0.0112; // Calculate ae14
    //if (selectedLoanAmount >= 257500){
    //  var ag14 = checkValueAg2(ae14);
    //}else{
    var ag14 = checkValueAg(ae14); // Calculate ag14
    
    //}
    var af14 = c14 * 0.0112; // Calculate af14
    //if (selectedLoanAmount >= 257500){
    //  var ah14 = checkValueAh2(af14)
    // }else{
        var ah14 = checkValueAh(af14); // Calculate ah14
    // }
    d14 = ag14; // d14 is ag14
    e14 = ah14; // e14 is ah14
    f14 = c14 + d14 + e14; // Calculate f14
    g14 = -PMT(b6, term, f14); // Calculate g14
    h14 = f14 / 1000 * b8; // Calculate h14
    j14 = g14 + h14; // Calculate j14
    i14 = j14 / c9 - j14; // Calculate i14

    //total interest
    l14 = (g14*term)-f14;
    //
    totalLoanAmount = Number(selectedLoanAmount + d14 + e14).toFixed(2);

    // Calculate total monthly amount+

    var totalMonthlyAmount = Number((j14 + i14).toFixed(2));
    //console.log("Actual Instalment: "+ totalMonthlyAmount)
    var loanDetails = Number(h14.toFixed(2)); 

return [totalMonthlyAmount,loanDetails]; // Output the total monthly amount
}
function checkValueAg(AE14) {
if (AE14 < 1120) {
    return 1120;
} else if (AE14 >= 2878.4) {
    return 2878.4;
}else{
    return AE14;
}
}
function checkValueAh(AF14) {
if (AF14 < 275.08) {
    return 275.08;
} else if (AF14 >= 2878.4) {
    return 2878.4;
} else {
    return AF14;
}  
}
function PMT(rate, nper, pv) {
if (rate === 0) {
    return -(pv / nper); // If rate is 0, just return the principal divided by the number of periods
} else {
    var pvif = Math.pow(1 + rate, nper);
    var pmt = pv * rate * pvif / (pvif - 1);
    return -pmt; // Negate the result to match the Excel PMT function behavior
}
}