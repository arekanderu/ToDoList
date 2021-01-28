import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ToggleCollapse = (props) =>{
  return(
    <div>
      {props.action ?
        <KeyboardArrowDownIcon onClick={props.condition}/>
      :
        <ExpandLessIcon onClick={props.condition}/>

      }
    </div>
  )
}

export default ToggleCollapse;