import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/books";
const USER_API_BASE_URL_USER = "http://localhost:8080/api";

class ApiService {

  fetchBooks(){
    return axios.get(USER_API_BASE_URL);
  }

  fetchUserByID(username){
    return axios.get(USER_API_BASE_URL + '/user/' + username);
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

  edituser(user){
    return axios.put(USER_API_BASE_URL + '/useredit/' + user.id, user)
  }

  likelist(uid){
    return axios.get(USER_API_BASE_URL + '/like/' + uid)
  }

  mybooklist(uid){
    return axios.get(USER_API_BASE_URL + '/mybook/' + uid)
  }

  alarmlist(uid){
    return axios.get(USER_API_BASE_URL + '/alarm/list/' + uid)
  }

  insertAlarm(alarm){
    return axios.post(USER_API_BASE_URL + '/alarm', alarm);
  }

  deleteAlarm(aid){
    return axios.delete(USER_API_BASE_URL + '/alarm/' + aid);
  }

  fetchUserinfobyemail(uid){
    return axios.get(USER_API_BASE_URL + '/userinfo/' + uid);
  }

 // fetchbyUseridbyemail(username){
  //  return axios.get(USER_API_BASE_URL + '/useridbyname/' + username);
  //}

  fetchborrowinfobyemail(uid){
    return axios.get(USER_API_BASE_URL + '/Listinfo/' + uid);
  }

  Listedinfo(uid){
    return axios.get(USER_API_BASE_URL + '/Listedinfo/' + uid);
  }

  deleteborrowList(gtid) {
    return axios.delete(USER_API_BASE_URL + '/deleteborrowList/' + gtid);
  }
  // signup(signupRequest){
  //   return axios.post(USER_API_BASE_URL_USER + '/auth/signup' + JSON.stringify(signupRequest));
  // }
  minusgrade(username, value){
    return axios.post(USER_API_BASE_URL + '/minusgrade/' + username +'/'+ value);
  }

  deleteRequest(rqid){
    return axios.delete(USER_API_BASE_URL + '/request/' + rqid);
  }

  insertBorrow(borrow){
    return axios.post(USER_API_BASE_URL + '/borrow', borrow);
  }

  requestlist(uid){
    return axios.get(USER_API_BASE_URL + '/request/list/' + uid)
  }

  addBook(book){
    return axios.post(USER_API_BASE_URL + '/book', book);
  }

  addReport(report){
    return axios.post(USER_API_BASE_URL + '/report', report);
  }

  fetchUserById2(username){
    return axios.get(USER_API_BASE_URL + '/fetchUserById2/' + username);
  }

  searchBid(){
    return axios.get(USER_API_BASE_URL + '/findBid');
  }


}

export default new ApiService();