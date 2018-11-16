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
              onChange={this.handleChange}
              required
            />

            <div>
              <br />
              <select
                value={this.state.belongs_to}
                onChange={this.handleChange2}
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
              onChange={this.handleChange3}
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
    this.addArticle(
      this.state.title,
      this.state.belongs_to,
      this.state.body,
      this.props.user
    );
    this.setState({
      ArticleAdded: true
    });
  };
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      title: value
    });
  };
  handleChange2 = event => {
    const value = event.target.value;
    this.setState({
      belongs_to: value
    });
  };
  handleChange3 = event => {
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
