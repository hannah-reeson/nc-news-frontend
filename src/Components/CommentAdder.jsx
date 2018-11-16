import React, { Component } from "react";
import "./Article.css";

class CommentAdder extends Component {
  state = {
    body: ""
  };
  render() {
    return (
      <form className="AddComment" id="addComment" onSubmit={this.handleSubmit}>
        <br />
        <input
          className="CommentBox"
          id="addCommentBox"
          type="text"
          aria-label="comment body"
          placeholder="Post a comment..."
          onChange={this.handleChange}
          name="body"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.body);
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      body: value
    });
  };
}

export default CommentAdder;
