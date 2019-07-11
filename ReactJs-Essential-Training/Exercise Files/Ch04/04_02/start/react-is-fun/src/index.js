import React from "react";
import { render } from "react-dom";

let bookList = [
  {
    title: "abc",
    author: "Ernest ABC",
    pages: 260
  },
  {
    title: "abfsafasfc",
    author: "Erfsfnestsafsafsa ABC",
    pages: 4160
  },
  {
    title: "agagqgqbc",
    author: "Ergsagagsnest ABC",
    pages: 26510
  }
];

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

const Library = ({ books }) => {
  return (
    <div>
      {books.map((book, i) => (
        <Book
          key={i}
          title={book.title}
          author={book.author}
          pages={book.pages}
        />
      ))}
    </div>
  );
};

render(<Library books={bookList} />, document.getElementById("root"));
