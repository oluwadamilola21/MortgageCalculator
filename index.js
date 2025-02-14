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

const errorColour = 'hsl(0, 100%, 50%)';

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

    if (radioOne.checked === false && radioTwo.checked === false){
        mortgageTypeEmpty.classList.remove("hide")
        mortgageTypeEmpty.style.color = errorColour;
    }
    else {
        mortgageTypeEmpty.classList.add("hide")
    }

    if(mortgageAmount.value === "") {
        emptyAmount.classList.remove("hide")
        emptyAmount.style.color = errorColour
        mortgageAmount.classList.add("rate-err1")
        basicAddonOne.classList.add("rate-err2")
    } 
    else {
        emptyAmount.classList.add("hide")
        mortgageAmount.classList.remove("rate-err1")
        basicAddonOne.classList.remove("rate-err2")
    }

    if(mortgageTerm.value === "") {
        emptyTerm.classList.remove("hide")
        emptyTerm.style.color = errorColour
        mortgageTerm.classList.add("rate-err1")
        basicAddonTwo.classList.add("rate-err2")
    } 
    else {
        emptyTerm.classList.add("hide")
        mortgageTerm.classList.remove("rate-err1")
        basicAddonTwo.classList.remove("rate-err2")
    
    }

    if(interestRate.value === "") {
        emptyRate.classList.remove("hide")
        emptyRate.style.color = errorColour
        interestRate.classList.add("rate-err1")
        basicAddonThree.classList.add("rate-err2")
    } 
    else {
        emptyRate.classList.add("hide")
        interestRate.classList.remove("rate-err1")
        basicAddonThree.classList.remove("rate-err2")
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
    emptyAmount.classList.add("hide")
    mortgageAmount.classList.remove("rate-err1")
    basicAddonOne.classList.remove("rate-err2")
    emptyTerm.classList.add("hide")
    mortgageTerm.classList.remove("rate-err1")
    basicAddonTwo.classList.remove("rate-err2")
    emptyRate.classList.add("hide")
    interestRate.classList.remove("rate-err1")
    basicAddonThree.classList.remove("rate-err2")
    mortgageTypeEmpty.classList.add("hide")
    
})
 
// things to work on 
//1. make the addons to change colour on focus
mortgageAmount.addEventListener('focus', function(){
    basicAddonOne.classList.add("add-on")
});
mortgageAmount.addEventListener('blur', function(){
    basicAddonOne.classList.remove("add-on")
});
mortgageTerm.addEventListener('focus', function(){
    basicAddonTwo.classList.add("add-on")
});
mortgageTerm.addEventListener('blur', function(){
    basicAddonTwo.classList.remove("add-on")
});
interestRate.addEventListener('focus', function(){
    basicAddonThree.classList.add("add-on")
});
interestRate.addEventListener('blur', function(){
    basicAddonThree.classList.remove("add-on")
});
