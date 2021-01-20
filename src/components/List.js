import React from "react";
import { connect } from "react-redux";
import Delete from './Delete';
import Edit from './Edit';

const List = (props) => {
  const handleOnClick = (id) =>{
    props.action();
  }


  return(
    <ul>
        {props.todo.length !== 0 ? props.todo.map((todo, key) => (
          <li key={key}>
            <Edit text={todo.message}
                       onClick={() => handleOnClick(todo.id)}
                       id={todo.id}
                       onChanage={props.onChange}
                       />

            <div className="icons">
              <Delete id={todo.id} />
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