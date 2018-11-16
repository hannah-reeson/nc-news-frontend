import React, { Component } from "react";
import * as api from "../api";
import "./Article.css";
import Comments from "./Comments";
import Votes from "./Votes";

class Article extends Component {
  state = {
    article: {},
    loading: true
  };
  render() {
    return (
      <div className="Articlegrid">
        <span className="Article">
          <h3 className="ArticleTitle">{this.state.article.title}</h3>
          <div className="ArticleBody">{this.state.article.body}</div>
          <Votes
            votes={this.state.article.votes}
            _id={this.state.article.article_id}
            section={"articles"}
          />
        </span>
        <Comments articleId={this.props.article_id} user={this.props.user} />
      </div>
    );
  }
  componentDidMount = () => {
    this.fetchArticle();
  };

  fetchArticle = () => {
    api.getArticle(this.props.article_id).then(article => {
      this.setState({
        article
      });
    });
  };
}

export default Article;
