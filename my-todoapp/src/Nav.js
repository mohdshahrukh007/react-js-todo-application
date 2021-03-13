import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const stylenav = {
    margin: "5vh",
    color: "white",
  };
  return (
    <>
      <nav className="navbar">
        <Link style={stylenav} to="/home">
          home
        </Link>
        <Link style={stylenav} to="/todolist">
          <span>Todo List App</span>
        </Link>
      </nav>
    </>
  );
}
