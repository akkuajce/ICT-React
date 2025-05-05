import React, { Component } from "react";

class HeaderChild extends Component {
  render() {
    return (
      <div>
        child{this.props.data.name} and the address is {this.props.data}
        <button onClick={this.props.changeAddress}>Chanhe through child</button>
        
      </div>
    )
  }
}

export default HeaderChild;
