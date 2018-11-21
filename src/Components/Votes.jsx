import React, { Component } from "react";
import * as api from "../api";
import Like from "../Assets/like.png";
import Unlike from "../Assets/unlike.png";
import "./Votes.css";

class Votes extends Component {
  state = {
    voteChange: 0,
    loading: true
  };
  render() {
    return (
      <div>
        <h4>Likes</h4>
        {this.props.votes && (
          <p>{`${this.props.votes + this.state.voteChange}`}</p>
        )}{" "}
        <br />
        <button
          onClick={() => this.vote("up")}
          disabled={this.state.voteChange === 1}
        >
          <img src={Like} alt="like" width="40" height="40" />
        </button>
        <button
          onClick={() => this.vote("down")}
          disabled={this.state.voteChange === -1}
        >
          <img src={Unlike} alt="unlike" width="40" height="40" />
        </button>
      </div>
    );
  }
  vote = direction => {
    api.vote(this.props._id, this.props.section, direction);
    this.setState({
      voteChange:
        direction === "up"
          ? this.state.voteChange + 1
          : this.state.voteChange - 1,
      loading: false
    });
  };
}

export default Votes;
