let input = require('readline-sync')

class BankAccount {
    constructor (accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    
    deposit (amount) {
        this.balance += amount;
    }
    withdraw (amount) {
        this.balance -= amount;
    }
    print (index) {
        console.log(
            `Account Information ${index}:
            Account Number: ${this.accountNumber} | Account Holder: ${this.accountHolder} | Balance: ${this.balance}`
        )
    }

}

let accounts = [];
let flag = true;
let select;


console.log("Welcome to the Bank Account Management System!");
while(flag) {
     do {
        select = Number(input.question(
            `Select an Option:
            1. Add an Account
            2. Select an Account
            3. Exit
            `
            ));
        } while(select !== 1 && select !== 2 && select !== 3);
        if(select === 1){
            let accountNumber;
            let balance;
            do {
                accountNumber = Number(input.question("Enter account number: "))
            }while(isNaN(accountNumber));
            let accountHolder = input.question("Enter account holder: ");
            do {
                balance = Number(input.question("Enter account balance: "));
            } while(isNaN(balance));
            accounts.push(new BankAccount(accountNumber, accountHolder, balance));
        } else if(select === 2) {
            for (let i = 0; i < accounts.length; i ++){
                console.log()
                accounts[i].print(i + 1);
            }
            do {
                select = Number(input.question("Enter account index: "));
            } while(select < 1 || select > accounts.length || select % 1 !== 0);
            let active = accounts[select - 1];
            do {
                select = Number(input.question(
                    `Select an Option:
                    1. Deposit
                    2. Withdraw
                    3. Exit Account
                    `
                ));
            } while(select !== 1 && select !== 2 && select !== 3);
            if (select === 1) {
                let deposit = Number(input.question("Enter deposit amount: "));
                active.deposit(deposit);
            } else if (select === 2) {
                let withdraw = Number(input.question("Enter withdraw amount: "));
                active.withdraw(withdraw);
            } 
        } else if(select === 3) {
            flag = false;
            break;
        }
    }