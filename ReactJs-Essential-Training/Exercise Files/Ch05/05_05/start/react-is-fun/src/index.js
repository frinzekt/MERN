import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

let bookList = [
  { title: "Hunger", author: "Roxane Gay" },
  { title: "The Sun Also Rises", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 }
];

// let bookList = [
//   { title: "Hunger", author: "Roxane Gay" },
//   { title: "The Sun Also Rises", pages: 260 },
//   { title: "White Teeth", author: "Zadie Smith", pages: 480 },
//   { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 }
// ];

const Book = ({
  title = "No Title Provided",
  author = "No author",
  pages = 0,
  freeBookmark
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? "yes!" : "no!"}</p>
    </section>
  );
};

const Hiring = () => (
  <div>
    <p>The library is hiring. Go to www.library.com/jobs for more.</p>
  </div>
);

const NotHiring = () => (
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>
);

class Library extends React.Component {
  static defaultProps = {
    books: [
      //In the event that bookList cannot be loaded, this is the default value
      {
        Title: "abc",
        author: "abcde",
        pages: 1000
      }
    ]
  };

  state = {
    open: true,
    freeBookmark: false,
    hiring: true,
    data: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
  }

  componentDidUpdate() {
    console.log("The component just updated");
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
  render() {
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {this.state.data.map(product => {
              return (
                <div key={product.id}>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100} />
                </div>
              );
            })}
          </div>
        )}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

// class FavoriteColorForm extends React.Component {
//   state = { value: "" };

//   newColor = e => this.setState({ value: e.target.value });

//   submit = e => {
//     console.log(`New Color: ${this.state.value}`);
//     e.preventDefault();
//   };

//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <label>
//           Favorite Color:
//           <input type="color" onChange={this.newColor} />
//         </label>
//         <button>Submit</button>
//       </form>
//     );
//   }
// }

Library.PropTypes = {
  books: PropTypes.array
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool
};

render(<Library books={bookList} />, document.getElementById("root"));
