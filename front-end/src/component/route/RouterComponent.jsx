import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import BookListComponent from "../book/BookListComponent";
import AddBookComponent from "../book/AddBookComponent";
import BookDetailComponent from "../book/BookDetailComponent";
import BookPostComponent from "../book/BookPostComponent";
import LikeBookListComponent from "../list/LikeBookListComponent";
import AskListComponent from "../list/AskListComponent";
import borrowedlist from "../list/borrowedlist";
import borrowlist from "../list/borrowlist";
import MyBookListComponent from "../list/MyBookListComponent";
import MainComponent from "../main/MainComponent";
import MypageComponent from "../mypage/MypageComponent";
import ReportUserComponent from "../mypage/ReportUserComponent";
import check from "../mypage/check";
import EditUserComponent from "../user/EditUserComponent";



const AppRouter = () => {
   return(
     <div style={style}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainComponent} />
            <Route path="/main" component={MainComponent} />
            <Route path="/books" component={BookListComponent} />
            <Route path="/book-detail" component={BookDetailComponent} />
            <Route path="/book-post" component={BookPostComponent} />
            <Route path="/add-user" component={AddBookComponent} />
            <Route path="/ask-list" component={AskListComponent} />
            <Route path="/borrowed-list" component={borrowedlist} />
            <Route path="/borrow-list" component={borrowlist} />
            <Route path="/mypage" component={MypageComponent} />
            <Route path="/check" component={check} />
            <Route path="/likelist" component={LikeBookListComponent} />
            <Route path="/mybooklist" component={MyBookListComponent} />
            <Route path="/edituser" component={EditUserComponent} />
            <Route path="/reportuser" component={ReportUserComponent} />
          </Switch>
       </BrowserRouter>
     </div>
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;