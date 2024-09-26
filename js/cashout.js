document.getElementById('btn-cashout-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOutMoney = document.getElementById('input-cashout-money').value;
    const cashOutMoneyNumber = parseFloat(cashOutMoney);

    const pinNumber = document.getElementById('input-cashout-pin-number').value;

    console.log(cashOutMoney, pinNumber);

    // verify the pin
    if( pinNumber === '1234' ){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutMoneyNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cashout. Try again later.');
    }

})