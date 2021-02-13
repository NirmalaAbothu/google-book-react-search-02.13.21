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
     componentDidMount() {
          this.SearchBook();
     }

     SearchBook = (query) => {
          API.getBooks(query)
               .then((result) =>
                    this.setState({
                         bookArray: result.data.items.map((bookDetails) =>
                              this.createBook(bookDetails)
                         ),
                    })
               )
               .catch((err) => console.log(err));
     };
     createBook = (bookDetails) => {
          return {
               _id: bookDetails.id,
               title: bookDetails.volumeInfo.title,
               authors: bookDetails.volumeInfo.authors,
               description: bookDetails.volumeInfo.description,
               image: bookDetails.volumeInfo.imageLinks.thumbnail,
               link: bookDetails.volumeInfo.previewLink,
          };
     };

     //      deleteBook = (id) => {
     //         API.deleteBook(id)
     //              .then((res) => loadBooks())
     //              .catch((err) => console.log(err));
     //    }

     // Handles updating component state when the user types into the input field
     handleInputChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          this.setState({ [name]: value });
     };

     // When the form is submitted, use the API.saveBook method to save the book data
     // Then reload books from the database
     handleFormSubmit = (event) => {
          event.preventDefault();
          this.SearchBook(this.state.search);
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
                              {/* <Jumbotron> */}
                              {/* <div style={{ width: "800px", borderStyle: "groove" }}> */}
                              <h5 style={{ textAlign: "center" }}>
                                   Book Search
                              </h5>
                              <form>
                                   <h6 style={{ textAlign: "left" }}>Book</h6>
                                   <Input
                                        onChange={this.handleInputChange}
                                        value="search"
                                        placeholder="Search a book"
                                        id="search"
                                   />
                                   {/* <Input
                                          onChange={handleInputChange}
                                          name="author"
                                          placeholder="Author (required)"
                                     /> */}
                                   {/* <TextArea
                                          onChange={handleInputChange}
                                          name="synopsis"
                                          placeholder="Synopsis (Optional)"
                                     /> */}
                                   <FormBtn
                                        // disabled={
                                        //      !(
                                        //           formObject.author &&
                                        //           formObject.title
                                        //      )
                                        // }
                                        onClick={this.handleFormSubmit}
                                   >
                                        Search
                                   </FormBtn>
                              </form>
                              {/* </div> */}
                              {/* </Jumbotron> */}
                              <detils books={this.state.bookArray} />
                         </Col>
                    </Row>
               </Container>
          );
     }
}

export default Search;
