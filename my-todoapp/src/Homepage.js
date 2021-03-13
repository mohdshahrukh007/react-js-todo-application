import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Button } from "@material-ui/core";

export default function Homepage() {
  return (
    <div className="tc mt">
      welcome to my react application
      <Link
        activeClassName="active"
        style={{ marginLeft: "2rem" }}
        exact
        to="/home"
      >
        <Button variant="contained" color="secondary">
          home
        </Button>
      </Link>
      <Link style={{ marginLeft: "2rem" }} exact to="/todolist">
        <Button variant="contained" color="secondary">
          Todo App
        </Button>
      </Link>
    </div>
  );
}
