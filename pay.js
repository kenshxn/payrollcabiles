
payPage = document.getElementById('pay-page');
displayPage = document.getElementById('display-page');
calculateBtn = document.getElementById('calculate-btn');
backBtn = document.getElementById('back-btn');


nameInput = document.getElementById('employee-name');
middleInput = document.getElementById('employee-middle');
lastInput = document.getElementById('employee-last');
idInput = document.getElementById('employee-id');
positionInput = document.getElementById('employee-position');
rateInput = document.getElementById('hourly-rate');
daysInput = document.getElementById('days-worked');


displayName = document.getElementById('display-name');
displayId = document.getElementById('display-id');
displayPosition = document.getElementById('display-position');
displayRate = document.getElementById('display-rate');
displayDays = document.getElementById('display-days');
displayGross = document.getElementById('display-gross');
displaySSS = document.getElementById('display-sss');
displayPagibig = document.getElementById('display-pagibig');
displayPhilhealth = document.getElementById('display-philhealth');
displayTax = document.getElementById('display-tax');
displayTotal = document.getElementById('display-total-deductions');
displayNet = document.getElementById('display-net-pay');


function calculatePayroll() {

    name = nameInput.value;
    middle = middleInput.value;
    last = lastInput.value;
    id = idInput.value;
    position = positionInput.value;
    rate = parseFloat(rateInput.value);
    days = parseFloat(daysInput.value);
    
    
    if (name === '' || last === '' || isNaN(rate) || isNaN(days) || rate <= 0 || days <= 0) {
        alert('Please fill in all required fields with valid numbers');
        return;
    }
    

    hoursPerDay = 8;
    grossPay = rate * hoursPerDay * days;
    

    sss = grossPay * 0.05;
    pagibig = grossPay * 0.03;
    philhealth = grossPay * 0.02;
    tax = grossPay * 0.05;
    
 
    totalDeductions = sss + pagibig + philhealth + tax;
    netPay = grossPay - totalDeductions;
    
   
    function formatMoney(amount) {
        return '₱' + amount.toFixed(2);
    }
    
   
    displayName.textContent = 'Name: ' + name + ' ' + middle + ' ' + last;
    displayId.textContent = 'ID: ' + id;
    displayPosition.textContent = 'Position: ' + position;
    displayRate.textContent = 'Hourly Rate: ' + formatMoney(rate);
    displayDays.textContent = 'Days Worked: ' + days;
    displayGross.textContent = 'Gross Pay: ' + formatMoney(grossPay);
    displaySSS.textContent = 'SSS: ' + formatMoney(sss);
    displayPagibig.textContent = 'Pag-ibig: ' + formatMoney(pagibig);
    displayPhilhealth.textContent = 'PhilHealth: ' + formatMoney(philhealth);
    displayTax.textContent = 'Tax: ' + formatMoney(tax);
    displayTotal.textContent = 'Total Deductions: ' + formatMoney(totalDeductions);
    displayNet.textContent = 'Net Pay: ' + formatMoney(netPay);
    
   
    payPage.classList.remove('active');
    displayPage.classList.add('active');
}


function goBack() {
    displayPage.classList.remove('active');
    payPage.classList.add('active');
}


calculate.addEventListener('click', calculatePayroll);
back.addEventListener('click', goBack);

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculatePayroll();
    }
});