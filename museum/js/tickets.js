const basicAmount = document.querySelector('.basic-amount');
const basic = document.querySelector('.basic');
const seniorAmount = document.querySelector('.senior-amount');
const senior = document.querySelector('.senior');

basic.addEventListener('click', (e) => {
    let el = e.target;
    if(el.classList.contains('basic-plus')) {
        basicAmount.stepUp();
    } else if(el.classList.contains('basic-minus')) {
        basicAmount.stepDown();
    }
});

senior.addEventListener('click', (e) => {
    let el = e.target;
    if(el.classList.contains('senior-plus')) {
        seniorAmount.stepUp();
    } else if(el.classList.contains('senior-minus')) {
        seniorAmount.stepDown();
    }
});