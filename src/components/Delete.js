import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const Delete = (props) => {
  const handleOnClick = (event) =>{
    alert('hi');
  }
  return(
    <div className="delete">
       <CloseIcon onClick={handleOnClick}/>
    </div>
  )
}

export default Delete;