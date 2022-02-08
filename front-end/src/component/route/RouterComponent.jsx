import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import BookListComponent from "../user/BookListComponent";
import AddBookComponent from "../user/AddBookComponent";
import BookDetailComponent from "../user/BookDetailComponent";

const AppRouter = () => {
   return(
     <div style={style}>
       <BrowserRouter>
          <Switch>
            <Route exact path="/" component={BookListComponent} />
            <Route path="/users" component={BookListComponent} />
            <Route path="/book-detail" component={BookDetailComponent} />
            <Route path="/add-user" component={AddBookComponent} />
          </Switch>
       </BrowserRouter>
     </div>
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;