let input = require('readline-sync')
// Define your Book class here:
class Book {
    constructor (title,author,copyrightDate,isbn,numPages,numCheckOuts,boolDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numPages = numPages;
        this.numCheckOuts = numCheckOuts;
        this.boolDiscarded = boolDiscarded;
    }
    updateCheckOuts(num = 1) {
        this.numCheckOuts += num;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor (title,author,copyrightDate,isbn,numPages,numCheckOuts,boolDiscarded) {
        super(title,author,copyrightDate,isbn,numPages,numCheckOuts,boolDiscarded);
    }
    discardVerify() {
        let currentYear = new Date().getFullYear();
        if (this.copyrightDate < currentYear - 5) {
            console.log(`${this.title} is discard ready, status updated.`);
            this.boolDiscarded = true;
        } else {
            let response = input.question(`${this.title} is not up for discard, enter y/n to confirm: `);
            if (response === 'y') {
                this.boolDiscarded = true;
            } else {
                this.boolDiscarded = false;
            }
        }
    }
}

class Novel extends Book {
    constructor (title,author,copyrightDate,isbn,numPages,numCheckOuts,boolDiscarded) {
        super(title,author,copyrightDate,isbn,numPages,numCheckOuts,boolDiscarded);
    }
    discardVerify() {
        if (this.numCheckOuts > 100) {
            console.log(`${this.title} is discard ready, status updated.`);
            this.boolDiscarded = true;
        } else {
            let response = input.question(`${this.title} is not up for discard, enter y/n to confirm: `);
            if (response === 'y') {
                this.boolDiscarded = true;
            } else {
                this.boolDiscarded = false;
            }
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let novel1 = new Novel('Pride and Predjudice','Jane Austen',1813,'1111111111111',
432,32,false);
let manual1 = new Manual('Top Secret Shuttle Building Manual','Redacted',
2013,'0000000000000',1147,1,false);

// Code exercises 4 & 5 here:

console.log(novel1);
console.log(manual1);
novel1.discardVerify();
manual1.discardVerify();
novel1.updateCheckOuts(5);
console.log(novel1);
console.log(manual1);