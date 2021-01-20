import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import Add from "./components/Add";
import List from "./components/List";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      textInput: "",
      isClicked: true,
    };
  }

  clearTextInput = () =>{
    this.setState({ textInput: "" })
  }

  render(){
    const { textInput, isClicked } = this.state;
    return(
      <div>
        <h1 className="center">To-Do List</h1>
          <span className="addIcon"><AddIcon /></span>

        <Add />
        <List/>
      </div>
    )
  }
}

export default App;