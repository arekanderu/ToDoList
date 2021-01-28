import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ToggleCollapse = (props) =>{
  return(
    <div>
      {props.action ?
        <ExpandLessIcon onClick={props.condition}/>
      :
        <KeyboardArrowDownIcon onClick={props.condition}/>

      }
    </div>
  )
}

export default ToggleCollapse;