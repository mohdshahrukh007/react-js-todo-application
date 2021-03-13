import React, { useState } from "react";
import { TextField, Button, Select, Grid } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import Todoitems from "./Todoitems";
import { Fade } from "@material-ui/core";
export default function Todolist() {
  const [items, setitems] = useState([]);
  const [handleItemInput, sethandleItemInput] = useState([]);
  const [edit, setedit] = useState(false);
  const [AAlert, setAAlert] = useState();
  function changelog(e) {
    sethandleItemInput(e.target.value);
  }

  const addbtn = () => {
    if (handleItemInput != "") {
      setAAlert("");
      setitems((old) => {
        return [...old, handleItemInput];
      });
    } else {
      return setAAlert(alert("error", "please write something"));
      //dynamic alert
    }

    sethandleItemInput("");
  };

  function dltitem(id) {
    setitems((olditem) => {
      return olditem.filter((element, index) => {
        return index !== id;
      });
    });
  }
  function edititem(id) {}
  function alert(type, msg) {
    return (
      <Alert variant="filled" severity={type}>
        {msg}
      </Alert>
    );
  }

  return (
    <>
      <Grid container justify="center" className="bg">
        <Grid xs={6}>
          <span className="text_center  ">
            <h1>Todo List</h1>
          </span>
          <div className=" text_center margintop">
            <TextField
              onChange={changelog}
              id="filled-basic"
              label="Todo"
              variant="filled"
              value={handleItemInput}
            />
            <Button onClick={addbtn} variant="contained" color="secondary">
              + ADD
            </Button>
          </div>
          {AAlert}
          <ul>
            {items.map((item, index) => {
              return (
                <Todoitems
                  text={item}
                  id={index}
                  key={index}
                  onSelect={dltitem}
                  onSelect2={edititem}
                />
              );
            })}
          </ul>
        </Grid>
      </Grid>
    </>
  );
}
