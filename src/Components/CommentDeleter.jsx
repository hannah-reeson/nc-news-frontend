import React, { Component } from "react";

class CommentDeleter extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.delete(this.props.commentId);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default CommentDeleter;
