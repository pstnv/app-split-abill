const btn = document.querySelector('#btn');
btn.addEventListener('click', calculateAmount);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

// 1. функция - показать меню "добавить чаевые"
const tipMenu = document.querySelector('#tip');
function showTip (e) {
    e.preventDefault();
    buttonTip.style.marginBottom = "0px";
    tipMenu.style.display = "block";
}

// 2. функция - выполнить расчет
function calculateAmount (e) {
    e.preventDefault();

    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;
    
    // проверка:
    // что поля заполнены
    // что заполнены числами
    // что количество людей больше либо равно 1
    // что количество людей - целое число
    if ( bill === '' || people === '' || people <1 || isNaN(bill) || isNaN (people) || !Number.isInteger(Number(people))) {
        Swal.fire({
            text: 'Please enter correct information!',
            width: 260
        })
    }
    
    // 2.1 - сколько заплатит 1 человек
    let amountPerPerson = bill / people;

    // 2.2 - сколько чаевых заплатит 1 человек
    let tipPerPerson = (bill * tip) / people;

    // 2.3 - сумма счета и чаевых на 1 человека
    let totalSum = amountPerPerson + tipPerPerson;

    // 2.4 - toFixed() - оставляем два числа после запятой
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSum = totalSum.toFixed(2);


    // 2.5 - заполнить ячейки данными
    document.querySelector('#dividedBill').textContent = '$ ' + amountPerPerson;
    document.querySelector('#dividedTip').textContent = '$ ' + tipPerPerson;
    document.querySelector('#billAndTip').textContent = '$ ' + totalSum;
}