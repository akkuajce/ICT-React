import React, { Component } from "react";
import HeaderChild from "./HeaderChild";
import ChildInput from "./childInput";

class Header extends Component {

  constructor() {
    super();
    this.state = {
      name: "Akku",
      address: "Bangalore",
      
    }
  }

  updateAdress = () => {
    this.setState({
      address: "Delhi"})
      console.log("this.state",this.address);
  }
  
  render() {
    return (
      
        <>
        <h1>Header</h1>
{/* parent next line only */}
        {this.state.name} address is {this.state.address}
        {/* <h2>Header</h2>
        <h2>{this.state.name} address is {this.state.address}</h2>
        
        <button onClick={this.updateAdress}>Update Address</button> */}

        <HeaderChild data={this.state.address} changeAddress={this.updateAdress}> </HeaderChild>
        </>
      
    );
  }
}

export default Header;
