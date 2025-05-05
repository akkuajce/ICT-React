import React, { Component } from "react";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      submit: "",
    }
  }

  // updateSubmit = () => {
  //   this.setState({
  //     submit: "Login Successfully"
  //   })
  //   console.log("this.state", this.submit);
  // }

  updateSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    this.setState({ submit: "Login Successfully" }, () => {
      console.log("this.state.submit:", this.state.submit);
    });
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          {/* <button type="submit">Login</button> */}
          {/* <button onClick={this.updateSubmit}>Login</button> */}
          <button onClick={this.updateSubmit}>Login</button>
        </form>
        <p>{this.state.submit}</p>
      </div>
    );
  }
}

export default Login;
