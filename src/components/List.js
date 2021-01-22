import React, { useState } from "react";
import { connect } from "react-redux";
import Delete from './Delete';
import Edit from './Edit';
import Checkbox from '@material-ui/core/Checkbox'

const List = (props) => {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState('');
  const [checked, setChecked] = useState(true);
  return(
    <ul>
      {props.todo.length !== 0 ? props.todo.map((todo, key) => (
        <li className="todo-row" key={key}>
          <Checkbox
            checked={checked}
            onClick={() => setChecked(!checked)}
            style ={{ color: "#fff",
                      marginTop: "20px",
             }}/>

          <div className="content">
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
              </p>}
            <div className="icons">
              <Delete id={todo.id} />
            </div>
          </div>
          </li>
        )): 'No item on the list' }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  todo: state.todo.data
})

export default connect(mapStateToProps)(List);