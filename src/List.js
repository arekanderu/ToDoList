import React from "react";
import { connect } from "react-redux";


const List = (props) => {
  return(
    <div>
      <ul>
        {props.todos.map((todo, key) => (
          <li key={key}>{todo.message}</li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todo.data
})

export default connect(mapStateToProps)(List);