import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Add from "./components/Add";
import IncompleteList from "./components/IncompleteList";
import CompletedList from "./components/CompletedList";

export default function App(){
    return(
      <div>
        <IncompleteList />
        <span className="addIcon"><AddIcon /></span>
        <Add />
        <CompletedList />


      </div>
    );
  }

