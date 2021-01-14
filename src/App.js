import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import TextBox from "./TextBox";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      todo: [],
      textInput: ""
    };
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    return(
      <div>
        <h1 className="center">To-Do List</h1>
        <AddIcon />
        <TextBox onChange={this.handleOnChange.bind(this)} textValue={this.state.textInput}/>
      </div>
    )
  }
}

export default App;