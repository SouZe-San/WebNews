/* eslint-disable react/prop-types */
// import React from 'react'
import "./news_style.scss";
const NewsItem = ({ imageUrl, news, titleFont }) => {
  return (
    <div className="card ">
      <img src={imageUrl} alt="" />

      <div className="newsDetails">
        <a href={news.url} className="no-underline h-full">
          <h2 className="news_title" style={{ fontSize: `${titleFont}` }}>
            {news.title}
          </h2>
          <p className="mt-[5px]">{news.description}</p>
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
