import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { List } from "../src/components/List";
import NoMatch from "./pages/NoMatch";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

//App component

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
                    </Switch>
               </div>
          </Router>
     );
}

export default App;
