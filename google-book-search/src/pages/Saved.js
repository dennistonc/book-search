import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  loadSavedBooks = () => {
    API.getAllBooks()
      .then((res) =>
        this.setState({
          books: res.data,
        })
      )
      .catch((err) => console.log(err));
  };

  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.loadSavedBooks())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.books.length ? (
          <List>
            <div className="card">
              <div className="card-header">Saved Books</div>
              <div className="card-body">
                {this.state.books.map((book) => (
                  <ListItem key={book._id}>
                    <div className="title-div">
                      <p className="title">
                        <strong>{book.title} </strong>
                      </p>
                      <p className="author">
                        Written by:&nbsp;
                        {book.authors.map((author, index) => {
                          if (index === book.authors.length - 1) {
                            return <span>{author}</span>;
                          } else {
                            return <span>{author},&nbsp;</span>;
                          }
                        })}
                      </p>
                    </div>

                    <div className="card mb-3 image-description-div">
                      <div className="row no-gutters">
                        <div className="col-md-2">
                          {book.image ? (
                            <img
                              src={book.image}
                              className="card-img"
                              alt={book.title}
                            />
                          ) : (
                            <img
                              src="https://via.placeholder.com/150"
                              className="card-img"
                              alt={book.title}
                            />
                          )}
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <p className="card-text">{book.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="buttons">
                      <ViewBtn href={book.link}></ViewBtn>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </div>
                  </ListItem>
                ))}
              </div>
            </div>
          </List>
        ) : (
          <h3 id="no-save">No Saved Books to Display. Please Go Back and Save a Book.</h3>
        )}
      </div>
    );
  }
}

export default Saved;