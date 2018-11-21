import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Login from "./Components/Login";
import * as api from "./api";
import Nav from "./Components/Nav";
import Profile from "./Components/Profile";
import Errors from "./Components/Errors";

class App extends Component {
  state = {
    user: null,
    error: null
  };
  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1>NC NEWS</h1>
        </header>
        <Login
          login={this.login}
          user={this.state.user}
          error={this.state.error}
        >
          <Nav user={this.state.user} />
          <Router primary={false}>
            <Home path="/" />
            <Articles path="/articles" user={this.state.user} />
            <Article path="/articles/:article_id" user={this.state.user} />
            <Articles path="/articles/topic/:topic" user={this.state.user} />
            {this.state.user && (
              <Profile
                path={`user/:username`}
                user={this.state.user}
                logout={this.logout}
              />
            )}
            <Errors path="/error" />
          </Router>
        </Login>
      </div>
    );
  }
  login = username => {
    api
      .getUser(username)
      .then(user => {
        sessionStorage.setItem("username", JSON.stringify(user));
        this.setState({
          user,
          error: null
        });
      })
      .catch(error => {
        this.setState({});
      });
  };
  logout = () => {
    this.setState({
      user: null
    });
  };
}

export default App;
