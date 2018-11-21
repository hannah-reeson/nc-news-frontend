import React, { Component } from "react";
import { Link } from "@reach/router";
import "./Links.css";

class Nav extends Component {
  state = {
    user: {}
  };
  render() {
    const { avatar_url, username } = this.props.user;
    return (
      <div>
        <div className="HomeLink">
          <Link className="class2" to="/">
            <h4>Home</h4>
          </Link>
        </div>
        <div>
          <Link className="class2" to={`user/${username}`}>
            <h4 className="ProfileLink">Profile</h4>{" "}
          </Link>
          <img className="NavAv" alt="userImage" src={avatar_url} />
        </div>
      </div>
    );
  }
}

export default Nav;
