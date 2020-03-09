import React, { Component } from "react";
import "../styles/App.css";

import background from './background'

class App extends Component{
  constructor(){
    super();
    this.state = {
      results: {}
    }
  }
  render(){
    return(
      <div>
        <background />
        <img src={require("../images/summit_pic.jpg")} />
      </div>
    )
  }

}

export default App;

