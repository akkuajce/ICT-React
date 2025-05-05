// src/Loginform.js
import React, { Component } from 'react';
import './Loginform.css'; // ✅ Importing CSS file for styling

class Loginform extends Component {
    state = {
        username: '',
        email: '',
        number: '',
        password: '',
        users: [],
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, number, password, users } = this.state;

        const newUser = { username, email, number, password };
        this.setState({
            users: [...users, newUser],
            username: '',
            email: '',
            number: '',
            password: '',
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.users !== this.state.users) {
            console.log('Updated Users:', this.state.users);
        }
    }

    render() {
        const { username, email, number, password, users } = this.state;

        return (
            <div className="login-container">
                <h2>Login Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="number">Number:</label>
                        <input
                            type="text"
                            id="number"
                            name="number"
                            value={number}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>

                {users.length > 0 && (
                    <div className="user-data">
                        <h3>User Data</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.number}</td>
                                        <td>{user.password}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    }
}

export default Loginform;
