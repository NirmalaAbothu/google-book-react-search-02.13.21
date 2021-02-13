import axios from "axios";

export default {
     // Gets all books
     //  getBooks: function () {
     //       return axios.get("/api/books");
     //  },
     getBooks: function (query) {
          return axios.get(
               `https://www.googleapis.com/books/v1/volumes?q=${query}`
          );
     },
     // Gets the book with the given id
     //  getBook: function (id) {
     //       return axios.get("/api/books/" + id);
     //  },
     // Gets the book with the given name
     // getBook: function(id) {
     //   return axios.get("/api/books/" + name);
     // },
     // Deletes the book with the given id
     deleteBook: function (id) {
          return axios.delete("/api/books/" + id);
     },
     // Saves a book to the database
     saveBook: function (bookData) {
          return axios.post("/api/books", bookData);
     },
     //  get saved books from the db
     savedBooks: function () {
          return axios.get("/api/books").then((result) => result.data);
     },
};
