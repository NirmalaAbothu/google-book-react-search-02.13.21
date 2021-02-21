import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

import { Input, FormBtn } from "../components/Form";

class Search extends React.Component {
     state = {
          value: "",
          bookArray: [],
     };

     SearchBook = (query) => {
          API.getBooks(query)
               .then((result) =>
                    this.setState({
                         bookArray: result.data.items.map(
                              (bookDetails) => this.createBook(bookDetails),
                              console.log("Book details:", result.data.items)
                         ),
                    })
               )
               .catch((err) => console.log(err));
     };
     createBook = (bookDetails) => {
          return {
               _id: bookDetails.id,
               title: bookDetails.volumeInfo.title,
               authors:
                    bookDetails.volumeInfo.authors?.authors ||
                    "No Authors found",
               description: bookDetails.volumeInfo.description,
               image:
                    bookDetails.volumeInfo.imageLinks?.thumbnail ||
                    "No  Image found",
               link: bookDetails.volumeInfo.previewLink,
          };
     };

     // Handles updating component state when the user types into the input field
     handleInputChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          this.setState({ [name]: value });
     };

     // When the form is submitted, use the API.getBooks method to retive  the books
     // and display
     handleFormSubmit = (event) => {
          event.preventDefault();
          this.SearchBook(this.state.search);
          this.setState({
               search: "",
          });
     };

     render() {
          return (
               <Container fluid>
                    <Row>
                         <Col size="md-11">
                              <Jumbotron>
                                   <h1>(React) Google Books Search</h1>
                                   <h5>
                                        Search for and Save Books of Interest
                                   </h5>
                              </Jumbotron>

                              <h5 style={{ textAlign: "center" }}>
                                   Book Search
                              </h5>
                              <form>
                                   <h6 style={{ textAlign: "left" }}>Book</h6>
                                   <Input
                                        onChange={this.handleInputChange}
                                        value={this.state.search}
                                        placeholder="Search a book"
                                        id="search"
                                        name="search"
                                   />

                                   <FormBtn onClick={this.handleFormSubmit}>
                                        Search
                                   </FormBtn>
                              </form>
                         </Col>
                    </Row>
                    <Row>
                         <Col size="xs-12 md-3"></Col>
                         <Col size="md-6" style={{ marginLeft: "50PX" }}>
                              <List>
                                   {[...this.state.bookArray].map((book) => (
                                        <ListItem
                                             key={book.id}
                                             title={book.title}
                                             authors={book.authors}
                                             link={book.link}
                                             description={book.description}
                                             image={book.image}
                                        />
                                   ))}
                              </List>
                         </Col>
                         <Col size="md-3"></Col>
                    </Row>
               </Container>
          );
     }
}

export default Search;
