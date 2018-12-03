import React, { Component } from "react";
import * as api from "../api";
import Votes from "./Votes";
import CommentAdder from "./CommentAdder";
import CommentDeleter from "./CommentDeleter";

class Comments extends Component {
  state = {
    comments: [],
    loading: true
  };
  render() {
    return (
      <div className="Comments">
        <span>
          <h2 className="CommentTitile">Comments</h2>
          <ul className="Scroll">
            {this.state.loading ? (
              <h2>Loading...</h2>
            ) : (
              this.state.comments.map(comment => {
                return (
                  <li className="singleComment" key={comment._id}>
                    {" "}
                    <p>{comment.body}</p>
                    <div>
                      <h6 className="postUser">
                        {" "}
                        posted by: {comment.created_by.username}
                      </h6>
                      <img
                        className="commentAvatar"
                        src={comment.created_by.avatar_url}
                        alt="ProfilePic"
                      />
                    </div>
                    {comment.created_by.username ===
                      this.props.user.username && (
                      <CommentDeleter
                        commentId={comment._id}
                        delete={this.delete}
                      />
                    )}
                    <Votes
                      votes={comment.votes}
                      _id={comment._id}
                      section={"comments"}
                    />
                  </li>
                );
              })
            )}
            <CommentAdder
              addComment={this.addComment}
              comments={this.state.comments}
              articleId={this.props.articleId}
              user={this.props.user}
            />
          </ul>
        </span>
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = () => {
    api.getComments(this.props.articleId).then(comments => {
      this.setState({
        comments,
        loading: false
      });
    });
  };
  addComment = body => {
    api
      .postComment(this.props.articleId, body, this.props.user._id)
      .then(comment => {
        this.setState({
          comments: [comment.data, ...this.state.comments]
        });
      });
  };

  delete = id => {
    api.deleteComment(id).then(() => {
      this.setState({
        comments: this.state.comments.filter(comment => comment._id !== id)
      });
    });
  };
}

// Comments.propTypes = {
//   user: PropTypes.object.isRequired,
//   articles:PropTypes.object.isRequired
//   };

export default Comments;
