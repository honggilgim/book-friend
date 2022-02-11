import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import BookListComponent from "../book/BookListComponent";
import AddBookComponent from "../book/AddBookComponent";
import BookDetailComponent from "../book/BookDetailComponent";
import MypageComponent from "../mypage/MypageComponent";

const AppRouter = () => {
   return(
     <div style={style}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={BookListComponent} />
            <Route path="/books" component={BookListComponent} />
            <Route path="/book-detail" component={BookDetailComponent} />
            <Route path="/add-user" component={AddBookComponent} />
            <Route path="/mypage" component={MypageComponent} />
          </Switch>
       </BrowserRouter>
     </div>
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;