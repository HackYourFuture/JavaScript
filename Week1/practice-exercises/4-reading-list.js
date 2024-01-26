/**
 * Keep track of which books you read and which books you want to read!
 *
 * Follow the steps:
 *  Declare a variable that holds an array of 3 objects, where each object describes a book and has properties for the title (string), author (string), and alreadyRead (boolean indicating if you read it yet).
 *  Loop through the array of books.
 *  For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
 *  Create a conditional statement to change the log depending on whether you read it yet or not. If you read it, log a string like You already read "The Hobbit" right after the log of the book details
 *  If you haven't read it log a string like You still need to read "The Lord of the Rings"
 */

const myBooks = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: false },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    alreadyRead: true,
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    alreadyRead: false,
  },
];

for (i = 0; i < myBooks.length; i++) {
  if (myBooks[i].alreadyRead) {
    console.log(
      `${myBooks[i].title} by ${myBooks[i].author}, I have already read it.`
    );
  } else {
    console.log(
      `${myBooks[i].title} by ${myBooks[i].author}, I have yet to read.`
    );
  }
}
