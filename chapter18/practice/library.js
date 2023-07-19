const input = require('readline-sync');

class Book {
    constructor (title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    bookDetails() {
        return `\tTitle: ${this.title}\n\tAuthor: ${this.author}\n\tPublication Year: ${this.publicationYear}`
    }
}
let library = [];

function addBookToLibrary(title, author, publicationYear) {
    library.push(new Book(title, author, publicationYear));
}
function addBookPrompt() {
    let title = input.question('\nEnter the book title: ');
    let author = input.question("Enter the author's name: ");
    let publicationYear = input.question('Enter the publication year: ');
    addBookToLibrary(title,author,publicationYear);
    return 'Book added successfully';
}
function displayBooks() {
    console.log('\nLibrary Catalog:')
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].bookDetails());
    }
}
function searchBookByTitle(title) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            return `\nBook Details:\n${library[i].bookDetails()}`;
        }
    }
    return '\nThe book was not found.'
}

function searchBookPrompt() {
    let response = input.question('\nEnter the title of the book you want to search: ');
    return searchBookByTitle(response);
}

function removeBookByTitle(title) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            library.splice(i,1);
            return '\nBook successfully removed.'
        }
    }
    return '\nThe book was not found.'
}
function removeBookPrompt() {
    let response = input.question('\nEnter the title of the book you want to remove: ');
    return removeBookByTitle(response);
}

console.log('Welcome to the Library Catalog!');
while(true) {
    console.log(`\nMenu:
    1. Add a book
    2. Display all books
    3. Search for a book
    4. Remove a book
    5. Exit\n`);
    let response = Number(input.question('Please enter your choice: '))
    while (response !== 1 && response !== 2 && response !== 3 &&
        response !== 4 && response !== 5) {
        response = Number(input.question('Must be a number between 1-5, please enter your choice: '))
    }
    if (response === 1) {
        console.log(addBookPrompt());
    } else if (response === 2) {
        displayBooks();
    } else if (response === 3) {
        console.log(searchBookPrompt());
    } else if (response === 4) {
        console.log(removeBookPrompt());
    } else if (response === 5) {
        break;
    }

}