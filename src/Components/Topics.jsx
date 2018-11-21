import React from "react";
import { Link } from "@reach/router";
import footballImg from "../Assets/football.png";
import cookingImg from "../Assets/cooking.png";
import codingImg from "../Assets/coding.png";
import articlesImg from "../Assets/articles.png";
import "./Topics.css";

const Topics = props => {
  return (
    <div className="Topicgrid">
      <div id="Topic">
        <h2>Coding</h2>
        <Link to="/articles/topic/coding">
          {" "}
          <img className="Codingbutton" src={codingImg} alt="Coding" />
        </Link>
      </div>

      <div id="Topic">
        <h2>Football</h2>
        <Link to="/articles/topic/football">
          {" "}
          <img
            className="Footballbutton"
            src={footballImg}
            alt="Football"
          />{" "}
        </Link>
      </div>

      <div id="Topic">
        <h2>Cooking</h2>
        <Link to="/articles/topic/cooking">
          {" "}
          <img className="Cookingbutton" src={cookingImg} alt="Cooking" />{" "}
        </Link>
      </div>

      <div id="Articles">
        <h2>All Articles</h2>
        <Link to="/articles">
          {" "}
          <img
            className="Articlesbutton"
            src={articlesImg}
            alt="articles"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Topics;
