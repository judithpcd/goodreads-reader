import data from './data/books-data.js';
import Book from './components/Book.js';


const main = document.querySelector('main');

const books = data.map(book => new Book(book));

books.forEach(books => main.innerHTML += books.render());
