import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Details from "./Details.js";

class Saved extends React.Component {
     state = {
          savedBooks: [],
     };
     componentDidMount() {
          API.saveBook()
               .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
               .catch((err) => console.log(err));
     }
     render() {
          return (
               <div className="container">
                    <h2>Saved Books</h2>
                    <Details books={this.state.savedBooks} />
               </div>
          );
     }
}

export default Saved;
