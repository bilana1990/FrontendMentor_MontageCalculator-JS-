document.getElementById('calculate').addEventListener('click', function() {
    // Get the input values
    const principal = parseFloat(document.getElementById('amountInput').value);
    const annualRate = parseFloat(document.getElementById('RateInput').value);
    const years = parseInt(document.getElementById('termInput').value);
    const mortgageType = document.querySelector('input[name="mortgage_type"]:checked').value;

    // Convert annual interest rate to monthly and decimal form
    const monthlyRate = annualRate / 100 / 12;
    // Calculate the number of monthly payments
    const numberOfPayments = years * 12;

    let emi;

    if (mortgageType === 'repayment') {
        // Calculate the EMI for repayment mortgage
        emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else if (mortgageType === 'interest_only') {
        // Calculate the EMI for interest-only mortgage
        emi = principal * monthlyRate;
    }

    // Display the result
    document.getElementById('result').textContent = `£${emi.toFixed(2)}`;
    document.getElementById('totalTerm').textContent = `${years} years (${numberOfPayments} months)`;
});

document.getElementById('clearAll').addEventListener('click', function() {
    document.getElementById('amountInput').value = '';
    document.getElementById('RateInput').value = '';
    document.getElementById('termInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('totalTerm').textContent = '';
    const radioButtons = document.querySelectorAll('input[name="mortgage_type"]');
    radioButtons.forEach(radio => radio.checked = false);
});