let mortgageAmount = document.getElementById('mortgage-amount');
let mortgageTerm = document.getElementById('mortgage-term');
let interestRate = document.getElementById('interest-rate');
let monthlyPay = document.getElementById('monthly-pay');
let totalPay = document.getElementById('total-pay');
let submitBtn = document.getElementById('submit-btn')
let radioOne = document.getElementById('flexRadioDefault1')
let radioTwo = document.getElementById('flexRadioDefault2')
let mortgageTypeEmpty = document.getElementById('mortgage-type-empty')
let emptyAmount = document.getElementById('amount-empty')
let emptyTerm = document.getElementById('term-empty')
let emptyRate = document.getElementById('rate-empty')
let inputOne = document.querySelector(".myform1")
let basicAddonOne = document.getElementById('basic-addon1')
let basicAddonTwo = document.getElementById('basic-addon2')
let basicAddonThree = document.getElementById('basic-addon3')
let resultsArea = document.getElementById('results-area')
let blankArea = document.getElementById('blank-area')
let clearBtn = document.getElementById('clearbtn')
emptyRate.classList.remove('rate-err1')
emptyRate.classList.remove('rate-err2')


submitBtn.addEventListener('click', function (){
    let principal = Number(mortgageAmount.value);
    let rate = interestRate.value / 100 / 12 // rate converted to decimal monthly
    let time = mortgageTerm.value * 12 // total year converted to months
    // to calculate repayment i.e interest + Principal
    let monthlyAmount =(principal * rate) / (1- Math.pow(1 + rate, - time))
    let monthlyAmountRounded = Math.round(monthlyAmount* 100) / 100
    let totalPaid = monthlyAmount * time 
    let totalPaidRounded = Math.round(totalPaid * 100) / 100

    // //to calculate interest only
    let compoundInterest = Math.round((totalPaidRounded - principal) * 100) / 100
    let monthlyInterest = Math.round((compoundInterest / time) * 100) / 100
    
    function repayment() {
        monthlyPay.textContent = "£" + monthlyAmountRounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalPay.textContent = "£" + totalPaidRounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        blankArea.classList.add("d-none")
        resultsArea.classList.remove("d-none")
    }

    function interestOnly() {
        monthlyPay.textContent = "£" + monthlyInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //.tostring expression adds comma to the amount
        totalPay.textContent = "£" + compoundInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        blankArea.classList.add("d-none")
        resultsArea.classList.remove("d-none")

    }
    if (radioOne.checked) {
        repayment()
    } 
    
    else if(radioTwo.checked) {
        interestOnly()
    }
    else {
        mortgageTypeEmpty.classList.remove("hide")
        mortgageTypeEmpty.style.color = "hsl(0, 100%, 50%)";
    }

    if(mortgageAmount.value === "") {
        emptyAmount.classList.remove("hide")
        emptyAmount.style.color = "hsl(0, 100%, 50%)"
        mortgageAmount.style.borderColor = "hsl(0, 100%, 50%)"
        basicAddonOne.style.color = "hsl(0, 0%, 100%)"
        basicAddonOne.style.backgroundColor = "hsl(0, 100%, 50%)"
        basicAddonOne.style.borderColor = "hsl(0, 100%, 50%)"
    }
    if(mortgageTerm.value === "") {
        emptyTerm.classList.remove("hide")
        emptyTerm.style.color = "hsl(0, 100%, 50%)"
        mortgageTerm.style.borderColor = "hsl(0, 100%, 50%)"
        basicAddonTwo.style.color = "hsl(0, 0%, 100%)"
        basicAddonTwo.style.backgroundColor = "hsl(0, 100%, 50%)"
        basicAddonTwo.style.borderColor = "hsl(0, 100%, 50%)"
    }

    if (interestRate.value === "") {
        emptyRate.classList.remove("hide")
        emptyRate.style.color = "hsl(0, 100%, 50%)"
        interestRate.style.borderColor = "hsl(0, 100%, 50%)"
        basicAddonThree.style.color = "hsl(0, 0%, 100%)"
        basicAddonThree.style.backgroundColor = "hsl(0, 100%, 50%)"
        basicAddonThree.style.borderColor = "hsl(0, 100%, 50%)"
        
    }
    
    console.log(principal)
    console.log(rate)
    console.log(time)

    let errArray = [mortgageAmount.value, mortgageTerm.value, interestRate.value]
    console.log(errArray)
    for (i=0; i < errArray.length; i++){
        if(errArray[i].value === " ") {
            empty.classList.remove("hide")
        }
    }
})

clearBtn.addEventListener('click', function(){
    mortgageAmount.value = ""
    mortgageTerm.value = ""
    interestRate.value = ""
    resultsArea.classList.add("d-none")
    blankArea.classList.remove("d-none")
    radioOne.checked = false
    radioTwo.checked = false
    
})

// things to work on 
//1. make the addons to change colour on focus
//2. on clear, all error messages to be removed
//3. whenever theres an input previous error message to be removed.