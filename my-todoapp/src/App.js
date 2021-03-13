// import Navbar from "./component/Navbar";
import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todolist from "./component/Todolist";
import Nav from "./Nav";
import "./App.css";
import Notfound from "./component/404";
import Homepage from "./Homepage";
import { Breadcrumbs } from "@material-ui/core";

function App(props) {
  const notfound = () => {
    return <Notfound />;
  };

  const todocomp = () => {
    return <Todolist />;
  };
  const home = () => {
    return <Homepage />;
  };

  return (
    <>
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/home" exact component={home} />
            <Route path="/todolist" exact component={todocomp} />
            <Route path="*" exact component={notfound} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
