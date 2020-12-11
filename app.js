let balanceDisplay = document.getElementById('balance-span');
let transactionList = document.getElementById('transaction-list');
let transactionNameInput = document.getElementById('item-text-input');
let transactionAmountInput = document.getElementById('item-amount-input');

let transactionType, 
    transactionName, 
    transactionAmount, 
    transactionArray = [],
    transactionId = 1;
    balance = 0;

class Transaction {
    constructor(name, amount) {
        this.Transaction_Name = name,
        this.Transaction_Amount = amount,
        this.Transaction_Date = new Date();
        this.Transaction_ID = transactionId++
    }
}

let incomeButton = document
    .getElementById('income-btn')
    .addEventListener('click', setToIncome);
    
let expenseButton = document
    .getElementById('expense-btn')
    .addEventListener('click', setToExpense);

function setToIncome() {
    return transactionType = 'income',
    setTransactionName();
};

function setToExpense() {
    return transactionType = 'expense',
    setTransactionName();
};

function setTransactionName() {
    transactionName = transactionNameInput.value;
    transactionNameInput.value = '';

    return transactionName,
    setTransactionAmount();
};

function setTransactionAmount() {
    transactionAmount = transactionAmountInput.value;
    transactionAmountInput.value = '';

    return transactionAmount,
    createTransactionObject();
};

function createTransactionObject() {
    let transaction = new Transaction(transactionName, transactionAmount);
    transactionArray.push(transaction);
    
    if (transactionType == 'income') {
        balance += Number(transactionAmount);
    } else {
        balance -= Number(transactionAmount);
    }

    console.log(transactionArray)

    return transaction,
    createTransactionElement();
};

function createTransactionElement() {
    let newDiv = document.createElement('div');
    let newItemName = document.createElement('p');
    let newItemAmount = document.createElement('p');
    let newDelButton = document.createElement('button');

    newItemName.textContent = transactionName;
    newItemAmount.textContent = transactionAmount;
    newDelButton.textContent = 'Delete';

    transactionList.appendChild(newDiv);
    newDiv.appendChild(newItemName);
    newDiv.appendChild(newItemAmount);
    newDiv.appendChild(newDelButton);

    newDelButton.addEventListener('click', deleteParent);

    function deleteParent() {
        newDelButton.parentElement.remove();
    }
};

