import React from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { addTodo } from "./actions";

const TextBox = (props) => {
  return(
    <div>
      <TextField
        name="textInput"
        type="text"
        placeholder="List item..."
        fullWidth
        autoComplete="off"
        onChange={props.onChange}
        onKeyDown={(event) =>
          {event.key === 'Enter' && props.dispatch(addTodo(props.textValue))}}
      />
    </div>
  );
}

export default connect()(TextBox);