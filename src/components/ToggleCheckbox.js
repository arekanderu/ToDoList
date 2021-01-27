import React, { useState } from 'react';
import { connect } from "react-redux";
import { completeTodo } from "../actions/index";
import Checkbox from '@material-ui/core/Checkbox';

const ToggleCheckbox = (props) =>{
  const [checked, setChecked] = useState(true);
  return(
    <div>
      <Checkbox
            id={props.id}
            checked={props.isCompleted}
            onClick={() => {
              setChecked(!checked)
              props.dispatch(completeTodo(props.id, checked))
            }}
            style ={{ color: "#fff",
                      marginTop: "20px",
             }}/>
    </div>
  )
}

export default connect()(ToggleCheckbox);