import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editTodo } from "../actions/index";

const Edit = (props) =>{
  const [value, setValue] = useState(props.text);
  return(
    <div>
      <TextField
        className="text-input"
        id={props.id}
        autoComplete="off"
        autoFocus
        style={{ padding: '15px'}}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){
            props.dispatch(editTodo(props.id, e.target.value))
            props.handleOnKeyDown()
          }
        }}
      />
    </div>
  )
}

export default connect()(Edit);