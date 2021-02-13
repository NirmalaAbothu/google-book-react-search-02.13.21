import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
     const [book, setBook] = useState({});

     // When this component mounts, grab the book with the _id of props.match.params.id
     // e.g. localhost:3000/books/599dcb67f0f16317844583fc
     const { id } = useParams();
     // useEffect(() => {
     //      API.getBook(id)
     //           .then((res) => setBook(res.data))
     //           .catch((err) => console.log(err));
     // }, []);

     return (
          <Container fluid>
               <Row>
                    <Col size="md-12">
                         <Jumbotron>
                              <h1>
                                   {book.title} by {book.author}
                              </h1>
                         </Jumbotron>
                    </Col>
               </Row>
               <Row>
                    <Col size="md-10 md-offset-1">
                         <article>
                              <h1>Synopsis</h1>
                              <p>{book.synopsis}</p>
                         </article>
                    </Col>
               </Row>
               <Row>
                    <Col size="md-2">
                         <Link to="/">← Back to Authors</Link>
                    </Col>
               </Row>
          </Container>
     );
}

// class Results extends Component {
//      state = {
//           savedBooks: [],
//      };

//      componentDidMount() {
//           API.savedBooks()
//                .then((savedBooks) => this.setState({ savedBooks: savedBooks }))
//                .catch((err) => console.error(err));
//      }

//      handleSave = (book) => {
//           if (
//                this.state.savedBooks.map((book) => book._id).includes(book._id)
//           ) {
//                API.deleteBook(book._id)
//                     .then((deletedBook) =>
//                          this.setState({
//                               savedBooks: this.state.savedBooks.filter(
//                                    (book) => book._id !== deletedBook._id
//                               ),
//                          })
//                     )
//                     .catch((err) => console.error(err));
//           } else {
//                API.saveBook(book)
//                     .then((savedBook) =>
//                          this.setState({
//                               savedBooks: this.state.savedBooks.concat([
//                                    savedBook,
//                               ]),
//                          })
//                     )
//                     .catch((err) => console.error(err));
//           }
//      };

//     render() {
//         return (
//             <div>
//                 {!this.props.books.length ? (
//                     <h1 className="text-center">No Results to Display</h1>
//                 ) : (
//                         <div>
//                             {this.props.books.map(result => (
//                                 <div className="card mb-3" key={result._id}>
//                                     <div className="row">
//                                         <div className="col-md-2">
//                                             <img alt={result.title} className="img-fluid" src={result.image} />
//                                         </div>
//                                         <div className="col-md-10">
//                                             <div className="card-body">
//                                                 <h5 className="card-title">{result.title} by {result.authors}</h5>
//                                                 <p className="card-text">{result.description}</p>
//                                                 <div>
//                                                     <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
//                                                     <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
//                                                         {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//             </div>
//         )
//     }
// }

// export default Results;

export default Detail;
