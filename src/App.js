import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import TextBox from "./components/TextBox";
import List from "./components/List";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      textInput: ""
    };
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  emptyTextInput = () =>{
    this.setState({ textInput: "" })
  }

  render(){
    const { textInput } = this.state;
    return(
      <div>
        <h1 className="center">To-Do List</h1>
        <span className="addIcon"><AddIcon /></span>
        <TextBox onChange={this.handleOnChange.bind(this)}
                  textValue={textInput}
                  action={this.emptyTextInput}/>
        <List />
      </div>
    )
  }
}

export default App;