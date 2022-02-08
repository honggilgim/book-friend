import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/books";

class ApiService {

  fetchBooks(){
    return axios.get(USER_API_BASE_URL);
  }

  fetchBookByID(bookID){
    return axios.get(USER_API_BASE_URL + '/' + bookID);
  }

  deleteBook(bookID){
    return axios.delete(USER_API_BASE_URL + '/' + bookID);
  }
  
  addBook(book){
    return axios.post(USER_API_BASE_URL, book);
  }

  editBook(book){
    return axios.put(USER_API_BASE_URL + '/' + book.bid, book)
  }

}

export default new ApiService();