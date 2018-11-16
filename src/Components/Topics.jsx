import React from "react";
import { Link } from "@reach/router";
import FootballImg from "../Assets/football.png";
import CookingImg from "../Assets/cooking.png";
import CodingImg from "../Assets/coding.png";
import ArticlesImg from "../Assets/articles.png";
import "./Topics.css";

const Topics = props => {
  return (
    <div className="Topicgrid">
      <div id="Topic">
        <h2>Coding</h2>
        <Link to="/articles/topic/coding">
          {" "}
          <img
            className="Codingbutton"
            src={CodingImg}
            alt="Coding"
            width="350"
            height="300"
          />
        </Link>
      </div>

      <div id="Topic">
        <h2>Football</h2>
        <Link to="/articles/topic/football">
          {" "}
          <img
            className="Footballbutton"
            src={FootballImg}
            alt="Football"
            width="300"
            height="300"
          />{" "}
        </Link>
      </div>

      <div id="Topic">
        <h2>Cooking</h2>
        <Link to="/articles/topic/cooking">
          {" "}
          <img
            className="Cookingbutton"
            src={CookingImg}
            alt="Cooking"
            width="300"
            height="300"
          />{" "}
        </Link>
      </div>

      <div id="Articles">
        <h2>All Articles</h2>
        <Link to="/articles">
          {" "}
          <img
            className="Articlesbutton"
            src={ArticlesImg}
            alt="articles"
            width="300"
            height="300"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Topics;
