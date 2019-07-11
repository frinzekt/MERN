import React from "react";
import { render } from "react-dom";

let bookList = [
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 }
];

const Book = ({ title, author, pages, freeBookmark }) => {
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
  state = {
    open: true,
    freeBookmark: false,
    hiring: true,
    data: [],
    loading: false,
    elementno: 1
  };

  componentDidMount() {
    console.log("The component is now mounted!");
    this.apiload();
  }

  apiload() {
    this.setState({ loading: true });
    fetch(
      "https://hplussport.com/api/products/order/price/sort/ac/qty/" +
        this.state.elementno
    )
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
  }

  componentDidUpdate() {
    console.log("The component just updated");
  }

  addelelement = async () => {
    await this.setState(prevState => ({
      elementno: prevState.elementno + 1
    }));

    this.apiload();
  };

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
          "loading"
        ) : (
          <div>
            {this.state.data.map((product, i) => {
              return (
                <div>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img src={product.image} height={100} alt={product.id} />
                </div>
              );
            })}
          </div>
        )}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        <button onClick={this.addelelement}>Add Element</button>
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

render(<Library books={bookList} />, document.getElementById("root"));
