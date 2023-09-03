/* eslint-disable react/prop-types */
// import React from 'react'
import "./news_style.scss";
const NewsItem = ({ imageUrl, news }) => {
  return (
    <div className="card ">
      <img src={imageUrl} alt="" />

      <div className="newsDetails">
        <h2>{news.title}</h2>
      </div>
    </div>
  );
};

export default NewsItem;
