import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editTodo } from "../actions/index";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  input: {
    color: 'white',
  },
  underline:{
    "&&&:before": {
      borderBottomColor: "none"
    },
    "&&:after": {
      borderBottomColor: "white"
    }
  }
};

const Edit = (props) =>{
  const { classes } = props;
  const [value, setValue] = useState(props.text);
  return(
    <div>
      <TextField
        className='text-input'
        id={props.id}
        autoComplete="off"
        autoFocus
        style={{ padding: '20px', color: 'white' }}
        InputProps={{  classes: {
          root: classes.input,
          underline: classes.underline
        } }}
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

export default withStyles(styles)(connect()(Edit));