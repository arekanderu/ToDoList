import React from "react";
import { TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function SearchBar(props){
  return(
    <div>
      <AddIcon />
      <TextField
        name="textInput"
        type="text"
        placeholder="List item..."
        fullWidth
        autoComplete="off"
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
}