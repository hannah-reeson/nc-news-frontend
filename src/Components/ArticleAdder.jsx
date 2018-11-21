import React, { Component } from "react";
import "./Article.css";
import * as api from "../api";

class ArticleAdder extends Component {
  state = {
    title: "",
    belongs_to: "",
    body: "",
    ArticleAdded: false
  };
  render() {
    return this.state.ArticleAdded ? (
      <div>
        <h2>Your article has been added!</h2>
      </div>
    ) : (
      <div id="articleAdder">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Add an Article</label>
          <br />
          <div>
            <input
              type="text"
              id="title"
              value={this.state.title}
              placeholder="Article Title"
              onChange={this.handleChangeTitle}
              required
            />

            <div>
              <br />
              <select
                value={this.state.belongs_to}
                onChange={this.handleChangeTopic}
              >
                <option>Select a Topic</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
                <option value="cooking">Cooking</option>
              </select>
            </div>
            <br />
            <textarea
              className="ArticleTitle"
              rows="15"
              cols="50"
              name="comment"
              id="comment"
              onChange={this.handleChangeBody}
              placeholder="Write your article..."
              required
            />
            <br />
            <input className="add" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.user._id);
    this.addArticle(
      this.state.title,
      this.state.belongs_to,
      this.state.body,
      this.props.user._id
    );
    this.setState({
      ArticleAdded: true
    });
  };
  handleChangeTitle = event => {
    const value = event.target.value;
    this.setState({
      title: value
    });
  };
  handleChangeTopic = event => {
    const value = event.target.value;
    this.setState({
      belongs_to: value
    });
  };
  handleChangeBody = event => {
    const value = event.target.value;
    this.setState({
      body: value
    });
  };
  addArticle = (title, belongs_to, body, user) => {
    api.addArticle(title, belongs_to, body, user);
  };
}

export default ArticleAdder;
