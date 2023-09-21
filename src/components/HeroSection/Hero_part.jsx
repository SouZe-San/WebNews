import { useEffect, useState } from "react";

import { gsap } from "gsap";

import { useSelector, useDispatch } from "react-redux";
import { forward, backward } from "../../redux/features/currentSlideSlice";

// Importing Components
import Header_sec from "../Header_section/Header_sec";
import TopNews from "../TopNews/TopNews";

// Importing Styles
import "./Hero_part_style.scss";

// Import TOP news Data
import { topNewsCollection } from "../../content/newsCollection.js";

const Hero_part = () => {
  const { current } = useSelector((state) => state.currentSlider);
  const dispatch = useDispatch();
  const [isClick, setIsClick] = useState(false);
  const [TopNewsData, setTopNewsData] = useState(topNewsCollection[0].newsData);

  // For Reveling Animation
  useEffect(() => {
    gsap.to(".spanName", {
      duration: 1,
      scale: 1,
      opacity: 1,
      stagger: {
        from: "start",
        ease: "power2.in",
        amount: 0.6,
      },
      // delay: 0.5,
    });
  }, []);

  // Change News data on slide Change
  useEffect(() => {
    const currentObj = topNewsCollection[current];
    const topNewsData = currentObj.newsData;
    setTimeout(() => {
      setTopNewsData(topNewsData);
    }, 500);
    console.log(topNewsData);
  }, [current, TopNewsData]);

  return (
    <section className="hero_section md:h-[98vh]">
      {/* Logo Section  */}
      <Header_sec />
      {/* Headline */}
      <div className="headLine text-center h-[50px]">
        <span className="spanName">T</span>
        <span className="spanName">o</span>
        <span className="spanName">d</span>
        <span className="spanName">a</span>
        <span className="spanName">y</span>
        <span className="spanName">s</span> <span className="spanName">T</span>
        <span className="spanName">o</span>
        <span className="spanName">p</span>
      </div>
      {/* TOp 3 news */}

      <div className="TopNewSection  h-[70%] flex relative">
        {/* //!LEFT ARROW  */}
        <div
          id="leftArrow"
          className="sliderArrow"
          onClick={() => {
            dispatch(backward());
            setIsClick(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 12L14 6V18L8 12Z" fill="rgba(95,94,94,1)"></path>
          </svg>
        </div>

        {/* //^ NEWS  */}
        <TopNews isClick={isClick} setIsClick={setIsClick} newsData={TopNewsData} />

        {/* //!RIGHT ARROW  */}
        <div
          className="sliderArrow"
          id="rightArrow"
          onClick={() => {
            dispatch(forward());
            setIsClick(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16 12L10 18V6L16 12Z" fill="rgba(113,113,113,1)"></path>
          </svg>
        </div>
      </div>

      <div className="NewsNav flex w-full justify-center">
        {" "}
        {/* Run A map function with index and put desiredFunction(index) and isClickTrue */}
        <div className="circle h-4 aspect-square rounded bg-slate-400"></div>
        <div className="circle h-4 aspect-square rounded bg-slate-400"></div>
        <div className="circle h-4 aspect-square rounded bg-slate-400"></div>
        <div className="circle h-4 aspect-square rounded bg-slate-400"></div>
      </div>
    </section>
  );
};

export default Hero_part;
