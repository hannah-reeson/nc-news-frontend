import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import ArticleAdder from "./ArticleAdder";
import "./Article.css";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    return (
      <div className="Articlegrid">
        <span className="Article">
          <div className="Scroll">
            <h2>Articles</h2>
            {this.state.articles.map(article => {
              // console.log(article);
              return (
                <Link
                  className="class1"
                  to={`/articles/${article._id}`}
                  key={article._id}
                >
                  <li
                    key={article._id}
                    style={{
                      padding: 10,
                      margin: 10
                    }}
                  >
                    <div>{article.title}</div>
                  </li>
                </Link>
              );
            })}
          </div>
        </span>

        <ArticleAdder user={this.props.user} />
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api
      .getArticles(this.props.topic)
      .then(articles => {
        console.log(articles);
        this.setState({
          articles
        });
      })
      .catch(error => {
        this.props.navigate("/error", {
          state: {
            status: 404,
            from: "./articles",
            msg: "Our Ponies couldn't find any Articles"
          }
        });
      });
  };
}

export default Articles;
