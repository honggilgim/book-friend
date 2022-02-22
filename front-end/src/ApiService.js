import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080";

class ApiService {

  fetchBooks(){
    return axios.get(USER_API_BASE_URL);
  }

  fetchBookByID(bookID){
    return axios.get(USER_API_BASE_URL + '/' + bookID);
  }

  deleteBook(bookID){
    return axios.delete(USER_API_BASE_URL + '/books' + bookID);
  }
  mybooklist(uid){
    return axios.get(USER_API_BASE_URL + '/books/mybook/' + uid)
  }
  addrequest(request){
    return axios.post(USER_API_BASE_URL + '/books/req', request);
  }

  addLike(like){
    return axios.post(USER_API_BASE_URL + '/books/lik', like);
  }

  editBook(book){
    return axios.put(USER_API_BASE_URL + '/books/' + book.bid, book)
  }

  likelist(uid){
    return axios.get(USER_API_BASE_URL + '/books/like/' + uid)
  }

  mybooklist(uid){
    return axios.get(USER_API_BASE_URL + '/books/mybook/' + uid)
  }

  addBook(book){
    return axios.post(USER_API_BASE_URL + '/books/book', book);
  }

  addImage(img,config){
    return axios.post(USER_API_BASE_URL + '/books/saveImage', img,config);
  }

  addReport(report){
    return axios.post(USER_API_BASE_URL + '/books/report', report);
  }
}

export default new ApiService();