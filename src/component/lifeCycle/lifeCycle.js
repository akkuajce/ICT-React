
import React, { Component } from "react";
import axios from "axios";

class LifeCycle extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ data: response.data, isLoading: false }); // Update state with fetched data
      })
      .catch(() => {
        this.setState({ isLoading: false }); // Handle errors
      });
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) return <p>Loading...</p>;

    return (
      <div>
        <h1>Table</h1>
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
            {data.length ? (
              data.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.id}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LifeCycle;












// import React, { Component } from "react";
// import axios from "axios";

// class LifeCycle extends Component {
//   state = {
//     data: [], // Initialize as an array
//     isLoading: true, // Add loading state
//   };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((resp) => this.setState({ data: resp, isLoading: false })) // Directly set the array of users
//       .catch(() => this.setState({ isLoading: false })); // Handle errors
//   }

//   render() {
//     const { data, isLoading } = this.state;

//     return (
//       <div>
//         <h1>Table</h1>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           <table border="1">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Id</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.length > 0 ? (
//                 data.map((item, index) => (
//                   <tr key={item.id}>
//                     <td>{index + 1}</td>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.id}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4">No data available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         )}
//       </div>
//     );
//   }
// }

// export default LifeCycle;






// import React, { Component } from "react";

// class LifeCycle extends Component {
//   state = {
//     data: [], // Initialize as an array
//     isLoading: true, // Add loading state
//   };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((res) => res.json())
//       .then((resp) => this.setState({ data: [resp], isLoading: false }))
//       .catch(() => this.setState({ isLoading: false })); // Handle errors
//   }

//   render() {
//     const { data, isLoading } = this.state;

//     return (
//       <div>
//         <h1>Table</h1>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           <table border="1">
//             <thead>
//               <tr>
//                 <th>S.no</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Id</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.length > 0 ? (
//                 data.map((item, index) => (
//                   <tr key={item.id}>
//                     <td>{index + 1}</td>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.id}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4">No data available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         )}
//       </div>
//     );
//   }
// }

// export default LifeCycle;