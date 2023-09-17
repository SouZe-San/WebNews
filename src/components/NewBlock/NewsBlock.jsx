import NewsItem from "./newsItem/NewsItem";

// import React from 'react'
import "./blockStyle.scss";
// import OnCardAnimation from "../motion/OnCardAnimation";
const NewsBlock = () => {
  return (
    // grid-flow-col grid-cols-1 grid-rows-3 gap-4
    <div className=" NewsContainer grid justify-items-center content-center  pt-12 px-8 justify-self-center pb-8r">
      {/* <OnCardAnimation>
        <NewsItem />
      </OnCardAnimation> */}
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
};

export default NewsBlock;
