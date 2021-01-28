import React, { useState } from 'react';
import { connect } from "react-redux";
import List from "./List";
import ToggleCollapse from "./ToggleCollapse"
import { Collapse } from "@material-ui/core";

const CompletedList = (props) =>{
  const counter = props.todo.filter((item) => item.completed);
  const [clicked, setClicked] = useState(false);
  return(
    <div>
      <div className="down-icon"><ToggleCollapse condition={() => setClicked(!clicked)} action={clicked}/></div>
      <h3 className="counter">{counter.length} task completed</h3>

      <Collapse in={!clicked}>
        <ul>
          {props.todo.length !== 0 ? props.todo.map((todo, key) => (
            todo.completed ?
            <li key={key} className="todo-row-completed">
              <List
                  id={todo.id}
                  completed={todo.completed}
                  message={todo.message}
              />
            </li> : ''
          )) : ''
          }
        </ul>
      </Collapse>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todo: state.todo.data
})

export default connect(mapStateToProps)(CompletedList);