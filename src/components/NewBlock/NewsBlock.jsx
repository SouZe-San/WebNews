import NewsItem from "./newsItem/NewsItem";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

import "./blockStyle.scss";
import Spinner from "../spinner/Spinner";

const NewsBlock = ({ category }) => {
  const [articles, setArticles] = useState([]); // this store the articles
  const pageSize = 9; // Use for Set that at one time Only 9 news Item will come
  const [page, setPage] = useState(1); // Use for Set that at one time Only 9 news Item will come
  const { newsTitle } = useSelector((state) => state.newsChanger);
  // eslint-disable-next-line no-unused-vars
  const [totalResults, setTotalResults] = useState(0); // this store the total number of articles
  const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
    import.meta.env.VITE_DARK_NEWS_API_KEY
  }&pageSize=${pageSize}&page=${page}`;

  //^  Function For fetching Data from API ------
  // eslint-disable-next-line no-unused-vars
  const DataFetch = async () => {
    console.log("Fetching Data From API");
    const data = await fetch(URL); // --> Waiting for fetching data form api through the url
    const parsedData = await data.json(); // ---> convert json to array
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  const fetchMoreData = async () => {
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_DARK_NEWS_API_KEY
    }&pageSize=${pageSize}&page=${page + 1}`;
    const data = await fetch(URL);
    setPage((prev) => prev + 1); ///Add +1 With prev page number ... by this we can get the data which are available in next..
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles)); // Concat data which present in next page ,with previous data,,,,
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    DataFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsTitle]);

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className=" NewsContainer grid justify-items-center content-center  pt-12 px-8 justify-self-center pb-8r">
          {articles.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title ? article.title.slice(0, 60) : "THis is Title"}
              description={
                article.description
                  ? article.description.slice(0, 100)
                  : "For Know more visit our site"
              }
              imgUrl={article.urlToImage} //props for Image url
              newsUrl={article.url} // url of details news
              author={article.author} // name of Author
              date={article.publishedAt}
              source={article.source.name} //description
              article={article}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default NewsBlock;

NewsBlock.defaultProps = {
  category: "general",
};

NewsBlock.propTypes = {
  category: PropTypes.string,
};
