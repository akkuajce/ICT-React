import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      data: [], // Initialize as an array
      isLoading: true, // Add loading state
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp); // Log the response
        this.setState({ data: [resp], isLoading: false }); // Convert the object to an array and update loading state
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
        this.setState({ isLoading: false }); // Stop loading even if there's an error
      });
  };

  render() {
    const { data, isLoading } = this.state; // Destructure state

    return (
      <div>
        <h1>Table</h1>
        {isLoading ? (
          <p>Loading...</p> // Display loading message
        ) : (
          <table border="1">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Id</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.id}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default LifeCycle;