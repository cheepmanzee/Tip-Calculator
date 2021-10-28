const $billIn = document.getElementById('bill');
const $peopleIn = document.getElementById('people');
const $customTip = document.getElementById('custom');
const $tip = document.querySelectorAll('.tip');
const $total = document.querySelector('.total__total .total');
const $totalTip = document.querySelector('.total__tip .tip__tip');
const $tip5 = document.getElementById('5');
const $tip10 = document.getElementById('10');
const $tip15 = document.getElementById('15');
const $tip25 = document.getElementById('25');
const $tip50 = document.getElementById('50');
const $reset = document.getElementById('reset');

billValue = 0.00;
peopleValue = 1;
tipValue = 0.05;
$total.innerHTML = '$' + (0.0).toFixed(2);
$totalTip.innerHTML = '$' + (0.0).toFixed(2);

$billIn.addEventListener('input', billInFunc);
$peopleIn.addEventListener('input', peopleInFunc);
$tip5.addEventListener('click', function(){tipValue = 0.05; calc()})
$tip10.addEventListener('click', function(){tipValue = 0.10; calc()})
$tip15.addEventListener('click', function(){tipValue = 0.15; calc()})
$tip25.addEventListener('click', function(){tipValue = 0.25; calc()})
$tip50.addEventListener('click', function(){tipValue = 0.50; calc()})
$reset.addEventListener('click', reset);

function billInFunc() {
    billValue = parseFloat($billIn.value);
    calc();
}

function peopleInFunc() {
    peopleValue = parseFloat($peopleIn.value);   
    calc();
}

function calc() {
    if (billValue == 0) {
        reset();
    }
   let total = billValue / peopleValue;
   let tip = (tipValue * billValue) / peopleValue;
   $totalTip.innerHTML = '$' + tip.toFixed(2);
    $total.innerHTML = '$' + total.toFixed(2);
}

function reset() {
    $billIn.value = 0;
    billValue = 0;
    $peopleIn.value = 1;
    peopleValue = 1;
    tipValue = 0.05;
    $total.innerHTML = '$' + (0.0).toFixed(2);
    $totalTip.innerHTML = '$' + (0.0).toFixed(2);
}