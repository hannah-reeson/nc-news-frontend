import React, { Component } from "react";
import * as api from "../api";
import Like from "../Assets/like.png";
import Unlike from "../Assets/unlike.png";
import "./Votes.css";

class Votes extends Component {
  state = {
    voteChange: 0
  };
  render() {
    return (
      <div>
        <h3>Likes</h3>
        <p>{`${this.props.votes + this.state.voteChange}`}</p>

        <button
          onClick={() => this.vote("up")}
          disabled={this.state.voteChange === 1}
        >
          <img src={Like} alt="like" width="50" height="50" />
        </button>
        <button
          onClick={() => this.vote("down")}
          disabled={this.state.voteChange === -1}
        >
          <img src={Unlike} alt="unlike" width="50" height="50" />
        </button>
      </div>
    );
  }
  vote = direction => {
    api.vote(this.props._id, this.props.section, direction).catch(() => {
      console.log("ooppsss");
    });
    this.setState({
      voteChange:
        direction === "up"
          ? this.state.voteChange + 1
          : this.state.voteChange - 1
    });
  };
}

export default Votes;
