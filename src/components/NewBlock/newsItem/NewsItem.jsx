/* eslint-disable react/prop-types */

import Atropos from "atropos/react";
import "./itemStyle.scss";
// import "atropos/css";

const imageCollection = [
  "https://images.unsplash.com/photo-1723743809921-07781a7c6535?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937050446-a121748d4ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/27457216/pexels-photo-27457216/free-photo-of-a-woman-in-a-long-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1723754165609-fa2d26338ab4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/7506195/pexels-photo-7506195.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.unsplash.com/photo-1723750787814-72ddbcd155ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
  "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg",
];

const NewsItem = (props) => {
  // @ Destructuring The Props Which Send form its Parent div ----------
  const { title, description, imgUrl, newsUrl, author, date, source } = props;
  console.log(props.imgUrl);
  return (
    <a className="cursor-pointer" href={newsUrl} target="_blank">
      <Atropos className="my-atropos">
        <div className="mainItemDiv">
          <div className="max-w-sm rounded overflow-hidden h-full">
            <div className="sourceTag flex justify-between text-gray-700">
              <span data-atropos-opacity="0.5;0.8">
                {" "}
                {source !== "[Removed]" ? source : "source"}
              </span>
              <div className=" flex">
                <a href={newsUrl} className="flex cursor-pointer" target="_blank">
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
                  ? imageCollection[Math.floor(Math.random() * imageCollection.length)]
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
                {description !== "[Removed]" ? description : "For Know more visit our site"}
                .........
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
    </a>
  );
};

export default NewsItem;
