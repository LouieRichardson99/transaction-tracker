let balanceDisplay = document.getElementById('balance-span');
let transactionList = document.getElementById('transaction-list');
let transactionNameInput = document.getElementById('item-text-input');
let transactionAmountInput = document.getElementById('item-amount-input');

let transactionType, 
    transactionName, 
    transactionAmount,
    transactionId = 1,
    balance = 0,
    currentTransaction;

class Transaction {
    constructor(name, amount) {
        this.Transaction_Name = name,
        this.Transaction_Amount = amount,
        this.Transaction_Date = new Date(),
        this.Transaction_ID = transactionId++,
        this.Transaction_Type = transactionType;
    }
};

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
    currentTransaction = new Transaction(transactionName, transactionAmount);
    
    if (transactionType == 'income') {
        balance += Number(transactionAmount);
        balanceDisplay.textContent = balance;
    } else if (transactionType == 'expense') {
        balance -= Number(transactionAmount);
        balanceDisplay.textContent = balance;
    }

    return currentTransaction,
    createTransactionElement();
};

function createTransactionElement() {
    let transactionInfo = {...currentTransaction};
    let newDiv = document.createElement('div');
    let newItemName = document.createElement('p');
    let newItemAmount = document.createElement('p');
    let newDelButton = document.createElement('button');
    let newMoreButton = document.createElement('button');

    newItemName.textContent = transactionName;
    newItemAmount.textContent = transactionAmount;
    newDelButton.textContent = 'Delete';
    newMoreButton.textContent = 'More Info';

    transactionList.appendChild(newDiv);
    newDiv.appendChild(newItemName);
    newDiv.appendChild(newItemAmount);
    newDiv.appendChild(newDelButton);
    newDiv.appendChild(newMoreButton);

    newDelButton.addEventListener('click', deleteParent);

    function deleteParent() {
        if (transactionInfo.Transaction_Type == 'income') {
            balance -= Number(transactionInfo.Transaction_Amount);
        } else if (transactionInfo.Transaction_Type == 'expense') {
            balance += Number(transactionInfo.Transaction_Amount);
        }
        balanceDisplay.textContent = balance;
        newDelButton.parentElement.remove();
    }
};

