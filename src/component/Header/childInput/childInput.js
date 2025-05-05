import React, { Component } from "react";

class ChildInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
      
    }
  }
  updateName = (evt)=>{
    this.setState({
      name:evt.target.value
    })
    console.log("this.state", this.name);
  }
  render() {
    return (
      <>
      <input type="text" value={this.state.name} onChange={(e)=>this.updateName} />
      <button onChange={this.updateName}>Change the name</button>
      </>
    )
  }
}

export default ChildInput;
