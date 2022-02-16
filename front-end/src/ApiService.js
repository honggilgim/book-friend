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
  mybooklist(uid){
    return axios.get(USER_API_BASE_URL + '/mybook/' + uid)
  }
  addrequest(request){
    return axios.post(USER_API_BASE_URL + '/req', request);
  }

  addLike(like){
    return axios.post(USER_API_BASE_URL + '/lik', like);
  }

  editBook(book){
    return axios.put(USER_API_BASE_URL + '/' + book.bid, book)
  }

  likelist(uid){
    return axios.get(USER_API_BASE_URL + '/like/' + uid)
  }

  mybooklist(uid){
    return axios.get(USER_API_BASE_URL + '/mybook/' + uid)
  }
}

export default new ApiService();