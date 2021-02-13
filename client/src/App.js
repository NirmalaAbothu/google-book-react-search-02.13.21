import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
     return (
          <Router>
               <div>
                    <Nav />
                    <Switch>
                         <Route exact path="/" component={Search} />
                         <Route exact path="/search" component={Search} />
                         <Route exact path="/saved" component={Saved} />
                         <Route exact path="/noMatch" component={NoMatch} />
                         {/* <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
            <Detail />
          </Route>
          <Route>
            <NoMatch />
          </Route> */}
                    </Switch>
               </div>
          </Router>
     );
}

export default App;
