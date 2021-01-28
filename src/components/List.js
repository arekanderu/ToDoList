import React, { useState } from "react";
import Delete from './Delete';
import Edit from './Edit';
import Checkbox from './ToggleCheckbox';

const List = (props) => {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState('');
  return(
    <div>
      {/* Click checkbox to complete to-do function */}
      <Checkbox id={props.id} isCompleted={props.completed} />
        <div className="content">
          {/* Click to-do to edit function */}
          {clicked && props.id === id ?
            <Edit text={props.message}
                  id={props.id}
                  handleOnKeyDown={() => setClicked(!clicked)}
            />
          :
            <p onClick={() => {
              setClicked(!clicked)
              setId(props.id)
            }}>
              {props.message}
            </p>
          }
            {/* Delete function */}
            <div className="icons">
              <Delete id={props.id} />
            </div>
          </div>
    </div>
  )
}

export default List;