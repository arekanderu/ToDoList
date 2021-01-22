import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/index";


const Delete = (props) => {
  return(
    <div className="delete">
       <CloseIcon
          onClick={() => props.dispatch(deleteTodo(props.id))}
        />
    </div>
  )
}

export default connect()(Delete);