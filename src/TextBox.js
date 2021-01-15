import React from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { addTodo } from "./actions";



const TextBox = (props) => {
  const handleOnKeyDown = (event) => {
    if(event.key === 'Enter'){
      props.action();
      props.dispatch(addTodo(props.textValue));
    }
  }
  return(
    <div>
      <TextField
        name="textInput"
        type="text"
        placeholder="List item..."
        fullWidth
        autoComplete="off"
        value={props.textValue}
        onChange={props.onChange}
        onKeyDown={handleOnKeyDown}
        />
    </div>
  );
}

export default connect()(TextBox);