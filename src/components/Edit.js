import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editTodo } from "../actions/index";

const Edit = (props) =>{
  const [editable] = useState('colide');
  return(
    <div>
      <TextField
        name="textInput"
        type="text"
        autoComplete="off"
        value={props.text}
        onChange={(event) =>  props.dispatch(editTodo(props.id, event.target.value))}
        InputProps={{ disableUnderline:true }}
        onChange={(event) => {


        }}
            />
        {editable}
    </div>
  )
}

export default connect()(Edit);