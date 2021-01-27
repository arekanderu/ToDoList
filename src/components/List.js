import React, { useState } from "react";
import { connect } from "react-redux";
import Delete from './Delete';
import Edit from './Edit';
import Checkbox from './ToggleCheckbox';

const List = (props) => {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState('');
  return(
    <ul>
      {props.todo.length !== 0 ? props.todo.map((todo, key) => (
        todo.completed === false ?
        <li key={key} className="todo-row">
          {/* Click checkbox to complete to-do function */}
          <Checkbox id={todo.id} isCompleted={todo.completed} />
          <div className="content">
          {/* Click to-do to edit function */}
          {clicked && todo.id === id ?
            <Edit text={todo.message}
                  id={todo.id}
                  handleOnKeyDown={() => setClicked(!clicked)}
            />
          :
            <p onClick={() => {
              setClicked(!clicked)
              setId(todo.id)
            }}>
              {todo.message}
            </p>
          }
            {/* Delete function */}
            <div className="icons">
              <Delete id={todo.id} />
            </div>
          </div>
        </li> : ''
      )) : ''
      }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  todo: state.todo.data
})

export default connect(mapStateToProps)(List);