import React from "react";
import { Button, Grid } from "@material-ui/core";

export default function Todoitems(props) {
  return (
    <Grid container justify="space-around" className=" " key={props.id}>
      <Grid key={props.id}>{props.text}</Grid>
      <Grid>
        <Button
          onClick={() => {
            props.onSelect(props.id);
          }} //call back function
          mr={1}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            props.onSelect2(props.id);
          }}
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
}
