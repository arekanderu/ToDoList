import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@materil-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";

export default function ToDoList(props){
  const list = props.todo.map((list) => (
    <List>
      <Divider />
        <ListItem className="content" key={list.key}>
          <span>{list.content}</span>
          <div className="icon">
              <CloseIcon />
          </div>
        </ListItem>
    </List>
  ));

  return(
    <p className="List">
      {props.todo.length !== 0 ? list : 'No item on the list' }
    </p>
  );
}
