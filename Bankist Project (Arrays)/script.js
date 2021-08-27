'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
    containerMovements.innerHTML = '';

    movements.forEach(function (mov, i) {

        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>
        `;
        // insertAdjacentHTML takes 2 args
        // 1) the position where to attach to (check MDN for these set params)
        // 2) the string containing the HTML that we want to insert
        containerMovements.insertAdjacentHTML('afterbegin', html);
        // 'beforeend' would reverse the order of the outputted elementz
    });
}

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
    // return labelBalance.textContent;
};

const calcDisplaySummary = function (acc) {
    //Incoming
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    //outgoing
    const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    //interest
    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, _, arr) => int >= 1)
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}`;
};

const createUserNames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    });
    // return username;
};

createUserNames(accounts);

const updateUI = function (acc) {
    //Display movements
    displayMovements(acc.movements);

    //Display balance
    calcDisplayBalance(acc);

    //Display summary
    calcDisplaySummary(acc);
}

//event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    //prevent form submit default
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    // optional chaining here - if the acc exists
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // console.log('Logged in');

        //Display UI & message - display only first name with split
        labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // clear input fields 
        // 2 assignments here to empty string
        inputLoginUsername.value = inputLoginPin.value = '';
        // remove focus from the pin field with built in JS method
        inputLoginPin.blur();

        // update UI
        updateUI(currentAccount);
    }
});

// transfer event
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(amount, receiverAcc);

    // check if amount is valid
    if (amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username) {
        // console.log('Transfer valid');

        //clear input fields
        inputTransferAmount.value = inputTransferTo.value = '';

        // doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // update UI
        updateUI(currentAccount);
    }
});

// loan is approved if deposit is > 10% of requested amount of loan
btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);
    // multiply amount by 0.1 to get 10%
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // add movement
        currentAccount.movements.push(amount);

        // update UI
        updateUI(currentAccount);
    }
    // clear input field
    inputLoanAmount.value = '';
});

// close/delete account
btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {

        const index = accounts.findIndex(acc => acc.username === currentAccount.username);

        // find index, remove 1 element
        accounts.splice(index, 1);

        //Hide UI
        containerApp.style.opacity = 0;
    };
    //clear input fields
    inputCloseUsername.value = inputClosePin.value = '';
});