// import React from 'react'

const NewsItem = () => {
  return (
    <div className="hover:scale-[1.01] mainItemDiv">
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg h-full mt-8   hover:shadow-md
        hover:shadow-gray-500"
      >
        <div className="sourceTag flex justify-end">{/* <span> {source}</span> */}</div>
        <img
          className="w-full h-[16rem]"
          src={
            "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
          }
          alt="Sunset in the mountains"
          loading="lazy"
        />
        <div className="px-6 py-4 card-body">
          <div className="font-bold text-xl mb-2  card-title">This is tite...</div>
          <p className="text-gray-700 text-base card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sunt!.........
          </p>
          <p className="text-gray-700 text-base">
            {" "}
            <small>
              {/* If Author Null Then Print Unknown    || //^ Which date will send that will pass to Date obj and shown as GMT string */}
              By {"Unknown"} <br /> on 89-34-323
            </small>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-600 hover:text-white">
            <a href="/" target="_blank">
              Continue
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
