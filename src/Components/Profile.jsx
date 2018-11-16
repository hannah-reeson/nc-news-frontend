import React, { Component } from "react";

class Profile extends Component {
  state = {
    user: {}
  };
  render() {
    const { name, avatar_url, username } = this.props.user;
    return (
      <div>
        <h2 className="user">{username}</h2>
        <img className="avatar" src={avatar_url} alt="userImage" />
        <h3 className="name">{name}</h3>
        <button
          onClick={() => {
            this.props.logout();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default Profile;
