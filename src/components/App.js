import React, { Component } from "react";
import Image from 'react-image-resizer';
import "../styles/App.css";

// import background from './background'

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
        <h1>Emily Costa</h1>
        <p>This website is to flex on ya.</p>
        <p>Yes, that is the world's fastest supercomputer that I am standing in front of.</p>
        <background />
        <img src={require("../images/summit_pic.jpg")} />
      </div>
    )
  }

}

export default App;

