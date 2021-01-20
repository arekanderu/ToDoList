import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editTodo, addTodo } from "../actions/index";

const Edit = (props) =>{
  const [value, setValue] = useState(props.text);
  return(
    <div>
      <TextField
        name="textInput"
        id={props.id}
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{ disableUnderline:true }}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
          props.dispatch(editTodo(props.id, e.target.value))
          }
        }}
            />
    </div>
  )
}

export default connect()(Edit);