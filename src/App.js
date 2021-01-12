import './App.css';
import React, { Component } from "react";

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

  handleKeyPress = (e) =>{
    if(e.keyCode === 13){
      //
    }
  };

  render(){
    return(
      <div>
        <h1 className="center">To-Do List</h1>
      </div>
    )
  }
}

export default App;
