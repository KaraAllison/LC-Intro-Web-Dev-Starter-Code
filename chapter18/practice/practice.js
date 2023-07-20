let book1 = {
    name: "Animal Farm",
    author: "George Orwell",
    readStatus: true
}
let book2 = {
    name: "Dracula",
    author: "Bram Stoker",
    readStatus: true
}
let book3 = {
    name: "Don Quixote",
    author: "Miguel de Cervantes",
    readStatus: false
}


let bookArray = [book1, book2, book3];

for (let i = 0; i < bookArray.length; i++) {
    let readText = '';
    if (bookArray[i].readStatus === false) {
        readText = ' not'
    }
    console.log(`${bookArray[i].name} by ${bookArray[i].author} has${readText} been read.`)
}