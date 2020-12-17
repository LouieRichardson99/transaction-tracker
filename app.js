let balanceDisplay = document.getElementById('balance-span'),
    transactionList = document.getElementById('transaction-list'),
    transactionNameInput = document.getElementById('item-text-input'),
    transactionAmountInput = document.getElementById('item-amount-input');

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
        balanceDisplay.textContent = '£' + balance;
    } else if (transactionType == 'expense') {
        balance -= Number(transactionAmount);
        balanceDisplay.textContent = '£' + balance;
    }

    return currentTransaction,
    createTransactionElement();
};

function createTransactionElement() {
    let transactionInfo = {...currentTransaction},
        newTranDiv = document.createElement('div'),
        newItemName = document.createElement('p'),
        newItemAmount = document.createElement('p'),
        newDelButton = document.createElement('button'),
        newMoreButton = document.createElement('button');

    newItemName.textContent = 'Transaction Name: ' + transactionName;
    newItemAmount.textContent = 'Transaction Amount: ' + transactionAmount;
    newDelButton.textContent = 'Delete';
    newMoreButton.textContent = 'More Info';

    transactionList.appendChild(newTranDiv);
    newTranDiv.appendChild(newItemName);
    newTranDiv.appendChild(newItemAmount);
    newTranDiv.appendChild(newDelButton);
    newTranDiv.appendChild(newMoreButton);

    newTranDiv.classList.add('tran-item-div');
    newItemName.classList.add('tran-item-name');
    newItemAmount.classList.add('tran-item-amt');
    newDelButton.classList.add('tran-item-del-btn');
    newMoreButton.classList.add('tran-item-more-btn');

    newDelButton.addEventListener('click', deleteParent);
    newMoreButton.addEventListener('click', displayMoreInfo);

    function deleteParent() {
        if (transactionInfo.Transaction_Type == 'income') {
            balance -= Number(transactionInfo.Transaction_Amount);
        } else if (transactionInfo.Transaction_Type == 'expense') {
            balance += Number(transactionInfo.Transaction_Amount);
        }
        balanceDisplay.textContent = '£' + balance;
        newDelButton.parentElement.remove();
    }

    function displayMoreInfo() {
        let newShowMoreDiv = document.createElement('div'),
            newTranDateTxt = document.createElement('p'),
            newTranIdTxt = document.createElement('p'),
            newTranTypeTxt = document.createElement('p'),
            newCloseBtn = document.createElement('button');

        newTranDateTxt.textContent = 'Transaction Date: ' + transactionInfo.Transaction_Date;
        newTranIdTxt.textContent = 'Transaction ID: ' + transactionInfo.Transaction_ID;
        newTranTypeTxt.textContent = 'Transaction Type: ' + transactionInfo.Transaction_Type;
        newCloseBtn.textContent = 'Close';

        newCloseBtn.addEventListener('click', closeShowMore);

        function closeShowMore() {
            newCloseBtn.parentElement.remove();
        };

        if (newTranDiv.childElementCount <= 4) {
        newTranDiv.appendChild(newShowMoreDiv);
        newShowMoreDiv.appendChild(newTranTypeTxt);
        newShowMoreDiv.appendChild(newTranDateTxt);
        newShowMoreDiv.appendChild(newTranIdTxt);
        newShowMoreDiv.appendChild(newCloseBtn);

        newShowMoreDiv.classList.add('show-more-div');
        newTranTypeTxt.classList.add('tran-type-txt');
        newTranDateTxt.classList.add('tran-date-txt');
        newTranIdTxt.classList.add('tran-id-txt');
        newCloseBtn.classList.add('show-more-close-btn');
        }
    };
};
