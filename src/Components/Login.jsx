import React, { Component } from "react";
import "./Article.css";
import "./Profile.css";
import Home from "../Assets/home.png";

class Login extends Component {
  state = {
    username: ""
  };
  render() {
    if (this.props.user);
    const { children, user } = this.props;
    return user ? (
      children
    ) : (
      <form className="Login" onSubmit={this.handleSubmit}>
        <img className="avatar" src={Home} alt="Ponies" />
        <br />
        <label htmlFor="username">Username</label>
        <br />
        <br />
        <input
          onChange={this.handleChange}
          id="username"
          placeholder="What do we call you..."
          type="text"
          value={this.state.username}
        />
        <br />
        {this.props.error ? <p>User Doesnt Exist</p> : <p />}
        <br />
        <button>Login</button>
      </form>
    );
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
  };
  handleChange = event => {
    const { value, id } = event.target;
    this.setState({
      [id]: value
    });
  };
}

export default Login;
