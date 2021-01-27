import React from 'react';
import { connect } from "react-redux";

const CompletedList = (props) =>{
  return(
    <ul>
     {props.todo.length !== 0 ? props.todo.map((todo, key) => (
        <li key={key}>
          {todo.completed ? todo.message : ''}
        </li>
        )): '' }
    </ul>
  )
}

const mapStateToProps = (state) => ({
  todo: state.todo.data
})

export default connect(mapStateToProps)(CompletedList);