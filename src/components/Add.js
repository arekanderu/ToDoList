import React, { useState }  from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

const Add = (props) => {
  const [value, setValue] = useState('');
  return(
    <div>
      <TextField
        name="textInput"
        type="text"
        placeholder="List item..."
        fullWidth
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            setValue("");
            props.dispatch(addTodo(value));
          }
        }}
        />
    </div>
  );
}

export default connect()(Add);