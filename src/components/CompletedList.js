import React, { useState } from 'react';
import { connect } from "react-redux";
import List from "./List";

const CompletedList = (props) =>{
  return(
    <ul>
      {props.todo.length !== 0 ? props.todo.map((todo, key) => (
        todo.completed ?
        <li key={key} className="todo-row">
          <List
              id={todo.id}
              completed={todo.completed}
              message={todo.message}
          />
        </li> : ''
      )) : ''
      }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  todo: state.todo.data
})

export default connect(mapStateToProps)(CompletedList);