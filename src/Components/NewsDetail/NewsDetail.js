import React from "react";
import { useParams } from "react-router-dom";
import './NewsDetail.css'

const NewsDetail = ({ article }) => {
  const params = useParams();
  console.log(params, "line 6")
  const selectedArticle = article;

  if (!selectedArticle || Object.keys(selectedArticle).length === 0) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-details">
      <h2 className="article-details-title">{selectedArticle.title}</h2>
      <p className="article-details-name">{selectedArticle.source.name}</p>
      <p className="article-details-description">{selectedArticle.description}</p>
      <img className="article-details-image" src={selectedArticle.urlToImage} alt={selectedArticle.title} />
      <p className="article-details-content">{selectedArticle.content}</p>
      <a className="article-details-url"href={selectedArticle.url} target="_blank">
        Click here for full article
      </a>
    </div>
  );
};

export default NewsDetail;
