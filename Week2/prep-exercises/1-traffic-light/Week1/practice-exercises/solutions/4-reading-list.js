const listOfBooks = [
    {
        title: 'Hard Times',
        author: 'Charles Dickens',
        alreadyRead: true
    },
    {
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        alreadyRead: true
    },
    {
        title: 'The Fellowship of the Ring',
        author: 'Peter Jackson',
        alreadyRead: false
    }
];

for (let bookIndex in listOfBooks) {
    const book = listOfBooks[bookIndex];
    
    if (book.alreadyRead) {
        console.log(`${book.title} by ${book.author}. You already read "${book.title}".`);
    } else {
        console.log(`${book.title} by ${book.author}. You still need to read "${book.title}".`);
    }
}