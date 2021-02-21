import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

//Display saved books from db
class Saved extends React.Component {
     state = {
          savedBooks: [],
     };
     componentDidMount() {
          this.loadBooks();
     }

     loadBooks = (event) => {
          API.savedBooks()
               .then((result) => {
                    console.log("This is Result:", result);
                    this.setState({ savedBooks: result });
               })
               .catch((err) => console.log(err));
     };
     render() {
          console.log("Saved books:", this.state.savedBooks);
          return (
               <div className="container">
                    <Row>
                         <Col size="xs-12">
                              <List>
                                   {[...this.state.savedBooks].map(
                                        (book, index) => {
                                             return (
                                                  <ListItem
                                                       key={book._id}
                                                       title={book.title}
                                                       authors={book.authors}
                                                       link={book.link}
                                                       description={
                                                            book.description
                                                       }
                                                       image={book.image}
                                                       id={book._id}
                                                       loadBooks={
                                                            this.loadBooks
                                                       }
                                                  />
                                             );
                                        }
                                   )}
                              </List>
                         </Col>
                    </Row>
               </div>
          );
     }
}

export default Saved;
