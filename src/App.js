import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Add from "./components/Add";
import List from "./components/List";
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function App(){
    return(
      <div>

        <h1 className="center"><CheckBoxIcon />To-Do List</h1>
        <List/>
        <span className="addIcon"><AddIcon /></span>
        <Add />

      </div>
    );
  }

