import React from "react";
import { render } from "react-dom";

let bookList = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 }
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

class Library extends React.Component {
  state = { open: false }; //replaces the whole constructor code
  /*
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    //this.toggleOpenClosed = this.toggleOpenClosed.bind(this); // A constructor method has to be binded to a button
  }*/

  toggleOpenClosed = () => {
    // if u use toggleOpenClose = () => ... it automatically binds the method able to be called by button
    // if u use toggleOpenClose(){... you still have to bind it to a button
    //Constructor method
    /* this.setState({
      open: !this.state.open //change to opposite
	});*/

    //Callback implementation
    this.setState(prevState => ({
      open: !prevState.open //change to opposite
    }));
  };

  render() {
    const { books } = this.props;
    return (
      <div>
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
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
  }
}

render(<Library books={bookList} />, document.getElementById("root"));
