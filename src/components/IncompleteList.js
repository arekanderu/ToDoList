import React from "react";
import { connect } from "react-redux";
import List from "./List";

const IncompleteList = (props) => {
  return(
    <div>
    <h1 className="center">To-Do List</h1>
      <ul>
        {props.todo.length !== 0 ? props.todo.map((todo, key) => (
          todo.completed === false ?
          <li key={key} className="todo-row">
            <List
              id={todo.id}
              completed={todo.completed}
              message={todo.message}/>
          </li> : ''
        )) : ''
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todo: state.todo.data
})

export default connect(mapStateToProps)(IncompleteList);