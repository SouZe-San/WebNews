/* eslint-disable react/prop-types */

import Atropos from "atropos/react";
import "./itemStyle.scss";
// import "atropos/css";
const NewsItem = (props) => {
  // @ Destructuring The Props Which Send form its Parent div ----------
  const { title, description, imgUrl, newsUrl, author, date, source } = props;

  return (
    <Atropos className="my-atropos">
      <div className="mainItemDiv">
        <div className="max-w-sm rounded overflow-hidden h-full">
          <div className="sourceTag flex justify-between text-gray-700">
            <span data-atropos-opacity="0.5;0.8">
              {" "}
              {source !== "[Removed]" ? source : "source"}
            </span>
            <div className=" flex">
              <a href={newsUrl} className="flex">
                Read More{" "}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                      fill="rgba(201,196,196,1)"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <img
            className="w-full "
            data-atropos-offset="-1.4"
            src={
              !imgUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imgUrl
            }
            alt="Sunset in the mountains"
            loading="lazy"
          />
          <div className="px-6 py-4 card-body">
            <div data-atropos-offset="1.5" className=" mb-4  card-title">
              {title !== "[Removed]" ? title : "Sorry! Title Not Given"}...
            </div>
            <p data-atropos-offset="1" className="text-gray-700 card-description">
              {description !== "[Removed]" ? description : "For Know more visit our site"}.........
            </p>
            <p className="text-gray-700 text-base flex  w-full justify-between">
              {" "}
              <small>
                {/* If Author Null Then Print Unknown    ||  */}
                By {!author ? "Unknown" : author}
              </small>
              {/* //^ Which date will send that will pass to Date obj and shown as GMT string */}
              <small> on {new Date(date).toGMTString()} </small>
            </p>
          </div>
        </div>
      </div>
    </Atropos>
  );
};

export default NewsItem;
